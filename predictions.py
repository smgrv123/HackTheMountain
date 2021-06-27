import pandas as pd 
import numpy as np 
import sklearn
from sklearn.preprocessing import MinMaxScaler
import torch
import torch.nn as nn
from torch.autograd import Variable
import matplotlib.pyplot as plt 
from dateutil import parser
import datetime


def get_data(path):
    train_df = pd.read_csv(path, index_col='Date')
    try:
        train_df.drop(train_df.columns[train_df.columns.str.contains('unnamed',case = False)],axis = 1, inplace = True)
    except:
        return train_df
    print(train_df.head())
    return train_df


def preprocess_data(train_df, column_name):

    data = train_df.filter([column_name]).values
    date = train_df.index.values
    scaler = MinMaxScaler(feature_range=(0,1))
    data = scaler.fit_transform(data)
    x = []
    y = []
    datetime = []
    seq_length = 4

    for i in range(len(data)-seq_length-1):
        _x = data[i:(i+seq_length)]
        _y = data[i+seq_length]
        _datetime = date[i+seq_length]
        x.append(_x)
        y.append(_y)
        datetime.append(_datetime)

    x, y, datetime_  = np.array(x),np.array(y), np.array(datetime)
    datetime= [parser.parse(x) for x in datetime_]

    train_size = int(len(y) * 0.67)
    test_size = len(y) - train_size

    dataX = Variable(torch.Tensor(np.array(x)))
    dataY = Variable(torch.Tensor(np.array(y)))
    train_datetime = datetime[0:train_size]
    test_datetime = datetime[train_size:len(x)]

    trainX = Variable(torch.Tensor(np.array(x[0:train_size])))
    trainY = Variable(torch.Tensor(np.array(y[0:train_size])))

    testX = Variable(torch.Tensor(np.array(x[train_size:len(x)])))
    testY = Variable(torch.Tensor(np.array(y[train_size:len(y)])))

    return dataX, dataY, trainX, trainY, testX, testY, datetime, train_datetime, test_datetime, scaler


class LSTM(nn.Module):

    def __init__(self, num_classes, input_size, hidden_size, num_layers, seq_length):
        super(LSTM, self).__init__()
        
        self.num_classes = num_classes
        self.num_layers = num_layers
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.seq_length = seq_length
        
        self.lstm = nn.LSTM(input_size=input_size, hidden_size=hidden_size,
                            num_layers=num_layers, batch_first=True)
        
        self.fc = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        h_0 = Variable(torch.zeros(
            self.num_layers, x.size(0), self.hidden_size))
        
        c_0 = Variable(torch.zeros(
            self.num_layers, x.size(0), self.hidden_size))
        
        # Propagate input through LSTM
        ula, (h_out, _) = self.lstm(x, (h_0, c_0))
        
        h_out = h_out.view(-1, self.hidden_size)
        
        out = self.fc(h_out)
        
        return out


def train(trainX, trainY, num_epochs=1000, learning_rate=0.01, input_size=1, hidden_size=2, num_layers=1,num_classes=1, seq_length=4,):
    lstm = LSTM(num_classes, input_size, hidden_size, num_layers, seq_length)

    criterion = torch.nn.MSELoss()  
    optimizer = torch.optim.Adam(lstm.parameters(), lr=learning_rate)

    # Train the model
    for epoch in range(num_epochs):
        outputs = lstm(trainX)
        optimizer.zero_grad()
        
        # obtain the loss function
        loss = criterion(outputs, trainY)
        
        loss.backward()
        
        optimizer.step()
        if epoch % 100 == 0:
            print("Epoch: %d, loss: %1.5f" % (epoch, loss.item()))
    return lstm

def test(lstm, dataX, scaler):
    lstm.eval()
    train_predict = lstm(dataX)

    data_predict = train_predict.data.numpy()
    # dataY_plot = dataY.data.numpy()

    data_predict = scaler.inverse_transform(data_predict)
    # dataY_plot = scaler.inverse_transform(dataY_plot)

    return data_predict

def main(train_path, column_name):
    train_df = get_data(train_path)
    dataX, dataY, trainX, trainY, testX, testY, datetime, train_datetime,\
         test_datetime, scaler = preprocess_data(train_df, column_name)
    lstm = train(trainX, trainY)
    data_predict = test(lstm, dataX, scaler)
    return data_predict, datetime

def update_graph (data, column_name, scaler, lstm):
    #predictions after every 4 days because window size = 4
    pass


def plot_function(data_predict, dataY_plot , datetime_, column_name):
    plt.figure(figsize=(8, 6))
    plt.xticks(rotation=90)
    plt.plot(datetime_, dataY_plot)
    plt.plot(datetime_, data_predict)
    plt.xlabel('DateTime')
    plt.ylabel(column_name)
    plt.suptitle('Time-Series Prediction')
    plt.savefig('./plots/' + column_name + '.jpg')


if __name__=="__main__":
    data_predict , datetime = main('./csv/hospital.csv', 'Average_cost_isolation')