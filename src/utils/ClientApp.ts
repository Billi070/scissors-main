import { getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
// require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAYuZg1xwBtb4UnjNqMkCDrWDPrLOaI4M4",
//   authDomain: "scissors-main.firebaseapp.com",
//   projectId: "scissors-main",
//   storageBucket: "scissors-main.appspot.com",
//   messagingSenderId: "907576726972",
//   appId: "1:907576726972:web:03f61213a1bbe0a46a87b9"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const alreadyCreatedAps = getApps();
// const yourFirebaseAdminConfig = {};

// // const App =
// //   alreadyCreatedAps.length === 0
// //     ? initializeApp({ yourFirebaseAdminConfig }, "app name")
// //     : alreadyCreatedAps[0];

// // const yourFirebaseAdminConfig = {};

// if (admin.apps.length === 0) {
//   admin.initializeApp({ yourFirebaseAdminConfig });
// }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export { app, auth, database };
 
