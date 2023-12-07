import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBPFsSAEdk2-gdyHH42lNM08-XihX4iTNA",
    authDomain: "crwncloth-db-bd64b.firebaseapp.com",
    projectId: "crwncloth-db-bd64b",
    storageBucket: "crwncloth-db-bd64b.appspot.com",
    messagingSenderId: "1063157106800",
    appId: "1:1063157106800:web:1507a35efedbd320234cb5",
    measurementId: "G-FP8FF21YR2"
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
        .then(() => {
            return getRedirectResult(auth);
        })
        .catch((error) => {
            // Handle errors here
            console.error(error);
        });
};

export { auth, firestore, signInWithGoogle };
export default firebaseApp;
