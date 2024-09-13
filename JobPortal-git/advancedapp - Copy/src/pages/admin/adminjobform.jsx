
import { useNavigate } from 'react-router-dom';
import './form.css';
const backCardStyle = {
  background: 'lightgrey',
  color: 'black', // Text color is set to black for better visibility
};

const MyFormUser = () => {
 
const navigate=useNavigate();
const handlesaveupdate=()=>
{
  navigate("/admindashboard");
}
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card w-25" style={backCardStyle}>
        <div className="card-body">
          <div className="container">
            <h2 className="text-center">JOB Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="vendorId" className="form-label">Position</label>
                <input type="text" className="form-control" id="vendorId" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmName" className="form-label">Company</label>
                <input type="text" className="form-control" id="farmName" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmDesc" className="form-label">Location</label>
                <input  type="text" className="form-control" id="farmDesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Requirements</label>
                <input  type="text" className="form-control" id="vendorNum" />
              </div>
             
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handlesaveupdate}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFormUser;
