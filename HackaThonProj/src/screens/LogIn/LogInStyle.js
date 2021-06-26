import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
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
        height: 40,
      },
      title: {
        paddingLeft: '2%',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: '1%',
      },
      base: {backgroundColor: '#303841', flex: 1},
      text: {
        color: '#3A4750',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
      },
      button1: {
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: '#00ADB5',
        borderRadius: 20,
        height: 40,
        marginTop: '10%',
        elevation: 15,
      },
      text1: {
        color: '#EEEEEE',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: '2%',
        paddingRight: '2%',
      },
})
export default styles;