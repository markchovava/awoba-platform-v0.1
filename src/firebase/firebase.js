import { initializeApp } from 'firebase/app';

//firebase app config
const appConfig = {
    apiKey: "AIzaSyDpbXUqExRS_Iv2YF1qjlqtsU9ldlDSR4k",
    authDomain: "awoba-platform.firebaseapp.com",
    projectId: "awoba-platform",
    storageBucket: "awoba-platform.appspot.com",
    messagingSenderId: "330500501210",
    appId: "1:330500501210:web:df3c38bc4d61ed7f263fe3"
};

//initialize app
const app = initializeApp(appConfig);

//export firebase app
export { app };