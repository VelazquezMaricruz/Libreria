const { Router} = require('express');
const router = Router();
const LIBROS = require('./../lista-productos');
const tablaProductos = require('../basedatos/productos');


//get
router.get('/', async (peti, resp) => {
    try {
        const listaProductos = await tablaProductos.consultar();
        resp.json(listaProductos);
    } catch (e) {
        console.log('Error en el GET de productos');
        console.log(e);
        resp.status(500).send(e.message);
    }
});

//post
router.post('/', async (peti, resp) => {
    try {
        let productos = peti.body;
        console.log("Se va a guardar los productos");
        console.log(productos);
        await tablaProductos.insertar(productos);
        resp.sendStatus(200);
    } catch (e) {
        console.log('Error en el POST productos');
        console.log(e);
        resp.status(500).send(e.message);
    }

});


//put
router.put('/', async (peti, resp) => {
    try {
        const productosRecibido = peti.body;
        console.log(productosRecibido);
        await tablaProductos.update(productosRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.status(500).send(error.message);
    }

});

//delete
router.delete('/:idproducto', async (peti, resp) => {
    try {
        const idproductoRecibido = peti.params.idproducto;
        console.log(idproductoRecibido);
        await tablaProductos.eliminar(idproductoRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.Status(500).send(error.message);
    }
});

module.exports = router;





