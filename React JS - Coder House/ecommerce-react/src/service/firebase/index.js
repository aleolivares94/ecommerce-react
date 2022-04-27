// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPVzBS0EuhlVIUK1DXR40-yTxDhfYbH-g",
  authDomain: "ecommerce-react-9f620.firebaseapp.com",
  projectId: "ecommerce-react-9f620",
  storageBucket: "ecommerce-react-9f620.appspot.com",
  messagingSenderId: "939948277845",
  appId: "1:939948277845:web:df2f6ba354f2547d8c54dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
