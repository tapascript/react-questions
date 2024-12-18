import { useEffect } from "react";
import Child from "./child";

const Parent = () => {
  
  useEffect(() => {
    console.log("I am the Parent!");
  }, []);

  return (
    <div 
      className="bg-gray-100 text-5xl p-1 border mx-1 my-1 rounded">
      I am Parent
      <Child />
    </div>
  );
};

export default Parent;
