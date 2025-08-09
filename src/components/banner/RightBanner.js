

// // RightBanner.jsx
// const RightBanner = () => {
//   return (
//     <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
//       <img
//         className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 rounded-xl shadow-lg shadow-designColor/30"
//         src={"https://res.cloudinary.com/dkulkn9be/image/upload/v1753946217/freepik__digital_marketer_hero.png"}
//         alt="bannerImg"
//       />
//       <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full"></div>
//     </div>
//   );
// }

// export default RightBanner;
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10 object-cover rounded-full shadow-lg shadow-designColor/30"
        src={"https://res.cloudinary.com/dufkxmegs/image/upload/v1754734460/8270d6df-4173-4a70-86e7-116c3d9c7cdd-removebg-preview_nl58ym.png"}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full"></div>
    </div>
  );
};

export default RightBanner;
