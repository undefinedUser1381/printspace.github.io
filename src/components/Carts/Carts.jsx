export default function Carts({title,img}) {
  return (
    <div className="w-[100%] sm:w-[45%] lg:w-[30%] xl:w-[25%] group cursor-pointer">
        <div className="overflow-hidden rounded-2xl w-full">
            <div className="w-full h-full transition-all duration-200 group-hover:scale-110">
                <img src={img} alt="" className="w-full h-full"/>
            </div>
        </div>
        <div className="flex items-center mt-5 justify-between w-full">
              <p className="font-Samim font-bold">{title}</p>
               <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex invisible opacity-0 items-center justify-center group-hover:visible group-hover:opacity-100 group-hover:bg-[#1B6F58] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition-all group-hover:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </div>
        </div>
    </div>
  )
}
