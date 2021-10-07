import {Switch, BrowserRouter, Route} from 'react-router-dom'

//import Box from './pages/produto/index'
import Home from './pages/home'
//import Carrinho from './pages/carrinho/contador'
import Detalhe from './pages/detalheproduto'


export default function Rotas(){
    return(
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/detalhe" exact={true} component={Detalhe} />
        </Switch>
     </BrowserRouter>
    )
}