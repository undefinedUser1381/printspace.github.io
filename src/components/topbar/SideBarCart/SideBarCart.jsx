export default function SideBarCart() {
  return (
    <div className="flex border-t pt-4 pb-4 items-center justify-between gap-5 w-full">
        <div className="w-20 h-16">
            <img src="/images/single-product-6-1-300x300.jpg" alt="" className="w-full h-full" />
        </div>  
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
                <p className="font-Samim">اسم محصول</p>
                <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>
            </div>
            <div className="flex items-center justify-between mt-3">
                <p className="font-Samim">فروشنده</p>
                <span className="font-Yekan">1 * 35,000 تومان</span>
            </div>
        </div>
    </div>
  )
}
