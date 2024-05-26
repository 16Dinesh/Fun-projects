const result = document.querySelector(".location");
const btn = document.querySelector("#findMe");

const showPosition = (pos)  => {result.innerHTML = `Latitude: ${pos.coords.latitude} <br> Longitude: ${pos.coords.longitude}`};

const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
} 

btn.addEventListener('click',getUserLocation);