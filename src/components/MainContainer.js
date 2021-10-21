import React,{useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [stocksInProfolio, setStocksInProfolio] = useState([])
  const [filter, setFilter]= useState(null)
  const [stocksToDisplay, setStocksToDisplay] = useState([])
  const [sortPrice, setSortPrice] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then((r)=> r.json())
    .then((data)=> { 
      setStocks(data)
      setStocksToDisplay(data)
    })
  },[])
  
  function handleClick(e){
    let newStock = stocks.filter((stock)=> {return stock.id=== e})
    setStocksInProfolio([...stocksInProfolio, ...newStock])
    }

  function handleFilter(e){
    setFilter(e.target.value)
    setStocksToDisplay(stocks.filter((stock)=>{ return stock.type === e.target.value}
    ))
  }
  function sortByPrice(){
      let sortStockPrice= stocksToDisplay.sort(function(a,b){ return a.price-b.price})
      setStocksToDisplay(sortStockPrice)
  }
  function handleSortPrice(){
  setSortPrice(!sortPrice)
  sortByPrice()
  }
  function sortByName(){
    let sortStockName= stocksToDisplay.sort(function(a,b){
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
    })
    setStocksToDisplay(sortStockName)
    
  }
  function handleSortName(){
    setSortPrice(!sortPrice)
    sortByName()
  }
  
  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleSortPrice={handleSortPrice} handleSortName={handleSortName}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} handleClick={handleClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocksInProfolio={stocksInProfolio} setStocksInProfolio={setStocksInProfolio} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
