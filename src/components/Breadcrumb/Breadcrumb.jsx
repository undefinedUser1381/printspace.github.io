export default function Breadcrumb({children}) {
  return (
    <div className="p-10">
        <div className="flex items-center mx-auto justify-between *:text-[#7E7E7E] *:font-Samim w-full *:text-[1rem]">
            {children}
        </div>
    </div>
  )
}
