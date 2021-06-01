let id;
export async function getPath(coordinates) {
  try {
    await navigator.wakeLock.request("screen");
  } catch (err) {
    console.log(`${err.name}, ${err.message}`);
  }
  if (!navigator.geolocation) {
    alert("Localizzazione GPS non autorizzata!");
  }
  id = navigator.geolocation.watchPosition(
    (data) => {
      /*if (count < 5) {
            count += 1;
          } else {
            if (data.coords.accuracy < 20) {
              console.log(data.coords.accuracy);*/
      coordinates.push([data.coords.longitude, data.coords.latitude]);
      console.log(coordinates);
      if (this.started) {
        navigator.geolocation.clearWatch(id);
      }
      //}
      //}
    },
    (error) => console.log(error.message),
    {
      enableHighAccuracy: true,
      maximumAge: Infinity,
      timeout: Infinity,
    }
  );
}
