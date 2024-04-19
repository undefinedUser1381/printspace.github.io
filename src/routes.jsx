import Basket from "./pages/basket/Basket.jsx"
import Cart from "./pages/cart/Cart.jsx"
import Panel from "./pages/panel/Panel.jsx"
import Home from "./pages/home/Home.jsx"

let routes = 
[
     {path:"/" , element : <Home/>},
     {path:"/basket" , element : <Basket/>},
     {path:"/cart" , element : <Cart/>},
     {path:"/panel" , element : <Panel/>},
]

export default routes;