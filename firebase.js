console.log('loaded firebase! hurray!');
let config = {
    apiKey: "AIzaSyDYADDzlmYhCz-19TMwc5HlfWeSLkZP9Gc",
    authDomain: "meet-me-halfway-5c89a.firebaseapp.com",
    databaseURL: "https://meet-me-halfway-5c89a.firebaseio.com",
    projectId: "meet-me-halfway-5c89a",
    storageBucket: "meet-me-halfway-5c89a.appspot.com",
    messagingSenderId: "603877384365"
};
firebase.initializeApp(config);

let database = firebase.database();