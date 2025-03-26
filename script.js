function desvia() {
    let botaoNao = document.getElementById("nao")

    let larguraJanela = window.innerWidth / 2
    let alturaJanela = window.innerHeight / 2

    let maxX = larguraJanela - botaoNao.offsetWidth
    let maxY = alturaJanela - botaoNao.offsetHeight

    let aleatorioX = Math.random() * maxX
    let aleatorioY = Math.random() * maxY

    if (!botaoNao.style.left || !botaoNao.style.top) {
        botaoNao.style.left = `${botaoNao.offsetLeft}px`
        botaoNao.style.top = `${botaoNao.offsetTop}px`
    }

    requestAnimationFrame(()=>{
        botaoNao.style.left = `${aleatorioX}px`
        botaoNao.style.top = `${aleatorioY}px`
    })
}


document.getElementById("nao").addEventListener("touchstart", desvia)   
