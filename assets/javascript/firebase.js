<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC9kHHgF35XqEsiWpFueoGluTsgQy8K34A",
    authDomain: "meet-me-half-way-8acf5.firebaseapp.com",
    databaseURL: "https://meet-me-half-way-8acf5.firebaseio.com",
    projectId: "meet-me-half-way-8acf5",
    storageBucket: "meet-me-half-way-8acf5.appspot.com",
    messagingSenderId: "1009066110235"
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
