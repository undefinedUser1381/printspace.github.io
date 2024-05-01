import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Products from "../../components/Products/Products"

export default function Shop() {
  return (
    <>
        <Breadcrumb link="shop" title="فروشگاه"/>
        <section className="mt-20">
          <div className="container">
            <div className="flex items-center justify-between w-full">
             <div className="w-[25%]">
              <input type="text" className="border outline-none font-Samim transition-all duration-200 focus:border-black p-2 bg-[#F8F8F8] w-full" placeholder="جستجوی محصولات..."/>
             </div>
             <div className="w-[45%] flex items-center justify-between">
                <select className="font-Samim rounded-lg transition-all duration-200 cursor-pointer outline-none focus:outline-black bg-[#F8F8F8] p-2 w-[50%]" name="" id="">
                  <option value="default">پیش فرض</option>
                  <option value="expensive">گران ترین</option>
                  <option value="cheap">ارزان ترین</option>
                  <option value="popular">محبوب ترین ها</option>
                  <option value="topsale">پرفروش</option>
                </select>
                <div className="w-[40%] flex items-center justify-between">
                    <p className="font-Samim">مشاهده</p>
                    <div className="w-[60%] flex items-center justify-between">
                    <div className="flex items-center justify-center cursor-pointer">
                     <p className="font-Samim">ستونی</p>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                     </svg>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                    <p className="font-Samim">لیست</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                  </div>
                    </div>
                </div>
             </div>
            </div>
            <div className="w-full flex mt-10 items-center justify-between flex-wrap">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </div>
          </div>
        </section>
    </>
  )
}
