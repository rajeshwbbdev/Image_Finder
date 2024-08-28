import React, { createContext, useState } from "react";
import Jumbtron from "./components/Jumbtron";
import Images from "./components/Images";
import useAxios from "./hook/useAxios";

export const ImageContext = createContext();

const App = () => {
  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  console.log(response);

  return (
    <ImageContext.Provider value={value}>
      <Jumbtron />
      <Images />
    </ImageContext.Provider>
  );
};

export default App;
