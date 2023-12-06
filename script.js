   
<ul id="listaCadastradosSel"></ul>

    function adicionarCadastroAoLocalStorage(cadastro) {
        let listaCadastradosSel = JSON.parse(localStorage.getItem('cadastros')) || [];
        listaCadastradosSel.push(cadastro);
        localStorage.setItem('cadastros', JSON.stringify(listaCadastradosSel));
    }
    

    function exibirlistaCadastradosSel() {
        let listaCadastradosSel = JSON.parse(localStorage.getItem('cadastros')) || [];
        let listaCadastradosSelHTML = document.getElementById('listaCadastradosSel');
        listaCadastradosSelHTML.innerHTML = '';
    
        listaCadastradosSel.forEach(cadastro => {
            let li = document.createElement('li');
            li.textContent = `${cadastro.nome} - ${cadastro.email} - ${cadastro.frequencia} - ${cadastro.consumo}`;
            listaCadastradosSelHTML.appendChild(li);
        });
    }
    

    document.getElementById('FormSel').addEventListener('submit', function(event) {
        event.preventDefault();
    

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let frequencia = document.getElementById('frequencia').value;
        let consumo = document.getElementById('consumo').value;

    

        let addCadastro = {
            nome: nome,
            email: email,
            frequencia: frequencia,
            consumo: consumo
        };
    

        adicionarCadastroAoLocalStorage(addCadastro);
        exibirlistaCadastradosSel();
        document.getElementById('FormSel').reset();
    });
    

    window.addEventListener('load', exibirlistaCadastradosSel);

        function limparListaLocalStorage() {
        localStorage.removeItem('cadastros');
}

    window.addEventListener('beforeunload', 
        function(event) { limparListaLocalStorage();
});

