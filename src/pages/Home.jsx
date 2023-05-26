import { Helmet } from "react-helmet-async";
import Banner from "../component/home/Banner";
import ChefRecommends from "../component/home/ChefRecommends";
import Features from "../component/home/Features";
import Testimonials from "../component/home/Testimonials";
import PopularMenus from "../component/home/PopularMenus";
import Cover from "../component/sections/Cover";
import coverImg from "../assets/home/chef-service.jpg";
import OrderOnline from "../component/order-online/OrderOnline";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Bistro Boss Restaurant</title>
      </Helmet>
      <Banner />
      <main className="">
        <OrderOnline />
        <Cover
          inHome={true}
          img={coverImg}
          title="Bistro Boss"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        />
        <PopularMenus />
        <section className="lg:mt-20 mt-10 lg:w-1200 lg:h-[250px] lg:px-0 px-4 h-24 mx-auto bg-black flex items-center justify-center ">
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
