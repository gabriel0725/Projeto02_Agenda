const form = document.getElementById('form-agenda');
const nomesContatos = [];
const numerosContatos = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalContatos();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('Nome')
    const inputNumeroContato = document.getElementById('Numero')
    

    if (nomesContatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já está na agenda`);
    }else if (numerosContatos.includes(inputNumeroContato.value)){
        alert(`O numero: ${inputNumeroContato.value} já está na agenda`);
    }else{
        nomesContatos.push(inputNomeContato.value);
        numerosContatos.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContatos(){
    const totalContatos = contatosTotal();

    document.getElementById('somatotal').innerHTML = totalContatos;

}

function contatosTotal(){
    let total = 0;
    for(let i = 0; i<numerosContatos.length; i++){
        total ++
    }
    return total
}