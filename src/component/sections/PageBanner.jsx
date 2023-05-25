const PageBanner = ({ img, title, subTitle }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="lg:h-[500px] h-52 flex items-center justify-center mx-auto bg-cover"
    >
      <div className="lg:w-3/5 lg:py-10 mt-10 bg-[#151515bb] text-white font-cinzel uppercase">
        <div className="lg:card-body p-5 text-center">
          <h2 className="lg:text-4xl font-bold">{title}</h2>
          <p className="lg:text-lg text-[10px]">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
