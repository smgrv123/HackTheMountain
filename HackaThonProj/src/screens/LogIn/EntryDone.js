import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './LogInStyle';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const EntryDone = props => {
  const user = props.user;
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

const navigation=useNavigation()

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
            borderRadius: 5,
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
            {` Welcome ${user.email}`}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('Info');
          }}>
          <Text style={styles.text1}>Find Hospitals</Text>
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
