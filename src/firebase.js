import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: "yt-clone--1",
  storageBucket: "yt-clone--1.appspot.com",
  messagingSenderId: "668080858397",
  appId: "1:668080858397:web:3c5068145aa34450856df4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
