
import { useState } from 'react'
import {Container} from './styled'
import {Link} from 'react-router-dom'






export default function Detalhes(props){
const [produto, SetProduto] = useState(props.location.state); 

console.log(props);
    return(
        <Container>
            <h1>Detalhes Produto</h1>
            <div className='info'>
                <div><img src={produto.imagem} /> </div>
                <div className='info-pro'>
                    <div><h1>{produto.titulo}</h1> </div>
                    <div><h3>{produto.preco}</h3> </div>
                    <div className='desc'>
                        <h2> Descrição </h2>
                        <div> {produto.descricao}</div>

                        <h2> Especificações </h2>
                        <div> {produto.especificacoes} </div>
                       </div>
                </div>  
            </div>
            <Link to='/'>
            <button>Voltar para ver outro produto</button>
            </Link>
        </Container>
    )
}