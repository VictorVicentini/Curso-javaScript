function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria um novo elemento a ser inserido dinamicamente
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '200')
        img.setAttribute('height', '200')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebeH.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemH.jpg') //insere atributos ao elemento
            } else if (idade < 50) {
                //velho
            }

        } else {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebeM.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemM.jpg') //insere atributos ao elemento
            } else if (idade < 50) {
                //velho
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} <br>`
        res.appendChild(img) //adiciona um novo elemento dinamicamente
    }

}