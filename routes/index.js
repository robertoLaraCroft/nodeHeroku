const express = require('express');
const router = express.Router();

// var GF = require("../controller/generalFunctions");


router.get('/', (req,res) => {
    res.render('index.ejs', { title: 'Firse site node'});
})

router.get('/contact', async (req,res) => {
    const city = req.query.city;
    var feed = '';
    if(city){
       feed = await doFetchGet(city);
    }
    // mandamos datos de ciudad al front
    res.render('contact.ejs', {title: 'Contact', jsonCaja: feed});
})

router.get('/about', (req,res) => {
    res.render('about.ejs', { title: 'About page'});
})

router.get('/peticion', (req,res) => {
  res.send('hola robe');
})



module.exports = router;

async function doFetchGet(city){
    const fetch = require('node-fetch');
    fetch('https://api.openweathermap.org/data/2.5/weather');
    
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const queryParams = '?q=';
    // Selects page elements
    // const inputField = document.querySelector('#input');
    // const submit = document.querySelector('#submit');
    // const responseField = document.querySelector('#responseField');
    
    // AJAX function
    const getSuggestions = async () => {
      const wordQuery = city;
      const appid = 'appid=79dba0e78461ec229ce261e4c8a3c840';
      const endpoint = `${url}${queryParams}${wordQuery}&${appid}`;
  
     
     const respuesta = await fetch(endpoint)
      .then(response => {
        if(response.ok){
          return response.json();
        }
        throw new Error('Request failed!');
      },(networkError) => {
        console.log(networkError.message);
      })
      .then(jsonResponse => {
        return jsonResponse;
      });
      return respuesta;

    }
    
    return await getSuggestions();
    }

