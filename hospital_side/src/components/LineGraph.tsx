import axios from 'axios';
import React, { ReactElement } from 'react';
import { Line } from 'react-chartjs-2';
import Data from '../components/Home/data.json';

export default function LineGraph(): ReactElement {
  axios
    .get('http://127.0.0.1:5000/get_existing_hospital_data/abc')
    .then((res) => {
      console.log(res);
    });

  let labels = [];
  let total = [];
  let dead = [];
  let recover = [];
  let oxy = [];
  let ven = [];
  let costV = [];
  let vac = [];
  let bed = [];

  Data.forEach((ele) => {
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
  labels = labels.splice(0, 10);
  total = total.splice(0, 10);
  dead = dead.splice(0, 10);
  recover = recover.splice(0, 10);
  oxy = oxy.splice(0, 10);
  ven = ven.splice(0, 10);
  costV = costV.splice(0, 10);
  vac = vac.splice(0, 10);
  bed = bed.splice(0, 10);
  return (
    <div>
      <Line
        type="line"
        height={10000}
        width={2000}
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Current Patients',
              fill: true,
              data: total,
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
            {
              label: 'Decesesed Patients',
              fill: true,
              data: dead,
              backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
            {
              label: 'Recovered Patients',
              fill: true,
              data: recover,
              backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
            {
              label: 'Total Oxygen Supply (in tonnes)',
              fill: true,
              data: oxy,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
            {
              label: 'Number of idle ventilators',
              fill: true,
              data: ven,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
            {
              label: 'Total Oxygen Supply (in tonnes)',
              fill: true,
              data: vac,
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
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
    </div>
  );
}
