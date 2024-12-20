import { useState, useEffect } from "react";

const Jug = ({ fillBy }) => {
  const [levelChanged, setLevelChanged] = useState(false);

  useEffect(() => {
    setLevelChanged(true);

    const timeoutId = setTimeout(() => {
      setLevelChanged(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId); // Cleanup function
    };
  }, [fillBy]);

  return (
    <div className="w-[200px] h-[400px] border-gray-500 border-2 border-t-0 rounded-sm relative overflow-hidden rounded-b">
      <div
        className={`w-full bg-blue-600 opacity-70 absolute bottom-0 ${
          levelChanged && "animate-wave"
        } rounded-b-s rounded-t-s`}
        style={{ height: `${fillBy}%` }}
      >
        <span className="text-white text-xl animate-pulse">
          {Math.round(fillBy)}%
        </span>
      </div>
    </div>
  );
};

export default Jug;
