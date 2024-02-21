import React from "react";

const ProductList = (props) => {
  const onDeleteHandler = (productId) => {
    const updatedProducts = props.products.filter(
      (item) => item.id !== productId
    );

    props.onUpdateProducts(updatedProducts);

    localStorage.removeItem(productId);
  };

  return (
    <div>
      <h1>Products</h1>
      {props.products &&
        props.products.map((item) => {
          return (
            <div key={item.id}>
              <ul>
                <li>
                  {item.price} - {item.name}
                </li>
              </ul>
              <button onClick={() => onDeleteHandler(item.id)}>
                Delete Product
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;