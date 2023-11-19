import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [activeOrder, setActiveOrder] = useState(null);

  const createOrder = () => {
    // Implement logic to create a new order, and set it as the active order
    const newOrder = generateOrder(); // You need to implement the generation logic
    setActiveOrder(newOrder);
  };

  const addProductToOrder = (productId) => {
    // Implement logic to add a product to the active order
    // You might want to make a request to the server to associate the product with the order
    console.log(`Adding product ${productId} to order ${activeOrder}`);
  };

  return (
    <OrderContext.Provider value={{ activeOrder, createOrder, addProductToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
