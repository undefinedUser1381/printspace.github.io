import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

export default function MainProduct() {

  const productToFind = useParams();
  const [products] = useFetch("http://localhost:4000/products");

  let findedProduct = products.some(product => product.id == productToFind.ID);

  return (
    <div>
     {
      !findedProduct ? (
        <div className="container">
        <div className="bg-[#ff7979] w-full p-3 mt-10">
          <p className="font-Samim text-white text-center">چنین محصولی وجود ندارد !!</p>
        </div>  
        </div>
      ) 
      : 
      (
       <section>
        <div className="mt-10">
          <div className="bg-[#F5F5F5] h-auto flex flex-col justify-center items-center">
            <div className="mx-auto h-full w-[20%]">
             <Breadcrumb>
              <Link to={"/"}>خانه</Link>
              <div>----</div>
              <Link to={"/Shop"}>فروشگاه</Link>
              <div>----</div>
              <Link className="font-bold">محصول</Link>
            </Breadcrumb> 
           </div>  
        </div>
       </div>
       {/* Product Details */}
       <div className="mt-20">
         <div className="container">
           <div className="flex items-center justify-center">
            {products.find(product => product.id == productToFind.ID).name}
            <span className="font-Yekan">{products.find(product => product.id == productToFind.ID).price}</span>
           </div>
           <div>
            <img className="w-32 h-32" src={products.find(product => product.id == productToFind.ID).src} alt="" />
           </div>
         </div>
       </div>
     </section>
       
      )
    }
    </div>
  )
}
