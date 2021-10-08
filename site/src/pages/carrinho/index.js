import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoitem'


export default function Carrinho(){
    const[produto, SetProduto] = useState([])

    useEffect(carregarCarrinho, [])

    function carregarCarrinho(){
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
               ? JSON.parse(carrinho) 
               : [];

        SetProduto(carrinho);
    }

    function alterarProduto(id, qtd){
        console.log(qtd)
        let produtoAlterado = produto.filter(item => item.id == id)[0];
        produtoAlterado.qtd =qtd;

        Cookie.set('carrinho', JSON.stringify(produto))
    }

    function removerProduto(id){
        let carrinho = produto.filter(item => item.id != id);

        Cookie.set('carrinho', JSON.stringify(carrinho));

        SetProduto([...carrinho])
    }

    return(
        <Container>
            <h1>Carrinho </h1>

            <Link to='/'>Voltar </Link>

            <div className='itens'>
                {produto.map(item =>
                <CarrinhoItem key={item.id}
                  info={item}
                  onUpdate={alterarProduto}
                  onRemove={removerProduto} />
                    )}
            </div>
        </Container>
    )
}