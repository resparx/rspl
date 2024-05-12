import Image from "next/image";
import heroImg from "../public/hero.png";
const Hero = () => {
  return (
    <section className=" h-screen flex gap-12 justify-between items-center flex-col lg:flex-row py-0">
      <div className="flex justify-between items-center py-[5%] px-[5%] lg:pt-[4%] lg:pl-[6%] z-10 h-screen w-screen overflow-scroll bg-gradient-to-b from-70% lg:bg-gradient-to-r from-white lg:from-30% to-transparent">
        <div className="h-full lg:w-2/3 [&>p]:text-slate-800 lg:[&>p]:font-medium lg:[&>p]:mb-4 [&>p]:mb-2 [&>p]:ml-16 lg:text-lg text-xs">
          <h1 className="text-slate-800 text-sm lg:text-xl font-bold mb-4">
            RSPL Health specializing in AI (Artificial Intelligence) and ML
            (Machine Learning) solutions typically offers innovative products
            and services that leverage these technologies to enhance healthcare
            delivery and improve patient outcomes. Here&apos;s a description:
          </h1>
          <p className="lg:mt-12 lg:text-xl text-xs font-semibold text-slate-800">
            AI and ML-Powered Medical Solutions:
          </p>
          <p>
            1. **Clinical Decision Support:** Creating AI-driven tools that
            analyze patient data, medical histories, and clinical guidelines to
            provide healthcare professionals with personalized treatment
            recommendations, drug interactions alerts, and risk assessments.
          </p>
          <p>
            2. **Remote Patient Monitoring:** Designing AI-powered devices and
            software for remote patient monitoring, allowing healthcare
            providers to track patients&apos; vital signs, symptoms, and adherence to
            treatment plans in real-time, leading to proactive intervention and
            improved chronic disease management.
          </p>
          <p>
            3. **Drug Discovery and Development:** Utilizing ML algorithms to
            analyze vast amounts of biological data, identify potential drug
            targets, predict drug efficacy, and accelerate the drug discovery
            process, ultimately leading to the development of more effective and
            targeted therapies.
          </p>
          <p>
            4. **Healthcare Operations Optimization:** Implementing AI-driven
            solutions for healthcare operations, such as predictive analytics
            for resource allocation, supply chain optimization, staff
            scheduling, and workflow automation, to improve efficiency and
            reduce costs.
          </p>
          <p>
            5. **Natural Language Processing (NLP):** Developing NLP algorithms
            to extract and analyze unstructured medical data from electronic
            health records (EHRs), clinical notes, and research literature,
            enabling insights into patient outcomes, disease trends, and
            treatment effectiveness.
          </p>
          <p>
            6. **Telemedicine Platforms:** Building AI-powered telemedicine
            platforms that offer virtual consultations, symptom triage, medical
            chatbots, and remote monitoring capabilities, expanding access to
            healthcare services and improving patient engagement.
          </p>
          <p className="lg:mt-12 ml-0 lg:text-xl text-xs font-semibold text-slate-800">
            Overall, RSPL Health integrates AI and ML technologies into its
            products and solutions to revolutionize healthcare by enabling
            data-driven decision-making, personalized treatments, operational
            efficiency, and the delivery of more accessible and effective care.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full lg:right-0 lg:w-[80%]">
        <Image src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
