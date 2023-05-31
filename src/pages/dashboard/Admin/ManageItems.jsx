import { Helmet } from "react-helmet-async";
import SectionHead from "./../../../component/sections/SectionHead";
import useMenu from "../../../hooks/useMenu";
import ManageCartTable from "../../../component/cards/ManageCartTable";

const ManageItems = () => {
  const { menu } = useMenu();
  return (
    <>
      <Helmet>
        <title>Manage Items - Bistro Boss Restaurant</title>
      </Helmet>
      <section>
        <div className="lg:my-10 my-4">
          <SectionHead heading="Manage your items!" subHeading="All Items" />
        </div>
        <div className="w-full">
          <div className="uppercase font-cinzel lg:text-2xl text-xs font-bold p-3">
            <h4>
              Total items: {menu.length < 9 ? `0${menu.length}` : menu.length}
            </h4>
          </div>
          <table className="table table-zebra overflow-x-auto w-full">
            <thead>
              <tr>
                <th className="lg:text-xl">#</th>
                <th className="lg:text-xl">Image</th>
                <th className="lg:text-xl">Name</th>
                <th className="lg:text-xl">Price</th>
                <th className="lg:text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <ManageCartTable key={item._id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageItems;
