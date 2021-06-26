import { IonButton, IonModal } from '@ionic/react';
import React, { useState } from 'react';
import { firestore } from '../../firebaseConfig';
import { toast } from '../../toast';
import { Body, Form, Input } from './styles';

interface Props {}

export const PatientModal = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [email, setEmail] = useState('');
  const [ventilator, setVentilator] = useState('');
  const [oxygenOccupancy, setOxygenOccupancy] = useState('');
  const [hospital, setHospital] = useState('');

  const formSubmit = () => {
    firestore.collection('patients').add({
      name: name,
      oxygen: oxygen,
      email: email,
      ventilator: ventilator,
      oxygenOccupancy: oxygenOccupancy,
      hospital: hospital,
    });
  };

  return (
    <Body>
      <IonModal isOpen={showModal} backdropDismiss={false}>
        <Form
          onSubmit={(e: any) => {
            e.preventDefault();
            formSubmit();
          }}
        >
          <Input
            id="input-1"
            type="text"
            placeholder="Patient Name"
            required
            autoFocus
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            id="input-2"
            type="number"
            placeholder="Oxygen Level"
            required
            onChange={(e: any) => setOxygen(e.target.value)}
          />
          <Input
            id="input-3"
            type="email"
            placeholder="Email of the patient"
            required
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            id="input-4"
            type="text"
            placeholder="Ventilator occupancy? Yes/No"
            required
            onChange={(e: any) => setVentilator(e.target.value)}
          />
          <Input
            id="input-5"
            type="text"
            placeholder="Oxygen occupancy? Yes/No"
            required
            onChange={(e: any) => setOxygenOccupancy(e.target.value)}
          />
          <Input
            id="input-6"
            type="text"
            placeholder="Name of the Hospital"
            required
            onChange={(e: any) => setHospital(e.target.value)}
          />
          <IonButton
            type="submit"
            color="light"
            onClick={(e: any) => {
              e.preventDefault();
              setShowModal(false);
              toast('Patient details entered successfully');
            }}
          >
            Confirm Patient Details
          </IonButton>
        </Form>

        {/* <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton> */}
      </IonModal>
      <IonButton className="ion-padding" onClick={() => setShowModal(true)}>
        Add new patient details
      </IonButton>
    </Body>
  );
};
