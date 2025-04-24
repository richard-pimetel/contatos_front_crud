'use strict'

import { getContatos, getContatosNome } from "./contatos.js"


async function exibirPesquisa (evento){
    if ( evento.key == 'Enter'){
        const contatos = await getContatosNome(evento.target.value)
        document.getElementById('container').replaceChildren()
        contatos.forEach(criarCard)
    }

    
    
}

function criarCard (contato){
    
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    card.innerHTML = `
        <img src="${contato.foto}" alt="">
        <h2>${contato.nome}</h2>
        <p>${contato.celular}</p>
    `
    container.appendChild(card)
}

async function exibirContatos(){
    const contatos = await getContatos()
    // console.log(contatos)
    contatos.forEach( criarCard )
}

exibirContatos()

document.getElementById('pesquisa').addEventListener('keydown', exibirPesquisa)
                
