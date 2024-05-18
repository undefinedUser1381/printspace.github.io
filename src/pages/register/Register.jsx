import { useState } from "react"
export default function Register() {

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [username,setUserName] = useState("");
  const [loginPass,setLoginPass] = useState("");

  const submitUserHandler = (e) => {
      e.preventDefault();

      const newUser = {
         name,
         password,
         email,
         username
      }

      fetch("http://localhost:4000/users",{
        method : "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(newUser)
      })
      .then(res => console.log(res))

  }

  return (
     <section className="mt-20">
        <div className="container">
            <div className="flex items-start gap-10 pl-20 pr-20 justify-center">
               <div className="w-[45%]">
                 <h4 className="font-Samim font-bold text-[1.1rem]">ورود</h4>
                 <div className="flex mt-5 shadow-md flex-col justify-start gap-5 border p-5">
                   <form className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">رمز عبور <span className="text-red-600">*</span></label>
                     <input type="text" value={loginPass} onChange={(e) => setUserName(e.target.value)} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                   </form>
                   <button className="bg-[#1B6F58] text-center text-white p-3 font-Samim rounded-md w-28 cursor-pointer">ورود</button>
                 </div>
               </div>
               <div className="w-[45%]">
                <h4 className="font-Samim font-bold text-[1.1rem]">ثبت نام</h4>
                 <form onSubmit={(e) => submitUserHandler(e)} className="flex flex-col shadow-md gap-5 border p-5 justify-start mt-5">
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">نام<span className="text-red-600">*</span></label>
                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">پسورد<span className="text-red-600">*</span></label>
                     <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">ایمیل<span className="text-red-600">*</span></label>
                     <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">نام کاربری<span className="text-red-600">*</span></label>
                     <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <button className="bg-[#1B6F58] text-center text-white p-3 font-Samim rounded-md w-28 cursor-pointer">ثبت نام</button>
                 </form>  
               </div>
            </div>
        </div>
     </section>
  )
}
