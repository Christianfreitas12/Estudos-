import {Switch, BrowserRouter, Route} from 'react-router-dom'

//import Box from './pages/produto/index'
import Home from './pages/home'

export default function Rotas(){
    return(
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
        </Switch>
     </BrowserRouter>
    )
}