import React, { ReactElement } from 'react';
import PatientList from '../../components/Home/PatientList';
import { PatientModal } from '../../components/Home/PatientModal';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import { Graphs } from './styles';
import LineGraph from '../../components/LineGraph';

interface Props {
  data: any;
}

export default function Home(data: Props): ReactElement {
  axios
    .get('http://127.0.0.1:5000/get_existing_hospital_data/abc')
    .then((res) => {
      console.log(res);
    });
  return (
    <div>
      <PatientModal />
      <PatientList />
      <Graphs>
        <LineGraph />
        <Bar
          type="line"
          height={8000}
          width={10000}
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                fill: true,
                data: [11, 29, 13, 15, 12, 23],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </Graphs>
    </div>
  );
}
