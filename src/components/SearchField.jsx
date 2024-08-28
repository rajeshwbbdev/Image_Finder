import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleEnterKey = (e) => {
    if (e.key == "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`
      );
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex">
      <input
        value={searchValue}
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none rounded-tl rounded-bl focus:border-blue-500 focus:ring-2"
        type="search"
        placeholder="Search any Image..."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => handleEnterKey(e)}
      />
      <button
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br disabled:bg-gray-400"
        onClick={() => {
          setSearchValue("");
          fetchData(
            `search/photos?page=1&query=${searchValue}&client_id=${
              import.meta.env.VITE_ACCESS_KEY
            }`
          );
          setSearchImage(searchValue);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
