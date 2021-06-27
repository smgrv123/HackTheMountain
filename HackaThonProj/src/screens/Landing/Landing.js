import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image, PermissionsAndroid} from 'react-native';
import styles from './LandingStyles';
import Geolocation from 'react-native-geolocation-service';

const Landing = props => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  async function hasLocationPermission() {
    // console.log('entered');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  }
  let setint;
  useEffect(() => {
    setint = setInterval(() => {
      if (hasLocationPermission()) {
        Geolocation.getCurrentPosition(
          position => {
            // console.log(position);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            // console.log(longitude, latitude);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    }, 1000);
  }, []);

  setTimeout(() => {
    clearInterval(setint);
  }, 5000);

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
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}>
        <Text style={styles.signupText}>Log-In</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Landing;
