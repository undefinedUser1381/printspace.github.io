import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Topbar from "./components/topbar/Topbar"
import Footer from "./components/footer/Footer"


export default function App() {

  const allRoutes = useRoutes(routes)

  return (
    <> 
          <Topbar/>
          <div>{allRoutes}</div>
          <Footer/>
    </>
  )
}
