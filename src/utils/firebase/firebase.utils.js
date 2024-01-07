import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHr2Ac7C9XiW12SZ1UdwUi7SfZB9nrD4",
  authDomain: "react-ecommerce-db-fc5c2.firebaseapp.com",
  projectId: "react-ecommerce-db-fc5c2",
  storageBucket: "react-ecommerce-db-fc5c2.appspot.com",
  messagingSenderId: "651514934272",
  appId: "1:651514934272:web:76c985b9bfdcdc855914e5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);