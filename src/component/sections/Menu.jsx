import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.slice(0, 6)));
  }, []);
  return (
    <section className="lg:w-[1320px] lg:mt-20 mt-8 mx-auto">
      <SectionHead heading={"From Our menu"} subHeading={"Check it out"} />
      <div className="lg:grid grid-cols-2 gap-8 pt-10">
        {menu.map((menuItem) => (
          <div key={menuItem._id} className="flex items-start justify-between">
            <figure>
              <img
                src={menuItem.image}
                alt=""
                className="w-[118px] h-[104px] object-cover rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]  "
              />
            </figure>
            <div className="ms-8">
              <h3 className="font-cinzel text-lx uppercase font-normal">
                {menuItem.name} --------
              </h3>
              <p>{menuItem.recipe}</p>
            </div>
            <h3 className="text-primaryColor text-xl">${menuItem.price}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
