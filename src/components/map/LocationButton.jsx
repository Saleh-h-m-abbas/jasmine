import React, { useState } from 'react';

function LocationButton() {
  const [location, setLocation] = useState(null);

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = 'AIzaSyCyFgou-hXObZf4pZfGG9lm-foB9zhN29Q'; // Replace with your own Google Maps API key
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

          try {
            const response = await fetch(url);
            const data = await response.json();
            const streetName = data.results[0].address_components[1].long_name;
            setLocation(streetName);
            console.log(streetName)
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <button onClick={handleClick}>Get My Location</button>
      {location && <p>Your location: {location}</p>}
    </>
  );
}

export default LocationButton;
