import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";

export default function MainProduct() {

  const productToFind = useParams();
  const [products] = useFetch("http://localhost:4000/products");

  let findedProduct = products.some(product => product.id == productToFind.ID);

  return (
    <div>
    {
      !findedProduct ? (
         <p>No product</p>   
      ) 
      : 
      (
         <>{products.find(product => product.id == productToFind.ID).name}</>
      )
    }
    </div>
  )
}
