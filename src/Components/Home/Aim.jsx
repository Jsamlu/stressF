export default function Aim() {
  return (
    <div className=" px-2 md:px-4 py-10 ">
      <div className=" md:ml-[0] md:w-[80%] mx-auto  md:pt-4 pb-4 rounded-xl grid grid-cols-3 gap-y-5">
        
        <div className="text-center overflow-hidden flex justify-center col-span-1"><img src="/assets2/people/stressed.png" className="" alt="logo" /></div>
        <div className=" md:text-lg  font-serif text-sm pt-1 pb-4 text-balance  col-span-2">
          <p className="text-white">
            Student life can be a whirlwind of deadlines,
            exams, and all the pressures that come with juggling school, work,
            and personal life.</p>
            <br /> 
            <p className="text-blue-200">That’s why we’re here! <span className="text-white">D-Stress</span> is your go-to
            space for managing stress and creating healthier habits, so you can
            feel more in control and less overwhelmed. Whether you need quick
            relaxation tips, a habit tracker to keep you on track, or just a
            community to remind you that you’re not alone, D-Stress has your
            back. We believe that a happier, more balanced student life is
            possible, and we’re here to help you every step of the way!
          </p>
        </div>
        <hr className="border-0 h-[1px] bg-sky-400"/>
      </div>
    </div>
  );
}
