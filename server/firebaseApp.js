const { initializeApp } = require('firebase/app');
const { getAuth } =  require('firebase/auth');
const { getDatabase } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyDbkZy3PyYgRNAMosI9jgWGPZ098W5aCjQ",
  authDomain: "productivity-app-8bb00.firebaseapp.com",
  projectId: "productivity-app-8bb00",
  storageBucket: "productivity-app-8bb00.appspot.com",
  messagingSenderId: "212742332971",
  appId: "1:212742332971:web:7c0281f6ebf948dbc5c06e",
  measurementId: "G-7MY4KRTNPX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const firebaseDatabase = getDatabase(firebaseApp);

module.exports = {
  firebaseApp,
  firebaseAuth,
  firebaseDatabase,
}
