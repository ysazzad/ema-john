// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvpMLxp-EvM_i2BQslUR_Fz46FgSGlA_c",
    authDomain: "ema-john-e890e.firebaseapp.com",
    projectId: "ema-john-e890e",
    storageBucket: "ema-john-e890e.appspot.com",
    messagingSenderId: "446481448983",
    appId: "1:446481448983:web:10896c6bc33bba52a71c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth