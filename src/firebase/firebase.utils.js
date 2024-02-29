import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDyktvQDSvyxAAcUL1F9vdlzxy8ceHKkeM",
  authDomain: "ronnie-db-83ac4.firebaseapp.com",
  projectId: "ronnie-db-83ac4",
  storageBucket: "ronnie-db-83ac4.appspot.com",
  messagingSenderId: "802091973916",
  appId: "1:802091973916:web:c37d113991b03b148f0ed9",
  measurementId: "G-YH33G26XEF"
};

Firebase.initializeApp(config);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

const provider = new Firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default Firebase;