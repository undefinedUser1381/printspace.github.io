export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] h-auto mt-20">
         
      {/* Footer for desktop*/}
     <section>
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-between pt-16 pb-16">
              <div className="flex flex-col items-start justify-center gap-5 w-full lg:w-[20%] md:w-[40%]">
                 <div><img src="images/logo.png" alt="" /></div>
                 <p className="text-[#777]">erfanghezi5050@gmail.com</p>
                 <p className="font-Yekan font-bold">02188997722+</p>
                 <p className="font-Yekan text-[#777]">خیابان فلانی کوچه فلانی ط اول</p>
              </div>
              <div className="flex flex-col items-start justify-center gap-5 w-full lg:w-[20%] md:w-[40%]">
              <h2 className="font-Samim">اطلاعات</h2>
                  <ul className="*:font-Samim *:text-[#777] flex flex-col gap-4 *:transition-all *:duration-200 *:hover:text-[#1B6F58]">
                    <li>درباره ما</li>
                    <li>وبلاگ</li>
                    <li>عودت وجه</li>
                    <li>تماس با ما</li>
                  </ul>
              </div>
              <div className="flex flex-col items-start justify-center gap-5 w-full lg:w-[20%] md:w-[40%]">
              <h2 className="font-Samim">خدمات</h2>
                 <ul className="*:font-Samim *:text-[#777] flex flex-col gap-4 *:transition-all *:duration-200 *:hover:text-[#1B6F58]">
                    <li>خدمات چاپ</li>
                    <li>اسکن دیجیتال</li>
                    <li>خدمات طراحی</li>
                    <li>خدمات کپی</li>
                  </ul>
              </div>
              <div className="flex flex-col items-start justify-center gap-5 w-full lg:w-[20%] md:w-[40%]">
              <h2 className="font-Samim">لینک های مفید</h2>
                 <ul className="*:font-Samim *:text-[#777] flex flex-col gap-4 *:transition-all *:duration-200 *:hover:text-[#1B6F58]">
                    <li>حساب من</li>
                    <li>اراعه دهنده چاپ</li>
                    <li>شریک شدن</li>
                    <li>محصولات سفارشی</li>
                  </ul>
              </div>
              <div className="flex flex-col gap-5 w-full lg:w-[20%] md:w-[40%]">
                 <h2 className="font-Samim">خبرنامه</h2>
                 <p className="font-Samim text-[#777]">مشترک شدن در خبرنامه</p>
                 <input type="text" className="p-2 transition-all duration-200 outline-none focus:border-[#1B6F58] w-full border font-Samim" placeholder="آدرس ایمیل شما..."/>
                 <button className="w-full text-center font-Samim bg-[#1B6F58] cursor-pointer text-white p-3 rounded-md">ارسال</button>
              </div>
          </div>
          <div className="w-full flex items-center justify-center">
             <p className="font-Samim">تمام حقوق متعلق به <span className="text-[#1B6F58]">سید عرفان قزی</span> میباشد</p>
          </div>
        </div>
     </section>

      {/* Footer for mobile */}
      <section className="flex fixed left-0 bottom-0 right-0 z-0 w-full pt-4 pb-4 pr-10 pl-10 bg-white md:hidden">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-2 items-center justify-between cursor-pointer">
               <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <p className="font-Samim text-[0.7rem] text-[#777]">جستجو</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-between cursor-pointer">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
              </div>
              <p className="font-Samim text-[0.7rem] text-[#777]">فروشگاه</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-between cursor-pointer">
             <div className="relative">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <div className="bg-[#1B6F58] absolute bottom-[-0.4rem] right-[-0.4rem] w-4 h-4 rounded-[50%] flex items-center justify-center">
                <span className="font-Yekan text-white">0</span>
              </div>
             </div>
             <p className="font-Samim text-[0.7rem] text-[#777]">سبدت</p>
            </div> 
            <div className="flex flex-col gap-2 items-center justify-between cursor-pointer">
               <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
               </div>
               <p className="font-Samim text-[0.7rem] text-[#777]">حسابت</p>
            </div>
          </div>
      </section>

    </footer>
  )
}
