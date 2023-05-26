import useMenu from "../../hooks/useMenu";
import MenuCategory from "../our-menu/MenuCategory";
import SectionHead from "../sections/SectionHead";

const PopularMenus = () => {
  const { menu } = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="lg:w-1200 lg:mt-20 mt-8 mx-auto lg:px-0 px-4">
      <SectionHead heading={"From Our menu"} subHeading={"Check it out"} />
      <MenuCategory items={popular} />
    </section>
  );
};

export default PopularMenus;
