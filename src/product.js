import React from "react";
const Product = ({match,p}) => {
  const produit=p.find(el=>el.id==match.params.id)
  console.log(match.params.id)
  return ( 
     <div>   
             <div style={{ display: "block", justifyContent: "space-between" }} >
        <div
          style={{
            float: "right",
            padding: "10px",
            width: "30%",
            
            marginLeft: "auto",
          }}
        >

    <h3> {produit.name} </h3>
    <p>{produit.description}</p>
    
    <h4>{produit.status}</h4>  
     
    </div> 
    </div>
      </div>
  );
}

export default Product;