
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB7Rp6zYOBj5a650ZBY5ubvWnKz36Sn1iI",
    authDomain: "shafdo-github-web.firebaseapp.com",
    databaseURL: "https://shafdo-github-web.firebaseio.com",
    projectId: "shafdo-github-web",
    storageBucket: "shafdo-github-web.appspot.com",
    messagingSenderId: "533189357173",
    appId: "1:533189357173:web:0fb0fb2ee1878c2debd23c",
    measurementId: "G-XTGP56RFKT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()