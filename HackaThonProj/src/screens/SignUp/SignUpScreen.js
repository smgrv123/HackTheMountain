import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Email from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import Pass from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Signinbody = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [errfirst, setErrFirst] = useState(false);
  const [lastName, setLastName] = useState('');
  const [errlast, setErrLast] = useState(false);
  const [pass, setPass] = useState('');
  const [errPass, setErrPass] = useState(false);
  const [phone, setPhone] = useState('');
  const [errphone, setErrPhone] = useState(false);
  const [errEmail, seterrEmail] = useState(false);
  const [email, setEmail] = useState('');

  const validation = () => {
    if (firstName !== '' || lastName !== '' || pass !== '' || phone !== '') {
      let regName = /^[a-z ,.'-]+$/i;
      let regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let regPhone =
        /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!regPhone.test(phone)) {
        setErrPhone(true);
      }
      if (!regName.test(firstName)) {
        setErrFirst(true);
      }
      if (!regName.test(lastName)) {
        setErrLast(true);
      }
      if (pass.length < 8) {
        setErrPass(true);
      }
      if (!regEmail.test(email)) {
        seterrEmail(true);
      }
      if (
        regPhone.test(phone) &&
        regName.test(firstName) &&
        regName.test(lastName) &&
        pass.length >= 8
      ) {
        signupPhone = '+91' + phone;
        // signUp();
      }
    } else {
      if (firstName === '') {
        setErrFirst(true);
      }
      if (lastName === '') {
        setErrLast(true);
      }
      if (pass === '') {
        setErrPass(true);
      }
      if (phone === '') {
        setErrPhone(true);
      }
      if (email === '') {
        seterrEmail(true);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#303841',
      }}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={styles.head}>SignUp to Medic !!</Text>
      </View>
      <View style={{flex: 8}}>
        <Text style={styles.title}>Name of Patient</Text>
        <Input
          errorMessage={errfirst ? 'Please Enter a Valid First Name' : null}
          autoCorrect={false}
          maxLength={50}
          keyboardType="default"
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          placeholder="Name of Patient"
          rightIcon={
            <Icon name="user" size={40} color="black" style={styles.icon} />
          }
          onChangeText={val => {
            setErrFirst(false);
            setFirstName(val);
          }}
        />

        <Text style={styles.title}>
          E-mail
        </Text>
        <Input
          autoCorrect={false}
          maxLength={50}
          errorMessage={errEmail ? 'Invalid email address' : null}
          keyboardType="email-address"
          autoCapitalize={'none'}
          placeholder="Enter Email"
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          placeholder="Email ID"
          rightIcon={
            <Email name="email" size={40} color="black" style={styles.icon} />
          }
          onChangeText={inp => {
            setEmail(inp);
          }}
        />
        <Text style={styles.title}>
          Password
        </Text>
        <Input
          errorMessage={
            errPass
              ? 'Please Enter a Valid Password with atleast 8 Characters'
              : null
          }
          autoCorrect={false}
          maxLength={15}
          secureTextEntry={true}
          autoCapitalize={'none'}
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          placeholder="Password"
          rightIcon={
            <Pass name="safe" size={40} color="black" style={styles.icon} />
          }
          onChangeText={val => {
            setErrPass(false);
            setPass(val);
          }}
        />
        <Text style={styles.title}>
          Contact
        </Text>
        <Input
          errorMessage={errphone ? 'Please Enter a Valid Phone Number' : null}
          autoCorrect={false}
          keyboardType="number-pad"
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          placeholder="Contact Number"
          rightIcon={
            <Icon name="phone" size={40} color="black" style={styles.icon} />
          }
          maxLength={10}
          onChangeText={val => {
            setErrPhone(false);
            setPhone(val);
          }}
        />
        <Text style={styles.title}>
          Contact (Emergency)
        </Text>
        <Input
          errorMessage={errlast ? 'Please Enter a Valid Last Name' : null}
          autoCorrect={false}
          maxLength={50}
          keyboardType="default"
          placeholder="Contact (Emergency)"
          rightIcon={
            <Icon name="contacts" size={40} color="black" style={styles.icon} />
          }
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          onChangeText={val => {
            setErrLast(false);
            setLastName(val);
          }}
        />
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            validation();
          }}
          style={styles.button}>
          <Text
            style={{
              color: '#3A4750',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#fff',
    height: 48,
    paddingRight: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  head: {
    color: '#00ADB5',
    fontSize: 30,
    justifyContent: 'space-around',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#00ADB5',
    width: '50%',
    borderRadius: 20,
  },
  title: {
    paddingLeft: '2%',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: '1%',
  },
});

export default Signinbody;
