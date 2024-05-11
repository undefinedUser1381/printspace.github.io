import Basket from "./pages/basket/Basket.jsx"
import MainProduct from "./pages/MainProduct/MainProduct.jsx"
import Panel from "./pages/panel/Panel.jsx"
import Home from "./pages/home/Home.jsx"
import Shop from "./pages/shop/Shop.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import Register from "./pages/register/Register.jsx"

let routes = 
[
     {path:"/" , element : <Home/>},
     {path:"/Basket" , element : <Basket/>},
     {path:"/Shop" , element : <Shop/>},
     {path:"/MainProduct/:ID" , element : <MainProduct/>},
     {path:"/Notfound" , element : <NotFound/>},
     {path:"/Panel" , element : <Panel/>},
     {path:"/Register" , element : <Register/>},
]

export default routes;