let page = 0;

const inputs = document.querySelectorAll('.inputs-recover')

const cerrarVistas = () => {
    inputs.forEach(input => {
        input.style.display = 'none';
    })
}

const abrirNextVista = (index) => {
    if (page < 3) {
        cerrarVistas();
        inputs[index].style.display = 'flex'
    }
}

async function enviar(url, datas) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas),
            mode: 'cors'
        });
        if (response.status != 205) {
            throw new Error;
        }
        return true;
    } catch (error) {
        console.log(`Error ${error}`);
    }
}

document.querySelector('#next').addEventListener('click', () => {
    if (page <= 3) {
        if (page == 3) {
            const data = {
                usuario: document.querySelector('#usuario').value,
                contrasenha: document.querySelector('#antPass').value,
                newContrasenha: document.querySelector('#newPass').value
            };
            enviar('https://node-desploy-apistore.onrender.com/api/usuarioSesion', data);
            alert('Contrasenha actualizada.')
            location.href = "http://localhost:3000/login"
        }
        abrirNextVista(page + 1);
        page++;
    }
});

document.querySelector('#back').addEventListener('click', () => {
    if (page > 0) {
        abrirNextVista(page - 1)
        page--
    }
})