import Meals from "./Meals";

const Category = ({ category, cart, setCart }) => {
  return (
    <div className="py-4">
      <h1 className="py-4 text-2xl font-bold text-gray-800">{category.name}</h1>
      <div className="flex flex-wrap gap-4">
        {category.meals.map((meal, index) => {
          return (
            <Meals cart={cart} setCart={setCart} key={index} meal={meal} />
          );
        })}
      </div>
    </div>
  );
};
export default Category;
