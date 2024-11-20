import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function JobDetails({ jobTitle, description }) {
  const navigate = useNavigate();
  const [currentJobTitle, setCurrentJobTitle] = useState(jobTitle);

  const handleApply = () => {
    navigate(`/apply/${encodeURIComponent(currentJobTitle)}`);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "#73b8fa",
          border: "none",
          color: "#ffffff",
          fontWeight: "500",
        }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${jobTitle.replace(/\s+/g, "-")}`}
        onClick={() => setCurrentJobTitle(jobTitle)}
      >
        View Details
      </button>

      <div
        className="modal fade"
        id={`modal-${jobTitle.replace(/\s+/g, "-")}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`modalLabel-${jobTitle.replace(/\s+/g, "-")}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id={`modalLabel-${jobTitle.replace(/\s+/g, "-")}`}
              >
                {jobTitle} Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {description}
              {/* Detailed job description for {jobTitle}... */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleApply}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
