//firebase config
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';  


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3tKFFSEtlk6bzSm96a3raRVYIZJQgheI",
  authDomain: "fir-upload-d11f2.firebaseapp.com",
  projectId: "fir-upload-d11f2",
  storageBucket: "fir-upload-d11f2.appspot.com",
  messagingSenderId: "p9434717639",
  appId:"1:9434717639:web:bce9197efa113a0bdc0de2"
};

 export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
