import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Side - Digital Marketing Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Digital Marketing Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <SkillBar title="SEO Optimization" percent="95%" />
          <SkillBar title="Social Media Marketing" percent="100%" />
          <SkillBar title="Content Marketing" percent="90%" />
          <SkillBar title="Email Marketing" percent="85%" />
          <SkillBar title="Google Ads & PPC" percent="80%" />
          <SkillBar title="Brand Strategy" percent="90%" />
          <SkillBar title="Influencer Marketing" percent="70%" />
        </div>
      </div>

      {/* Right Side - Analytics & Tools Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tools & Analytics
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Marketing Tools Mastery</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar title="Google Analytics" percent="95%" />
          <SkillBar title="Facebook Ads Manager" percent="90%" />
          <SkillBar title="Canva & Creative Tools" percent="85%" />
          <SkillBar title="HubSpot CRM" percent="80%" />
          <SkillBar title="Ahrefs / SEMrush" percent="85%" />
          <SkillBar title="A/B Testing & CRO" percent="75%" />
        </div>
      </div>
    </motion.div>
  );
}

// Reusable Skill Bar Component
const SkillBar = ({ title, percent }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{title}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`w-[${percent}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
        >
          <span className="absolute -top-7 right-0">{percent}</span>
        </motion.span>
      </span>
    </div>
  );
};

export default Skills;
