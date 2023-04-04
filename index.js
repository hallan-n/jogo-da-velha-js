const velha = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function tabuleuro() {
    velha.forEach(e => e.forEach(f => console.log(f)))
}
tabuleuro()


function selecionarVez(){
    let x = 'bg-light', y = 'bg-primary'

}



let selecao = document.querySelectorAll('span')

selecao.forEach(e => {
    e.addEventListener('click', () => {
        e.setAttribute('class', `selecao col ${selecionarVez} m-1 rounded-4 p-5`)
    })
})