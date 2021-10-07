
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
                    <div className='titulo'>{produto.titulo} </div>
                    <div className='preco'>{produto.preco} </div>
                    <div className='desc'>
                        <div className='descricao'> Descrição: </div>
                        <div> {produto.descricao}</div>

                        <div className='esp'> Especificações: </div>
                        <div> {produto.especificacoes} </div>
                       </div>
                       <button>Comprar</button>
                </div>  
            </div>
            <Link to='/'>
            <button>Voltar para ver outro produto</button>
            </Link>
        </Container>
    )
}