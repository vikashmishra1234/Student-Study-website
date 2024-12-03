
export const createOrder = async (amt) => {
  try {
    // Send amount to backend to create an order
    const response = await fetch('https://student-study-backend.onrender.com/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amt }), // Amount in paise
    });

    const order = await response.json();

    // Configure Razorpay options
    const options = {
      key: 'rzp_test_fel0ufDTc7efv6', // Replace with your Razorpay Key ID
      amount: order.amount, // Amount in paise (from backend)
      currency: order.currency, // INR
      name: 'Student-Help',
      description: 'Test Transaction',
      order_id: order.id, // Razorpay Order ID from backend
      handler: async function (response) {
        // Verify payment on backend
        try {
          const verifyResponse = await fetch('https://student-study-backend.onrender.com/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const data = await verifyResponse.json();

          if (data.success) {
            alert('Payment verified successfully!');
          } else {
            alert('Payment verification failed!');
          }
        } catch (err) {
          console.error('Error verifying payment:', err);
        }
      },
      prefill: {
        name: 'Vikash Mishra',
        email: 'vikasmishra1369@gmail.com',
      },
      theme: {
        color: '#3399cc',
      },
    };

    // Open Razorpay Checkout
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error('Error creating order:', err);
  }
};
