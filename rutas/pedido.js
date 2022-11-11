const { Router } = require("express");
const router = Router();
const tablaUsuario = require('../basedatos/pedido');

router.get("/",async (peti,resp)=>{
    try{
        const listaPedido = await tablaPedido.select(); 
        resp. json(listaPedido);
    }catch(e){
        console.log('Error al manejar GET de pedido');
        console.log(e);
        resp.status(500).send(e.massage);
    }
});

//post
router.post('/', async (peti, resp) => {
    try {
        let pedido = peti.body;
        console.log("Se va a guardar los pedido");
        console.log(pedido);
        await tablaPedido.insertar(pedido);
        resp.sendStatus(200);
    } catch (e) {
        console.log('Error en el POST pedido');
        console.log(e);
        resp.status(500).send(e.message);
    }

});


//put
router.put('/', async (peti, resp) => {
    try {
        const pedidoRecibido = peti.body;
        console.log(pedidoRecibido);
        await tablaPedido.update(pedidoRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.status(500).send(error.message);
    }

});

//delete
router.delete('/:idpedido', async (peti, resp) => {
    try {
        const idpedidoRecibido = peti.params.idpedido;
        console.log(idpedidodRecibido);
        await tablaPedido.eliminar(idpedidoRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.Status(500).send(error.message);
    }
});

module.exports = router;
