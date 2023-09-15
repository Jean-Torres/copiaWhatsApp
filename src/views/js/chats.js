const socket = io()

let message = document.querySelector('#entradaMessage');
const btnEnviar = document.querySelector('#enviar');
const contentMessage = document.querySelector('#content-chats')
const novedades = document.querySelector('#novedades')

message.addEventListener('input', () => {
    if (message.value.length > 0) {
        btnEnviar.style.display = 'block'
        document.querySelector('#grabarAudio').style.display = 'none'
    } else {
        document.querySelector('#grabarAudio').style.display = 'block'
        btnEnviar.style.display = 'none'
    }
})

btnEnviar.addEventListener('click', () => {
    const hora = new Date().getHours().toString() + ":" + new Date().getMinutes().toString() + ":" + new Date().getSeconds().toString();
    const data = {
        newMessage: message.value,
        hora: hora,
        remitente: null,
        receptor: null
    }
    socket.emit('chat', data)
    message.value = '';
    document.querySelector('#grabarAudio').style.display = 'block'
    btnEnviar.style.display = 'none'
})

message.addEventListener('keypress', () => {
    socket.emit('typing', true)
})

socket.on('chat', (data) => {
    contentMessage.innerHTML += `<div class="content-message" >
    <span class="message">${data.newMessage}</span>
    <span style="font-size: 14px;">${data.hora}</span>
</div>`
})

socket.on('typing', (data) => {
    novedades.style.color = 'rgb(2, 199, 2);'
    novedades.innerText = "Escribiendo"
})