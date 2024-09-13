
import { SidebarDataAdmin } from './SidebarDataAdmin';
import "../../assets/css/AdminDashboard.css" // Import your CSS for styling
import { Link } from 'react-router-dom';

const JobDash = () => {
  
  return (
    <>
      <nav className="sidebardash">
        <ul className="nav-menu">
          {SidebarDataAdmin.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.path} className="nav-link">
                {item.icon}
                <span className="nav-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div id='navbarcard'>
      <div id='addbutton'>

<Link to='/adminjobform'><button className="btn btn-info" type="submit">Add New Job</button></Link>
</div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
        </nav>
        <div id='spacetable'>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Position</th>
                  <th>Duration</th>
                  <th>Requirements</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>CTS</td>
                  <td>Chennai</td>
                  <td>Web Development</td>
                  <td>2 yrs</td> 
                  <td>FullStack</td> 
                <td>
                          <Link to='/adminjobform'>
                         <button className="btn btn-info" >Update </button>
                          </Link>
                        <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button>
                         
                         </td>
                 
                </tr>

              </thead>
              {/* <tbody>
               
                 
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDash;
