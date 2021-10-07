import styled from 'styled-components'





export const Container =styled.div`

padding: 2em;


.info{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 3em;
}

img{
    height: 24em;
}

.info-pro{
    padding-left: 1em;
}

.titulo{
    font-size: 1.7em;

    padding: 8px 0px 10px 0px;
}

.preco{
    font-size: 1.2em;
}

.descricao{
    padding: 10px 0px 5px 0px;
    font-size: 1.3em;
    font-weight: 500;
}

.esp{
    padding: 10px 0px 5px 0px;
    font-size: 1.3em;
    font-weight: 500;   
}

button{
    background-color: #0000ff;
    border-radius: 10px;
    color: #ffffff;
    border: none;

    font-size: 15px;
    cursor: pointer;    
    
    margin-top: 2em;
    padding: .5em 1em .5em 1em;
}
`