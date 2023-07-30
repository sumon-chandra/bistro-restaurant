import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Helmet } from "react-helmet-async";
import useMenu from "./../hooks/useMenu";
import PageBanner from "./../component/sections/PageBanner";
import shopBanner from "../assets/shop/banner2.jpg";
import SectionHead from "./../component/sections/SectionHead";
import FoodCategory from "../component/shop/FoodCategory";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Shop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const defaultTab = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(defaultTab);
  const { menu } = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Shop - Bistro Boss Restaurant</title>
      </Helmet>
      <PageBanner
        title="Our shop"
        subTitle="Explore our foods !"
        img={shopBanner}
      />
      <section className="lg:mt-20 mt-8 lg:w-1200 mx-auto px-4 lg:px-0">
        <div className="mb-10">
          <SectionHead heading="Our Shop" subHeading="Explore now" />
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="shop-react-tabs border-0 flex justify-center items-center gap-x-6 text-xl font-bold">
            <Tab className="border-b-4 border-transparent py-2 cursor-pointer hover:text-primaryColor border-primaryColor">
              Salad
            </Tab>
            <Tab className="border-b-4 border-transparent p-2 cursor-pointer hover:text-primaryColor ">
              Pizza
            </Tab>
            <Tab className="border-b-4 border-transparent p-2 cursor-pointer hover:text-primaryColor ">
              Soups
            </Tab>
            <Tab className="border-b-4 border-transparent p-2 cursor-pointer hover:text-primaryColor ">
              Deserts
            </Tab>
            <Tab className="border-b-4 border-transparent p-2 cursor-pointer hover:text-primaryColor ">
              Drinks
            </Tab>
          </TabList>
          <div className="pt-14">
            <TabPanel>
              <FoodCategory items={salads} />
            </TabPanel>
            <TabPanel>
              <FoodCategory items={pizza} />
            </TabPanel>
            <TabPanel>
              <FoodCategory items={soups} />
            </TabPanel>
            <TabPanel>
              <FoodCategory items={dessert} />
            </TabPanel>
            <TabPanel>
              <FoodCategory items={drinks} />
            </TabPanel>
          </div>
        </Tabs>
      </section>
    </>
  );
};

export default Shop;
