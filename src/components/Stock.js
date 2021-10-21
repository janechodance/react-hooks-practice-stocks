import React from "react";

function Stock({name,price,id,handleClick}) {
  
  return (
    <div>
      <div onClick={()=>handleClick(id)}  className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
