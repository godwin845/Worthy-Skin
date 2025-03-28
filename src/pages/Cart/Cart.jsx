import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/cart';
import PaymentIntegration from './PaymentIntegration';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price.replace('₹', '')) * item.quantity, 0);
  };

  const getTotalItemsAdded = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getDiscount = () => {
    return getCartTotal() * 0.10;
  };

  const getFinalTotal = () => {
    return getCartTotal() - getDiscount();
  };

  return (
    <div className="bg-[#e99662] p-6 text-center min-h-screen">
      <h1 className="text-4xl mt-30 mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-xl mt-40 h-screen">Your cart is empty. Please add some products!</p>
      ) : (
        <div className="flex flex-col items-center">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 m-2 rounded-xl shadow-md w-4/5">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg" />
              <div className="flex-1 text-left ml-4">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.DiscountPrice}</p>
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

          <PaymentIntegration amount={getFinalTotal().toFixed(2)} />

        </div>
      )}
    </div>
  );
};

export default CartPage;