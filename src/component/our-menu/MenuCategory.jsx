import { Link } from "react-router-dom";

const MenuCategory = ({ items }) => {
  return (
    <>
      <div className="lg:grid grid-cols-2 gap-8 relative pb-24 mt-10">
        {items.map((menuItem) => (
          <div key={menuItem._id}>
            <div className="flex items-start justify-between mt-4 lg:mt-0">
              <figure>
                <img
                  src={menuItem.image}
                  alt=""
                  className="w-[118px] lg:h-[104px] h-11 object-cover rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]  "
                />
              </figure>
              <div className="lg:ms-8 ms-2">
                <h3 className="font-cinzel text-lx uppercase font-normal">
                  {menuItem.name} --------
                </h3>
                <p>{menuItem.recipe}</p>
              </div>
              <h3 className="text-primaryColor text-xl">${menuItem.price}</h3>
            </div>
            <div className="mx-auto absolute bottom-4 text-center w-full">
              <Link
                to={`/shop/${menuItem.category}`}
                className="uppercase border-b-2 bg-slate-100 py-2 px-4 font-inter font-semibold mt-6 border-gray-700 rounded-md"
              >
                Order your favorite food
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
