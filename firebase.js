// Initialize Firebase
var config = {
    apiKey: "AIzaSyDYADDzlmYhCz-19TMwc5HlfWeSLkZP9Gc",
    authDomain: "meet-me-halfway-5c89a.firebaseapp.com",
    databaseURL: "https://meet-me-halfway-5c89a.firebaseio.com",
    projectId: "meet-me-halfway-5c89a",
    storageBucket: "meet-me-halfway-5c89a.appspot.com",
    messagingSenderId: "603877384365"
};
firebase.initializeApp(config);

//variable to reference the database
let database = firebase.database();

//register user
$("#register-user").on("click", function (event) {
    event.preventDefault();

    user = $("#exampleInputEmail1").val().trim();
    pass = $("#exampleInputPassword1").val().trim();


    database.ref().push({
        username: user,
        password: pass,

    })

    $("#exampleInputEmail1").val('');
    $("#exampleInputPassword1").val('');

});
