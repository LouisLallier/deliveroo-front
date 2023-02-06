import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/Category";
import Intro from "./components/Intro";
import { logDOM } from "@testing-library/react";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="container w-[820px]">
        <Intro data={data} />
      </div>
      <div className="h-screen w-screen bg-gray-100">
        <Category data={data} />
      </div>
    </div>
  );
};

export default App;
