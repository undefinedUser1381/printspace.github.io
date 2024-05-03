import { useState,useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Products from "../../components/Products/Products"

export default function Shop() {

   const [displayType,setDisplayType] = useState("row");
   const [products,setProducts] = useState([]);
   // state for default value  
   const [status,setStatus] = useState("default");
  //  state for ordering by choosing items
   const [orderedProducts,setOrderedProducts] = useState([]);
   const [searchPrd,setSearchPrd] = useState("");

   useEffect(() => {
    getProducts(); 
   },[]);

   const getProducts = () => {
    fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  }

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
        <Breadcrumb link="shop" title="فروشگاه"/>
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
                          product.discount > 0 ? ( <Products key={product.id} {...product} />) 
                          :
                          (
                            <>
                            <div className="w-[50%] lg:w-[31%] xl:w-[24%] flex flex-col group gap-5 p-4 cursor-pointer rounded-lg bg-white transition-all duration-200 hover:translate-y-[-1rem] hover:shadow-xl">
                            <div className="relative">
                              <div className="overflow-hidden rounded-lg">
                              <img src={product.src} alt="" />
                              </div>
                              <div className="flex items-center transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible justify-center w-full absolute bottom-3 gap-2 p-2">
                                  <div className="bg-white rounded-[50%] p-2 transition-all duration-200 hover:translate-y-[-0.5rem]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                  </svg>
                                  </div>
                                  <div className="bg-white rounded-[50%] p-2 transition-all duration-200 hover:translate-y-[-0.5rem]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                      </svg>
                                  </div>
                                  <div className="bg-white rounded-[50%] p-2 transition-all duration-200 hover:translate-y-[-0.5rem]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                      </svg>
                                  </div>
                              </div>
                            </div>
                            <div>
                              <p className="font-Samim text-center">{product.name}</p>
                              <div className="flex items-center mt-2 font-Yekan justify-center gap-5">
                                  <span className="text-[#1B6F58]">{product.price} تومان</span>
                              </div>
                            </div>
                            </div>
                            </>
                          )
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
