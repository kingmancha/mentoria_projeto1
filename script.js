const inputCep = document.getElementById('input_pesquisa')
const button = document.querySelector('.button_pesquisa')

const rua = document.getElementById('rua')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')

button.addEventListener('click', buscarCep)

function buscarCep() {
    const cep = inputCep.value.replace(/\D/g, '')

    if (cep.length !== 8) {
        alert('Digite um CEP válido')
        return
    }

    fetch (`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado')
                limparCampos()
                return
            }

            rua.textContent = data.logradouro || '--'
            bairro.textContent = data.bairro || '--'
            cidade.textContent = data.localidade || '--'
            estado.textContent = data.uf || '--'
        })
        .catch(() => {
            alert('Erro ao buscar CEP')
        })
}

function limparCampos() {
    rua.textContent = '--'
    bairro.textContent = '--'
    cidade.textContent = '--'
    estado.textContent = '--'
}