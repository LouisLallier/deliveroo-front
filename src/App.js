import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/Category";
import Intro from "./components/Intro";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

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
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default App;
