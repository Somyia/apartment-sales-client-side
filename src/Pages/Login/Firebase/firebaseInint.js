import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

const firebaseInititalization = () => {
    initializeApp(firebaseConfig)
}

export default firebaseInititalization;