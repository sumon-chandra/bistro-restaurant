import { Parallax } from "react-scroll-parallax";

const Cover = ({ inHome, img }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="lg:mt-20 lg:w-[1320px] lg:h-[500px] lg:px-0 px-4 flex items-center justify-center mx-auto lg:border-0 border shadow-xl lg:py-0"
    >
      <Parallax
        speed={10}
        className={`lg:w-3/4 lg:py-20 ${
          inHome && "bg-white"
        } bg-[rgba(21, 21, 21, 0.6)]`}
      >
        <div className="card-body lg:text-center">
          <h2 className="uppercase lg:text-4xl text-xl font-cinzel font-normal">
            Bistro Boss
          </h2>
          <p className="font-inter lg:text-lg text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
