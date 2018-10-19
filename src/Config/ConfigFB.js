import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDcTqS3BHWffd2_6tgT10T3dPOfp0iDWq8",
  authDomain: "burger-queen-4c40a.firebaseapp.com",
  databaseURL: "https://burger-queen-4c40a.firebaseio.com",
  projectId: "burger-queen-4c40a",
  storageBucket: "burger-queen-4c40a.appspot.com",
  messagingSenderId: "720266206325"
};

const fbsConfig = firebase.initializeApp(config);

export { fbsConfig };
