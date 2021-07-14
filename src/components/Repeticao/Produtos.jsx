import './tabela.css'

import produtos from '../../data/produtos'
import react from "react";

export default props => {


        function getLinhas() {

            return produtos.map(produto => {
                return (
                    <tr>
                        <td className="id">{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R${produto.preco}</td>
                    </tr>
                )
            })
        }
        return (

            <div className="tabelaProdutos">

                <table  >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                            <th>preço</th>
                        </tr>
                    </thead>

                    <tbody>
                        {getLinhas()}
                    </tbody>
                </table>

            </div>
        )}

    
