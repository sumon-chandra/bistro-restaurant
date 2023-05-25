import { Helmet } from "react-helmet-async";
import PageBanner from "../component/sections/PageBanner";
import bannerImg from "../assets/menu/banner3.jpg";
import SectionHead from "./../component/sections/SectionHead";
import useMenu from "./../hooks/useMenu";
import MenuCategory from "../component/our-menu/MenuCategory";
import Cover from "../component/sections/Cover";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  const { menu } = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

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
      <main className="lg:mt-20 mt-8">
        <div className="mb-10">
          <SectionHead heading="Today's offer" subHeading="Don't miss" />
        </div>
        {/* ***** Offered Menu Items */}
        <div className="lg:w-[1320px] px-4 lg:px-0 mx-auto mb-10">
          <MenuCategory items={offered} />
        </div>
        {/* ***** Desserts Menu Items */}
        <div className="mb-10">
          <Cover
            title="Desserts"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={dessertImg}
          />
          <div className="lg:w-[1320px] px-4 lg:px-0 mx-auto mt-10">
            <MenuCategory items={desserts} />
          </div>
        </div>
        {/* ***** Pizza Menu Items */}
        <div className="mb-10">
          <Cover
            title="Pizza"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={pizzaImg}
          />
          <div className="lg:w-[1320px] px-4 lg:px-0 mx-auto mt-10">
            <MenuCategory items={pizza} />
          </div>
        </div>
        {/* ***** Salad Menu Items */}
        <div className="mb-10">
          <Cover
            title="Salads"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={saladImg}
          />
          <div className="lg:w-[1320px] px-4 lg:px-0 mx-auto mt-10">
            <MenuCategory items={salads} />
          </div>
        </div>
        {/* ***** Soup Menu Items */}
        <div className="mb-10">
          <Cover
            title="Soups"
            details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={soupImg}
          />
          <div className="lg:w-[1320px] px-4 lg:px-0 mx-auto mt-10">
            <MenuCategory items={soups} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
