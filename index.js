let selecao = document.querySelectorAll('span')
let BgP = 'col bg-primary', BgL = 'col bg-light', velha = 0
function winVerify() {
    if (selecao[0].getAttribute('class') == BgP && selecao[1].getAttribute('class') == BgP &&
        selecao[2].getAttribute('class') == BgP || selecao[0].getAttribute('class') == BgL &&
        selecao[1].getAttribute('class') == BgL && selecao[2].getAttribute('class') == BgL ||
        selecao[3].getAttribute('class') == BgP && selecao[4].getAttribute('class') == BgP &&
        selecao[5].getAttribute('class') == BgP || selecao[3].getAttribute('class') == BgL &&
        selecao[4].getAttribute('class') == BgL && selecao[5].getAttribute('class') == BgL ||
        selecao[6].getAttribute('class') == BgP && selecao[7].getAttribute('class') == BgP &&
        selecao[8].getAttribute('class') == BgP || selecao[6].getAttribute('class') == BgL &&
        selecao[7].getAttribute('class') == BgL && selecao[8].getAttribute('class') == BgL ||
        selecao[0].getAttribute('class') == BgP && selecao[4].getAttribute('class') == BgP &&
        selecao[8].getAttribute('class') == BgP || selecao[0].getAttribute('class') == BgL &&
        selecao[4].getAttribute('class') == BgL && selecao[8].getAttribute('class') == BgL ||
        selecao[2].getAttribute('class') == BgP && selecao[4].getAttribute('class') == BgP &&
        selecao[6].getAttribute('class') == BgP || selecao[2].getAttribute('class') == BgL &&
        selecao[4].getAttribute('class') == BgL && selecao[6].getAttribute('class') == BgL ||
        selecao[0].getAttribute('class') == BgP && selecao[3].getAttribute('class') == BgP &&
        selecao[6].getAttribute('class') == BgP || selecao[0].getAttribute('class') == BgL &&
        selecao[3].getAttribute('class') == BgL && selecao[6].getAttribute('class') == BgL ||
        selecao[1].getAttribute('class') == BgP && selecao[4].getAttribute('class') == BgP &&
        selecao[7].getAttribute('class') == BgP || selecao[1].getAttribute('class') == BgL &&
        selecao[4].getAttribute('class') == BgL && selecao[7].getAttribute('class') == BgL ||
        selecao[2].getAttribute('class') == BgP && selecao[5].getAttribute('class') == BgP &&
        selecao[8].getAttribute('class') == BgP || selecao[2].getAttribute('class') == BgL &&
        selecao[5].getAttribute('class') == BgL && selecao[8].getAttribute('class') == BgL) {
        return true
    } else {
        return false
    }
}
selecao.forEach(e => {
    e.addEventListener('click', () => {
        let cor;
        const estado = document.getElementById('estado')
        if (estado.innerHTML == 'bg-dark') {
            estado.innerHTML = 'bg-primary'
            cor = 'bg-primary'
        } else {
            estado.innerHTML = 'bg-dark'
            cor = 'bg-light'
        }
        if (e.getAttribute('class') != 'col bg-primary' && e.getAttribute('class') != 'col bg-light') {
            e.setAttribute('class', `col ${cor}`)
            let alerta = winVerify()
            if (alerta == true) {
                if (e.getAttribute('class') == 'col bg-primary') alert('Azul ganhou')
                else alert('Branco ganhou')
                window.location.reload();
            }
            velha++
            if (velha == 9) {
                alert('Velha')
                window.location.reload();
            }
        }
    })
})
