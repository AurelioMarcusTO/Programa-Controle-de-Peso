function verificar() {
    var fpes = document.getElementById('txtpes')
    var res = document.querySelector('div#res')
    var peso = Number(fpes.value)
    if (peso <= 45) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (peso >= 46 && peso < 70) {
                //hmagro
                img.setAttribute('src', 'hmagro.png')
            } else if (peso < 90) {
                //hnormal
                img.setAttribute('src', 'hnormal.png')
            } else {
                //hobeso
                img.setAttribute('src', 'hobeso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (peso >= 45 && peso < 70) {
                //mmagra
                img.setAttribute('src', 'mmagra.png')
            } else if (peso < 90) {
                //mnormal
                img.setAttribute('src', 'mnormal.png')
            } else {
                //mobesa
                img.setAttribute('src', 'mobesa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${peso} Kg.`
        res.appendChild(img)
    }
}