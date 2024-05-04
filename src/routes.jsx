import Basket from "./pages/basket/Basket.jsx"
import MainProduct from "./pages/MainProduct/MainProduct.jsx"
import Panel from "./pages/panel/Panel.jsx"
import Home from "./pages/home/Home.jsx"
import Shop from "./pages/shop/Shop.jsx"

let routes = 
[
     {path:"/" , element : <Home/>},
     {path:"/basket" , element : <Basket/>},
     {path:"/shop" , element : <Shop/>},
     {path:"/MainProduct/:ID" , element : <MainProduct/>},
     {path:"/panel" , element : <Panel/>},
]

export default routes;