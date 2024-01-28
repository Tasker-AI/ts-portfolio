import { RiComputerLine } from "react-icons/ri";
import Title from "./Title";
import TechInput from "./TechInput";

const Tech = () => {
  return (
    <div className="wrapper">
      <Title text="Tech Stack" icon={<RiComputerLine />} />


      {/* <Title text="Tools" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="GPTs & GPT4" link="https://chat.openai.com/" />
        <TechInput title="LLAMA2" link="https://ai.meta.com/llama/" />
        <TechInput title="GitHub Copilot" link="https://github.com/features/copilot" />
        <TechInput title="Linux CLI" link="https://ubuntu.com/" />
        <TechInput title="Google Sheets" link="https://www.google.com/sheets/about/" />
        <TechInput title="VS Code" link="https://code.visualstudio.com/" />
        <TechInput title="4 Screens" link="https://www.linuxquestions.org/questions/linux-hardware-18/will-linux-desktops-support-four-4-monitors-4175597701/" />
      </div>

      {/* <Title text="VCS" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Git Bash" link="https://git-scm.com/" />
        <TechInput title="Github" link="https://github.com/" />
        <TechInput title="GitLab" link="https://about.gitlab.com/" />
        <TechInput title="Code Commit" link="https://aws.amazon.com/codecommit/" />
      </div>
    

      {/* <Title text="Front End" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />
        <TechInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <TechInput title="Bootstrap" link="https://getbootstrap.com/" />
        <TechInput title="Tailwindcss" link="https://tailwindcss.com/" />
      </div>

      {/* <Title text="Front End" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <TechInput title="jQuery" link="https://jquery.com/" />
        <TechInput title="Reactjs" link="https://react.dev/" />
        <TechInput title="Nextjs" link="https://nextjs.org/" />
        <TechInput title="Nodejs" link="https://nodejs.org/en" />
        <TechInput title="Typescript" link="https://www.typescriptlang.org/" />
        <TechInput title="JSON" link="https://www.json.org/json-en.html" />
        <TechInput title="APIs" link="https://en.wikipedia.org/wiki/API" />
      </div>

      {/* <Title text="Back End" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="PHP" link="https://www.php.net/" />
        <TechInput title="Code Igniter" link="https://www.codeigniter.com/" />
        <TechInput title="Laravel" link="https://laravel.com/" />
        <TechInput title="Apache" link="https://httpd.apache.org/" />
        <TechInput title="Nginx" link="https://www.nginx.com/" />
        <TechInput title="Docker" link="https://www.docker.com/" />
        <TechInput title="MySQL Workbench" link="https://www.mysql.com/products/workbench/" />
      </div>

      {/* <Title text="Wordpress" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="WordPress" link="https://wordpress.org/" />
        <TechInput title="Elementor" link="https://elementor.com/" />
        <TechInput title="WooCommerce" link="https://wordpress.org/plugins/woocommerce/" />
        <TechInput title="Custom Plugins" link="https://wordpress.org/plugins/" />
        <TechInput title="cPanel" link="https://cpanel.hostinger.com/" />
      </div>

      {/* <Title text="Blockchain" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Golang" link="https://go.dev/" />
        <TechInput title="Ethersjs" link="https://docs.ethers.org/v6/" />
        <TechInput title="Solidity" link="https://soliditylang.org/" />
        <TechInput title="Hard Hat" link="https://hardhat.org/" />
        <TechInput title="DeFi" link="https://www.coinbase.com/learn/crypto-basics/what-is-defi#:~:text=Short%20for%20decentralized%20finance%2C%20DeFi,on%20public%20blockchains%2C%20primarily%20Ethereum." />
      </div>

      {/* <Title text="Security" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Bitwarden" link="https://bitwarden.com/" />
        <TechInput title="2FA" link="https://en.wikipedia.org/wiki/Multi-factor_authentication" />
        <TechInput title="SSH" link="https://en.wikipedia.org/wiki/Secure_Shell" />
        <TechInput title="IAM" link="https://aws.amazon.com/iam/" />
      </div>

      {/* <Title text="Cloud / Other" icon={<RiComputerLine />} /> */}
      <div className="flex gap-4 flex-wrap">
        <TechInput title="Google Firebase" link="https://firebase.google.com/" />
        <TechInput title="Android Studio" link="https://developer.android.com/studio?gclid=CjwKCAiAp5qsBhAPEiwAP0qeJlkj41tC1TeJb2zXFUZg1yqupIMv93-Oedv4gGjeh5y2lkCiRLUCiBoCVnoQAvD_BwE&gclsrc=aw.ds" />
        <TechInput title="Java" link="https://www.java.com/en/" />
        <TechInput title="Affinity Designer" link="https://affinity.serif.com/en-us/designer/" />
        <TechInput title="Figma" link="https://www.figma.com/" />
        <TechInput title="SketchUp" link="https://www.sketchup.com/" />
        <TechInput title="Cloud front" link="https://aws.amazon.com/cloudfront/" />
        <TechInput title="S3" link="https://aws.amazon.com/s3/" />
        <TechInput title="EC2" link="https://aws.amazon.com/ec2/" />
      </div>
    </div>
  );
};

export default Tech;
