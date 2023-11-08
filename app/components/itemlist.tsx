import React from "react";

type Props = {
  title: String;
  description: String;
}
function ItemList({title, description}: Props){
  return(
    <>
      
      <div className="item-list">
        <strong>{title}</strong>
        <p>{description}</p>
        <hr/>
      </div>

    </>
  )
}


export default ItemList;