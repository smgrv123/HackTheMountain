import { IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import React, { ReactElement, useEffect, useState } from 'react';
import { firestore } from '../../firebaseConfig';
import { PatientLists } from './styles';

function PatientList(): ReactElement {
  const [temparr, settemp] = useState('');
  useEffect(() => {
    var temp: any = [];
    firestore
      .collection('patients')
      .where('hospital', '==', 'ABC Hospital')
      .get()
      .then((lists: any) => {
        lists.docs.forEach((list: any) => {
          temp.push(list.data());
          settemp(temp);
        });
      });
  }, []);

  return <PatientLists></PatientLists>;
}

export default PatientList;
