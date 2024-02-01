import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Communication" />
        <SkillsInput title="Leadership" />
        {/* <SkillsInput title="Social skills" /> */}
        {/* <SkillsInput title="Customer relations" /> */}
        {/* <SkillsInput title="Ambition" />
        <SkillsInput title="Motivation" /> */}
        {/* <SkillsInput title="Confidence" /> */}
        <SkillsInput title="Efficiency" />
        <SkillsInput title="Innovation" />
        {/* <SkillsInput title="Organization" />
        <SkillsInput title="Strategy" /> */}
        <SkillsInput title="Problem solving" />
        <SkillsInput title="Prioritization" />
        {/* <SkillsInput title="Decision making" />
        <SkillsInput title="Time management" /> */}
      </div>
    </div>
  );
};

export default Skills;
