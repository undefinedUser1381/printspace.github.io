import { Link } from "react-router-dom"

export default function Breadcrumb({title,link}) {
  return (
    <div className="bg-[#F5F5F5] flex flex-col h-[15rem] mt-5 p-10">
        <h2 className="text-center text-[2rem] font-bold mt-5">{title}</h2>
        <div className="flex items-center mx-auto justify-between mt-5 *:text-[#7E7E7E] *:font-Samim w-32 *:text-[1rem]">
            <Link to={"/"}>خانه</Link>
            <div>----</div>
            <Link to={`/${link}`}>{title}</Link>
        </div>
    </div>
  )
}
