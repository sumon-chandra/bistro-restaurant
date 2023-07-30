import Button from "../buttons/Button";

const MenuCategory = ({ items, isHome }) => {
  return (
    <>
      <div className="lg:grid grid-cols-2 gap-8 relative pb-24 mt-10">
        {items.map((menuItem) => (
          <div key={menuItem._id}>
            <div className="flex justify-start gap-4 items-center mt-4 lg:mt-0 shadow-md p-4 bg-white">
              <figure>
                <img
                  src={menuItem.image}
                  alt=""
                  className="w-[118px] lg:h-[104px] h-11 object-cover"
                />
              </figure>
              <div className="">
                <h3 className="font-cinzel text-lx uppercase font-bold">
                  {menuItem.name} --------
                </h3>
                <p className="text-xs">{menuItem.recipe}</p>
                <h3 className="text-primaryColor text-2xl font-bold">
                  ${menuItem.price}
                </h3>
              </div>
            </div>
            <Button item={menuItem?.category} isHome={isHome} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
