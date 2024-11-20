import React from "react";
import JobDetails from "./JobDetails";

function JobList() {
  return (
    <div>
      <p>Recent Jobs</p>
      <h1>Featured Jobs</h1>
      <div className="row" style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div className="col-sm-6 mb-3 mb-sm-0" style={{ margin: "25px 0px" }}>
          <div
            className="card"
            style={{
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            <div className="card-body" style={{ backgroundColor: "#e9f5fe" }}>
              <h5 className="card-title">Senior UI/UX Designer</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <JobDetails jobTitle="Senior UI/UX Designer" />
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ margin: "25px 0px" }}>
          <div
            className="card"
            style={{
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            <div className="card-body" style={{ backgroundColor: "#e9f5fe" }}>
              <h5 className="card-title">Junior UI/UX Designer</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <JobDetails jobTitle="Junior UI/UX Designer" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0" style={{ margin: "25px 0px" }}>
          <div
            className="card"
            style={{
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            <div className="card-body" style={{ backgroundColor: "#e9f5fe" }}>
              <h5 className="card-title">Senior Motion Designer</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <JobDetails jobTitle="Senior Motion Designer" />
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ margin: "25px 0px" }}>
          <div
            className="card"
            style={{
              maxWidth: "70%",
              margin: "auto",
            }}
          >
            <div className="card-body" style={{ backgroundColor: "#e9f5fe" }}>
              <h5 className="card-title">Graphic Designer</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <JobDetails jobTitle="Graphic Designer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
