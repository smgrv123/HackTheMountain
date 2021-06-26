import React, { ReactElement, useState } from 'react';
import { Container, LoginBody, H1, Block, Image, Form, Input } from './styles';
import { IonButton } from '@ionic/react';
import { Redirect, useHistory } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import AuthRoute from '../../components/AuthRoute';
import { toast } from '../../toast';

export default function Login(): ReactElement {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [, setAuthenticating] = useState<boolean>(false);
  const history = useHistory();
  async function login() {
    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(username, password)
      .then((result) => {
        history.push(`/home`);
        toast('Success');
      })
      .catch((error) => {
        toast('Error');
      });
    return (
      <AuthRoute>
        {' '}
        <Redirect to={`/login`} />{' '}
      </AuthRoute>
    );
  }

  return (
    <LoginBody>
      <Container>
        <H1>Medic</H1>
        <Block>
          <Image
            src="https://cdn.discordapp.com/attachments/857650018869575700/857968996904730664/7093fcb2740ab891f3f48c9db80f67a6-removebg-preview.png"
            alt="Doctor"
          />
          <Form>
            <Input
              placeholder="Email"
              onChange={(e: any) => setusername(e.target.value)}
              className="ion-padding"
              type="email"
              required
            />{' '}
            <br />
            <br />
            <Input
              placeholder="Password"
              onChange={(e: any) => setpassword(e.target.value)}
              className="ion-padding"
              type="password"
              required
            />
            <br />
            <IonButton className="ion-padding" onClick={login}>
              Login
            </IonButton>
          </Form>
        </Block>
      </Container>
    </LoginBody>
  );
}
