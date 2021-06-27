import React, { ReactElement } from 'react';
import PatientList from '../../components/Home/PatientList';
import { PatientModal } from '../../components/Home/PatientModal';

export default function Home(): ReactElement {
  return (
    <div>
      <PatientModal />
      <PatientList />
    </div>
  );
}
