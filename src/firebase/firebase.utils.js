import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBPFsSAEdk2-gdyHH42lNM08-XihX4iTNA",
    authDomain: "crwncloth-db-bd64b.firebaseapp.com",
    projectId: "crwncloth-db-bd64b",
    storageBucket: "crwncloth-db-bd64b.appspot.com",
    messagingSenderId: "1063157106800",
    appId: "1:1063157106800:web:1507a35efedbd320234cb5",
    measurementId: "G-FP8FF21YR2"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase