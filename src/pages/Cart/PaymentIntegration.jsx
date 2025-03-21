import React from 'react';

// Function to load the Razorpay script
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Function to handle the payment process
const handlePayment = async (amount) => {
  const res = await loadRazorpayScript();

  if (!res) {
    alert('Razorpay SDK failed to load. Check your internet connection.');
    return;
  }

  const options = {
    key: 'rzp_test_y226LCwZ8SpEQJ', // Replace with your Razorpay Key ID
    amount: amount * 100, // Convert the amount to paise
    currency: 'INR',
    name: 'Worthy Skin',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    handler: (response) => {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#61dafb',
    },
    method: {
      netbanking: true,
      card: true,
      wallet: true,
      upi: true,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const PaymentIntegration = ({ amount }) => {
  return (
    <div>
      <button onClick={() => handlePayment(amount)} className="bg-[#f7a672] py-3 px-6 rounded-lg mt-10 mb-5">
        Pay with Razorpay
      </button>
    </div>
  );
};

export default PaymentIntegration;