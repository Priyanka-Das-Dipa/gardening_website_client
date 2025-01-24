/* eslint-disable prettier/prettier */
import AboutSection from "../components/pages/home/AboutSection";
import Banner from "../components/pages/home/Banner";
import Category from "../components/pages/home/Category";
import Experiance from "../components/pages/home/Experiance";
import PopularPost from "../components/pages/home/PopularPost";
import RecentPublish from "../components/pages/home/RecentPublish";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Banner/>
      <Experiance/>
      <Category/>
      <PopularPost/>
      <AboutSection/>
      <RecentPublish/>
    </div>
  );
};

export default HomePage;
