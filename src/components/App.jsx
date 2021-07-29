import './App.css';

import Aleatorio from './basicos/Aleatorio'
import Card from './Layout/Card';
import ComParametro from './basicos/ComParamentro';
import DiretaFilho from './comunicacao/DiretaFilho';
import DiretaPai from './comunicacao/DiretaPai';
import Familia from './basicos/Familia';
import FamiliaMembro from './basicos/FamiliaMembro';
import Fragmento from './basicos/Fragmento';
import ListaAluno from './Repeticao/ListaAluno';
import ParOuImpar from './Condicional/ParOuImpar';
import Primeiro from './basicos/Primeiro';
import Produtos from './Repeticao/Produtos';
import React from 'react'
import UsuarioInfo from './Condicional/UsuarioInfo';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            

              <div className="Cards">

            
             <Card titulo="#09 - Comunicação Direta" color='#6495ED'>
                 <DiretaPai/>
                 
             </Card>
            

            
             <Card titulo="#08 - Condicional" color='#6495ED'>
                
                <ParOuImpar numero={20}/> 

                <UsuarioInfo usuario = {{nome: ''}}/>            
                          
                </Card>
             <Card titulo="#07 - Repetição Desafio" color='#C0C0C0'>
                
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