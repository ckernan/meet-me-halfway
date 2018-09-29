//Get elements into DOM
let txtEmail = document.getElementById('txtEmail');
let txtPassword = document.getElementById('txtPassword');
let btnLogin = document.getElementById('btnLogin');
let btnLogOut = document.getElementById('btnLogOut');
let user;


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

//login with google
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        if (btnLogOut) {
            btnLogOut.classList.remove('hide');
        }
        database.ref("users/" + firebaseUser.uid).set({
            eMail: firebaseUser.email,


        });

        getUserDetails(firebaseUser)

    } else {
        if (btnLogOut) {
            btnLogOut.classList.add('hide');
        }

        let provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider);
        firebase.auth().signInWithRedirect(provider)
    }
});


function getUserDetails(firebaseUser) {
    // set this in local storage for later
    localStorage.setItem('userID', firebaseUser.uid)
    // database.ref("users/" + firebaseUser.uid).on("", function () {

    // })
}


