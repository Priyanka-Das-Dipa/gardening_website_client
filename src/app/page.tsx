/* eslint-disable prettier/prettier */
import Banner from "../components/pages/home/Banner";
import Category from "../components/pages/home/Category";
import Experiance from "../components/pages/home/Experiance";
import PopularPost from "../components/pages/home/PopularPost";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Banner/>
      <Experiance/>
      <Category/>
      <PopularPost/>
    </div>
  );
};

export default HomePage;
