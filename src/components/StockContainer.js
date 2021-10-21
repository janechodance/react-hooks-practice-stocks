import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,handleClick}) {
  
  const singleStock = stocks.map((stock)=>{
    return <Stock key={stock.id} name={stock.name} price={stock.price} id={stock.id} handleClick={handleClick}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {singleStock}
    </div>
  );
}

export default StockContainer;
