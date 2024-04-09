import { useState,useEffect } from "react";

function FormComponent() {
  const [Quantity, setQuantity] = useState(1);
 
  
  
  function onSubmitEnter(e) {
  
    e.preventDefault();
    
  }

  

  return (
    <form className="add-form" onSubmit={onSubmitEnter}>
      <h3>Write what you need for your😍trip.</h3>
      <select
        defaultValue={Quantity}
       
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num}>
              2
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="WELL WELL WELL"
        
        
      ></input>
     
      
    </form>
  );
}

export default FormComponent;
