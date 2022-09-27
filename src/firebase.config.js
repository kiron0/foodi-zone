import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVRECE9y7gcF7HSa2TfWYrpd6KFvhEIbY",
  authDomain: "foodi-zone.firebaseapp.com",
  databaseURL: "https://foodi-zone-default-rtdb.firebaseio.com",
  projectId: "foodi-zone",
  storageBucket: "foodi-zone.appspot.com",
  messagingSenderId: "660377668922",
  appId: "1:660377668922:web:ffe8ec97b412610fac1403"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
