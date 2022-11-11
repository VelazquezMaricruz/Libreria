
const conexion = require ('./conexion');

async function insertar(productos){
    try{
        await conexion.execute('INSERT INTO productos (idproducto, nombre-pro, precio-pro, cantidad-pro, producto-oferta, marca-pro) VALUE(?,?,?,?,?,?)',[productos.idproducto, productos.nombre-pro, productos.precio-pro, productos.cantidad-pro, productos.producto-oferta, productos.marca-pro]);
    }catch(error){
        console.log('Error al insertar productos en el base de datos');
        console.log(error);
        throw error;
    }
}

async function consultar(){
    try{
       const [rows, fielde] =  await conexion.execute('SELECT *FROM vista_producto');
       return rows;
    }catch(error){
        console.log('Error al consultar productos de la base de datos ');
        console.log(error);
        throw error;
    }
}

async function update(productos) {
    try {
        await conexion.execute('UPDATE producto SET  nombre-pro = ?, precio-pro = ?, cantidad-pro  = ?, producto-oferta  = ?,marca-protitulo = ? WHERE idproducto = ?', [productos.nombre-pro, productos.precio-pro, productos.cantidad-pro, productos.producto-oferta, productos.marca-pro, productos.idproducto]);
    } catch (error) {
        console.log('Error al editar productos');
        console.log(error);
        throw error;
    }
}

async function eliminar(idproducto) {
    try {
        await conexion.execute('DELETE FROM productos WHERE idproducto = ? ', [idproducto]);
    } catch (error) {
        console.log('Error al eliminar productos');
        console.log(error);
        throw error;
    }
}


module.exports = { insertar, consultar, update, eliminar };

