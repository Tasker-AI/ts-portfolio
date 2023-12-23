import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import HaheiEscapes from "../public/img/projects/haheiescapes.png";
import LittleBlue from "../public/img/projects/littlebluehahei.png";
import JBsElectrical from "../public/img/projects/jbelectricalrotorua.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Some Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={HaheiEscapes.src}
          title="Hahei Escapes"
          link="https://www.haheiescapes.co.nz/"
        />
        <ProjectCard
          img={LittleBlue.src}
          title="Little Blue"
          link="https://www.littlebluehahei.co.nz/"
        />
        <ProjectCard
          img={JBsElectrical.src}
          title="JBs Eclectrical"
          link="https://www.jbelectricalrotorua.co.nz/"
        />
      </div>
    </div>
  );
};

export default Projects;
