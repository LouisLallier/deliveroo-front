import { useState } from "react";

const Meal = ({ meal, cart, setCart }) => {
  const [quantity, setQuantity] = useState(0);

  const addMeal = () => {
    const newTab = [...cart];
    if (quantity === 0) {
      setQuantity(1);
      meal.quantity = quantity;
      newTab.push(meal);
      setCart(newTab);
    } else {
      meal.quantity = quantity;
      setQuantity(meal.quantity + 1);
      setCart(newTab);
    }
  };

  return (
    <button
      onClick={addMeal}
      className="flex w-[400px] justify-between rounded-md bg-white p-5 hover:shadow-md"
    >
      <div className="flex h-full flex-col justify-between">
        <h3 className="text-start text-xl">{meal.title}</h3>
        <div className="h-[40px] w-[220px] truncate pt-2 text-start text-sm">
          {meal.description}
        </div>
        <div className="flex gap-4">
          <div className="text-gray-500">{meal.price} €</div>
          {meal.popular ? (
            <div
              className="flex
                           text-[#FC8002]"
            >
              <i className="icon-STAR_FILL"></i>
              <span className="pl-1 text-xs font-bold">Populaire</span>
            </div>
          ) : null}
        </div>
      </div>
      {meal.picture ? (
        <div className="h-[130px] w-[130px]">
          <img
            className="h-full w-full rounded-md  object-cover"
            src={meal.picture}
            alt=""
          />
        </div>
      ) : (
        <div className="h-[130px] w-[130px]"></div>
      )}
    </button>
  );
};
export default Meal;
