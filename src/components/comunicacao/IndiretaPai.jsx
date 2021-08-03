// eslint-disable-next-line no-unused-vars

import IndiretaFilho from './IndiretaFilho'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    let nome = ''
    let idade = 0
    let nerd = false
    function ForneceInformacoes(nomeParam, idadeParam, nerdParam) { 
        
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        console.log(nomeParam, idadeParam, nerdParam)
        
    }
    return (
        <div>
            <div>
                
                <span>{nome} </span>
                <span>{idade} </span>
                <span> {nerd ? 'Verdadeiro ' : 'false'}</span>
                
            </div>
            <IndiretaFilho quandoClicar={ForneceInformacoes} />
        </div>
    )
}