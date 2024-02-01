import backgroundImage from '../public/img/header-background.jpg';
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";


export default function Home() {
//   const mainStyle = {
//     backgroundImage: `url(${backgroundImage.src})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };

  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4" >
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}