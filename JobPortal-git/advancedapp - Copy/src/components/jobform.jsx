import { useState } from 'react';
import '../assets/css/jobform.css'; // Import the CSS for the job form
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from './common/footer/Footer';

const JobForm = ({ onSubmit, onCancel }) => {
  const [applicationName, setApplicationName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation can be added here if needed
    if (formCompleted) {
      onSubmit({ 
        applicationName,
        contactNumber,
        email,
        workExperience,
        selectedJobTitle,
        company,
        category,
        location,
        description 
      });

      // Check if the selected category is premium or not
      const isPremium = category === "Premium";

      // If the category is premium, navigate to the payment page
      if (isPremium) {
        // Navigate to the payment page
        navigate("/payment");
      } else {
        // If not premium, navigate to another page or perform other actions
        navigate("/hero");
      }
    } else {
      // Display an error message or handle incomplete form submission
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please fill in all the fields to submit the application.',
      });
    }
  };
  const jobTitles = ['Software Engineer', 'Web Developer', 'Data Scientist', 'UX/UI Designer', 'Product Manager'];
  const categories = ['Free', 'Premium'];

  const navigate = useNavigate();
  const handleClickSubmit = () => {
    // Display SweetAlert success message
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Form has been Submitted",
      showConfirmButton: false,
      timer: 1500
    });
  
    // Check if the selected category is premium
    const isPremium = category === "Premium";
  
    // If the category is premium, navigate to the payment page
    if (isPremium) {
      // Navigate to the payment page
      navigate("/payment");
    } else {
      // Navigate to "/hero" after a delay (assuming the message is shown for 1500 milliseconds)
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    }
  };
  

  const handleClickcancel = () => {
    navigate("/jobpage");
  };

  return (
    <>
      <div className="job-form-container">
        <div className="job-card">
          <h2 className="job-form-title">APPLY FOR JOB</h2>
          <form onSubmit={handleSubmit}>
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="applicationName">Application Name:</label>
            <input
              type="text"
              id="applicationName"
              value={applicationName}
              onChange={(e) => setApplicationName(e.target.value)}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="workExperience">Work Experience:</label>
            <input
              type="text"
              id="workExperience"
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="jobTitle">Job Title:</label>
            <select
              id="jobTitle"
              value={selectedJobTitle}
              onChange={(e) => setSelectedJobTitle(e.target.value)}
              required
              className="job-form-input"
            >
              <option value="">Select Job Title</option>
              {jobTitles.map(title => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
          </div>
         
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label className="job-form-label" htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="job-form-input"
            />
          </div>
        

            <div className="job-form-group">
              <label className="job-form-label" htmlFor="category">Category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="job-form-input"
              >
                <option value="">Select Job Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
  
          <div className="job-form-button-group">
            <button type="submit" className="job-form-submit-button" onClick={handleClickSubmit}>Submit Application</button>
            <button type="button" className="job-form-cancel-button" onClick={handleClickcancel}>Cancel</button>
          </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobForm;
