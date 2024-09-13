import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../assets/css/Payment.css';

const Payment = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("in");
    if (amount === "") {
      alert("Please Enter Payment");
    } else {
      var options = {
        key: "rzp_test_pGN8sqkifhNycL",
        key_secret: "SGsgA63WqPze34OXn2FtUs7T",
        amount: amount * 100,
        currency: "INR",
        name: "Local Framers",
        description: "for testing purpose ",
        handler: function (response) {
          alert("Payment successful!"); // Display payment success message
          navigate('/hero'); // Navigate back to the home page
        },
        prefill: {
          name: "Monisha",
          email: "moni@gmail.com",
          contact: "987654321"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "pink"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className='wholepaycolor'>

      <div className="custom-card-container">
        <div className="custom-card">
          <h1>Make your Payment</h1>
          <div className="form-container">
            <input
              type="text"
              placeholder="Enter amount"
              // value={total}
              onChange={(e) => setAmount(e.target.value)}
              className="custom-input"
            />
            <button onClick={handlePayment} className="custom-button">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
