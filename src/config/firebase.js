// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4NBzvbD29-iWtFWX2UDRwKy_72pRjcW4",
  authDomain: "simply-xatalyst.firebaseapp.com",
  databaseURL: "https://simply-xatalyst-default-rtdb.firebaseio.com",
  projectId: "simply-xatalyst",
  storageBucket: "simply-xatalyst.appspot.com",
  messagingSenderId: "1049412953890",
  appId: "1:1049412953890:web:fd40fbf048661a4f10e77b",
  measurementId: "G-XM8DTFZQJE"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);

export { auth, signInWithEmailAndPassword, firestore };