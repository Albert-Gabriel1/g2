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

    function clicou2(){
        let nome = document.getElementById('nome').value;
        let idade = document.getElementById('idade')
        let senha = document.getElementById('senha')
        let login = document.getElementById('login')
        
        if(senha.value.length <5){
            alert('senha fraca')
            return
        }
        localStorage.setItem('nome',nome)
        let nome1 = localStorage.getItem('nome')
            login.innerText =`Òla ${nome1}`
            
    }