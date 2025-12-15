let escuro = false
function clicou(){
    escuro = !escuro
    if (escuro){
    let sol = document.getElementById('modo-escuro')
    document.body.style.backgroundColor = '#252424ff'
    document.body.style.color = 'white'
    sol.src= 'imagens/sol.png'
    }
    else{
        let lua = document.getElementById('modo-escuro')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    lua.src = 'imagens/lua.png'
    }    
}
