import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import styles from './LandingStyles';

const Landing = props => {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Medic</Text>
      <Image source={require('../../assets/doc.png')} />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          props.navigation.navigate('LoginScreen');
        }}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => {
        props.navigation.navigate('SignUp')
      }}>
        <Text style={styles.signupText}>Log-In</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Landing;
