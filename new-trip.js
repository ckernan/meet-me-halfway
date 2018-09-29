console.log('new trip js')

let trip;


//TO DO ADD HIDE BUTTON//
$("#save1").on("click", function (event) {
    event.preventDefault();
    let userID = localStorage.getItem('userID');

    friend1City = $("#city1").val().trim();
    friend2City = $("#city2").val().trim();

    dest1 = $("#display-city-1").text();
    cost1 = $("#city-1-price").text();

    trip = database.ref(`users/${userID}/trips`).push({

        location: dest1,
        money: cost1,
        person1: friend1City,
        person2: friend2City,
    })
});

$("#save2").on("click", function (event) {
    event.preventDefault();
    let userID = localStorage.getItem('userID');

    friend1City = $("#city1").val().trim();
    friend2City = $("#city2").val().trim();

    dest2 = $("#display-city-2").text();
    cost2 = $("#city-2-price").text();

    trip = database.ref(`users/${userID}/trips`).push({

        location: dest2,
        money: cost2,
        person1: friend1City,
        person2: friend2City,
    })
});

$("#save3").on("click", function (event) {
    event.preventDefault();
    let userID = localStorage.getItem('userID');

    friend1City = $("#city1").val().trim();
    friend2City = $("#city2").val().trim();

    let dest3 = $("#display-city-3").text();
    let cost3 = $("#city-3-price").text();

    console.log(dest3);

    trip = database.ref(`users/${userID}/trips`).push({

        location: dest3,
        money: cost3,
        person1: friend1City,
        person2: friend2City,
    })
});

