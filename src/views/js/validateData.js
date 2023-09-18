import encriptar from './ecrypt.password.js';
const escript = new encriptar();


let contador = 0, usuarioFinal, contrasenhaFinal;

document.querySelector('#login').addEventListener('submit', (e) => {
    e.preventDefault();
})

document.querySelector('#loguearse').addEventListener('click', () => {
    usuarioFinal = document.querySelector('#usuario').value;
    contrasenhaFinal = escript.encriptarTexto(document.querySelector('#contrasenha').value);
    console.log(contrasenhaFinal + " " + usuarioFinal)
    const url = `https://node-desploy-apistore.onrender.com/api/usuarioSesion/userOne?usuario=${usuarioFinal}&contrasenha=${contrasenhaFinal}`
    fetch(url, {
        method: 'Get',
        mode: 'cors',
        headers: { "content-type": "application/json; charset=utf8" }
    })
        .then(respuesta => {
            if (respuesta.ok == null) {
                throw new Error("Error");
            }
            return respuesta.json()
        })
        .then(respuesta => {
            if (respuesta != null) {
                location.href = "/chats"
            } else {
                alert("Usuario o contraseña erronea")
            }
        })

        .catch(err => {
            console.error(err);
        })
})

document.querySelector('#delete').addEventListener('click', () => {
    const data = {
        usuario: document.querySelector('#usuario').value,
        contrasenha: escript.encriptarTexto(document.querySelector('#contrasenha').value)
    }
    const url = `https://node-desploy-apistore.onrender.com/api/usuarioSesion?usuario=${data.usuario}&contrasenha=${data.contrasenha}`
    fetch(url, {
        method: 'DELETE',
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        }, redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('error')
            }
            return res.json();
        })
        .then(dataRes => {
            if (dataRes != null) {
                usuario.value = ""
                contrasenha.value = ""
                alert('Usuario eliminado correctamente.')
            } else {
                alert("Usuario o contraseña incorrecta.")
            }
        })
        .catch(err => {
            console.error(err);
        })
})