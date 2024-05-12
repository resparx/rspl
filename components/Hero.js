import Image from "next/image";
import heroImg from "../public/hero.png";
const Hero = () => {
  return (
    <section className=" h-screen flex gap-12 justify-between items-center flex-col lg:flex-row py-0">
       <Image src={heroImg} alt="hero" />
    </section>
  );
};

export default Hero;
