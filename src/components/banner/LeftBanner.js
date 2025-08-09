// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaFacebookF, FaLinkedinIn, FaReact, FaGithub, FaWhatsapp } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";
// import { IoLogoNodejs } from "react-icons/io5";

// const LeftBanner = () => {
//   const [text] = useTypewriter({
//     words: ["Professional Coder.", "Full Stack Developer.", "Dev_Enthusiast."],
//     loop: true,
//     typeSpeed: 20,
//     deleteSpeed: 10,
//     delaySpeed: 2000,
//   });
//   return (
//     <div className="w-full lgl:w-1/2 flex flex-col gap-20">
//       <div className="flex flex-col gap-5">
//         <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
//         <h1 className="text-6xl font-bold text-white"> Hi, I'm <span className="text-designColor capitalize">Hasnat Majid</span></h1>
//         <h2 className="text-4xl font-bold text-white"> a <span>{text}</span><Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#42A5F5" /></h2>
//         <p className="text-base font-bodyFont leading-6 tracking-wide">
//           I'm a Full Stack Developer skilled in the MERN stack and mobile app development. I build responsive, user-friendly web and mobile solutions with clean and efficient code. I’m passionate about solving problems and creating impactful digital experiences.
//         </p>
//       </div>
//       <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4"> Find me in</h2>
//           <div className="flex gap-4">
//             <a href={window.links.whatsapp} target="blank"><span className="bannerIcon"><FaWhatsapp /></span></a>
//             <a href={window.links.facebook} target="blank"><span className="bannerIcon"><FaFacebookF /></span></a>
//             <a href={window.links.linkedIn} target="blank"><span className="bannerIcon"><FaLinkedinIn /></span></a>
//             <a href={window.links.github} target="blank"><span className="bannerIcon"><FaGithub /></span></a>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4"> BEST SKILL ON</h2>
//           <div className="flex gap-4">
//             <span className="bannerIcon"><IoLogoJavascript /></span>
//             <span className="bannerIcon"><FaReact /></span>
//             <span className="bannerIcon"><SiNextdotjs /></span>
//             <span className="bannerIcon"><IoLogoNodejs /></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftBanner;


// LeftBanner.jsx
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGoogleanalytics, SiGooglesearchconsole, SiCanva, SiGoogleads } from "react-icons/si";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "SEO Specialist.",
      "Social Media Marketer.",
      "PPC Campaign Manager.",
      "Brand Growth Strategist."
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-gray-300">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Muhammad Ahad</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#42A5F5" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-400">
          I’m a Digital Marketing Specialist helping brands grow through 
          data-driven SEO, targeted ad campaigns, and creative social media strategies. 
          My mission is to turn clicks into customers and ideas into impactful online presence.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        {/* Social Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
          <div className="flex gap-4">
            <a href={window.links.whatsapp} target="blank"><span className="bannerIcon"><FaWhatsapp /></span></a>
            <a href={window.links.facebook} target="blank"><span className="bannerIcon"><FaFacebookF /></span></a>
            <a href={window.links.instagram} target="blank"><span className="bannerIcon"><FaInstagram /></span></a>
            <a href={window.links.linkedIn} target="blank"><span className="bannerIcon"><FaLinkedinIn /></span></a>
          </div>
        </div>

        {/* Best Skills */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Core Expertise</h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><SiGoogleanalytics /></span>
            <span className="bannerIcon"><SiGooglesearchconsole /></span>
            <span className="bannerIcon"><SiGoogleads /></span>
            <span className="bannerIcon"><SiCanva /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
