const Cover = ({ inHome, img, title, details }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="lg:mt-20 lg:w-[1320px] lg:h-[500px] lg:px-0 px-4 flex items-center justify-center mx-auto lg:border-0 border shadow-xl lg:py-0"
    >
      <div
        className={`lg:w-3/5 lg:py-10 ${
          inHome && "bg-white text-black"
        } bg-[rgba(21, 21, 21, 0.6)] text-white`}
      >
        <div className="card-body lg:text-center">
          <h2 className="uppercase lg:text-4xl text-xl font-cinzel font-normal">
            {title}
          </h2>
          <p className="font-inter lg:text-lg text-xs">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
