export default function Service({title,icon,desc}) {
  return (
    <div className="flex w-full sm:w-[45%] p-2 items-center justify-start gap-5 sm:justify-center">
        <div>
         {icon}
        </div>
        <div className="flex flex-col gap-2 *:font-Samim">
           <p className="text-[1.2rem]">{title}</p>
           <p className="text-[#777] text-[1rem]">{desc}</p>
        </div>
    </div>
  )
}
