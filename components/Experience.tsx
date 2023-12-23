import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import { MdOutlineWorkOutline, MdTaskAlt } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="RemoTasks.com"
          subTitle="AI Trainer (Contractor) 2023 - Present"
          icon={<RiRobot2Line />}
        />
        <ExperienceCard
          title="Bocapa.com"
          subTitle="Front End Developer 2021 - Present"
          icon={<MdOutlineWorkOutline />}
        />
        <ExperienceCard
          title="Taskersolutions.co.nz"
          subTitle="Owner 2020 - Present"
          icon={<MdTaskAlt />}
        />

        <ExperienceCard
          title="Freelancer"
          subTitle="Research & Development 2020 - Present"
          icon={<SiFreelancer />}
        />
      </div>
    </div>
  );
};

export default Experience;
