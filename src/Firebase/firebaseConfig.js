import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDmZDPro1GDshXyvQL8gUIcKvsEMd60QxQ",
  authDomain: "todo-list-560e6.firebaseapp.com",
  projectId: "todo-list-560e6",
  storageBucket: "todo-list-560e6.appspot.com",
  messagingSenderId: "556841458359",
  appId: "1:556841458359:web:bc281a899d0216c7b04b32",
  measurementId: "G-8J8L53P97C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export default app