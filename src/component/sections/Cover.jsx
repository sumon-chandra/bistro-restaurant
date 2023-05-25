const Cover = ({ inHome, img, title, details }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="lg:mt-20 lg:h-[500px] h-52 lg:px-0 px-4 flex items-center justify-center mx-auto bg-cover"
    >
      <div
        className={`lg:w-3/5 lg:py-10 ${
          inHome ? "bg-white text-black" : "bg-[#151515bb] text-white"
        }`}
      >
        <div className="card-body text-center">
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
