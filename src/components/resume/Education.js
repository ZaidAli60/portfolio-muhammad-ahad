import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="GC University of Faisalabad (2021 - 2025)"
            result="3.4 / 4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Intermediate ICS"
            subTitle="Aspire group of college (2019 - 2021)"
            result="960 / 1100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Fatima Jinnah New Lahore (2017 - 2019)"
            result="860 / 1100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Full Stack Developer & Trainer"
            subTitle="CoDev - (2024 Dec - Present)"
            result="Faisalabad"
            des="Leading full-stack development projects and mentoring junior developers on modern web technologies and best practices."
          />

          <ResumeCard
            title="Full Stack Developer"
            subTitle="Enfixo Technologies - (2024 Mar - 2024 Nov)"
            result="Faisalabad"
            des="Built a donation and expense system using the full stack, ensuring smooth data flow and user-friendly interfaces."
          />

          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Seeraht - (2023 Apr - 2024 Mar)"
            result="Faisalabad"
            des="Built a donation and expense system using the MERN stack, ensuring smooth data flow and user-friendly interfaces."
          />

          <ResumeCard
            title="Front-end Developer"
            subTitle="Utecho - (2022 Dec - 2023 Mar)"
            result="Faisalabad"
            des="Developed responsive React.js interfaces and collaborated with teams to deliver dynamic web apps."
          />

        </div>
      </div> */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Senior Digital Marketing Strategist"
            subTitle="BrandBoost Agency - (2024 Dec - Present)"
            result="Faisalabad"
            des="Leading multi-channel marketing campaigns including SEO, PPC, and social media strategies to drive brand growth and online visibility."
          />

          <ResumeCard
            title="Social Media Marketing Specialist"
            subTitle="MarketWave Solutions - (2024 Mar - 2024 Nov)"
            result="Faisalabad"
            des="Planned and executed paid ad campaigns on Facebook, Instagram, and LinkedIn, achieving over 150% ROI on average."
          />

          <ResumeCard
            title="SEO & Content Marketing Expert"
            subTitle="ClickReach Digital - (2023 Apr - 2024 Mar)"
            result="Faisalabad"
            des="Optimized websites for search engines, developed keyword strategies, and created high-engagement blog content for various industries."
          />

          <ResumeCard
            title="Digital Marketing Intern"
            subTitle="AdVision Media - (2022 Dec - 2023 Mar)"
            result="Faisalabad"
            des="Assisted in campaign monitoring, audience research, and preparing analytics reports for ongoing marketing efforts."
          />

        </div>
      </div>

    </motion.div>
  );
};

export default Education;
