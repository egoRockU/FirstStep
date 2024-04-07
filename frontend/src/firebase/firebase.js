// //firebase config
// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';  


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB3tKFFSEtlk6bzSm96a3raRVYIZJQgheI",
//   authDomain: "fir-upload-d11f2.firebaseapp.com",
//   projectId: "fir-upload-d11f2",
//   storageBucket: "fir-upload-d11f2.appspot.com",
//   messagingSenderId: "p9434717639",
//   appId:"1:9434717639:web:bce9197efa113a0bdc0de2"
// };

//  export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app)





//firebase config
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
