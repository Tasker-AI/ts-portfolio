import { RiComputerLine } from "react-icons/ri";
import Title from "./Title";
import TechInput from "./TechInput";
import { GiSkills } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";

const Tech = () => {
  return (
    <div className="wrapper">
      <Title text="My Tool Box" icon={<VscTools />} />

      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="GPT 4o & o1" link="https://chat.openai.com/" />
        <TechInput title="Perplexity" link="https://www.perplexity.ai/" />
        <TechInput title="Ephor" link="https://ephor.ai/" />
        <TechInput title="Auto Gen" link="https://microsoft.github.io/autogen/0.2/" />
        <TechInput title="Cursor IDE" link="https://www.cursor.com/" />
        <TechInput title="Open Source LLMs" link="https://ai.meta.com/llama/" />
        <TechInput title="TextGen Web UI" link="https://github.com/oobabooga/text-generation-webui" />
        <TechInput title="Linux CLI" link="https://ubuntu.com/" />
        <TechInput title="AWS" link="https://aws.amazon.com/" />
        <TechInput title="Github" link="https://github.com/" />
        <TechInput title="GitPod" link="hhttps://www.gitpod.io/" />
        <TechInput title="RunPod GPU" link="https://www.runpod.io/" />
        <TechInput title="Google Docs" link="https://docs.google.com/" />
        <TechInput title="Google Sheets" link="https://sheets.google.com/" />
        <TechInput title="Google Workspace" link="https://www.google.com/sheets/about/" />
        <TechInput title="Active Directory" link="https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview" />
        <TechInput title="Figma" link="https://www.figma.com/" />
        <TechInput title="SketchUp" link="https://www.sketchup.com/" />
        <TechInput title="Bitwarden" link="https://bitwarden.com/" />
        <TechInput title="Android Studio" link="https://developer.android.com/studio" />
        <TechInput title="Draw.io" link="https://app.diagrams.net/" />
        <TechInput title="ZenDesk" link="zendesk.com" />
        <TechInput title="Kerio FireWall + VPN" link="https://gfi.ai/products-and-solutions/network-security-solutions/keriocontrol" />
        <TechInput title="SalesForce CRM" link="https://www.salesforce.com/" />
        <TechInput title="Postman REST APIs" link="https://www.postman.com/" />
        <TechInput title="Insomnia GQ APIs" link="https://insomnia.rest/" />
        <TechInput title="WordPress" link="https://wordpress.org/" />
        <TechInput title="Elementor" link="https://elementor.com/" />
        <TechInput title="WooCommerce" link="https://wordpress.org/plugins/woocommerce/" />
        <TechInput title="cPanel" link="https://cpanel.hostinger.com/" />
        <TechInput title="MySQL" link="https://www.mysql.com/products/workbench/" />
        <TechInput title="PHP" link="https://www.php.net/" />
        <TechInput title="Laravel" link="https://laravel.com/" />
        <TechInput title="Apache" link="https://httpd.apache.org/" /> 
        <TechInput title="Nginx" link="https://www.nginx.com/" />
        <TechInput title="Cloud front" link="https://aws.amazon.com/cloudfront/" />
        <TechInput title="S3" link="https://aws.amazon.com/s3/" />
        <TechInput title="EC2" link="https://aws.amazon.com/ec2/" />
        <TechInput title="IAM" link="https://aws.amazon.com/iam/" />
        <TechInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />
        <TechInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <TechInput title="Bootstrap" link="https://getbootstrap.com/" />
        <TechInput title="Tailwind CSS" link="https://tailwindcss.com/" />
        <TechInput title="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <TechInput title="jQuery" link="https://jquery.com/" />
        <TechInput title="ReactJS" link="https://react.dev/" />
        <TechInput title="NextJS" link="https://nextjs.org/" />
        <TechInput title="Nodejs" link="https://nodejs.org/en" />
        <TechInput title="TypeScript" link="https://www.typescriptlang.org/" />
        <TechInput title="JSON" link="https://www.json.org/json-en.html" />

      </div>

      {/* <Title text="Web Stack" icon={<RiComputerLine />} />
      <div className="flex gap-4 flex-wrap pb-8">

      </div> */}

      <Title text="Business Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Communication" link="#"/>
        <TechInput title="Leadership" link="#"/>
        <TechInput title="Customer relations" link="#"/>
        <TechInput title="Efficiency" link="#"/>
        <TechInput title="Innovation" link="#"/>
        <TechInput title="Organization" link="#"/>
        <TechInput title="Problem solving" link="#"/>
        <TechInput title="Prioritization" link="#"/>
        <TechInput title="Time management" link="#"/>
        <TechInput title="Fully Remote" link="#"/>
      </div>

      {/* <Title text="Cloud / Other" icon={<RiComputerLine />} />
      <div className="flex gap-4 flex-wrap">
        <TechInput title="Google Firebase" link="https://firebase.google.com/" />
        <TechInput title="Java" link="https://www.java.com/en/" />
        <TechInput title="Affinity Designer" link="https://affinity.serif.com/en-us/designer/" />
        <TechInput title="2FA" link="https://en.wikipedia.org/wiki/Multi-factor_authentication" />
      </div> */}

      {/* <Title text="Blockchain" icon={<RiComputerLine />} />
      <div className="flex gap-4 flex-wrap pb-8">
        <TechInput title="Golang" link="https://go.dev/" />
        <TechInput title="Ethersjs" link="https://docs.ethers.org/v6/" />
        <TechInput title="Solidity" link="https://soliditylang.org/" />
        <TechInput title="Hard Hat" link="https://hardhat.org/" />
        <TechInput title="DeFi" link="https://www.coinbase.com/learn/crypto-basics/what-is-defi#:~:text=Short%20for%20decentralized%20finance%2C%20DeFi,on%20public%20blockchains%2C%20primarily%20Ethereum." />
      </div> */}

    </div>
  );
};

export default Tech;
