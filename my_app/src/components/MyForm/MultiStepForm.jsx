import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const validateStep = () => {
    let formErrors = {};
    if (step === 1) {
      if (!name.trim()) formErrors.name = "Name is required.";
      else if (name.length < 3) formErrors.name = "Name must be at least 3 characters.";
      if (!email.trim()) formErrors.email = "Email is required.";
      else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email))
        formErrors.email = "Invalid email format.";
    }
    if (step === 2) {
      if (!password) formErrors.password = "Password is required.";
      else if (password.length < 6)
        formErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
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

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
    else showToast('error', 'Please fix the errors.');
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      showToast('success', 'Form submitted successfully!');
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
      setTouched({});
      setStep(1);
    }
  };

  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${fadeIn ? 'fade-in' : ''}`}
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "450px",
          width: "100%",
          background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
          borderRadius: "15px"
        }}
      >
        {/* Progress Bar */}
        <div className="progress mb-4" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <h3 className="text-center mb-4">Sign Up</h3>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="step-animation">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className={`form-control fancy-input ${errors.name ? 'is-invalid' : ''}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className={`form-control fancy-input ${errors.email ? 'is-invalid' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <button type="button" className="btn btn-primary w-100 fancy-btn" onClick={nextStep}>
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="step-animation">
              {/* Password Field */}
<div className="mb-3">
  <div className="position-relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your Password"
      className={`form-control fancy-input pe-5 ${errors.password ? 'is-invalid' : ''}`}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <span
      className="password-toggle-icon"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

  {errors.password && <small className="text-danger">{errors.password}</small>}

  {/* Password Strength */}
  {password && (
    <div className="mt-2">
      <div className="progress" style={{ height: "6px" }}>
        <div
          className={`progress-bar ${getPasswordStrength() < 34
            ? "bg-danger"
            : getPasswordStrength() < 67
              ? "bg-warning"
              : "bg-success"
            }`}
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

              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary fancy-btn" onClick={prevStep}>
                  Back
                </button>
                <button type="button" className="btn btn-primary fancy-btn" onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-animation">
              <h5 className="mb-3">Review Your Info</h5>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Password:</strong> {"*".repeat(password.length)}</p>

              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary fancy-btn" onClick={prevStep}>
                  Back
                </button>
                <button type="submit" className="btn btn-success fancy-btn">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Styles */}
      <style>{`
        .fade-in {
          animation: fadeSlideUp 0.8s ease forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .step-animation {
          animation: slideIn 0.4s ease;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
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

export default MultiStepForm;
