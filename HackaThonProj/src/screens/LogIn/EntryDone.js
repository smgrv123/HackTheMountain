import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './LogInStyle';
import auth from '@react-native-firebase/auth';

const EntryDone = (props) => {

    const user=props.user
    const signOut = () => {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'));
      };

  return (
    <View style={styles.base}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={styles.head}>Welcome to Medic!!</Text>
      </View>
      <View style={{flex: 6, justifyContent: 'center'}}>
        <View
          style={{
            alignSelf: 'center',
            alignContent: 'center',
            backgroundColor: '#3A4750',
            elevation: 20,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: '#00ADB5',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              padding: '10%',
              paddingBottom: '2%',
              paddingTop: '2%',
            }}>
            {user.email}
          </Text>
        </View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text1}>Move to next screen</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            signOut();
          }}>
          <Text style={styles.text1}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntryDone;
