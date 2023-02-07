import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/Category";
import Intro from "./components/Intro";
export const addItem = (item, quantity, cart, funcQuantity, funcCart) => {
  const newTab = [...cart];
  if (quantity === 0) {
    funcQuantity(1);
    item.quantity = quantity;
    newTab.push(item);
    funcCart(newTab);
  } else {
    item.quantity = quantity;
    funcQuantity(item.quantity + 1);
    funcCart(newTab);
  }
};
const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  console.log(cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/");
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header />
      <div className="container  w-[820px]">
        <Intro data={data} />
      </div>
      <div className="flex bg-gray-100">
        <div className="main min-h-full w-screen w-[1200PX] bg-gray-100">
          {data.categories.map((category, index) => {
            return (
              <Category
                key={index}
                category={category}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </div>
        <div className="Cart my my-[30px] flex max-h-[867px] w-[350px] flex-col items-center bg-white">
          <button className="mt-2.5 h-[50px] w-[330px] rounded-md bg-[#3DCDBD]">
            Valider mon panier
          </button>
          {cart[0] ? (
            <div>
              {cart.map((meal) => {
                return (
                  <div>
                    {meal.id} ID{" "}
                    <button
                      onClick={() => {
                        const newMeal = { ...meal };
                        newMeal.quantity++;
                        //// PROBLEME
                      }}
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Votre Panier est vide</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
