import './App.css';

import Aleatorio from './basicos/Aleatorio'
import Card from './Layout/Card'
import ComParametro from './basicos/ComParamentro'
import Familia from './basicos/Familia';
import Fragmento from './basicos/Fragmento'
import Primeiro from './basicos/Primeiro'
import React from 'react'

export default (props) => {

    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
           
           <div className="Cards">
               
           <Card titulo="#05 -Componente com filhos" color='#34FA9F'>
                <Familia sobrenome='Ferreira' />
            </Card>
            
               
            <Card titulo="#04 -Desafio Aleatorio" color='#CB3304'>
                <Aleatorio min={1} max={60} />
            </Card>
            
            <Card titulo="#03 -Fragmento"color='#54B606'>
                <Fragmento />
            </Card>
            
            <Card titulo="#02 -ComParametro"color='#10D2AB'>
                <ComParametro />
            </Card>
            
            <Card titulo="#01 - Primeiro"color='#DAFB01'>
                <Primeiro />
            </Card>


        </div>

            </div>
    );
}