var userLongitude;
var userLatitude;
var map;
var infoWindow;
var m_apiKey = 'AIzaSyCkAdpuaUbF88OegKKWanqZaEDmKhD_CL4';
var apiKey_displayMap = 'AIzaSyCueVCjk8CMDfzmqSfhBzWpr2GQ_I8O9Pk';

// this function initializes Google Maps and prompts user for their location and storing them
function initMap() {
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log("geolocationstart")
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        userLongitude = position.coords.longitude;
        userLatitude = position.coords.latitude;
        getUserCityName();
      },
      function() {
        // hardcoding user's location to Evanston if user does not allow to disclose their location
        handleLocationError(true, infoWindow);
        userLongitude = -87.6818861111;
        userLatitude = 42.0497277778;
        getUserCityName();
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow);
  }
}

// this function is called when browser does not support Geo location
function handleLocationError(browserHasGeolocation, infoWindow) {
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
}

// function to get user's city name from user's latitutde and longitude from initial page load
function getUserCityName() {
  console.log("getting city nanme")
  var m_queryURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLatitude},${userLongitude}&key=${m_apiKey}`;

  let cityInput = document.getElementById('cityname');

  let input = document.getElementById('cityname');
  let lastValue = input.value;

  $.ajax({ url: m_queryURL, method: 'GET' }).done(function(response) {
    console.log("got city response")
    input.value = response.results[4].formatted_address;
    let event = new Event('input', { bubbles: true });
    // Hack for react to trigger on change event
    // hack React16
    let tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  });
}

// function to get Latitude and Longitude for user's location
function getLatLong(index) {
  var m_queryURL =
    'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    $('#city')
      .val()
      .trim() +
    '&key=' +
    m_apiKey;
  $.ajax({ url: m_queryURL, method: 'GET' }).done(function(response) {
    userLatitude = response.results[0].geometry.location.lat;
    userLongitude = response.results[0].geometry.location.lng;
    getData(index);
  });
}