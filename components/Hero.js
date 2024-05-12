import Image from "next/image";
import heroImg from "../public/hero1.svg"
const Hero = () => {
  return (
    <section className="h-screen flex justify-between items-center flex-col lg:flex-row pl-[10%] py-0">
      <div className="lg:w-2/5">
        <h1 className="text-slate-800 text-4xl font-semibold mb-4">
          Welcome to RSPL - Revolutionizing Medical Imaging for a Healthier
          Tomorrow
        </h1>
        <p className="text-slate-600 text-lg font-light">
          At RSPL, we're dedicated to transforming the landscape of healthcare
          technology in India. Based in Bangalore, Karnataka, our mission is to
          innovate and simplify the complexities of medical imaging systems to
          enhance patient care and improve diagnostic processes.
        </p>
      </div>
      <Image src={heroImg} alt="hero" />
    </section>
  );
};

export default Hero;
