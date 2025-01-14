import React from "react";
import SearchField from "./SearchField";

const Jumbtron = () => {
  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          Search Image
        </h1>
        <SearchField />
      </div>
    </div>
  );
};

export default Jumbtron;
