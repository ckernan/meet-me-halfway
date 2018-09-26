
var config = {
    apiKey: "AIzaSyDYADDzlmYhCz-19TMwc5HlfWeSLkZP9Gc",
    authDomain: "meet-me-halfway-5c89a.firebaseapp.com",
    databaseURL: "https://meet-me-halfway-5c89a.firebaseio.com",
    projectId: "meet-me-halfway-5c89a",
    storageBucket: "meet-me-halfway-5c89a.appspot.com",
    messagingSenderId: "603877384365"
};
firebase.initializeApp(config);

let database = firebase.database();

//Get elements into DOM
let txtEmail = document.getElementById('txtEmail');
let txtPassword = document.getElementById('txtPassword');
let btnLogin = document.getElementById('btnLogin');
let btnSignUp = document.getElementById('btnSignUp');
let btnLogOut = document.getElementById('btnLogOut');

if (btnLogin) {
    //Add login event
    btnLogin.addEventListener('click', function () {
        //get email and pass
        let email = txtEmail.value;
        let pass = txtPassword.value;
        let auth = firebase.auth();
        //Sign in
        let promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    //user logout
    btnLogOut.addEventListener('click', function () {
        firebase.auth().signOut();
    });
}

// //add signup event in register page
// btnSignUp.addEventListener('click', function () {
//     //get email and pass
//     let email = txtEmail.value;
//     let pass = txtPassword.value;
//     let auth = firebase.auth();
//     //Sign in
//     let promise = auth.createUserWithEmailAndPassword(email, pass);
//     promise.catch(e => console.log(e.message));
// });

//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        if (btnLogOut) {
            btnLogOut.classList.remove('hide');
        }
        database.ref("users/" + firebaseUser.uid).set({
            eMail: firebaseUser.email,
        });

    } else {
        if (btnLogOut) {
            btnLogOut.classList.add('hide');
        }
        database.ref("users/" + firebaseUser.uid).on("value", function () { })
        let provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider)
        firebase.auth().signInWithRedirect(provider)
    }
});
