import Bulb from "./icons/Bulb";
import Shield from "./icons/Shield";
import Support from "./icons/Support";
import UserCheck from "./icons/UserCheck";

const Card = ({ title, content, children }) => {
  return (
    <div>
      <div>{children}</div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

const OurVision = () => {
  return (
    <section className="px-[20%] flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col items-center mb-8">
        <p className="text-center text-2xl font-semibold text-slate-600 mb-4">
          Our Vision
        </p>
        <p className="text-center w-2/3 text-lg text-slate-500">
          We envision an India where medical imaging is quick, safe, and
          accessible to all. Through our innovations, we aim to empower
          healthcare professionals with the right tools to deliver superior care
          and make impactful health decisions.
        </p>
      </div>
      <div className="flex">
        <Card
          title="Innovative Solutions"
          content="Cutting-edge technology, innovation at the forefront."
        >
          <Bulb />
        </Card>
        <Card
          title="Compliance and Security"
          content="Adherence to national and international standards ensuring data privacy and security."
        >
          <Shield />
        </Card>
        <Card
          title="Customer-Centric Approach"
          content=" We prioritize the needs of healthcare providers and their patients."
        >
          <UserCheck />
        </Card>
        <Card
          title="Dedicated Support"
          content="Our team offers comprehensive training and support to ensure seamless integration and operations."
        >
          <Support />
        </Card>
      </div>
    </section>
  );
};

export default OurVision;
