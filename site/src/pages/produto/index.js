import { Container } from "./styled";



export default function BoxProduto(props){
    return(
     <Container>
       <img className='img-produto' src={props.imagem} />
       <div className='titulo'>{props.titulo}</div>
       <div className='preco'> {props.preco}</div>
       
       <button>Ver Detalhes</button>
     </Container>
    )
}