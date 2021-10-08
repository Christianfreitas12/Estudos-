
import { useState } from 'react'
import {Container} from './styled'
import {Link, useHistory} from 'react-router-dom'
import Cookie from 'js-cookie'







export default function Detalhes(props){
const [produto, SetProduto] = useState(props.location.state); 
const navigation = useHistory();


function comprar(){
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho != undefined ? JSON.parse(carrinho) : [];

    if (carrinho.some(item => item.id == produto.id) ==false)
        carrinho.push({...produto, qtd: 1});

    Cookie.set('carrinho', JSON.stringify(carrinho));
    
    navigation.push('/carrinho')
}






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
                       <button onClick={comprar}>Comprar</button>
                </div>  
            </div>
            <Link to='/'>
            <button>Voltar para ver outro produto</button>
            </Link>
        </Container>
    )
}