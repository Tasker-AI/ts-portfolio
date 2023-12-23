import { RiComputerLine } from "react-icons/ri";
import Title from "./Title";
import TechInput from "./TechInput";

const Tech = () => {
  return (
    <div className="wrapper">
      <Title text="Tech Stack" icon={<RiComputerLine />} />


      {/* <Title text="Tools" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="LLMs" link="" />
        <TechInput title="GitHub Copilot" link="" />
        <TechInput title="Linux CLI" link="" />
        <TechInput title="Google Sheets" link="" />
        <TechInput title="VS Code" link="https://code.visualstudio.com/" />
        <TechInput title="4 Screens" link="" />
      </div>

      {/* <Title text="VCS" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Git Bash" link="https://git-scm.com/" />
        <TechInput title="Github" link="https://github.com/" />
        <TechInput title="GitLab" link="" />
        <TechInput title="Code Commit" link="" />
      </div>
    

      {/* <Title text="Front End" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />
        <TechInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <TechInput title="Bootstrap" link="" />
        <TechInput title="Tailwindcss" link="https://tailwindcss.com/" />
      </div>

      {/* <Title text="Front End" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <TechInput title="jQuery" link="" />
        <TechInput title="Reactjs" link="https://react.dev/" />
        <TechInput title="Nextjs" link="https://nextjs.org/" />
        <TechInput title="Nodejs" link="https://nodejs.org/en" />
        <TechInput title="Typescript" link="https://www.typescriptlang.org/" />
        <TechInput title="JSON" link="" />
        <TechInput title="APIs" link="" />
      </div>

      {/* <Title text="Back End" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="PHP" link="" />
        <TechInput title="Code Igniter" link="" />
        <TechInput title="Laravel" link="" />
        <TechInput title="Apache" link="" />
        <TechInput title="Nginx" link="" />
        <TechInput title="Docker" link="" />
        <TechInput title="MySQL Workbench" link="" />
      </div>

      {/* <Title text="Wordpress" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="WordPress" link="" />
        <TechInput title="Elementor" link="" />
        <TechInput title="WooCommerce" link="" />
        <TechInput title="Custom Plugins" link="" />
        <TechInput title="cPanel" link="" />
      </div>

      {/* <Title text="Blockchain" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Golang" link="" />
        <TechInput title="Ethersjs" link="" />
        <TechInput title="Solidity" link="" />
        <TechInput title="Hard Hat" link="" />
        <TechInput title="DeFi" link="" />
      </div>

      {/* <Title text="Security" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Bitwarden" link="" />
        <TechInput title="2FA" link="" />
        <TechInput title="SSH" link="" />
        <TechInput title="IAM" link="" />
      </div>

      {/* <Title text="Apps" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap">
        <TechInput title="Google Firebase" link="https://firebase.google.com/" />
        <TechInput title="Android Studio" link="" />
        <TechInput title="Java" link="" />
        <TechInput title="Affinity Designer" link="https://affinity.serif.com/en-us/designer/" />
        <TechInput title="Cloud front" link="" />
        <TechInput title="S3" link="" />
        <TechInput title="EC2" link="" />
      </div>
    </div>
  );
};

export default Tech;
