const Razorpay = require('razorpay');
exports.RozerPay=async(req,res)=>{
    const instance = new Razorpay({
        key_id: process.env.RZRPY_KEY,
      key_secret: process.env.RZRPY_SECRT,
    });
console.log(process.env.RZRPY_KEY)
console.log(process.env.RZRPY_SECRT)
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
    .createHmac('sha256', process.env.RZRPY_SECRT)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');
    if (generated_signature === razorpay_signature) {
        res.send({ success: true, message: 'Payment verified successfully!' });
      } else {
        res.status(400).send({ success: false, message: 'Payment verification failed' });
      }
}