import {Switch, BrowserRouter, Route} from 'react-router-dom'

//import Box from './pages/produto/index'
import Home from './pages/home'
//import Carrinho from './pages/carrinho/contador'
import Detalhe from './pages/detalheproduto'
import Carrinho from './pages/carrinho/index'


export default function Rotas(){
    return(
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/detalhe" exact={true} component={Detalhe}/>
            <Route path="/carrinho" exact={true} component={Carrinho}/>
        </Switch>
     </BrowserRouter>
    )
}