const SectionHead = ({ heading, subHeading, features }) => {
  return (
    <div className="lg:w-96 w-full mx-auto text-center z-10">
      <p className="text-primaryColor italic mb-2">----{subHeading}----</p>
      <h2
        className={`lg:text-2xl font-semibold text-xl uppercase py-4 border-y-4 border-gray-300 ${
          features === true && "text-white"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionHead;
