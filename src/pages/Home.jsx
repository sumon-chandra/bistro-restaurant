import Banner from "../component/home/Banner";
import ChefRecommends from "../component/sections/ChefRecommends";
import Menu from "../component/sections/Menu";
import Features from "../component/sections/Features";
import OrderOnline from "../component/sections/order-online/OrderOnline";
import Testimonials from "../component/sections/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="">
        <OrderOnline />
        <section className="lg:mt-20 lg:w-[1320px] lg:h-[500px] lg:px-0 px-4 flex items-center justify-center mx-auto lg:border-0 border shadow-xl lg:py-0 lg:bg-[url('https://i.ibb.co/zGkdsvb/chef-service.jpg')]">
          <div className="lg:w-3/4 lg:py-20 bg-white">
            <div className="card-body lg:text-center">
              <h2 className="uppercase lg:text-4xl text-xl font-cinzel font-normal">
                Bistro Boss
              </h2>
              <p className="font-inter lg:text-lg text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </section>
        <Menu />
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
