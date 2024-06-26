import { useState,useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import ProductHasDiscount from "../../components/ProductHasDiscount/ProductHasDiscount";
import ProductWithoutDiscount from "../../components/ProductWithoutDiscount/ProductWithoutDiscount";

export default function Shop() {

   const [displayType,setDisplayType] = useState("row");
  //  use cutom hook
   const [products] = useFetch("http://localhost:4000/products");
   // state for default value  
   const [status,setStatus] = useState("default");
  //  state for ordering by choosing items
   const [orderedProducts,setOrderedProducts] = useState([]);
   const [searchPrd,setSearchPrd] = useState("");

  // Update status with choosing options
  useEffect(() => {
    switch(status){
      case "money" : {
         let orderProducts = products.filter(product => product.price !== 0)
         setOrderedProducts(orderProducts)
         break;
      }
      case "free" : {
        let freeProducts = products.filter(product => product.price === 0)
        setOrderedProducts(freeProducts)
        break;
      }
      case "expensive" : {
        setOrderedProducts(products.sort((a,b) => a.price - b.price).reverse())
        break;
      }
      case "cheap" : {
        setOrderedProducts(products.sort((a,b) => b.price - a.price).reverse())
        break;
      }
      case "discount" : {
        let discountProducts = products.filter(product => product.discount > 0)
        setOrderedProducts(discountProducts)
        break;
      }
      default:{
        setOrderedProducts(products);
      }
    }
  },[status,products])
  
  // Search products
  const searchProducts = (e) => {
    setSearchPrd(e.target.value);
    const filteredProducts = products.filter(product => product.name.includes(e.target.value));
    setOrderedProducts(filteredProducts);
  }

  return (
    <>
       <div className="bg-[#F5F5F5] flex flex-col h-[15rem] mt-10 p-10">
         <h2 className="text-center text-[2rem] font-bold mt-5">فروشگاه</h2>
         <div className="w-[15%] mx-auto">
          <Breadcrumb>
            <Link to={"/"}>خانه</Link>
            <div>----</div>
            <Link className="font-bold" to={"/Shop"}>فروشگاه</Link>
          </Breadcrumb>   
         </div>
        </div>
         <section className="mt-20">
          <div className="container">
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between w-full shadow-lg p-3">
             <div className="w-full lg:w-[25%]">
              <input type="text" onChange={(e) => searchProducts(e)} value={searchPrd} className="border outline-none font-Samim transition-all w-full duration-200 focus:border-black p-2 bg-[#F8F8F8]" placeholder="جستجوی محصولات..."/>
              </div>
              <div className="w-full gap-4 lg:gap-0 sm:w-full lg:w-[70%] xl:w-[50%] flex flex-col lg:flex-row items-center justify-between">
                <select onChange={(e) => setStatus(e.target.value)} className="font-Samim rounded-lg transition-all duration-200 cursor-pointer outline-none focus:outline-black bg-[#F8F8F8] p-2 w-full sm:w-[100%] lg:w-[55%]" name="" id="">
                  <option value="default">پیش فرض</option>
                  <option value="expensive">گران ترین</option>
                  <option value="cheap">ارزان ترین</option>
                  <option value="money">پولی</option>
                  <option value="free">رایگان</option>
                  <option value="discount">با تخفیف</option>
                </select>
                <div className="w-full lg:w-[40%] flex items-center justify-between">
                    <p className="font-Samim">مشاهده</p>
                    <div className="w-[60%] flex items-center justify-between">
                    <div onClick={() => setDisplayType("column")} className={`${displayType === "column" ? "bg-[#e8d3d3]" : ""} w-[50%] p-1 flex items-center justify-center cursor-pointer`}>
                    <p className="font-Samim">لیست</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </div>
                    <div onClick={() => setDisplayType("row")} className={`${displayType === "row" ? "bg-[#e8d3d3]" : ""} w-[50%] p-1 flex items-center justify-center cursor-pointer`}>
                     <p className="font-Samim">ستونی</p>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                     </svg>
                  </div>
                    </div>
                </div>
             </div>
            </div>
            <div className={`${displayType === "row" ? "row-type" : ""} mt-10`}>
                       {
                        orderedProducts.length ?
                        ( 
                          orderedProducts.map(product => (
                          product.discount > 0 ?
                          ( <ProductHasDiscount key={product.id} {...product} />) 
                          :
                          (<><ProductWithoutDiscount key={product.id} {...product} /></>)
                        ))) 
                         : 
                        (<>
                          <div className="bg-[#ff7979] w-full p-3">
                             <p className="font-Samim text-white">چنین محصولی وجود ندارد !!</p>
                          </div>
                        </>)
                      }
            </div>
          </div>
        </section>
    </>
  )
}
