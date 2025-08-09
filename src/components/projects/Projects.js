import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="SEE MY WORK AND GET INSPIRED" des="Marketing Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        <ProjectsCard
          link="#"
          title="E-commerce SEO Campaign"
          des="Increased organic traffic by 250% for an online fashion store through keyword research, on-page optimization, and a strategic backlink campaign."
          src="https://media.istockphoto.com/id/1316590670/photo/search-engine-optimization.webp?s=2048x2048&w=is&k=20&c=zP_CmZuXHmdzR3wny1Gj-uI4A9g63JcO04iZ8HCOkcU="
        />

        <ProjectsCard
          link="#"
          title="Facebook Ads for Local Business"
          des="Created and managed a Facebook Ads campaign for a local restaurant, generating 1,200+ leads in 30 days with targeted audience segmentation."
          src="https://images.unsplash.com/photo-1553147324-7f50517efe04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZhY2Vib29rJTIwQWRzJTIwZm9yJTIwTG9jYWwlMjBCdXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D"
        />

        <ProjectsCard
          link="#"
          title="Branding & Content Strategy"
          des="Developed a complete brand identity and content calendar for a startup, including logo design, brand colors, and social media templates."
          src="https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0="
        />

        <ProjectsCard
          link="#"
          title="Instagram Growth Campaign"
          des="Grew an Instagram account from 1,500 to 15,000 followers in 4 months through reels, influencer partnerships, and strategic hashtag targeting."
          src="https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5zdGFncmFtJTIwR3Jvd3RoJTIwQ2FtcGFpZ258ZW58MHx8MHx8fDA%3D"
        />

        <ProjectsCard
          link="#"
          title="Google Ads for Online Store"
          des="Optimized Google Ads campaigns for an electronics store, achieving a 5x ROAS with targeted product listing ads and remarketing strategies."
          src="https://media.istockphoto.com/id/2156198253/photo/online-sales-concept-of-digital-marketing-ad-product-ads-promotion-of-products-or-services.webp?a=1&b=1&s=612x612&w=0&k=20&c=vNKJKVTU_bXHw64vsithW1LRHMFAp5cQxRJrNysA7pI="
        />

        <ProjectsCard
          link="#"
          title="Email Marketing Automation"
          des="Implemented an automated email funnel for a coaching business, increasing conversions by 35% through personalized follow-ups."
          src="https://plus.unsplash.com/premium_photo-1661375025352-d5a4d633999b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RW1haWwlMjBNYXJrZXRpbmclMjBBdXRvbWF0aW9ufGVufDB8fDB8fHww"
        />

      </div>
    </section>
  );
}

export default Projects;

