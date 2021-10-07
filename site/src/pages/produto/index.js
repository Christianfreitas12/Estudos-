import { Container } from "./styled";
import { Link } from 'react-router-dom'




export default function BoxProduto(props){
    return(
     <Container>
       <img className='img-produto' src={props.info.imagem} />
       <div className='titulo'>{props.info.titulo}</div>
       <div className='preco'> {props.info.preco}</div>
       
       <Link to={{
         pathname:'/detalhe',
         state: props.info
       }}>
       <button>Ver Detalhes</button>
       </Link>
     </Container>
    )
}