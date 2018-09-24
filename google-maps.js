let address = ("New York, New York")
let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDe61mS8pbcKlszRDS-x3rnM92ygstGBi8" + address;

// Geolocate A City
function geolocate(queryURL) {
    $.get(queryURL).then(data => {
        console.log(data.results.geometry.location);
    })
};

geolocate(queryURL);