import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import { MdOutlineWorkOutline, MdTaskAlt } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Trilogy"
          subTitle="AI First Support Engineer 2024 - Present"
          icon={<MdOutlineWorkOutline />}
        />
        <ExperienceCard
          title="Scale AI / RemoTasks"
          subTitle="Fine Tuning / RLHF 2023-2024"
          icon={<RiRobot2Line />}
        />
        <ExperienceCard
          title="Bocapa"
          subTitle="Front End Dev 2021-2024"
          icon={<FaReact />}
        />
        <ExperienceCard
          title="Tasker Solutions"
          subTitle="Freelance Web Dev 2020-2023"
          icon={<MdTaskAlt />}
        />
      </div>
    </div>
  );
};

export default Experience;
