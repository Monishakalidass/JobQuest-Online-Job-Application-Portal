import { TbLockCheck } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useState } from "react";
import '../../assets/css/Login.css'
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (oldPassword === password) {
      setErrorMessage("Old password and new password cannot be the same!! Change it");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    handleForgot();
  }

  const handleForgot = () => {
    Swal.fire({
      title: "Password Changed Successfully!",
      icon: "success",
      timer: 2000, 
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading(); 
      }
    }).then(() => {
      navigate("/login") 
    });
  }

  const validatePassword = (password) => {
    return password.length >= 6;
  }
 
  return (
    <div className="logincontainer">
      <div className='wrapper'>
        <form onSubmit={handleForgotPassword}>
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input
              type="password"
              placeholder='Old Password'
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <TbLockCheck className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='New Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon"/>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Confirm Password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="icon"/>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword;
