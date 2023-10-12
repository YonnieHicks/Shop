import React, { useState } from 'react';

// Sample data for three types of items
const initialItems = [
  { id: 1, name: 'Item 1', type: 'Type A', price: 10.00 },
  { id: 2, name: 'Item 2', type: 'Type B', price: 15.00 },
  { id: 3, name: 'Item 3', type: 'Type A', price: 20.00 },
];

function App() {
  const [items, /*setItems*/] = useState(initialItems);   //setItems is commented out 
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <h1>Welcome to the Online Store</h1>
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>Type: {item.type}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>{cartItem.name} - ${cartItem.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
