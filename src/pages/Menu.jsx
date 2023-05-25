import { Helmet } from "react-helmet-async";
import PageBanner from "../component/sections/PageBanner";
import bannerImg from "../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Our Menu - Bistro Boss Restaurant</title>
      </Helmet>
      <header>
        <PageBanner
          img={bannerImg}
          title="Our menu"
          subTitle="Would you like to try a dish?"
        />
      </header>
    </>
  );
};

export default Menu;
