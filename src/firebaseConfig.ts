import "firebase/auth";
import firebase from 'firebase'; 
import "firebase/firestore";
import "firebase/functions";
import { toast } from './toast';
const config = {
    apiKey: "AIzaSyB5UIlG1BWrueX6Wyl7Sw2MEn7RZHssn5Q",
    authDomain: "oxygen-supplier.firebaseapp.com",
    projectId: "oxygen-supplier",
    storageBucket: "oxygen-supplier.appspot.com",
    messagingSenderId: "66703427576",
    appId: "1:66703427576:web:1fd9a15797a146687b780d"
  };

const Firebase = firebase.initializeApp(config);

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
        if(user){
            resolve(user);
        } else{
            resolve(null)
        }
        unsubscribe()
    })
    })
    
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
console.log("Auth", auth);
export async function loginUser(email : string, password : string){
    try{
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(res, "SingIn");
    ;
    return true

    } catch(error){
        toast("You are not a registered hospital. Please contact our customer care.")
    }
}

export default Firebase;