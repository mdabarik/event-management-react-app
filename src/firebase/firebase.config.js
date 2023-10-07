import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQGRCsteED04kZgJGe4MrGDAFyZYzRMbQ",
  authDomain: "event-management-assignm-ba727.firebaseapp.com",
  projectId: "event-management-assignm-ba727",
  storageBucket: "event-management-assignm-ba727.appspot.com",
  messagingSenderId: "850980598703",
  appId: "1:850980598703:web:a58d3977b238a75cb1b55a"
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

export const db = getDatabase(app);
export const storage = getStorage();
