import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Store from '../../Store';
import ABC from '../../JsonData/hosData.json';
import AIIMS from '../../JsonData/aiimsData.json';
import Fortis from '../../JsonData/fortisData.json';
import BCD from '../../JsonData/bcdData.json';
import {LineChart} from 'react-native-chart-kit';

const dashScreen = () => {
  let Data = [];

  switch (Store.hosData.name) {
    case 'ABC Hospital':
      Data = ABC;
      break;
    case 'AIIMS':
      Data = AIIMS;
      break;
    case 'Fortis':
      Data = Fortis;
      break;
    case 'BCD Hospital':
      Data = BCD;
      break;
  }

  let labels = [];
  let total = [];
  let dead = [];
  let recover = [];
  let oxy = [];
  let ven = [];
  let costV = [];
  let vac = [];
  let bed = [];
  const width = useWindowDimensions().width;

  Data.forEach(ele => {
    labels.push(ele.Date);
    total.push(ele.Total_new_patients);
    dead.push(ele.Total_patients_died);
    recover.push(ele.Total_patients_cured);
    oxy.push(ele.Total_oxygen_supply_tonnes);
    ven.push(ele.Number_of_ventilators_idle);
    costV.push(ele.Average_cost_with_ventilator);
    vac.push(ele.Total_vaccination_doses_available);
    bed.push(ele.Total_bed_supply);
  });

  labels = labels.splice(0, 5);
  total = total.splice(0, 5);
  dead = dead.splice(0, 5);
  recover = recover.splice(0, 5);
  oxy = oxy.splice(0, 5);
  ven = ven.splice(0, 5);
  costV = costV.splice(0, 5);
  vac = vac.splice(0, 5);
  bed = bed.splice(0, 5);

  const data = {
    labels: labels,
    datasets: [
      {
        data: total,
      },
    ],
  };

  const dataD = {
    labels: labels,
    datasets: [
      {
        data: dead,
      },
    ],
  };

  const dataR = {
    labels: labels,
    datasets: [
      {
        data: recover,
      },
    ],
  };

  const dataO = {
    labels: labels,
    datasets: [
      {
        data: oxy,
      },
    ],
  };

  const dataV = {
    labels: labels,
    datasets: [
      {
        data: ven,
      },
    ],
  };

  const dataC = {
    labels: labels,
    datasets: [
      {
        data: costV,
      },
    ],
  };

  const dataVac = {
    labels: labels,
    datasets: [
      {
        data: vac,
      },
    ],
  };

  const dataB = {
    labels: labels,
    datasets: [
      {
        data: bed,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#3A4750',
    backgroundGradientFrom: '#3A4750',
    backgroundGradientTo: '#00ADB5',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const chartConfig1 = {
    backgroundColor: '#3A4750',
    backgroundGradientFrom: '#00ADB5',
    backgroundGradientTo: '#3A4750',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const chartConfig2 = {
    backgroundColor: '#3A4750',
    backgroundGradientFrom: '#3A4750',
    backgroundGradientTo: '#EEEEEE',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={{flex: 1, backgroundColor: '#3A4750'}}>
      <View
        style={{flex: 1.75, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#EEEEEE',
            fontSize: 30,
            textAlign: 'center',
          }}>{`Data of ${Store.hosData.name}`}</Text>
      </View>
      <View style={{flex: 10}}>
        <ScrollView>
          <Text style={styles.textHead}>Vaccination Available</Text>
          <LineChart
            data={dataVac}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />
          <Text style={styles.textHead}>Total Beds Available</Text>
          <LineChart
            data={dataB}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig1}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />
          <Text style={styles.textHead}>Total Patients</Text>
          <LineChart
            data={data}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig2}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />
          <Text style={styles.textHead}>Recovered</Text>
          <LineChart
            data={dataR}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />
          <Text style={styles.textHead}>Died</Text>
          <LineChart
            data={dataD}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig1}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />

          <Text style={styles.textHead}>Average Cost</Text>
          <LineChart
            data={dataC}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig2}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />
          <Text style={styles.textHead}>Oxygen Supply</Text>
          <LineChart
            data={dataO}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />
          <Text style={styles.textHead}>Ventilators Available</Text>
          <LineChart
            data={dataV}
            width={width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig1}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
              elevation: 100,
            }}
          />

          <View style={{paddingBottom: '10%'}} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHead: {
    color: '#00ADB5',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default dashScreen;