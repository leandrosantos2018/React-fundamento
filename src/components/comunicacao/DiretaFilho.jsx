import DiretaPai from './DiretaPai'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div>
            <span>{props.texto} </span>
            <span>{props.numero} </span>
            <span>{props.bool ? 'verdadeiro' : 'falso'}</span>
        </div> 
    )

}