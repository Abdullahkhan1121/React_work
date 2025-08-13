import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100); // Trigger fade-in animation
  }, []);

  const validateForm = (fieldValues = { name, email, password }) => {
    let formErrors = {};

    if (!fieldValues.name?.trim()) {
      formErrors.name = "Name is required.";
    } else if (fieldValues.name.length < 3) {
      formErrors.name = "Name must be at least 3 characters.";
    }

    if (!fieldValues.email?.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(fieldValues.email)) {
      formErrors.email = "Invalid email format.";
    }

    if (!fieldValues.password) {
      formErrors.password = "Password is required.";
    } else if (fieldValues.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);

    validateForm({ name, email, password, [field]: value });
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const getPasswordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 6) strength += 33;
    if (/[A-Z]/.test(password)) strength += 33;
    if (/[0-9!@#$%^&*]/.test(password)) strength += 34;
    return strength;
  };

  const showToast = (type, message) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  };

  const SignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      showToast('success', 'Form submitted successfully!');
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
      setTouched({});
    } else {
      showToast('error', 'Please fix the errors before submitting.');
    }
  };

  return (
    <div className={`container d-flex justify-content-center align-items-center ${fadeIn ? 'fade-in' : ''}`} style={{ minHeight: "100vh" }}>
      <div
        className="card p-4 shadow-lg animate-card"
        style={{
          maxWidth: "420px",
          width: "100%",
          background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
          borderRadius: "15px"
        }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={SignUp}>
          {/* Name */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your Name"
              className={`form-control fancy-input ${errors.name && touched.name ? "is-invalid" : ""}`}
              value={name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
            />
            {errors.name && touched.name && <small className="text-danger">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className={`form-control fancy-input ${errors.email && touched.email ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
            />
            {errors.email && touched.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Password */}
<div className="mb-3">
  <div className="position-relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your Password"
      className={`form-control fancy-input pe-5 ${errors.password && touched.password ? "is-invalid" : ""}`}
      value={password}
      onChange={(e) => handleChange("password", e.target.value)}
      onBlur={() => handleBlur("password")}
    />
    <span
      className="password-toggle-icon"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

  {errors.password && touched.password && (
    <small className="text-danger">{errors.password}</small>
  )}

  {/* Password Strength */}
  {password && (
    <div className="mt-2">
      <div className="progress" style={{ height: "6px" }}>
        <div
          className={`progress-bar ${
            getPasswordStrength() < 34
              ? "bg-danger"
              : getPasswordStrength() < 67
              ? "bg-warning"
              : "bg-success"
          }`}
          role="progressbar"
          style={{ width: `${getPasswordStrength()}%` }}
        ></div>
      </div>
      <small className="text-muted">
        {getPasswordStrength() < 34
          ? "Weak"
          : getPasswordStrength() < 67
          ? "Medium"
          : "Strong"}
      </small>
    </div>
  )}
</div>


          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100 fancy-btn">
            Register
          </button>
        </form>
      </div>

      {/* Extra CSS */}
      <style>{`
        .fade-in {
          animation: fadeSlideUp 0.8s ease forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fancy-input {
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .fancy-input:focus {
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
          border-color: #007bff;
        }
        .fancy-btn {
          transition: transform 0.2s ease, background-color 0.3s ease;
        }
        .fancy-btn:hover {
          transform: translateY(-2px);
          background-color: #0056b3;
        }
        .password-toggle-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #6c757d;
          font-size: 1.2rem;
        }
        .password-toggle-icon:hover {
          color: #000;
        }        
      `}</style>
    </div>
  );
};

export default MyForm;
