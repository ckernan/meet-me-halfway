//called when data is added to firebase to populate the table body in "view trips"(my-trips.html)
let trip;
let userID = localStorage.getItem('userID');

database.ref(`users/${userID}/trips`).on("child_added", function (snapshot) {

    let personCity1 = snapshot.val().person1
    let personCity2 = snapshot.val().person2
    let finalDest = snapshot.val().location
    // let totalCost = snapshat.val().money

    $("#cityState1").html(`${personCity1}`);
    $("#cityState2").html(`${personCity2}`);
    $("#finalDestination").html(`${finalDest}`);
    // $("#totalPrice").html(`${totalCost}`);
});



