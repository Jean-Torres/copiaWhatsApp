import encriptar from './ecrypt.password.js';
const escript = new encriptar();

async function crearUsuario(url, data) {
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        }, redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
    return res.json;
}

document.querySelector('#newUser').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        usuario: usuario.value,
        contrasenha: escript.encriptarTexto(contrasenha.value),
        correo: correo.value,
        codigoRolXPermiso: '64f88b8804c9020c6e196844'
    }
    crearUsuario('https://node-desploy-apistore.onrender.com/api/usuarioSesion', data);
    usuario.value = ""
    contrasenha.value = ""
    correo.value = ""
    document.querySelector('#contrasenha2').value = ""
    alert('Usuario creado correctamente.')
})