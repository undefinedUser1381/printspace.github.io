export default function Steps() {
  return (
    <div className="flex items-start justify-between gap-5">
      <div className="step-count relative flex items-center justify-center bg-[#1B6f58] rounded-[50%] w-[8rem] h-[3rem] sm:w-[5rem] sm:h-[3rem]">
        <span className="font-Yekan text-white text-[1.3rem]">1</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-Samim text-[1.4rem]">درخواست طراحی</p>
        <p className="font-Samim text-[#7E7E7E]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله است.
        </p>
      </div>
    </div>
  );
}
