// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const meuCep = inputCep.value;

    const cep = fetch('https://viacep.com.br/ws/'+meuCep+'/json/')

    cep.then(resposta => {
        return resposta.json();
    }).then((body)=> {
        console.log(body);
        const sectionPai = document.getElementById('retorno-cep');

        const h1 = document.createElement('h1');
        const rua = document.createElement('p');
        const bairro = document.createElement('p');
        const cidade = document.createElement('p');

        h1.innerText = 'Seu Endereço'
        rua.innerText = body.logradouro;
        bairro.innerText = body.bairro;
        cidade.innerText = body.localidade;

        sectionPai.appendChild(h1);
        sectionPai.appendChild(rua);
        sectionPai.appendChild(bairro);
        sectionPai.appendChild(cidade);

        console.log(sectionPai);
        
    })
})