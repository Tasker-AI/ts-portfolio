import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          28 year old Kiwi.<br></br>
          Obsessed with learning, technology, chess & health.<br></br>
          <br></br>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
