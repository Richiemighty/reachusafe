
// src/config/firebase.js

// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBpwdIV2qpxlqgrWicegZ_E7yMExRdZF_w",
  authDomain: "vendeer-3fc02.firebaseapp.com",
  projectId: "vendeer-3fc02",
  storageBucket: "vendeer-3fc02.firebasestorage.app",
  messagingSenderId: "940950448203",
  appId: "1:940950448203:web:e1ddc00d7fd0a6e71745ce",
  measurementId: "G-E9QM71L2R8"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// ✅ Export initialized services including app
export { app, auth, db, storage, analytics };
