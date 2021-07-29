import If ,{Else} from './if';

import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

   const usuario = props.usuario || {}

    return (
        <div>
          

            <If test={usuario && usuario.nome}>
                Seja bem Vindo <strong> {usuario.nome}</strong> !
                <br />
                <Else>
                    seja bem vindo <strong>Amigão</strong>
                </Else>
            </If>


        </div>
    )
}