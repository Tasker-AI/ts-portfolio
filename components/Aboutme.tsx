import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          28 year old Kiwi.<br></br>
          Passionate about learning, happiness and health.<br></br>
          Obsessed with AI.<br></br>
          Optimistic about the future!<br></br>
          Building the world that I want my family to live in.<br></br>
          Accalerate.
        </p>
        <a href="mailto:harry@taskersolutions.co.nz" target="_blank">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
};

export default Aboutme;
