import { Container} from "./styled";


import Produto from '../produto'
import { useState } from "react";

export default function Home(){
const [produtos, SetProdutos] = useState([]);



  function Listar(){
      const r =[
        {
            id: 10001,
            imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
            titulo: "PC Gamer",
            preco: "R$ 12.584,00",
            descricao: "Esse PC pode trazer para você as melhores sensações que você ira sentir!!",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          },
          {
            id: 10001,
            imagem: "https://http2.mlstatic.com/D_NQ_NP_708113-MLB47059353406_082021-O.webp",
            titulo: "Monitor Gamer Curvo  ",
            preco: "R$ 10.184,00",
            descricao: "Esse Monitor fara todo a difença na sua experiencia",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          },
          {
            id: 10001,
            imagem: "https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/1A/84/dc848199-0553-4de6-8b5e-62d0803c9348.jpg.webp",
            titulo: "Teclado Gamer",
            preco: "R$ 415.15",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          },
          {
            id: 10001,
            imagem: "https://images-na.ssl-images-amazon.com/images/I/51S6IQ2lGwL.__AC_SX300_SY300_QL70_ML2_.jpg",
            titulo: "Razer Mouse",
            preco: "R$ 209.99",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          },
          {
            id: 10001,
            imagem: "https://a-static.mlcdn.com.br/618x463/cadeira-gamer-reclinavel-strike-healer-tm-azul-preto-travel-max/devintex/20133/45510bea357c275669690c709c596932.jpg",
            titulo: "Cadeira Gamer",
            preco: "R$ 710.10",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          },
          {
            id: 10001,
            imagem: "https://images.tcdn.com.br/img/img_prod/709481/fone_ouvido_headset_gamer_microfone_led_p2_usb_adaptador_1533_1_2265657b58c372e36ee41f2d870c1c57.jpg",
            titulo: "Fone de Ouvido Gamer",
            preco: "R$ 109.10",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          }
      ]

      SetProdutos(r);
  }




    return(
       <Container>
            <h1> Boas Compras!!</h1> 
            <button className='botao' onClick={Listar}>Ver Produtos Cadastrados</button> 
        <div className='conteudo-box'>
            {produtos.map((item) => (
             <Produto info={item}/>

            ))}
          
        </div>
       </Container>
    )
}