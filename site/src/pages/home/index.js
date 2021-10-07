import { Container} from "./styled";


import Produto from '../produto'
import { useState } from "react";

export default function Home(){
{/*const [produtos, SetProdutos] = useState([]);



  function Listas(){
      const r =[
        {
            id: 10001,
            imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
            titulo: "PC Gamer",
            preco: "R$ 12.584,00",
            descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
            especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
          }
      ]

      SetProdutos(r);
  }*/}




    return(
       <Container>
            <h1> Boas Compras!!</h1> 
            
            <Produto 
            imagem='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWgWY_NrhSqo_GignFwOuyY6pQwVed5y9zZP22qBWkfCy3WtjkKJ3fWPW75CxJxN0-mu7hQteUfXvAz8HiC0UY3SmtiLoLbndhLcoSCMGKNv0W3l656fA3wQ&usqp=CAE'
            titulo='Pc Gamer'
            preco='3.200'
            />
          

       </Container>
    )
}