# Meet Me Halfway

Meet Me Halfway is an application that allows a user to enter their start location and their friend's start location and find potential cities to visit near the midpoint between both cities with cheap flights. The app can be accessed [here](https://kathdovi.github.io/meet-me-halfway/).

## Algorithm

This app uses Google Maps to geolocate an address given by the user and then it calculates a midpoint between the two locations using the Google Maps API. It then reverse geolocates the calculated midpoint and sends the city name of the midpoint to the GeoNames API to obtain the list of cities with populations over 15,000 people within a 300km radius from the midpoint. We then filter the cities and store those with a population of over 100,000 people. Then, we order these values from largest city to smallest city and populate these cities on the Google Map as well as present the user with the 3 cities in the trip table. These cities are then taken by the Skypicker API and used to calculate the price for users to fly to each potential destination city, and displays these prices to the user. In some cases, the search will not display 3 cities because of insufficent data. The users will be prompted with a modal explaining that 3 large cities were not found and presented with the number of cities that were.

## Future Development

Some things we'd like to add in the future are:
* Selection of start/end date of the trip
* Connection with hotels or other housing options (HomeAway, AirBnB)
* Direct link to book flights from app
* Suggestions for things to do/see in each potential city (potentially powered with Google Places)

## Demo
![](https://github.com/kathdovi/meet-me-halfway/blob/master/MeetMeHalfway.gif)


## Built With

* [Bootstrap](http://getbootstrap.com/) - Front-End Library
* [Google Maps API](https://developers.google.com/maps/documentation/) - API used to include map, geolocate & reverse geolocate, calculate midpoint
* [GeoNames API](http://www.geonames.org/export/web-services.html) - API used to grab cities near midpoint
* [Firebase](https://firebase.google.com/?hl=en-419) - Database
* [Skypicker](https://docs.kiwi.com/#flights-flights-get) - API used to grab flight prices


## Authors

* **Kathleen Doviken** - *Google Maps API & GeoNames API Integration, Error Handling* - [kathdovi](https://github.com/kathdovi)
* **Cristina Kernan** - *HTML/CSS & User Input Validation* - [ckernan](https://github.com/ckernan)
* **Alexandria Toothman** - *Database Integration* - [artooth](https://github.com/artooth)
* **David Ho** - *Kiwi API Integration* - [davidho104](https://github.com/davidho104)


## Acknowledgments

* [Serve](https://www.npmjs.com/package/serve) - Used for testing 
* [CORS Anywhere](https://github.com/Rob--W/cors-anywhere) - Used to make API call to GeoNames (http) on GitHub Pages site (https)

