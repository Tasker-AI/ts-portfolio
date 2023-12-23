import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          28 year old Kiwi, who is obsessed with learning, technology, philosophy, health & self-improvement.<br></br>
          <br></br>
          Extremely fast learner with 140+ IQ & top 5% cognitive aptitude of college graduates.<br></br>
          Track record of getting things done, having successfully owned and operated multiple small businesses.<br></br>
          <br></br>
          Seeking fully remote opportunities, where I can grow my skills, network, and contribute to public good.<br></br>
          A culture of intelligent, competent, hard-working people who implement good ideas quickly and like to have fun.<br></br>
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
