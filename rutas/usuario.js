const { Router } = require("express");
const router = Router();
const tablaUsuario = require('../basedatos/usuario');

router.get("/",async (peti,resp)=>{
    try{
        const listaUsuario = await tablaUsuario.select(); 
        resp. json(listaUsuario);
    }catch(e){
        console.log('Error al manejar GET de usuario');
        console.log(e);
        resp.status(500).send(e.massage);
    }
});

//post
router.post('/', async (peti, resp) => {
    try {
        let usuario = peti.body;
        console.log("Se va a guardar los usuario");
        console.log(usuario);
        await tablaUsuario.insertar(usuario);
        resp.sendStatus(200);
    } catch (e) {
        console.log('Error en el POST usurario');
        console.log(e);
        resp.status(500).send(e.message);
    }

});


//put
router.put('/', async (peti, resp) => {
    try {
        const usuarioRecibido = peti.body;
        console.log(usuarioRecibido);
        await tablaUsuario.update(usuarioRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.status(500).send(error.message);
    }

});

//delete
router.delete('/:idusuario', async (peti, resp) => {
    try {
        const idusuarioRecibido = peti.params.idusuario;
        console.log(idusuarioRecibido);
        await tablaUsuario.eliminar(idusuarioRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.Status(500).send(error.message);
    }
});

module.exports = router;
