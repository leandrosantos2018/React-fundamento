import FamiliaMembro  from './FamiliaMembro'
import React from 'react'

export default props =>{

    return (
        <div>
       <FamiliaMembro nome='Leandro' sobrenome={props.sobrenome}/>
       <FamiliaMembro nome='Naiani'sobrenome='Santos'/>
       <FamiliaMembro nome='Mirella'sobrenome='Santos'/>

        </div>
    )
}