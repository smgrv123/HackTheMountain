import { IonButton, IonModal } from '@ionic/react';
import React, { ReactElement, useState } from 'react';
import { PatientModal } from '../../components/Home/PatientModal';

export default function Home(): ReactElement {
  return (
    <div>
      <PatientModal />
    </div>
  );
}
