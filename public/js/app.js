const getElement = selector => document.querySelector(selector)

const $loader = getElement('.loader');
const $error = getElement('#error');
const $details = getElement('.details');

const showError = (error) => {
  $error.style.display = 'block';
  $details.style.display = 'none';
  return ($error.innerText = error);
};

const showLoader = () => {
  $loader.style.display = 'block';
  $error.style.display = 'none';
  $details.style.display = 'none';
};
const showDetails = (current, location) => {
  $error.style.display = 'none';
  $details.style.display = 'block';
  getElement('#location').innerText = `${location.name} ${location.region}, ${location.country}`;
  getElement('#temp').innerText = `${current.temperature}°C`;
  getElement('#description').innerText = `${current.weather_descriptions.join(', ')}`;
  getElement("#icon").src = current.weather_icons[0]
  getElement("#is-day").innerText = current.is_day === 'yes' ? "Day" : "Night"
  getElement('#pressure').innerText = `${current.pressure}MB`;
  getElement('#visibility').innerText = `${current.visibility}km`;
  getElement('#humidity').innerText = `${current.humidity}%`;
  getElement('#wind-speed').innerText = `${current.wind_speed}km/h`;
  getElement('#wind-direction').innerText = `${current.wind_dir} wind`;
  getElement('#longitude').innerText = `${location.lon}`;
  getElement('#latitude').innerText = `${location.lat}`;
};


const main = () => {
  getElement('#weather-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader();

    fetch(`/weather?address=${getElement('input').value}`)
      .then((res) => res.json())
      .then(({error, current, location}) => {
        $loader.style.display = 'none';
        if (error) return showError(error);
        showDetails(current, location);
      });
  });
}

window.onload = main;