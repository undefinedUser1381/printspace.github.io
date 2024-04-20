import { useState , useEffect} from "react"
import SideBarCart from "./SideBarCart/SideBarCart";

export default function Topbar() {

  const [mobileMenu , setMobileMenu] = useState(false);
  const [sideBarBasket , setSideBarBasket] = useState(false);
  const [scrollEffect,setScrollEffect] = useState(false);

  useEffect(() => {
     window.addEventListener("scroll",() => {
       if(document.documentElement.scrollTop > 100){
           setScrollEffect(true);
       }else{
           setScrollEffect(false);
       }
     })
  },[]);

  return (
    <header className="">
        {/* Topbar */}
       <section>
         <div className="container">
            <div className="w-full">
              <div className="w-full py-4 md:py-8 flex items-center justify-between">
                <div className="w-[40%] md:w-[25%] xl:w-[15%] h-8">
                  <img src="/images/logo.png" className="w-full h-full" alt="" />
                </div>
                <div className="hidden lg:flex items-center justify-center w-[45%] md:w-[55%] xl:w-[65%]">
                   <input type="text" placeholder="دنبال چی میگردی؟...." className="bg-[#F8F8F8] font-Samim p-3 rounded-md w-[65%]"/>
                    <button className="font-Samim bg-black text-white transition-all duration-200 p-3 rounded-md w-[25%]">جستجو</button>
                </div>
                <div className="flex items-center justify-end gap-2 md:gap-5 w-[40%] md:w-[65%] xl:w-[45%]">
                    <div className="hidden md:flex items-center gap-4 justify-center">
                        <div className="bg-[#F5F5F5] p-3 rounded-[50%]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                         </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="font-Yekan">شماره شرکت : 45353-021</p>
                          <p className="font-Samim text-[#BFBFBF] text-[0.9rem]">پشتیبانی شبانه روزی</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                     </svg>
                    </div>
                    <div className="bg-[#F5F5F5] p-3 rounded-[50%] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </div>
                    <div onClick={() => setSideBarBasket(prev => !prev)} className="bg-[#F5F5F5] p-3 rounded-[50%] relative cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div className="bg-[#1B6F58] w-5 rounded-full h-5 flex items-center justify-center absolute bottom-0 right-0">
                        <span className="font-Yekan text-white">0</span>
                    </div>
                    </div>
                </div>
              </div>
            </div>
         </div>
       </section>

        {/* Navbar */}
       <section className={`transition-all duration-200 ${scrollEffect ? "scroll-effect mt-0" : "mt-5"}`}>
         <div className="container">
           <div className="w-full">
            <div className="w-full relative flex items-center justify-between">
               <div onClick={() => setMobileMenu(prev => !prev)} className="p-2 flex lg:hidden rounded-sm bg-[#F2F2F2] w-10 h-10 cursor-pointer">
                {mobileMenu ? 
                ( 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                )
                 : 
                 (               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                )
                }
               </div>
                <nav className="w-[45%] hidden lg:flex lg:w-[60%] xl:w-[50%]">
                  <ul className="*:font-Samim w-full gap-2 *:text-[1.1rem] flex items-center justify-between">
                    <li className="text-[#1b6F58]">صفحه اصلی</li>
                    <li className="flex items-center justify-between gap-2">لندینگ
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between gap-2">فروشگاه
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between gap-2">وبلاگ
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex items-center justify-between gap-2">صفحات
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li>پیگیری سفارشات</li>
                  </ul>
                </nav>
                <div className="flex items-center justify-between w-[70%] md:w-[45%] lg:w-[30%] xl:w-[23%] gap-3 *:font-Samim *:text-[#9B9B9B]">
                  <p>پشتیبانی</p>
                  <p>راهنمایی</p>
                  <p>برترین محصولات</p> 
                </div>
                {/* For mobile */}
                <nav className={`block ${mobileMenu ? "h-[24rem]" : "h-0"} transition-all duration-200 absolute z-10 left-0 shadow-xl mx-auto overflow-hidden right-0 top-14 bg-white w-[100%] lg:hidden`}>
                  <ul className="flex flex-col *:cursor-pointer">
                  <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">لندینگ
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">ارتباط با ما
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">صفحات
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">خدمات
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">تیم ما
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">سوالات متداول
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">جدول قیمت گذاری 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                    <li className="flex transition-all hover:bg-[#1B6F58] hover:text-white items-center justify-between gap-2 p-3 w-full font-Samim">پیگیری سفارشات
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </li>
                  </ul>
                </nav>
            </div>
           </div>
         </div>
       </section>

       {/* Sidebar basket */}
       <section className={`fixed z-10 ${sideBarBasket ? "left-0" : "left-[-25rem]"} top-0 bottom-0 transition-all duration-200 w-72 sm:w-80 bg-white`}>
         <div className="p-5 h-full flex flex-col justify-between">
           <div className="flex flex-col gap-5">
           <div className="flex items-center justify-between w-full">
              <p className="font-Samim">سبد خرید</p>
              <div onClick={() => setSideBarBasket(false)} className="flex items-center justify-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <p className="font-Samim">بستن</p>
              </div>
           </div>
           <div className="flex flex-col h-[29rem] overflow-y-scroll">
              <SideBarCart/>
              <SideBarCart/>
              <SideBarCart/>
              <SideBarCart/>
              <SideBarCart/>
              <SideBarCart/>
              <SideBarCart/>
           </div>
           </div>
           <div className="relative bg-white border-t pt-4">
             <div className="flex items-center justify-between">
                <p className="font-Samim">جمع جزع</p>
                <span className="font-Yekan text-[#1B6F58]">35,000 تومان</span>
             </div>
             <div className="flex flex-col mt-3 gap-2 pt-2">
             <a href="" className="border border-black p-2 w-full font-Samim transition-all duration-200 hover:bg-[#1B6F58] hover:text-white text-center">مشاهده سبد خرید</a>
             <a href="" className="bg-[#1B6F58] text-white font-Samim p-2 w-full text-center">تسویه حساب</a>
             </div>
           </div>
         </div>
       </section>

       <section onClick={() => setSideBarBasket(false)} className={`fixed cursor-pointer transition-all duration-200 ${sideBarBasket ? "visible opacity-80" : "invisible opacity-0"} top-0 left-0 bottom-0 right-0 w-full h-full bg-black z-0`}></section>

    </header>
  )
}
