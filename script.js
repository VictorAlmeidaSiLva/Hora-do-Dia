function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`;
    if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = "fotomanha.jpg"
        document.body.style.background = '#F9FF37'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "fototarde.jpg"
        document.body.style.background = '#00FFF3'
    } else {
        img.src = "fotonoite.jpg"
        document.body.style.background = '#020105'
        //BOA NOITE
    };
};