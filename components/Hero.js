import Section from "./Section";
import Brain from "./icons/Brain";
import BriedCaseMed from "./icons/BriefCaseMed";
import Chip from "./icons/Chip";
import CommentMedical from "./icons/CommentMedical";
import Pills from "./icons/Pills";
import ThermoMeter from "./icons/Thermometer";
const Hero = () => {
  const data = [
    {
      title: "Clinical Decision Support",
      content: "Creating AI-driven tools that analyze patient data, medical histories, and clinical guidelines to provide healthcare professionals with personalized treatment recommendations, drug interactions alerts, and risk assessments",
      number: "01",
      wrapperClasses: "bg-yellow-100",
      theme: "light",
      icon: <Brain className="fill-slate-800" height={300} />
    },
    {
      title: "Remote Patient Monitoring",
      content: "Designing AI-powered devices and software for remote patient monitoring, allowing healthcare providers to track patients' vital signs, symptoms, and adherence to treatment plans in real-time, leading to proactive intervention and improved chronic disease management",
      wrapperClasses: "bg-cyan-200",
      number: "02",
      theme: "light",
      icon: <ThermoMeter className="fill-slate-800" height={300} />
    },
    {
      title: "Drug Discovery and Development",
      content: "Utilizing ML algorithms to analyze vast amounts of biological data, identify potential drug targets, predict drug efficacy, and accelerate the drug discovery process, ultimately leading to the development of more effective and targeted therapies",
      wrapperClasses: "bg-white",
      theme: "light",
      number: "03",
      icon: <Pills className="fill-slate-800" height={300} />
    },
    {
      title: "Healthcare Operations Optimization",
      content: "Implementing AI-driven solutions for healthcare operations, such as predictive analytics for resource allocation, supply chain optimization, staff scheduling, and workflow automation, to improve efficiency and reduce costs",
      wrapperClasses: "bg-rose-300",
      theme: "light",
      number: "04",
      icon: <BriedCaseMed className="fill-slate-800"  height={300} />,
      
    },
    {
      title: "Natural Language Processing (NLP)",
      content: "Developing NLP algorithms to extract and analyze unstructured medical data from electronic health records (EHRs), clinical notes, and research literature, enabling insights into patient outcomes, disease trends, and treatment effectiveness",
      wrapperClasses: "bg-orange-300",
      theme: "light",
      icon: <Chip className="fill-slate-800" height={300} />,
      number: "05"
    },
    {
      title: "Telemedicine Platforms",
      content: "Building AI-powered telemedicine platforms that offer virtual consultations, symptom triage, medical chatbots, and remote monitoring capabilities, expanding access to healthcare services and improving patient engagement",
      number: "06",
      wrapperClasses: "bg-slate-700",
      icon: <CommentMedical  className="fill-white"  height={300} />,
      theme: "dark"
    }
  ];
  return (
    <section className=" flex gap-12 justify-between items-center flex-col lg:flex-row py-0">
      <div className="flex flex-col">
        <div className="pb-[3%] pt-[10%] pl-[20%] pr-[10%]">
          <p className="font-semibold text-3xl text-slate-800">
          RSPL Health specializing in AI (Artificial Intelligence) and ML (Machine Learning) solutions typically offers innovative products and services that leverage these technologies to enhance healthcare delivery and improve patient outcomes. Here&apos;s a description
          </p>
          <p className="text-slate-800 text-xl mt-20">
          AI and ML-Powered Medical Solutions
          </p>
        </div>
      {data.map((item, index) => (
        <Section key={`section-${index}`} {...item} />
      ))}
      </div>
    </section>
  );
};

export default Hero;
