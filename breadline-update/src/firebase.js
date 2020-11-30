import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCanI-XWixO6tS7kiAr4CkAO7kNksQ1ZPE",
    authDomain: "breadlinesa.firebaseapp.com",
    databaseURL: "https://breadlinesa.firebaseio.com",
    projectId: "breadlinesa",
    storageBucket: "breadlinesa.appspot.com",
    messagingSenderId: "832204674480",
    appId: "1:832204674480:web:b8282d482cc09135a9f275"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const func = firebase.functions()

  export {db, func}

  export default firebaseApp