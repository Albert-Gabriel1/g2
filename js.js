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
        let hoje = new Date ()
        let ano = hoje.getFullYear()
        let nome = document.getElementById('nome').value;
        let idade1 = document.getElementById('idade').value;
        let senha = document.getElementById('senha').value;
        let login = document.getElementById('login')
        let email = document.getElementById('email').value
        let login2 = document.getElementById('login2')
        let itemespecial = /[^a-zA-Z0-9]/;

        localStorage.setItem('nome',nome)
        let nome1 = localStorage.getItem('nome')
            login.innerText =`Ola ${nome1} Seja bem vindo`
        if(senha.length === 0 ){
            alert('Coloque uma senha')
            return;
        }
        else if(senha.length <5 || !itemespecial.test(senha))
        {
            alert('senha fraca')
            return;
        }
        if(!nome1 || nome1.trim() === "")
        {
            alert('coloque algum nome')
            return;
        }
        if (email === "" || !email.endsWith("@gmail.com") && !email.endsWith('@outlook.com')){
            alert("Por Favor coloque um email o um valido")
            return;
        }
        if(idade1 === ""){
            alert('coloque alguma data')
            return;
        }
        let idade = ano-idade1
        if(idade <18 && idade >5)
        {
            alert(`Ola ${nome} você tem apenas ${idade} anos,peça permissão para seus pais para poder ver tudo com segurnaça`)
            return;
            
        }
        if(idade <=0 || idade >=120){
            alert('Coloque alguma idade valida')
            return;
        } 
        login2.innerHTML = `Idade: ${idade}`
}