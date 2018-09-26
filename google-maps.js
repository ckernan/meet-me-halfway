// TODO:
// Populate HTML with these results
// Input validation for city
var marker;
var markers = []
$("#submit").on("click", function (event) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    };
    markers = [];
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
        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: latlong
        });
        markers.push(marker);
        return (latlong);
    })
}

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
        let queryURL = "http://api.geonames.org/findNearbyPlaceNameJSON?username=kdovi&cities=cities15000&maxRows=500&radius=300&lat=" + data.lat() + "&lng=" + data.lng();
        $.get(queryURL).then(function (data) {
            var largeCities = {};
            console.log(data.geonames)
            data.geonames.forEach(element => {
                var cityName = element.name;
                var stateName = element.adminCode1;
                var population = element.population;
                var locationName = cityName + ", " + stateName;
                if (population > 100000) {
                    largeCities[locationName] = population;
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
            console.log(items);
            console.log(topCities);

            // Seperate the items, get the city name
            let city1 = topCities[0][0];
            $("#display-city-1").text(city1);
            try {
                let city2 = topCities[1][0];
                $("#display-city-2").text(city2);
            }
            catch (error) {
                console.error(error);
            }
            try {
                let city3 = topCities[2][0];
                $("#display-city-3").text(city3);
            }
            catch (error) {
                console.error(error);
            }
            // Make pins for the cities
            console.log("here");
            for (var i = 0; i < topCities.length; i++) {
                console.log("hi");
                getLatLng(topCities[i][0]);
            };
        })
    });
};



function clearMarkers() {
    setMapOnAll(null);
};


