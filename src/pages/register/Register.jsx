import { ToastContainer, toast } from 'react-toastify';
import Input from "../../Form/Input";
import useInput from "../../hooks/useInput"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Register() {

  const [name,nameBinding,resetNameValue] = useInput("");
  const [password,passBinding,resetPassValue] = useInput("");
  const [email,emailBinding,resetEmailValue] = useInput("");
  const [username,userNameBinding,resetUsernameValue] = useInput("");
  const [loginPass,loginPassBinding,resetLoginpassBinding] = useInput("");
  const navigate = useNavigate();
 

  const submitUserHandler = (e) => {
      e.preventDefault();
      if (!name.match("^[a-z0-9_-]{5,10}$") || !username.match("^[a-z0-9_-]{5,10}$")){
          toast.error("! نام یا نام کاربری را درست وارد کنید",{
            className:"toast-message"
          });
      } else if (!email.match("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+")){
          toast.error("! ایمیل را به درستی وارد کنید",{
           className:"toast-message"
         });
      } else if (password.length < 8){
          toast.error("! پسورد کمتر از 8 کاراکتر است",{
           className:"toast-message"
         });
      }
       else {
        const newUser = {
          name,
          password,
          email,
          username,
          basket:[]
       }
        fetch("http://localhost:4000/users",{
        method : "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(newUser)
       })
       .then(res => {
        if(res.status === 201){
          toast.success("حساب کاربری با موفقیت ایجاد شد",{
            className:"toast-message"
          });
          resetNameValue();
          resetPassValue();
          resetEmailValue();
          resetUsernameValue();
        }
      })
      }
  }

  const loginUser = (e) => {
     e.preventDefault();

     fetch(`http://localhost:4000/users?password=${loginPass}`)
     .then(res => {
       if(res.status === 200){
        console.log(res);
        // navigate("/panel")
       }
       return res.json()
     })
     .then(data => console.log(data))
 
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
                     <Input type="password" {...loginPassBinding} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                   </form>
                   <button onClick={(e) => loginUser(e)} className="bg-[#1B6F58] text-center text-white p-3 font-Samim rounded-md w-28 cursor-pointer">ورود</button>
                 </div>
               </div>
               <div className="w-[45%]">
                <h4 className="font-Samim font-bold text-[1.1rem]">ثبت نام</h4>
                 <form className="flex flex-col shadow-md gap-5 border p-5 justify-start mt-5">
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">نام<span className="text-red-600">*</span></label>
                     <Input type="text" {...nameBinding} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">پسورد<span className="text-red-600">*</span></label>
                     <Input type="password" {...passBinding} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">ایمیل<span className="text-red-600">*</span></label>
                     <Input type="text" {...emailBinding} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                     <label htmlFor="" className="font-Samim text-[#777]">نام کاربری<span className="text-red-600">*</span></label>
                     <Input type="text" {...userNameBinding} className="transition focus:border-[#1B6F58] w-[100%] p-2 outline-none border bg-[#F5F5F5]"/>
                    </div>
                    <button type="submit" onClick={(e) => submitUserHandler(e)} className="bg-[#1B6F58] text-center text-white p-3 font-Samim rounded-md w-28 cursor-pointer">ثبت نام</button>
                 </form> 
               </div>
            </div>
        </div>
        <ToastContainer/>
     </section>
  )
}
