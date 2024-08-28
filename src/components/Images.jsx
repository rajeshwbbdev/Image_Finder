import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center mt-6  text-3xl font-bold">
        {searchImage.slice(0, 1).toUpperCase() +
          searchImage.slice(1).toLowerCase() || "Cats"}
      </h1>

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
          <Skeleton item={10} />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
          {response?.map((data, key) => (
            <Image key={key} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default Images;
