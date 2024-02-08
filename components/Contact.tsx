import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        {/* <h2 className="text-2xl font-bold"></h2> */}
        {/* <p className="text-lg tracking-wide font-medium text-center"></p> */}
        <a href="mailto:harry@taskersolutions.co.nz" target="_blank">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Work With Me
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/Tasker-AI/ts-portfolio" />
        <SocialLink title="Linkedin" link="https://www.linkedin.com/in/harry-tasker-ai/" />
      </div>
    </div>
  );
};

export default Contact;
