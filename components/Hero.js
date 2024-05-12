import Head from "next/head";
import Section from "./Section";
import Brain from "./icons/Brain";
import BriedCaseMed from "./icons/BriefCaseMed";
import Chip from "./icons/Chip";
import CommentMedical from "./icons/CommentMedical";
import Email from "./icons/Email";
import Location from "./icons/Location";
import Pills from "./icons/Pills";
import ThermoMeter from "./icons/Thermometer";
const Hero = () => {
  const data = [
    {
      title: "Clinical Decision Support",
      content:
        "Creating AI-driven tools that analyze patient data, medical histories, and clinical guidelines to provide healthcare professionals with personalized treatment recommendations, drug interactions alerts, and risk assessments",
      number: "01",
      wrapperClasses: "bg-yellow-100",
      theme: "light",
      icon: <Brain className="fill-slate-800 h-[100px] lg:h-[300px]" />,
    },
    {
      title: "Remote Patient Monitoring",
      content:
        "Designing AI-powered devices and software for remote patient monitoring, allowing healthcare providers to track patients' vital signs, symptoms, and adherence to treatment plans in real-time, leading to proactive intervention and improved chronic disease management",
      wrapperClasses: "bg-cyan-200",
      number: "02",
      theme: "light",
      icon: <ThermoMeter className="fill-slate-800  h-[100px] lg:h-[300px]" />,
    },
    {
      title: "Drug Discovery and Development",
      content:
        "Utilizing ML algorithms to analyze vast amounts of biological data, identify potential drug targets, predict drug efficacy, and accelerate the drug discovery process, ultimately leading to the development of more effective and targeted therapies",
      wrapperClasses: "bg-white",
      theme: "light",
      number: "03",
      icon: <Pills className="fill-slate-800  h-[100px] lg:h-[300px]" />,
    },
    {
      title: "Healthcare Operations Optimization",
      content:
        "Implementing AI-driven solutions for healthcare operations, such as predictive analytics for resource allocation, supply chain optimization, staff scheduling, and workflow automation, to improve efficiency and reduce costs",
      wrapperClasses: "bg-rose-300",
      theme: "light",
      number: "04",
      icon: <BriedCaseMed className="fill-slate-800  h-[100px] lg:h-[300px]" />,
    },
    {
      title: "Natural Language Processing (NLP)",
      content:
        "Developing NLP algorithms to extract and analyze unstructured medical data from electronic health records (EHRs), clinical notes, and research literature, enabling insights into patient outcomes, disease trends, and treatment effectiveness",
      wrapperClasses: "bg-orange-300",
      theme: "light",
      icon: <Chip className="fill-slate-800 h-[100px] lg:h-[300px]" />,
      number: "05",
    },
    {
      title: "Telemedicine Platforms",
      content:
        "Building AI-powered telemedicine platforms that offer virtual consultations, symptom triage, medical chatbots, and remote monitoring capabilities, expanding access to healthcare services and improving patient engagement",
      number: "06",
      wrapperClasses: "bg-slate-700",
      icon: <CommentMedical className="fill-white h-[100px] lg:h-[300px]" />,
      theme: "dark",
    },
  ];
  return (
    <>
    <Head>
      <title>
      RSPL HEALTH
      </title>
    </Head>
    <section className=" flex gap-12 justify-between items-center flex-col lg:flex-row py-0">
      <div className="flex flex-col">
        <div className="bg-teal-100 pb-[3%] pt-[20%] lg:pt-[10%] pl-[5%] lg:pl-[20%] pr-[10%]">
          <p className="font-semibold text-2xl lg:text-7xl text-slate-800">
            RSPL Health
          </p>
          <p className="font-semibold lg:w-[70%] text-sm lg:text-xl text-slate-800">
            <br />
            <br />
            Specializing in AI (Artificial Intelligence) and ML (Machine
            Learning) solutions typically offers innovative products and
            services that leverage these technologies to enhance healthcare
            delivery and improve patient outcomes.
          </p>
          <br />
          <p className="text-slate-800 text-lg lg:text-3xl mt-20">
            AI and ML-Powered Medical Solutions
          </p>
        </div>
        {data.map((item, index) => (
          <Section key={`section-${index}`} {...item} />
        ))}

        <div className="flex flex-col py-20 pl-[20%] pr-[5%] gap-8 lg:gap-20">
          <p className="text-2xl lg:text-7xl font-semibold text-slate-700">
            Contact us
          </p>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-36">
            <div className="flex flex-col items-start gap-1 lg:gap-2">
              <Email className="fill-slate-600 h-4 lg:h-6" />
              <p className="text-sm lg:text-xl text-slate-500">
                support@rsplhealth.in
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 lg:gap-2">
              <Location className="fill-slate-600 h-4 lg:h-6" />
              <p className="text-sm lg:text-xl text-slate-500">
                Ramanathan Software Pvt Ltd (RSPL), Indiqube Ascent, 420,
                <br />
                Mahakavi Vemana Road, KHB Block Koramangala, Koramangala 4-B
                <br />
                Block, Koramangala, Bengaluru, Karnataka PIN-560034
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
