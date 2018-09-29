# Meet Me Halfway

Meet Me Halfway is an application that allows a user to enter their start location and their friend's start location and find potential cities to visit near the midpoint between both cities with cheap flights. 

## Algorithm

This app uses Google Maps to geolocate an address given by the user and then it calculates a midpoint between the two locations using the Google Maps API. It then reverse geolocates the calculated midpoint and sends the city name of the midpoint to the GeoNames API to obtain the list of cities with populations over 15,000 people within a 300km radius from the midpoint. We then filter the cities and store those with a population of over 100,000 people. Then, we order these values from largest city to smallest city and populate these cities on the Google Map as well as present the user with the 3 cities in the trip table. These cities are then taken by the SkyPicker API and used to calculate the price for users to fly to each potential destination city, and displays these prices to the user. In some cases, the search will not display 3 cities because of insufficent data. The users will be prompted with a modal explaining that 3 large cities were not found and presented with the number of cities that were.

## Other Things

Update this with things

## Built With

* [Bootstrap](http://getbootstrap.com/) - Front-End Library
* [Google Maps API](https://developers.google.com/maps/documentation/) - API used to include map, geolocate & reverse geolocate, calculate midpoint
* [GeoNames API](http://www.geonames.org/export/web-services.html) - API used to grab cities near midpoint
* [Firebase](https://firebase.google.com/?hl=en-419) -Database


## Authors

* **Kathleen Doviken** - *Google Maps & GeoNames Integration* - [kathdovi](https://github.com/kathdovi)
* **Cristina Kernan** - *HTML/CSS & User Input Validation* - [ckernan](https://github.com/ckernan)
* **Alexandria Toothman** - *Database Integration* - [artooth](https://github.com/artooth)


## Acknowledgments

* [Serve](https://www.npmjs.com/package/serve) - Used for testing 

