const Razorpay = require('razorpay');
exports.RozerPay=async(req,res)=>{
    const instance = new Razorpay({
        key_id: 'rzp_test_fel0ufDTc7efv6',
      key_secret: 'cPeENVH9g90j8sydZ1KEoztB',
    });

  const options = {
    amount: req.body.amount * 100, // Amount in paise
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };

  try {
    const order = await instance.orders.create(options);
    res.json(order);
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }

}

exports.verifyPayments = async(req,res)=>{
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
   
    const crypto = require('crypto');
   
  const generated_signature = crypto
    .createHmac('sha256', 'cPeENVH9g90j8sydZ1KEoztB')
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');
    if (generated_signature === razorpay_signature) {
        res.send({ success: true, message: 'Payment verified successfully!' });
      } else {
        res.status(400).send({ success: false, message: 'Payment verification failed' });
      }
}