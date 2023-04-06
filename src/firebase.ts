import { FormData } from "./components/Form";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, addDoc, collection, Timestamp, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo4cNHefrtewofDfiYB0JkorWySPUhj_M",
  authDomain: "at-your-service-603.firebaseapp.com",
  projectId: "at-your-service-603",
  storageBucket: "at-your-service-603.appspot.com",
  messagingSenderId: "156388800112",
  appId: "1:156388800112:web:c6ee0e00cbceabf15ea6b5",
  measurementId: "G-30N892B1NZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const jobsRef = collection(db, "jobs");


// export const addJob = async (data: FormData) => {
//   const docRef = await addDoc(jobs, {
//     name: data.name,
//     email: data.email,
//     phone: data.phone,
//     description: data.description,
//     timestamp: new Date(),
//   });
// }

export const addJob = async (data: FormData) => {
  const newJobData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    description: data.description,
    timestamp: Timestamp.now(),
  };

  // const snapshot = await jobsRef.where(;
  const q = query(collection(db, "jobs"), where('timestamp', '>=', Number(Timestamp.now().toDate()) - 86400000));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot)


  if (querySnapshot.size >= 20) {
    throw new Error, 'Cannot add more than 20 jobs in a 24-hour period';
  }

  await addDoc(jobsRef, newJobData);
  localStorage.setItem('requestCooldown', Date.now().toString());
};
