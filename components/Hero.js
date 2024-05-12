import Image from "next/image";
import heroImg from "../public/hero.png";
import Section from "./Section";
const Hero = () => {
  const data = [
    {
      title: "Clinical Decision Support",
      content: "Creating AI-driven tools that analyze patient data, medical histories, and clinical guidelines to provide healthcare professionals with personalized treatment recommendations, drug interactions alerts, and risk assessments",
      number: "01",
      wrapperClasses: "bg-yellow-400",
      theme: "dark"
    },
    {
      title: "Remote Patient Monitoring",
      content: "Designing AI-powered devices and software for remote patient monitoring, allowing healthcare providers to track patients' vital signs, symptoms, and adherence to treatment plans in real-time, leading to proactive intervention and improved chronic disease management",
      wrapperClasses: "bg-green-400",
      number: "02"
    },
    {
      title: "Drug Discovery and Development",
      content: "Utilizing ML algorithms to analyze vast amounts of biological data, identify potential drug targets, predict drug efficacy, and accelerate the drug discovery process, ultimately leading to the development of more effective and targeted therapies",
      wrapperClasses: "white",
      number: "03"
    },
    {
      title: "Healthcare Operations Optimization",
      content: "Implementing AI-driven solutions for healthcare operations, such as predictive analytics for resource allocation, supply chain optimization, staff scheduling, and workflow automation, to improve efficiency and reduce costs",
      wrapperClasses: "bg-rose-500",
      number: "04"
    },
    {
      title: "Natural Language Processing (NLP)",
      content: "Developing NLP algorithms to extract and analyze unstructured medical data from electronic health records (EHRs), clinical notes, and research literature, enabling insights into patient outcomes, disease trends, and treatment effectiveness",
      wrapperClasses: "bg-sky-500",
      number: "05"
    },
    {
      title: "Telemedicine Platforms",
      content: "Building AI-powered telemedicine platforms that offer virtual consultations, symptom triage, medical chatbots, and remote monitoring capabilities, expanding access to healthcare services and improving patient engagement",
      number: "06",
      wrapperClasses: "bg-slate-700",
      theme: "dark"
    }
  ];
  return (
    <section className=" flex gap-12 justify-between items-center flex-col lg:flex-row py-0">
      <div className="flex flex-col">
      {data.map((item, index) => (
        <Section key={`section-${index}`} {...item} />
      ))}
      </div>
    </section>
  );
};

export default Hero;
