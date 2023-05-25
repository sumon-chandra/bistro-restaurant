import { Helmet } from "react-helmet-async";
import Banner from "../component/home/Banner";
import ChefRecommends from "../component/sections/ChefRecommends";
import Features from "../component/sections/Features";
import OrderOnline from "../component/sections/order-online/OrderOnline";
import Testimonials from "../component/sections/Testimonials";
import PopularMenus from "../component/sections/PopularMenus";
import Cover from "../component/sections/Cover";
import coverImg from "../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Bistro Boss Restaurant</title>
      </Helmet>
      <Banner />
      <main className="">
        <OrderOnline />
        <Cover inHome={true} img={coverImg} />
        <PopularMenus />
        <section className="lg:mt-20 mt-10 lg:w-[1320px] lg:h-[250px] lg:px-0 px-4 h-24 mx-auto bg-black flex items-center justify-center ">
          <p className="lg:text-5xl font-[600] font-cinzel text-white">
            Call Us: +88 0192345678910
          </p>
        </section>
        <ChefRecommends />
        <Features />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
