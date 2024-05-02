import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Carts from "../../components/Carts/Carts";
import Features from "../../components/Features/Features";
import Steps from "../../components/Steps/Steps";
import Comment from "../../components/Comment/Comment";
import Products from '../../components/Products/Products';
import Service from '../../components/Services/Service';

export default function Home() {

  const [comments,setComments] = useState([]);
  const [products,setProducts] = useState([]);

  useEffect(() => {
    getComments();
    getProducts();
  },[]);

  const getComments = () => {
     fetch("http://localhost:4000/comments")
     .then(res => res.json())
     .then(data => {
       setComments(data)
     })
  };

  const getProducts = () => {
    fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  }

  return (
    
    <main>
      {/* Main section */}
      <section className="bg-[#F7F6F1] mt-10">
        <div className="container">
          <div className="w-full flex gap-16 flex-col-reverse lg:flex-row items-center justify-between h-auto pt-16 pb-16">
             <div className="w-[100%] lg:w-[45%]">
              <div className="w-full lg:w-[100%] flex flex-col gap-8">
              <p className="font-Samim">بسته بندی سفارشی 🔥</p>
                <h2 className="font-Samim text-[2rem] sm:text-[2.8rem] font-bold">چاپ روی تمام محصولات</h2>
                <p className="font-Samim text-[1.2rem]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <ul className="flex flex-col gap-3 *:font-Samim *:text-[1.1rem]">
                  <li>تامین کنندگان تایین شده</li>
                  <li>صد در صد تولید ایرانی</li>
                  <li>تحویل سه روز</li>
                </ul>
                <div className="flex items-center w-[100%] gap-10 justify-between sm:justify-start">
                  <a href="" className="font-Samim bg-[#1B6F58] p-4 text-white rounded-md w-40 text-center">طراحی سفارشی</a>
                  <a href="" className="font-Samim w-40 p-4">چگونگی کارما</a>
                </div>
              </div>
             </div>
             <div className="w-[100%] lg:w-[45%]">
               <div className="">
                <img src="/images/banner-1-1-2.webp" alt="" className="w-full h-full"/>
               </div>
             </div>
          </div>
        </div>
      </section>
       
       {/* Carts */}
      <section className="mt-20">
        <div className="container">
          <div className="flex flex-col gap-5">
            <h2 className="font-Samim text-[2rem] sm:text-[2.5rem] text-center md:text-right">محدوده محصولات فروشگاه</h2>
            <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
              <p className="font-Samim text-[1.1rem] text-center md:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              <a className="font-Samim w-[70%] sm:w-[80%] md:w-[20%] xl:w-[15%] p-3 border text-center transition-all duration-200 hover:bg-[#1B6F58] hover:text-white rounded-md" href="">بررسی کاتالوگ</a>
            </div>
            <div className="flex flex-col gap-10 sm:flex-wrap sm:flex-row lg:flex-nowrap items-center justify-between mt-10">
                    <Carts title="جعبه ای" img="/images/banner-1-2.jpg"/>
                    <Carts title="استیکر" img="/images/banner-1-3.jpg"/>
                    <Carts title="کیف" img="/images/banner-1-5.jpg"/>
                    <Carts title="چاپ روی کیسه" img="/images/banner-1-3.jpg"/>
            </div>
          </div>
        </div>
      </section>

       {/* Steps */}
      <section className="mt-20">
        <div className="container">
          <div className="bg-[#F7F6F1] w-full h-auto rounded-xl p-5 sm:p-10">
            <div className="flex flex-col gap-5">
                 <h2 className="font-Samim text-[2.2rem]">چگونگی کارما</h2>
                 <div className="flex flex-col-reverse lg:flex-row mt-5 items-center justify-between w-full gap-10">
                 <div className="flex flex-col w-full lg:w-[45%] gap-9">
                   <Steps/>
                   <Steps/>
                   <Steps/>
                   <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-start gap-5 mt-8">
                     <a href="" className="w-[75%] sm:w-[45%] text-center font-Samim bg-black text-white p-4 rounded-lg transition-all duration-200 hover:bg-[#1B6F58]">درخواست طراحی</a>
                     <a href="" className="w-[75%] sm:w-[45%] text-center font-Samim bg-transparent text-black p-4 rounded-xl">سایر موارد</a>
                   </div>
                 </div>
                   <div className="w-full lg:w-[45%]">
                    <div className="w-full h-full">
                      <img src="images/banner-1-steps.png" className="w-full h-full" alt="" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* Features */}
      <section className="mt-20">
         <div className="container">
          <div className="flex flex-col">
            <h2 className="font-Samim text-[1.5rem] sm:text-[2.3rem] mb-5">خدماتی که نیازهای بسته بندی شما را برآورده می کند</h2>
            <p className="font-Samim text-[1.1rem]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:flex-wrap xl:flex-nowrap items-center justify-between w-full mt-16">
             <Features img="images/img-icon-factory.png" title="طراحی بسته بندی" />
             <Features img="images/img-icon-package.png" title="طراحی لوگو" />
             <Features img="images/img-icon-startup.png" title="نمونه برداری" />
             <Features img="images/img-icon-cube.png" title="تولید مدیریت شده" />
          </div>
         </div>
      </section>

       {/* Comments */}
       <section className="mt-20 bg-[#F8F8F8] h-auto pb-16">
          <div className="pt-16 flex flex-col gap-5">
           <h2 className="font-Samim text-[1.4rem] sm:text-[2rem] text-center">ببینید مشتریان ما چه می گویند</h2>
           <p className="font-Samim leading-10 text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه</p>
          </div>
          <div className='mt-20'>
            <Swiper slidesPerView={1} spaceBetween={20} loop={true}
             breakpoints={{
                    640: {
                      width: 640,
                      slidesPerView: 2,
                    },
                    768: {
                      width: 800,
                      slidesPerView: 2,
                    },
                    1024: {
                      width: 1024,
                      slidesPerView: 3,
                    },
                    1200:{
                      width: 1500,
                      slidesPerView: 4,
                    }
                  }}
                  >
              {
                comments.map(comment => (
                  <SwiperSlide key={comment.id}><Comment img={comment.src} name={comment.title} job={comment.job}/></SwiperSlide>
                ))
              }
             </Swiper>
          </div> 
       </section>

       {/* Products */}
       <section className='mt-20 bg-white h-auto'>
            <div className='container'>
             <div className='w-full'>
              <div className='w-full flex flex-col md:flex-row gap-8 items-center justify-between'>
               <p className='font-Samim text-[1.3rem] lg:text-[2.3rem]'>جدید ترین ها <span className='text-[#9B9B9B99]'>پرفروش ترین ویژه ها</span></p>
               <a href="" className='font-Samim text-center border transition-all duration-200 p-3 w-[11rem] hover:text-white hover:bg-[#1B6F58]'>نمایش همه محصولات</a>
              </div>
              <div className='flex items-center mt-16 flex-wrap justify-between gap-0 lg:gap-5 xl:gap-3 w-full'>
              {
                products.map(product => (
                  product.discount > 0 ? (
                    <Products key={product.id} {...product} /> 
                  ) : (
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
                ))
              }
              </div>
             </div>
            </div>   
       </section>

       {/* Services */}
       <section className='mt-28 h-auto'>
          <div className='container'>
           <div className='flex flex-col sm:flex-wrap sm:flex-row xl:flex-nowrap gap-14 items-center justify-between'>
              <Service title="ارسال رایگان" desc="با خرید بالای فلان تومن" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 stroke-[#1B6F58]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>} />
              <Service title="پشتیبانی" desc="تیم پشتیبانی شبانه روزی" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 stroke-[#1B6F58]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>} />
              <Service title="طراحی فوق العاده" desc="طراحی به صرفه" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 stroke-[#1B6F58]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>} />
              <Service title="پرداخت" desc="با تمام درگاه ها" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 stroke-[#1B6F58]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>} />
           </div>
          </div>
       </section>
   
    </main>
  )
}
