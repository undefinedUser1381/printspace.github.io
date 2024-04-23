export default function Features({img,title}) {
  return (
    <div className="bg-[#F8F8F8] w-full md:w-[48%] lg:w-[48%] xl:w-[25%] p-10 rounded-xl flex flex-col gap-4 group">
        <div className="mx-auto md:m-0">
          <img src={img} alt="" />
        </div>
        <div className="mt-4 flex flex-col gap-4">
        <p className="font-Samim text-[1.2rem] text-center md:text-right">{title}</p>
        <p className="font-Samim text-[#7E7E7E] leading-7 text-center md:text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه </p>
        <a href="" className="font-Samim rounded-lg p-3 w-full text-center bg-white transition-all duration-200 hover:bg-[#1B6F58] hover:text-white">مشاهده بیشتر</a>
        </div>
    </div>
  )
}
