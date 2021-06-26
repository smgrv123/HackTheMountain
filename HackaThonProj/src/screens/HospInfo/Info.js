import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/EvilIcons';

const Info = () => {
  const [userData, setuserData] = useState();
  useEffect(() => {
    var temp = [];
    firestore()
      .collection('hospitals')
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          temp.push(doc.data());
          setuserData(temp);
        });
      });
  }, []);

  return (
    <View style={{backgroundColor: '#303841', flex: 1}}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#00ADB5',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Hospitals Near You
        </Text>
      </View>
      <View style={{flex: 10}}>
        <FlatList
          data={userData}
          renderItem={({item}) => (
            <View
              style={{
                elevation: 15,
                borderWidth: 0.0001,
                marginBottom: '3%',
                marginTop: '3%',
                backgroundColor: '#EEEEEE',
                marginLeft: '2%',
                marginRight: '2%',
                borderRadius: 4,
              }}>
              <TouchableOpacity
                style={{
                  paddingBottom: '7%',
                  paddingTop: '7%',
                  paddingLeft: '5%',
                  paddingRight: '5%',
                }}
                onPress={() => {}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                  </View>
                  <TouchableOpacity style={{justifyContent: 'center'}}>
                    <Icon name="location" size={30} color="black" />
                    <Text>{item.location}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.email}
        />
      </View>
    </View>
  );
};

export default Info;
