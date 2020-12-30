function doFetchGet(){
fetch('https://api.openweathermap.org/data/2.5/weather');

const url = 'https://api.openweathermap.org/data/2.5/weather';
const queryParams = '?q=';
// Selects page elements
// const inputField = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = 'London';
  const appid = 'appid=79dba0e78461ec229ce261e4c8a3c840';
  const endpoint = `${url}${queryParams}${wordQuery}&${appid}`;

  console.log(endpoint);

  fetch(endpoint)
  .then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  },(networkError) => {
    console.log(networkError.message);
  })
  .then(jsonResponse => {
    console.log(jsonResponse.coord);
  });
}


}
function callApi(oEvent){
    document.getElementById("cajaTexto").innerHTML = "YOU CLICKED ME!";
}