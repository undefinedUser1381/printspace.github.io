import Carts from "./Carts/Carts";

export default function Home() {
  return (
    <>

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

       
      <section className="mt-20">
        <div className="container">
          <div className="flex flex-col gap-5">
            <h2 className="font-Samim text-[2rem] sm:text-[2.5rem] text-center md:text-right">محدوده محصولات فروشگاه</h2>
            <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
              <p className="font-Samim text-[1.1rem] text-center md:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              <a className="font-Samim w-[70%] sm:w-[80%] md:w-[20%] p-3 border text-center transition-all duration-200 hover:bg-[#1B6F58] hover:text-white rounded-md" href="">بررسی کاتالوگ</a>
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

      


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
