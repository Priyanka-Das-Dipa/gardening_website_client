/* eslint-disable prettier/prettier */
import Banner from "../components/pages/home/Banner";
import Category from "../components/pages/home/Category";
import Experiance from "../components/pages/home/Experiance";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Banner/>
      <Experiance/>
      <Category/>
    </div>
  );
};

export default HomePage;
