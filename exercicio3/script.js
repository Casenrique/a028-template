function checaCaps(event) {
    const inputTexto = document.getElementById("textoInput")

    console.log(event.shiftKey)
    const paragrafo = document.getElementById("mensagem")
    if(event.shiftKey === true){
        paragrafo.innerHTML = "ATENÇÃO, SEGURANDO SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }
}