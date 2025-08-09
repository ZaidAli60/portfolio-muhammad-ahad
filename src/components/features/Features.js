import { FaSearch, FaBullhorn, FaChartLine, FaPaintBrush, FaUsers, FaEnvelopeOpenText } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        
        <Card
          icon={<FaSearch />}
          title="SEO Optimization"
          des="Improve website rankings on Google with keyword research, on-page optimization, and link building."
        />

        <Card
          title="Social Media Marketing"
          des="Grow brand presence and engagement on Facebook, Instagram, LinkedIn, and more with targeted strategies."
          icon={<FaBullhorn />}
        />

        <Card
          title="Analytics & Reporting"
          des="Track and analyze campaign performance using Google Analytics, Search Console, and custom reports."
          icon={<FaChartLine />}
        />

        <Card
          title="Branding & Design"
          des="Create visually appealing brand assets, ad creatives, and content that connect with your audience."
          icon={<FaPaintBrush />}
        />

        <Card
          title="Community Engagement"
          des="Build and manage online communities, interact with customers, and boost loyalty through authentic engagement."
          icon={<FaUsers />}
        />

        <Card
          title="Email Marketing"
          des="Craft effective email campaigns with personalized content, automation, and measurable results."
          icon={<FaEnvelopeOpenText />}
        />

      </div>
    </section>
  );
}

export default Features;
