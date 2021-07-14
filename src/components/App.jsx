import './App.css';

import Aleatorio from './basicos/Aleatorio'
import Card from './Layout/Card'
import ComParametro from './basicos/ComParamentro'
import Familia from './basicos/Familia';
import FamiliaMembro from './basicos/FamiliaMembro';
import Fragmento from './basicos/Fragmento'
import ListaAluno from './Repeticao/ListaAluno';
import Primeiro from './basicos/Primeiro'
import Produtos from './Repeticao/Produtos'
import React from 'react'

export default (props) => {

    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

             <div className="Cards">

             <Card titulo="#07 - Repetição Desafio" color='yellow'>
                
                <Produtos />             
            </Card>
               
           <Card titulo="#06 - Repetição" color='blue'>
                
                <ListaAluno/>              
            </Card>
           
           <Card titulo="#05 -Componente com filhos" color='#34FA9F'>
                <Familia sobrenome='Ferreira' />
                <FamiliaMembro nome='Leandro' />               
                <FamiliaMembro nome='Naiani'/>
                <FamiliaMembro nome='Mirella'/>
            
               
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