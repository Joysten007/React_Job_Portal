import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function JobApplicationForm() {
  const { jobTitle } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.cv) newErrors.cv = "CV is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a backend
      console.log("Form submitted", formData);
      setIsSubmitted(true);

      // Optional: Auto-redirect back to job list after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-success">
          <h2>Application Submitted Successfully!</h2>
          <p>
            Your application for {jobTitle} has been received. We will contact
            you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Apply for {jobTitle}</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="cv" className="form-label">
                Upload CV/Resume
              </label>
              <input
                type="file"
                className={`form-control ${errors.cv ? "is-invalid" : ""}`}
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
              {errors.cv && <div className="invalid-feedback">{errors.cv}</div>}
              <small className="form-text text-muted">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </small>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
