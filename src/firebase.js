import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyANFBvNAcH7IutAHaqs0eInOciqPmgRT0Y",
  authDomain: "seethegood-7b682.firebaseapp.com",
  databaseURL: "https://seethegood-7b682.firebaseio.com",
  projectId: "seethegood-7b682",
  storageBucket: "seethegood-7b682.appspot.com",
  messagingSenderId: "345245912892",
  appId: "1:345245912892:web:0fef169b9e3d65b6a89839",
  measurementId: "G-7GW8DC3FYN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

