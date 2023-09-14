const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyaParse = require('body-parser')
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middlewares
// app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(bodyaParse.json());
app.use(express.static(path.join(__dirname, 'views')))

//Routes
app.use('/', require('./routes/index.routes'));
app.use('/login', require('./routes/login.routes'));
app.use('/registrarse', require('./routes/Register.routes'));
app.use('/recover', require('./routes/recoverPass.routes'))
app.use('/chats', require('./routes/categorias.routes'));


module.exports = app;