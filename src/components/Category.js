const Category = ({ data }) => {
  return (
    <div className="main">
      {data.categories.map((category, index) => {
        console.log(category);
        return (
          <div>
            <h1 className="py-4 text-2xl font-bold text-gray-800">
              {category.name}
            </h1>
            <div className="flex flex-wrap gap-4">
              {category.meals.map((meal) => {
                return (
                  <div className="flex w-[400px] items-center justify-between rounded-md bg-white p-5">
                    <div>
                      <h3 className="text-xl">{meal.title}</h3>
                      <div className="h-[40px] w-[220px] truncate text-sm">
                        {meal.description}
                      </div>
                      <div className="flex gap-4">
                        <div className="text-gray-500">{meal.price}</div>
                        {meal.popular ? (
                          <div className="flex items-center justify-center text-[#FC8002]">
                            <i className="icon-STAR_FILL"></i>
                            <span className="pl-1 text-xs font-bold">
                              Populaire
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    {meal.picture ? (
                      <div className="h-[130px] w-[130px]">
                        <img
                          className="h-full w-full object-cover"
                          src={meal.picture}
                          alt=""
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Category;
