import { useParams } from "react-router-dom"
import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function MainProduct() {
  
  const productToFind = useParams();

  const [openCommentTab,setCommentsTabs] = useState(false);
  const [openDescriptionTab,setDescriptionTab] = useState(true);
  const [showFixedContent,setShowFixedContent] = useState(false);
  const [count,setCount] = useState(0);

  const [products] = useFetch(`http://localhost:4000/products/${productToFind.ID}`)

  const priceWithDiscount = (products.price - (products.price * products.discount / 100)).toLocaleString();

   window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 350){
         setShowFixedContent(true);
    }else{
         setShowFixedContent(false);
    }
}); 

   // For adding a cart to basket 
   const addToBasket = (productID) => {
        console.log(productID);
   }

   const showComments = () => {
       setCommentsTabs(true)
       setDescriptionTab(false)
   }
   const showDescriptions = () => {
       setCommentsTabs(false)
       setDescriptionTab(true)
   }

  return (
    <>
       <section>
        <div className="mt-10">
          <div className="bg-[#F5F5F5] h-auto flex flex-col justify-center items-center">
            <div className="mx-auto h-full w-[21rem] md:w-[40%] xl:w-[25%]">
             <Breadcrumb>
              <Link to={"/"}>خانه</Link>
              <div>----</div>
              <Link to={"/Shop"}>فروشگاه</Link>
              <div>----</div>
              <Link className="font-bold">{products.name}</Link>
            </Breadcrumb> 
           </div>  
        </div>
       </div>
       {/* Product Details */}
       <div className="mt-20">
         <div className="container">
           {/* Details */}
              <div className="flex flex-col lg:flex-row items-start justify-center gap-5 p-5 border-b border-[#eee]">
               {
                products.discount > 0 ? (
              <div className="w-full relative lg:w-[40%] h-[30rem] cursor-pointer">
               <div className="w-full h-full overflow-hidden rounded-xl">
                 <img className="w-full h-full object-cover" src={products.src} alt="" />
               </div>
               <div className="absolute top-4 right-4 rounded-lg bg-[#F09155] p-2">
                  <span className="font-Samim text-[0.9rem] font-bold text-white">فروش ویژه</span>
               </div>
             </div>
                ) : (
              <div className="w-full lg:w-[40%] h-[30rem] cursor-pointer">
               <div className="w-full h-full overflow-hidden rounded-xl">
                 <img className="w-full h-full object-cover" src={products.src} alt="" />
               </div>
             </div>
                )
               }
               <div className="w-full lg:w-[45%]">
                <div className="flex flex-col justify-between gap-10">
                  {
                    products.discount > 0 ? (
                    <div className="flex justify-start gap-3 items-center *:text-[1.1rem] *:font-Yekan">
                      <p className="font-Samim font-bold">قیمت : </p>
                      <div className="flex items-center gap-5 justify-between">
                      <p className="text-[#1B6F58] font-bold">{priceWithDiscount} تومان</p>
                      <p className="text-[#777] line-through">{products.price}</p>
                     </div>
                   </div>
                    ) : (
                     <div className="flex justify-start gap-3 items-center *:text-[1.1rem] *:font-Yekan">
                      <p className="font-Samim font-bold">قیمت : </p>
                      <div className="flex items-center gap-5 justify-between">
                      <p className="text-[#1B6F58] font-Yekan">{products.price} تومان</p>
                     </div>
                    </div>
                    ) 
                  }
                  <p className="font-bold font-Samim text-[1.3rem]">{products.name}</p>
                  <p className="font-Samim text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                  <div className="w-full flex items-center justify-between">
                     <div className="bg-[#F8F8F8] flex items-center *:text-[1.2rem] *:font-Samim p-2 justify-between w-[30%]">
                        <div onClick={() => setCount(prev => prev + 1)} className="cursor-pointer">+</div>
                        <div><span className="font-Yekan">{count}</span></div>
                        <div onClick={() => setCount(prev => prev - 1)} className="cursor-pointer">-</div>
                     </div>
                     <div className="w-[65%]"><button onClick={() => addToBasket(products.id)} className="w-full p-3 rounded-lg text-white font-Samim bg-[#1B6F58]">افزودن به سبد خرید</button></div>
                  </div>
                  <p className="font-Samim text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                  <div className="flex w-full lg:w-[75%] xl:w-[55%] items-center *:font-Samim justify-between">
                        <p className="text-[0.9rem]">برچسب ها :</p>
                        <p className="text-[#777]">هودی - لباس - محصولات - با کیفیت</p>   
                  </div>
                </div>
             </div>
           </div>

           {/* Tabs */}
           <div className="mt-20 w-full h-9">
               <ul className="flex items-center border-b-2 border-[#eee] *:text-[#777] *:text-[1.2rem] *:font-Samim justify-center gap-10">
                 <li onClick={() => showDescriptions()} className={`${openDescriptionTab ? "border-b-2 border-[#777]" : ""} cursor-pointer pb-4`}>توضیحات</li>
                 <li onClick={() => showComments()} className={`${openCommentTab ? "border-b-2 border-[#777]" : ""} cursor-pointer pb-4`}>نظرات</li>
               </ul>
           </div>
           {/* Tabs Content */}
           <div className="flex items-center justify-center mt-10">
               {/* Description */}
               <div className={`${openDescriptionTab ? "flex" : "hidden"} flex-col gap-5`}>
                  <div className="*:font-Samim pr-12 pl-12">
                      <h4 className="font-bold mb-5">ساختن یه فلان</h4>
                      <p className="text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  طراحان خلاقی  فارسی ایجاد کرد.</p>
                  </div>
                  <div className="w-full mt-10 flex items-center justify-center h-[30rem]">
                     <img className="w-full sm:w-[40%] h-full object-cover" src={products.src} alt="" />
                  </div>
                  <div className="*:font-Samim pr-12 mt-10 pl-12">
                      <p className="text-[#777] mb-5 leading-8">محصول سیار یتبت چگونه لورم تیپسوم نمدونم اره خودشه این محصول بی نظیر</p>
                      <h4 className="font-bold mb-5">یه تایتل دیگه</h4>
                      <p className="text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  طراحان خلاقی  فارسی ایجاد اره اینجوری ایمجوری شد که این کثدبندذ محثول با ریکت درست شد ولی من نتونستم درست کنم در حد لالیگا مهندسی ساختمانی کرد.</p>
                      <p className="text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  طراحان خلاقی  فارسی ایجاد اره اینجوری ایمجوری شد که این کثدبندذ محثول با ریکت درست شد ولی من نتونستم درست کنم در حد لالیگا مهندسی ساختمانی کرد.</p>
                  </div>
               </div>
              {/* Comments */}
              <div className={`${openCommentTab ? "flex" : "hidden"} w-full lg:w-[60%]`}>
                  <div className="mt-10 w-[100%] border-b-2 pb-8">
                      <div className="flex flex-col gap-5">
                        <h3 className="font-Yekan font-bold text-[1.2rem]">1 دیدگاه برای محصول</h3>
                        <div className="border-dotted border-[3px] flex items-center gap-3 mt-2 shadow-lg p-3 justify-start">
                          <div className="w-16 overflow-hidden rounded-[50%] h-16"><img className="w-full h-full" src="/images/user.png" alt="" /></div>
                          <div className="flex flex-col gap-3">
                             <p className="font-Samim">elmira</p>
                             <p className="font-Samim text-[#777]">عالی بود</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 flex *:font-Samim flex-col">
                          <h2 className="mb-5">دیدگاه خود را بنویسید</h2>
                          <p className="text-[#777] text-[0.9rem]">نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند <span className="text-red-600">*</span></p>
                          <div className="flex items-center justify-start mt-5 gap-3">
                            <p className="text-[#777] text-[0.9rem]">امتیاز شما <span className="text-red-600">*</span></p>
                            <div className="flex items-center justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-yellow-300 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-yellow-300 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-yellow-300 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-yellow-300 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-yellow-300 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                            </div>
                          </div>
                          <form action="" className="mt-5">
                           <div className="flex flex-col gap-5">
                              <label className="text-[#777] text-[0.9rem]" htmlFor="">دیدگاه شما <span className="text-red-600">*</span></label>
                              <textarea name="" placeholder="دیدگاه شما ..." className="bg-[#F5F5F5] text-[0.9rem] font-Samim border-2 rounded-sm resize-none w-full outline-none p-5 transition focus:border-[#1B6F58]" id="" rows="10"></textarea>
                           </div>
                           <div className="flex items-center mt-5 *:font-Samim gap-5 justify-center">
                               <div className="flex flex-col w-[50%] gap-3"><label htmlFor="">نام <span className="text-red-600">*</span></label><input className="p-2 rounded-sm outline-none border text-[0.8rem] focus:border-[#1B6F58] bg-[#F5F5F5] transition" type="text" /></div>
                               <div className="flex flex-col w-[50%] gap-3"><label htmlFor="">ایمیل <span className="text-red-600">*</span></label><input className="p-2 rounded-sm outline-none border text-[0.8rem] focus:border-[#1B6F58] bg-[#F5F5F5] transition" type="text" /></div>
                           </div>
                           <div className="flex items-center justify-start w-full sm:w-[20%] mt-10">
                               <button className="font-Samim w-full bg-[#1B6F58] p-3 text-white rounded-md">ثبت نظر</button>
                           </div>
                          </form> 
                      </div>
                  </div>
              </div>
           </div>
           {/* Fixed Content */}
           <div className={`fixed hidden transition-all duration-200 ${showFixedContent ? "opacity-100 bottom-0" : "opacity-0 bottom-[-5rem]"} h-[5rem] md:flex bg-white items-center justify-center pl-10 pr-10 md:pl-36 md:pr-36 pt-10 pb-10 bottom-0 left-0 right-0 shadow-xl`}>
              <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-center gap-4">
                      <div className="w-22 h-16"><img className="w-full h-full" src={products.src} alt="" /></div>
                       <div className="flex flex-col gap-1">
                         <div className="flex items-center *:font-Samim justify-start gap-1">
                           <p>شما در حال مشاهده هستید : </p>
                           <p className="font-bold">{products.name}</p>
                         </div>
                         {
                          products.discount > 0 ? (  <div className="flex items-center justify-start gap-1 *:font-Yekan">
                            <p className="text-[#1B6F58] font-bold">تومان {priceWithDiscount}</p>
                            <p className="line-through text-[#777]">{products.price}</p>
                         </div>) :
                          (<div className="flex items-center justify-start gap-1 *:font-Yekan">
                            <p className="font-bold text-[#1B6F58]">{products.price} تومان</p>
                         </div>)
                         }
                       </div>
                  </div>
                  <button className="bg-[#1B6F58] text-white font-Samim rounded-md p-4 md:w-[25%] xl:w-[13%] text-center ">مشاهده</button>
              </div>
           </div>
         </div>
       </div>
     </section>
    </>
  )
}
