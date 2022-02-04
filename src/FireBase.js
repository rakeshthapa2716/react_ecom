import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNiFMa6mSwgrJLfnhrhv_uQ6GthgK7Yks",
  authDomain: "myecomsite-71981.firebaseapp.com",
  projectId: "myecomsite-71981",
  storageBucket: "myecomsite-71981.appspot.com",
  messagingSenderId: "671664874134",
  appId: "1:671664874134:web:e8ed8f00b6c3bf06f458b7",
  measurementId: "G-7GZCB25VZ1"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);


export default fireDB;