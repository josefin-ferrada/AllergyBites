const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD_CnhnNkp1ZyStBiC4fVWR4ej_H2TuCBo",
  authDomain: "allergy-bites-468a7.firebaseapp.com",
  databaseURL: "https://allergy-bites-468a7.firebaseio.com",
  projectId: "allergy-bites-468a7",
  storageBucket: "allergy-bites-468a7.appspot.com",
  messagingSenderId: "752928280291",
  appId: "1:752928280291:web:c96afe2deea63660"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
