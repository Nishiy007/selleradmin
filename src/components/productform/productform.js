import { useState } from "react";

const Productform = (props) => {
    const [id, setId] = useState("");
  const [price, setPrice] = useState();
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const productData = {
      id: id,
      price: price,
      name: name,
    };

    localStorage.setItem(id, JSON.stringify(productData))
    
    props.onAddProduct(productData);

    setId('');
    setPrice('')
    setName('');
  };

  
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label>productid</label>
            <input type="number" name="id" onChange={(event)=>setId(event.target.value)} />
            <label>price</label>
            <input type="number" name="price"  onChange={(event)=>setPrice(event.target.value)} />
            <label>name</label>
            <input type="text" name="name" onChange={(event)=>setName(event.target.value)} />
            <button > add product</button>
        </form>

    </div>
  )
}

export default Productform