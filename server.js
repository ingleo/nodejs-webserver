const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'leoNaRdo gONZaleZ',
        anio: new Date().getFullYear()
    });
})

app.get('/about', function (req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones sobre el puerto ${port}`);
});