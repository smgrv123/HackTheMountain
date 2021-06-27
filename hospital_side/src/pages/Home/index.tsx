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
  return (
    <div>
      <PatientModal />
      <PatientList />
      <Graphs>
        <LineGraph />
      </Graphs>
    </div>
  );
}
