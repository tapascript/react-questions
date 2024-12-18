import { useEffect } from "react";

const GrandChild = () => {
  
  useEffect(() => {
    console.log("I am the Grand Child!");
  }, []);

  return (
    <div className="bg-gray-300 text-xl p-1 border mx-1 my-1 rounded-xl">
      I am Grand Child
    </div>
  );
};

export default GrandChild;
