from datetime import datetime
import json
import pandas as pd
from api import convert_to_json
from dataset_generator import create_df
import numpy as np
from predictions import main

from flask import Flask, request, render_template, redirect, url_for
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


def update_df(json_data_path, dict):
    try:
        df = json.loads(json_data_path)
        df2 = pd.DataFrame(data=dict)
        df.append(df2, ignore_index=True)
        df.to_json(json_data_path)
        return 1
    except:
        return 0


@app.route('/<random_id>/<date>')
def record_date(random_id, date):
    with open('./json/hospital' + str(random_id) + '.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return json.dumps(file_data[date])


@app.route('/get_new_hospital_data/<random_id>')
def new_record_month(random_id):
    create_df(csv_path='./csv/hospital' + str(random_id) + '.csv',
              json_path='./json/hospital' + str(random_id) + '.json', n=30)
    convert_to_json(csv_path='./csv/hospital' + str(random_id) +
                    '.csv', json_path='./json/hospital' + str(random_id) + '.json')
    with open('./json/hospital' + str(random_id) + '.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return json.dumps(file_data)


@app.route('/get_existing_hospital_data/<random_id>')
def record_month(random_id):
    with open('./json/hospital' + str(random_id) + '.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return json.dumps(file_data)


app.route('/get_predictions_on_hospital_dataset/<random_id>')


def get_predictions(random_id):
    train_path = ""
    column_list = []
    dict = {}
    original_data = pd.read_csv(
        './csv/hospital' + str(random_id) + '.csv', index_col=0)
    for col in column_list:
        data_predict, datetime = main(train_path, col)
        dict[col] = data_predict
    dict['Date'] = datetime
    predictions_df = pd.DataFrame(data=dict, columns=column_list)
    predictions_df = original_data.append(predictions_df)
    predictions_df.to_json(
        './json_predictions/hospital' + str(random_id) + '.json')
    with open('./json_predictions/hospital' + str(random_id) + '.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return json.dumps(file_data)


@app.route('/update_hospital_data/<random_id>', methods=["GET", "POST"])
def update_data(random_id):
    if request.method == "POST":
        request_data = request.get_json()
        dict = {
            "Date": request_data["Date"],
            "Total_new_patients": request_data["Total_new_patients"],
            "Total_patients_died": request_data["Total_patients_died"],
            "Total_patients_cured": request_data["Total_patients_cured"],
            "Number_of_ventilators_idle": request_data["Number_of_ventilators_idle"],
            "Number_of_ICUs_available": request_data["Number_of_ICUs_available"],
            "Average_cost_without_ventilator": request_data["Average_cost_without_ventilator"],
            "Average_cost_with_ventilator": request_data["Average_cost_with_ventilator"],
            "Average_cost_isolation": request_data["Average_cost_isolation"],
            "Total_oxygen_supply_tonnes": request_data["Total_oxygen_supply_tonnes"],
            "Total_bed_supply": request_data["Total_bed_supply"],
            "Total_vaccination_doses_available": request_data["Total_vaccination_doses_available"]
        }
    json_data_path = './json/hospital' + str(random_id) + '.json'
    status = update_df(json_data_path, dict)
    if status == 1:
        return redirect('/' + random_id + '/' + str(datetime.datetime.now().date()))
    else:
        return 'Error'


if __name__ == '__main__':
    app.run(debug=True)
