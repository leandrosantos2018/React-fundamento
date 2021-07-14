import alunos from '../../data/alunos'
import react from "react"

export default props => {

    const lis = alunos.map((aluno) => {

        return (<li key={aluno.id}>
            {aluno.id} - {aluno.nome} - {aluno.nota}
        </li>
        );

    });

    return (
        <di>
            <ul style={{ listStyle: 'none' }}>  {lis} </ul>
            
        </di>
    )
}