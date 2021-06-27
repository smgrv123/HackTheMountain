import { StyleSheet } from 'react-native'

const styles=StyleSheet.create({
    background:{
        backgroundColor: '#303841',
        flex: 1,
      },
      heading:{
        fontSize: 27,
        color: '#00ADB5',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      loginButton:{
        backgroundColor: '#00ADB5',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        width: 100,
        marginTop: '2%',
        marginBottom: '2%',
      },
      loginText:{
        paddingTop: 15,
        fontSize: 20,
        paddingBottom: 15,
        textAlign: 'center',
        color: '#3A4750',
        fontWeight:"bold"
      },
      signupButton:{
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        width: 100,
      },
      signupText:{
        paddingTop: 15,
        fontSize: 20,
        paddingBottom: 15,
        textAlign: 'center',
        color: '#3A4750',
        fontWeight:"bold"
      }
})

export default styles;