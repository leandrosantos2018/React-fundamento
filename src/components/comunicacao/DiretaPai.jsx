import DiretaFilho from './DiretaFilho'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div>
            <DiretaFilho texto="Filho 1 " numero ={20} boll={true}></DiretaFilho>
            <DiretaFilho texto="Filho 2 " numero ={20} boll={true}></DiretaFilho>
        </div> 
    )

}