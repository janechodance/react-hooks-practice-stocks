import React,{useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [stocksInProfolio, setStocksInProfolio] = useState([])
  const [filter, setFilter]=useState(null)
  const [stocksToDisplay, setStocksToDisplay] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then((r)=> r.json())
    .then((data)=> { 
      setStocks(data)
      setStocksToDisplay(data)
    })
  },[])
  console.log(stocks)
  function handleClick(e){
    let newStock = stocks.filter((stock)=> {return stock.id=== e})
      setStocksInProfolio([...newStock,...stocksInProfolio])}
  console.log(stocksInProfolio)
  // function handleFilter(e){
  //   setFilter(e.target.value)
    
  //   setStocksToDisplay(stocksToDisplay.filter((stock)=>{ return stock.type === e.target.value}
  //   ))
  // }
  
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={handleClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocksInProfolio={stocksInProfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
