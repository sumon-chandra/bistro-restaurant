const SectionHead = ({ heading, subHeading }) => {
  return (
    <div className="lg:w-96 w-1/2 mx-auto text-center">
      <p className="text-primaryColor italic mb-2">----{subHeading}----</p>
      <h2 className="lg:text-2xl font-semibold text-xl uppercase py-4 border-y-4 border-gray-300">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHead;
