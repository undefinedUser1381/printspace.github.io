import { Link } from "react-router-dom";

export default function Products(props) {

 const {id,name,src,price,discount} = props;

//  Show price with discount
 let totalPrice = price - (price * discount / 100);

  return (
    <Link to={`/MainProduct/${id}`} className="w-[50%] lg:w-[31%] xl:w-[24%] flex flex-col group gap-5 p-4 cursor-pointer rounded-lg bg-white transition-all duration-200 hover:translate-y-[-1rem] hover:shadow-xl">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
         <img src={src} alt="" />
        </div>
        <div className="absolute right-2 top-2">
            <div className="bg-[#F09155] text-[0.7rem] flex items-center justify-center p-2 rounded-md font-Samim text-white">
                فروش ویژه!!!
            </div>
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
         <p className="font-Samim text-center">{name}</p>
         <div className="flex items-center mt-2 font-Yekan justify-center gap-5">
            <span className="text-[#1B6F58]">{totalPrice} تومان</span>
            <span className="line-through text-[0.8rem] text-[#777]"> {price} تومان</span>
         </div>
      </div>
    </Link>
  )
}

