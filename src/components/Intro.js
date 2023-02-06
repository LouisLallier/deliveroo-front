const Intro = ({ data }) => {
  const { name, description } = data.restaurant;
  return (
    <div className="mb-8 flex">
      <div>
        <h1 className="text-3xl font-bold text-gray-700 ">{name}</h1>
        <div className="p my-[20px] pr-10 leading-loose text-gray-500">
          {description}
        </div>
      </div>
      <img
        className="h-[200px] rounded-md"
        src={data.restaurant.picture}
        alt=""
      />
    </div>
  );
};

export default Intro;
