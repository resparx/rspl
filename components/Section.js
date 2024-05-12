import Brain from "./icons/Brain";


const Section = ({ number = "01", sectionTitle ="Services", theme, title, content, wrapperClasses, icon }) => {

    const fontColor = theme === "light" ? "text-slate-800" : "white"
    const bgColor = theme === "light" ? "bg-slate-200" : "bg-slate-800" 
  return (
    <section className={`flex items-center gap-12 h-[70vh] pl-[20%] ${wrapperClasses}`}>
      <div className="flex flex-col gap-6 items-center">
        <div className={`rounded-full p-2 ${bgColor}`}>
          <p className={`${fontColor} text-xl font-semibold`}>{number}</p>
        </div>
        <p className={`${fontColor} [writing-mode:vertical-lr] font-semibold text-3xl tracking-widest`}>{sectionTitle}</p>
      </div>
      <div className="flex gap-20 items-center">
      <div className="flex flex-col">
            <p className={`${fontColor} text-7xl font-semibold w-[80%] mb-12`}>{title}</p>
            <p className={`${fontColor} w-[80%] text-xl font-light`}>{content}</p>
      </div>
      <div className="mr-20">
        {icon}
      </div>
      </div>
    </section>
  );
};


export default Section