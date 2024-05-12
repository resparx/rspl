import Group from "./icons/Group";
import Radiology from "./icons/Radiology";
import WorkFlow from "./icons/WorkFlow";

const Card = ({ title, content, children }) => {
    return (
        <div className="group px-8 py-6 flex flex-col w-96 rounded-2xl shadow-xl transition-all hover:scale-105">
           <div className="w-fit mb-8 p-4 rounded-full bg-slate-100">
           {children}
           </div>
            <p className="text-slate-600 text-lg font-semibold mb-8">{title}</p>
            <p className="text-slate-500 text-md  font-normal">{content}</p>
        </div>
    );
};

const Products = () => {
    return (
        <section className="px-[20%] flex flex-col justify-center h-screen items-center">
            <div className="flex flex-col items-center mb-8">
                <p className="text-center text-2xl font-semibold text-slate-600 mb-4">
                    Our Products under Development
                </p>
                <p className="text-center w-2/3 text-lg text-slate-500">
                    Tempor cupidatat reprehenderit consequat consequat excepteur
                    reprehenderit consequat reprehenderit consequat consequat excepteur
                    reprehenderit consequat consequat excepteur.
                </p>
            </div>
            <div className="flex gap-8">
                <Card
                    title="Radiology Information System (RIS)"
                    content="Our RIS is tailored to streamline the operations of radiology departments. By optimizing the workflow, our RIS helps in managing patient registrations, scheduling, reporting, and billing with unmatched efficiency, ensuring that healthcare providers can focus more on patient care."
                >
                    <WorkFlow className="h-8 group-hover:fill-fuchsia-600 fill-slate-600"/>
                </Card>
                <Card
                    title="Picture Archiving and Communication System (PACS)"
                    content="At the core, our PACS provides robust image storage, retrieval, management, and distribution capabilities. Designed to support extensive radiology image data, our PACS ensures that images are accessible anytime and anywhere, facilitating better clinical decisions."
                >
                    <Radiology className="h-8 fill-slate-600 group-hover:fill-sky-600"/>
                </Card>
                <Card
                    title="Vendor Neutral Archive (VNA)"
                    content="Our VNA solution is designed to store images and documents in a standard format and interface, making them accessible across different PACS. This interoperability ensures that healthcare providers have a unified, comprehensive view of patient imaging records, irrespective of the source of the images."
                >
                    <Group className="h-8 fill-slate-600 group-hover:fill-amber-600"/>
                </Card>
            </div>
        </section>
    );
};

export default Products;
