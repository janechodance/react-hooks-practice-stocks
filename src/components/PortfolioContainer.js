import React , {useState} from "react";
import Stock from "./Stock";

function PortfolioContainer({stocksInProfolio}) {
  const [updatedStocks, setUpdatedStocks] = useState(stocksInProfolio)
  console.log(updatedStocks.length)
  function handleDelete(id){
    setUpdatedStocks(updatedStocks.filter((stock)=>{
      return stock.id !== id
    }))
  }
  const pStock = updatedStocks.map((stock)=>{
    return <Stock handleClick={handleDelete} key={stock.id} name={stock.name} price={stock.price} id={stock.id}/>
  })
  console.log(pStock)
  return (
    <div>
      <h2>My Portfolio</h2>
      {pStock}
    </div>
  );
}

export default PortfolioContainer;
