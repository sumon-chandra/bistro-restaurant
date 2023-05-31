import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionHead from "./../../../component/sections/SectionHead";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const api_key = import.meta.env.VITE_Image_Hosing_Token;
  const img_hosing_url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  const handleAddFood = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosing_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((item) => {
        const imgUrl = item.data.display_url;
        const newMenuItem = {
          name: data.name,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: imgUrl,
        };
        axiosSecure.post("/menu", newMenuItem).then(({ data }) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Add an item - Bistro Boss Restaurant</title>
      </Helmet>
      <section>
        <div className="mt-4 lg:mt-10">
          <SectionHead
            heading="Add Your favorite Food"
            subHeading="Add A Food"
          />
        </div>
        <form
          onSubmit={handleSubmit(handleAddFood)}
          className="card-body font-inter lg:mt-20 bg-slate-300 mx-32 p-8 rounded-lg"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input"
            />
            {errors.name && (
              <span className="text-red-400 text-xs font-semibold mt-2">
                This field is required
              </span>
            )}
          </div>
          <div className="flex items-center gap-8 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-xl">Category*</span>
              </label>
              <select
                {...register("category", {
                  required: true,
                })}
                defaultValue="Pick One"
                className="input"
              >
                <option disabled>Pick One</option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Desert</option>
                <option>Drinks</option>
              </select>
              {errors.category && (
                <span className="text-red-400 text-xs font-semibold mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-xl">Price</span>
              </label>
              <input
                type="text"
                {...register("price", {
                  required: true,
                })}
                placeholder="Price"
                className="input"
              />
              {errors.price && (
                <span className="text-red-400 text-xs font-semibold mt-2">
                  This field is required.
                </span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">
                Recipe Details*
              </span>
            </label>
            <textarea
              type="text"
              {...register("recipe", {
                required: true,
              })}
              placeholder="Recipe Details"
              className="input min-h-[200px]"
            />
            {errors.price && (
              <span className="text-red-400 text-xs font-semibold mt-2">
                This field is required.
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input  w-full max-w-xs"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add Item"
              className="btn btn-sm lg:btn-md bg-secondaryColor hover:bg-primaryColor normal-case border-0 text-white lg:text-xl shadow-lg"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddItems;
