import Banner from "../component/home/Banner";
import Menu from "../component/sections/Menu";
import OrderOnline from "../component/sections/order-online/OrderOnline";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="lg:px-0 px-4">
        <OrderOnline />
        <section className="lg:mt-20 lg:w-[1320px] lg:h-[500px] flex items-center justify-center mx-auto lg:border-0 border shadow-xl lg:py-0 lg:bg-[url('https://i.ibb.co/zGkdsvb/chef-service.jpg')]">
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
      </main>
    </>
  );
};

export default Home;
