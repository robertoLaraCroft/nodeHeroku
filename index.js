// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require("express");
const app = express();
const path = require('path');

const indexRoute = require('./routes/index')

// setiings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
// app.set('controller', path.join(__dirname, 'controller'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs' );

// middlewares

// routes
app.use(indexRoute);

app.use(express.static(path.join(__dirname, 'public')));

// static files
app.use(express.static(path.join(__dirname, 'public')));


// listening the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});