import { useEffect } from "react";
import GrandChild from "./grand-child";

const Child = () => {

  useEffect(() => {
    console.log("I am the Child!");
  }, []);
  
  return (
    <div className="bg-gray-200 text-3xl p-1 border mx-1 my-1 rounded-lg">
      I am Child
      <GrandChild />
    </div>
  );
};

export default Child;
