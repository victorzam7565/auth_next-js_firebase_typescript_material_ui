// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS0XF2V4QOcWdj6u-Y0467UdNUY5gmLPI",
  authDomain: "next-firebae-auth.firebaseapp.com",
  projectId: "next-firebae-auth",
  storageBucket: "next-firebae-auth.appspot.com",
  messagingSenderId: "838236887275",
  appId: "1:838236887275:web:93a744bf7ce57fab0486ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//exportar con la funcion flechita
export const initFirebase = () =>{
    return app;
}

//libreria usada 
{/*https://firebase.google.com/docs/auth/web/google-signin?hl=es&authuser=0*/}
