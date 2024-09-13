import { useNavigate } from 'react-router-dom';
import '../../../assets/css/FAQ.css'
import Footer from './Footer'

const FAQ = () => {
    const navigate=useNavigate();
const handleterms=()=>{
    navigate("/home")
}
  return (
    <>
    <div className='faqhead'>
    <div className="faq">
    <h2 className="faq_header">Frequently Asked Questions</h2>
    <p className='faq_letter_size'></p> 
    
    <p className='faq_caps_size'>Are you an event organizing company?</p>
    <p className='faq_letter_size'>We are an birthday bash organizer who list verified Artists which makes your search simpler for any birthday occasion. We are a one stop platform to connect you with the right kind of service provider.</p>
    
    <p className='faq_caps_size'>SERVICE PRICE: Is this price fixed or  will it vary?</p>
    <p className='faq_letter_size'>The price listed is for the standard package. Based on the customer needs, the effort may vary in terms of duration and scope of work. Accordingly, the artist will quote the price which may be different from the standard price listed.</p>
    
    <p className='faq_caps_size'>SERVICE BOOKING: What is the booking process?</p>
    <p className='faq_letter_size'>Once you have submitted the form, our MomentousEndeavours.in Representative will schedule a call between you and an available vendor.Only after you are convinced, you can book the service by paying 15% of booking amount to MomentousEndeavours.in</p>
    
    
    <p className='faq_caps_size'>SERVICE PRICE:  Why are the prices  different with different designs for the same service?</p>
    <p className='faq_letter_size'>The prices of the design services vary based on the quantity of the design. In certain activities like Balloon decoration, the scope of the work and material used may also be different.</p>
    
    <p className='faq_caps_size'>How to contact us</p>
    <p className='faq_letter_size'>We encourage you to contact us through an email, please send in your queries to momentousendeavours@gmail.com</p>
  </div>
  <div className="terms-card-footer">
          <button className="faqbtn2" onClick={handleterms}>I Agree</button>
        </div>
  </div>
    <Footer/>
    </>
  )
}

export default FAQ
