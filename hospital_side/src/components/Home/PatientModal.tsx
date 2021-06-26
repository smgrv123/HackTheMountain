import { IonButton, IonModal } from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from '../../toast';
import { Body, Form, Input } from './styles';

interface Props {}

export const PatientModal = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Body>
      <IonModal isOpen={showModal} backdropDismiss={false}>
        <Form
          onSubmit={(e: any) => {
            e.preventDefault();
          }}
        >
          <Input
            id="input-1"
            type="text"
            placeholder="Patient Name"
            required
            autoFocus
          />
          <Input
            id="input-2"
            type="number"
            placeholder="Oxygen Level"
            required
          />
          <Input
            id="input-3"
            type="email"
            placeholder="Email of the patient"
            required
          />
          <Input
            id="input-4"
            type="text"
            placeholder="Ventilator occupancy? Yes/No"
            required
          />
          <Input
            id="input-5"
            type="text"
            placeholder="Oxygen occupancy? Yes/No"
            required
          />
          <Input
            id="input-6"
            type="text"
            placeholder="Name of the Hospital"
            required
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
