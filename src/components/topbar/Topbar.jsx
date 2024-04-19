export default function Topbar() {
  return (
    <header className="">
        
        {/* Topbar */}
       <section>
         <div className="container">
            <div className="w-full p-4 md:p-8">
              <div className="w-full flex items-center justify-between">
                <div className="w-[40%] md:w-[25%] xl:w-[15%] h-8">
                  <img src="../../../public/images/logo.png" className="w-full h-full" alt="" />
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
                    <div className="bg-[#F5F5F5] p-3 rounded-[50%] relative cursor-pointer">
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
       <section>
         <div className="container">

         </div>
       </section>

    </header>
  )
}
