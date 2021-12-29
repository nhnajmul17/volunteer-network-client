import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firbase.config";

const intializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default intializeFirebase;
