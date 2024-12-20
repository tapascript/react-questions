import { useState } from 'react'
import Jug from './jug'

const Filler = () => {
  const [fillingPercentage, setFillingPercentage] = useState(0);

  const fillTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev === 0) return 1;

      const change = prev + prev * 0.4;
      if (change > 100) return 100;
      
      return change;
    })
  }

  const emptyTheJug = () => {
    setFillingPercentage((prev) => {
      if (prev < 1) prev = 0; 
      return prev - prev * 0.2;
    })
  }

  return (
    <div>
      <Jug fillBy={fillingPercentage} />
      <div className="flex items-center justify-center my-1">
        <button 
          className="w-[50px] h-[50px] rounded-full bg-green-700 mx-1"
          onClick={fillTheJug}>
            <span className="text-white">&#8593;</span>
        </button>
        <button 
          className="w-[50px] h-[50px] rounded-full bg-red-700 mx-1"
          onClick={emptyTheJug}>
            <span className="text-white">&#8595;</span>  
        </button>    
      </div>
      
    </div>
  )
}

export default Filler