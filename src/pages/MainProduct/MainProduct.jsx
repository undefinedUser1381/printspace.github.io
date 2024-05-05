import { useParams } from "react-router-dom"
import { useState , useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

export default function MainProduct() {
  
  const productToFind = useParams();

  const [openCommentTab,setCommentsTabs] = useState(false);
  const [openDescriptionTab,setDescriptionTab] = useState(false);
  const [showFixedContent,setShowFixedContent] = useState(false);

  useEffect(() => {
       window.addEventListener("scroll",() => {
            if(document.documentElement.scrollTop > 350){
                 setShowFixedContent(true);
            }else{
                 setShowFixedContent(false);
            }
       });  
  },[]);

  const [products] = useFetch("http://localhost:4000/products");

  let findedProduct = products.some(prd => prd.id === productToFind.ID);

   const showComments = () => {
       setCommentsTabs(true)
       setDescriptionTab(false)
   }
   const showDescriptions = () => {
       setCommentsTabs(false)
       setDescriptionTab(true)
   }

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
            <div className="mx-auto h-full w-[21rem] md:w-[40%] xl:w-[25%]">
             <Breadcrumb>
              <Link to={"/"}>خانه</Link>
              <div>----</div>
              <Link to={"/Shop"}>فروشگاه</Link>
              <div>----</div>
              <Link className="font-bold">{products.find(prd => prd.id == productToFind.ID).name}</Link>
            </Breadcrumb> 
           </div>  
        </div>
       </div>
       {/* Product Details */}
       <div className="mt-20">
         <div className="container">
           <div className="flex flex-col lg:flex-row items-start justify-center gap-5 p-5 border-b border-[#eee]">
             <div className="w-full lg:w-[40%] h-[30rem] cursor-pointer">
               <div className="w-full h-full overflow-hidden rounded-xl">
                 <img className="w-full h-full object-cover" src="/images/single-product-8-1.jpg" alt="" />
               </div>
             </div>
             <div className="w-full lg:w-[45%]">
                <div className="flex flex-col justify-between gap-10">
                  <div className="flex justify-start gap-3 items-center *:text-[1.1rem] *:font-Yekan">
                     <p className="font-Samim font-bold">قیمت : </p>
                     <div className="flex items-center gap-5 justify-between">
                      <p className="text-[#1B6F58]">28,000 تومان</p>
                      <p className="text-[#777] line-through">33,000 تومان</p>
                     </div>
                  </div>
                  <p className="font-bold font-Samim text-[1.3rem]">نام محصول</p>
                  <p className="font-Samim text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                  <div className="w-full flex items-center justify-between">
                     <div className="bg-[#F8F8F8] flex items-center *:text-[1.2rem] *:font-Samim p-2 justify-between w-[30%]">
                        <div className="cursor-pointer">+</div>
                        <div><span className="font-Yekan">0</span></div>
                        <div className="cursor-pointer">-</div>
                     </div>
                     <div className="w-[65%]"><button className="w-full p-3 rounded-lg text-white font-Samim bg-[#1B6F58]">افزودن به سبد خرید</button></div>
                  </div>
                  <p className="font-Samim text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                  <div className="flex w-full lg:w-[50%] items-center *:font-Samim justify-between">
                        <p className="text-[0.9rem]">برچسب ها :</p>
                        <p className="text-[#777]">هودی - لباس - محصولات - با کیفیت</p>   
                  </div>
                </div>
             </div>
             <div></div>
           </div>
           {/* Tabs */}
           <div className="mt-20 w-full h-9">
               <ul className="flex items-center border-b-2 border-[#eee] *:text-[#777] *:text-[1.2rem] *:font-Samim justify-center gap-10">
                 <li onClick={() => showDescriptions()} className={`${openDescriptionTab ? "border-b-2 border-[#777]" : ""} cursor-pointer pb-4`}>توضیحات</li>
                 <li onClick={() => showComments()} className={`${openCommentTab ? "border-b-2 border-[#777]" : ""} cursor-pointer pb-4`}>نظرات</li>
               </ul>
           </div>
           {/* Tabs Content */}
           <div className="flex items-center justify-center flex-col mt-10">
               {/* Description */}
               <div className={`${openDescriptionTab ? "flex" : "hidden"} flex-col gap-5`}>
                  <div className="*:font-Samim pr-12 pl-12">
                      <h4 className="font-bold mb-5">ساختن یه فلان</h4>
                      <p className="text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  طراحان خلاقی  فارسی ایجاد کرد.</p>
                  </div>
                  <div className="w-full mt-10 flex items-center justify-center h-[30rem]">
                     <img className="w-[40%] h-full object-cover" src="/images/single-product-8-1.jpg" alt="" />
                  </div>
                  <div className="*:font-Samim pr-12 mt-10 pl-12">
                      <p className="text-[#777] mb-5">محصول سیار یتبت چگونه لورم تیپسوم نمدونم اره خودشه این محصول بی نظیر</p>
                      <h4 className="font-bold mb-5">یه تایتل دیگه</h4>
                      <p className="text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  طراحان خلاقی  فارسی ایجاد اره اینجوری ایمجوری شد که این کثدبندذ محثول با ریکت درست شد ولی من نتونستم درست کنم در حد لالیگا مهندسی ساختمانی کرد.</p>
                      <p className="text-[#777] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  طراحان خلاقی  فارسی ایجاد اره اینجوری ایمجوری شد که این کثدبندذ محثول با ریکت درست شد ولی من نتونستم درست کنم در حد لالیگا مهندسی ساختمانی کرد.</p>
                  </div>
               </div>
              {/* Comments */}
              <div className={`${openCommentTab ? "flex" : "hidden"}`}>

              </div>
           </div>
           {/* Fixed Content */}
           <div className={`fixed hidden transition-all duration-200 ${showFixedContent ? "opacity-100 bottom-0" : "opacity-0 bottom-[-5rem]"} h-[5rem] md:flex bg-white items-center justify-center pl-10 pr-10 md:pl-36 md:pr-36 pt-10 pb-10 bottom-0 left-0 right-0 shadow-xl`}>
              <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-center gap-4">
                      <div className="w-22 h-16"><img className="w-full h-full" src="/images/single-product-8-1.jpg" alt="" /></div>
                       <div className="flex flex-col gap-1">
                         <div className="flex items-center *:font-Samim justify-start gap-1">
                           <p>شما در حال مشاهده هستید : </p>
                           <p className="font-bold">نام محصول</p>
                         </div>
                         <div className="flex items-center justify-start gap-1 *:font-Yekan">
                            <p className="text-[#1B6F58]">تومان 26,000</p>
                            <p className="line-through text-[#777]">32,000 تومان</p>
                         </div>
                       </div>
                  </div>
                  <button className="bg-[#1B6F58] text-white font-Samim rounded-md p-4 md:w-[25%] xl:w-[13%] text-center ">مشاهده</button>
              </div>
           </div>
         </div>
       </div>
     </section>
       
      )
    }
    </div>
  )
}
