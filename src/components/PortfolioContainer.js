import React  from "react";
import Stock from "./Stock";

function PortfolioContainer({stocksInProfolio,setStocksInProfolio}) {
  
  function handleDelete(id){
    setStocksInProfolio(stocksInProfolio.filter((stock)=>{
      return stock.id !== id
    }))
  }
  const pStock = stocksInProfolio.map((stock)=>{
    return <Stock handleClick={handleDelete} key={stock.id} name={stock.name} price={stock.price} id={stock.id}/>
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {pStock}
    </div>
  );
}

export default PortfolioContainer;
