// TODO:
// Populate HTML with these results
// Input validation for city
$(".location-input").submit(function(event){
    alert( "sup?" );
event.preventDefault();
});
function checkInput() {
//     var city1 = "";
//     var city2 = "";
//     $("#city2").keydown(function (event) {
//         console.log($(this).val());
//         city1 = $(this).val();
//         if (city1 !== "" && city2 !== "") {
//             if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode == 46) || (event.keyCode == 32) || (event.keyCode == 190) || (event.keyCode == 222) || (event.keyCode == 189)) {
//                 $('#submit').prop('disabled', false);
//             }
//         }   
//     });
//    $("#city2").keydown(function (event) {
//         console.log($(this).val());
//         city2 = $(this).val();
//         if (city1 !== "" && city2 !== "") {
//             if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode == 46) || (event.keyCode == 32) || (event.keyCode == 190) || (event.keyCode == 222) || (event.keyCode == 189)) {
//                 $('#submit').prop('disabled', false);
//             }
//         }
//     });
//     console.log(city1, city2)

  
 }; 

$("#submit").on("click", function (event) {
    event.preventDefault();
    
    let cityA = $("#city1").val().trim();
    console.log(cityA);
    let stateA = $("#state1").val();
    console.log(stateA);
    let locationA = cityA + ", " + stateA;
    let cityB = $("#city2").val().trim();
    console.log(cityB);
    let stateB = $("#state2").val();
    let locationB = cityB + ", " + stateB;
    console.log(stateB);
    reverseGeolocate(locationA, locationB);

});



async function getLatLng(address) {
    let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDe61mS8pbcKlszRDS-x3rnM92ygstGBi8&address=" + address;
    let geo = await geolocate(queryURL);
    return geo;
};

// Geolocate A City
async function geolocate(queryURL, fn) {
    return $.get(queryURL).then(async data => {
        let location = data.results[0].geometry.location;
        let lat = data.results[0].geometry.location.lat;
        let long = data.results[0].geometry.location.lng;
        var latlong = await new google.maps.LatLng(lat, long);
        return (latlong);

    })
};

// Find Midpoint
async function findMidpoint(locationA, locationB) {
    let city1LatLng = await getLatLng(locationA);
    let city2LatLng = await getLatLng(locationB);
    let midpoint = google.maps.geometry.spherical.interpolate(city1LatLng, city2LatLng, .5);
    return midpoint;
};

// Reverse geolocate midpoint
function reverseGeolocate(locationA, locationB) {
    findMidpoint(locationA, locationB).then(function (data) {
        let queryURL = "http://api.geonames.org/findNearbyPlaceNameJSON?username=kdovi&cities=cities15000&maxRows=300&radius=300&lat=" + data.lat() + "&lng=" + data.lng();
        $.get(queryURL).then(function (data) {
            var largeCities = {};
            console.log(data.geonames)
            data.geonames.forEach(element => {
                var cityName = element.name;
                var stateName = element.adminCode1;
                var population = element.population;
                if (population > 200000) {
                    largeCities[cityName] = population;
                }
            });
            // Create items array
            var items = Object.keys(largeCities).map(function (key) {
                return [key, largeCities[key]];
            });

            // Sort the array based on the second element
            items.sort(function (first, second) {
                return second[1] - first[1];
            });

            // Create a new array with only the first 3 items
            let topCities = items.slice(0, 3);

            // Seperate the items, get the city name
            let city1 = topCities[0][0];
            console.log(city1);
            let city2 = topCities[1][0];
            console.log(city2);
            let city3 = topCities[2][0];
            console.log(city3);
        })
    });
};