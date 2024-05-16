import { useState } from "react"
export default function Register() {

  const [register,setRegister] = useState("");
  const [login,setLogin] = useState("");
  const [email,setEmail] = useState("");

  return (
     <section className="mt-20">
        <div className="container">
            <div className="flex items-start gap-10 pl-20 pr-20 justify-center">
               <div className="w-[45%]">
                 <h4 className="font-Samim font-bold text-[1.1rem]">ورود</h4>
                 <div className="flex mt-5 shadow-md flex-col justify-start gap-5 border p-5">
                   <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">ایمیل خود را وارد کنید <span className="text-red-600">*</span></label>
                     <input type="text" className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                   </div>
                   <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">رمز عبور <span className="text-red-600">*</span></label>
                     <input type="text" className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                   </div>
                   <button className="bg-[#1B6F58] text-center text-white p-3 font-Samim rounded-md w-28 cursor-pointer">ورود</button>
                 </div>
               </div>
               <div className="w-[45%]">
                <h4 className="font-Samim font-bold text-[1.1rem]">ثبت نام</h4>
                 <div className="flex flex-col shadow-md gap-5 border p-5 justify-start mt-5">
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">نام<span className="text-red-600">*</span></label>
                     <input type="text" className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">پسورد<span className="text-red-600">*</span></label>
                     <input type="text" className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">ایمیل<span className="text-red-600">*</span></label>
                     <input type="text" className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">نام کاربری<span className="text-red-600">*</span></label>
                     <input type="text" className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <button className="bg-[#1B6F58] text-center text-white p-3 font-Samim rounded-md w-28 cursor-pointer">ثبت نام</button>
                 </div>  
               </div>
            </div>
        </div>
     </section>
  )
}
