// src/pages/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/cart';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); // Get cart items from Redux state

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price.replace('₹', '')) * item.quantity, 0);
  };

  // Calculate total quantity of items added to the cart
  const getTotalItemsAdded = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate discount (Assuming a 10% discount for simplicity)
  const getDiscount = () => {
    return getCartTotal() * 0.10; // 10% discount
  };

  const getFinalTotal = () => {
    return getCartTotal() - getDiscount(); // Total after applying discount
  };

  return (
    <div className="bg-[#e5974d] p-6 text-center h-full">
      <h1 className="text-4xl mt-20 mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-xl mt-40 h-screen">Your cart is empty. Please add some products!</p>
      ) : (
        <div className="flex flex-col items-center">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 m-2 rounded-xl shadow-md w-4/5">
              <img src={item.image} alt={item.name} className="w-24 h-auto rounded-lg" />
              <div className="flex-1 text-left ml-4">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 text-lg border border-black w-4/5 rounded-xl mx-auto">

          <h1 className='text-2xl mt-5'>Order Details</h1>

          <div className='flex gap-40 justify-center mt-10'>
            <h2>Discount: </h2>
            <h2>₹{getDiscount().toFixed(2)}</h2>
          </div>

          <div className='flex gap-40 justify-center mt-5'>
            <h2 className='mr-6'>Items Added: </h2>
            <h2>{getTotalItemsAdded()}</h2>
          </div>

          <div className='flex gap-45 justify-center mt-5'>
            <h2>Total: </h2>
            <h2>₹{getFinalTotal().toFixed(2)}</h2>
          </div>

          <button className="bg-[#f7a672] py-3 px-6 rounded-lg mt-10 mb-5">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;