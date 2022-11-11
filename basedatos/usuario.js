const conexion = require ('./conexion');

async function insertar(usuario){
    try{
        await conexion.execute('INSERT INTO usuario(idusuario, nombre, apellido, direccion, telefono, ci, correo, clave) VALUE(?,?,?,?,?,?,?,?)',[usuario.idusuario, usuario.nombre, usuario.apellido, usuario.direccion, usuario.ci, usuario.correo, usuario.clave ]);
    }catch(error){
        console.log('Error al insertar usuario en el base de datos');
        console.log(error);
        throw error;
    }
}

async function consultar(){
    try{
       const [rows, fielde] =  await conexion.execute('SELECT *FROM vista_usuario');
       return rows;
    }catch(error){
        console.log('Error al consultar usuario de la base de datos ');
        console.log(error);
        throw error;
    }
}

async function update(usuario) {
    try {
        await conexion.execute('UPDATE producto SET  nombre = ?, apellido = ?, direccion = ?, telefono  = ?, ci = ?  correo = ?, clave = ?, WHERE idusuario = ?', [usuario.nombre, usuario.apellido, usuario.direccion, usuario.ci, usuario.correo, usuario.clave, usuario.idusuario]);
    } catch (error) {
        console.log('Error al editar usuario');
        console.log(error);
        throw error;
    }
}

async function eliminar(idusuario) {
    try {
        await conexion.execute('DELETE FROM usuario WHERE idusuario = ? ', [idusuario]);
    } catch (error) {
        console.log('Error al eliminar usuario');
        console.log(error);
        throw error;
    }
}


module.exports = { insertar, consultar, update, eliminar };
