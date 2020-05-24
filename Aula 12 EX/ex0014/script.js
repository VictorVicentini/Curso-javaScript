function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22;
    msg.innerHTML = `Agora são ${hora} horas 😜😜 \u{1F912}		`


    if (hora >= 0 && hora <= 12) {
        img.src = "manhã.jpg"
        window.document.body.style.background = "black"


    } else if (hora > 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        window.document.body.style.background = 'green'
    } else {
        img.src = 'noite.jpg'
        window.document.body.style.background = 'yellow'
    }
}