const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchLocation = search.value;
  message1.textContent = 'loading...';
  message2.textContent = '';

  fetch(`/weather?address=${searchLocation}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.request.query;
        message2.textContent = data.current.weather_descriptions;
      }
    });
  });
});
