import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import { MdOutlineWorkOutline, MdTaskAlt } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Contracts" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="RemoTasks.com"
          subTitle="LLM fine tuning since 2023"
          icon={<RiRobot2Line />}
        />
        <ExperienceCard
          title="Bocapa.com"
          subTitle="Front End Development since 2021"
          icon={<MdOutlineWorkOutline />}
        />
        <ExperienceCard
          title="Taskersolutions.co.nz"
          subTitle="Freelancer since 2020"
          icon={<MdTaskAlt />}
        />
      </div>
    </div>
  );
};

export default Experience;
