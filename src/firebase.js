import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtR9nHWXHKaC5glpv4Mmi2bX8FtUGsCeM",
  authDomain: "recipeapp-c3921.firebaseapp.com",
  projectId: "recipeapp-c3921",
  storageBucket: "recipeapp-c3921.appspot.com",
  messagingSenderId: "61991979167",
  appId: "1:61991979167:web:fe1a6e97d83a6d9e2b7aaa",
  measurementId: "G-EQFGVH76K4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
