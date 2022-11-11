const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/',(peti, resp)=>{
    resp.send('Hola Mundo');
});

app.use('/productos', require('./rutas/productos'));
app.use('/usuario',require('./rutas/usuario'));
app.use('/pedido',require('./rutas/pedido'))

app.listen(3000,()=>{
    console.log('El servidor inicio y esta escuchando en el puerto 3000.');
});