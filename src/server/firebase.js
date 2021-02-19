import app from 'firebase/app';
import 'firebase/firestore';


const config={
    apiKey: "AIzaSyCJNsWK2MTeGZfBZnTHctyXADVmETRTyUk",
    authDomain: "home1-37ef3.firebaseapp.com",
    projectId: "home1-37ef3",
    storageBucket: "home1-37ef3.appspot.com",
    messagingSenderId: "523192238812",
    appId: "1:523192238812:web:779e812ec5eba485a12a19"
  };


class firebase{
 
    constructor(){

        app.initializeApp(config)
        this.db=app.firestore



    }

}

export default firebase;