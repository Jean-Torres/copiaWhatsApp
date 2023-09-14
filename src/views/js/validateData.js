let contador = 0, usuarioFinal, contrasenhaFinal;

document.querySelector('#login').addEventListener('submit', (e) => {
    e.preventDefault();
})

document.querySelector('#loguearse').addEventListener('click', () => {
    usuarioFinal = document.querySelector('#usuario').value;
    contrasenhaFinal = document.querySelector('#contrasenha').value;
    const url1 = `https://node-desploy-apistore.onrender.com/api/usuarioSesion/userOne?usuario=${usuarioFinal}&contrasenha=${contrasenhaFinal}`
    fetch(url1, {
        method: 'Get',
        mode: 'cors',
        headers: { "content-type": "aplication/json; charset=utf8" }
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
                alert('Usuario logueado correctamente.')
            } else {
                alert("Usuario o contraseña incorrecta.")
            }
        })
        .catch(err => {
            console.error(err);
        })
})

document.querySelector('#delete').addEventListener('click', () => {
    const data = {
        usuario: document.querySelector('#usuario').value,
        contrasenha: document.querySelector('#contrasenha').value
    }
    const url2 = `https://node-desploy-apistore.onrender.com/api/usuarioSesion?usuario=${data.usuario}&contrasenha=${data.contrasenha}`
    fetch(url2, {
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