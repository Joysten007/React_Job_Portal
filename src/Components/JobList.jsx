import React from "react";
import JobDetails from "./JobDetails";
import location from "../Assets/location.png";
import description1 from "./description1";

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
              <p className="card-text">Amazon</p>
              <p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ height: "3vh", marginRight: "10px" }}
                    src={location}
                    alt=""
                  />
                  <p>India</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Part time
                  </p>
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Senior Level
                  </p>
                </div>
              </p>
              <JobDetails
                jobTitle="Senior UI/UX Designer"
                description="Job Summary
Amazon is seeking an experienced Senior UI/UX Designer to join our team. This role involves shaping user experiences for millions of customers globally, ensuring intuitive and visually appealing design. As a senior member of the design team, you'll play a key role in driving innovative solutions and setting design standards.

"
              />
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
              <p className="card-text">Google</p>
              <p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ height: "3vh", marginRight: "10px" }}
                    src={location}
                    alt=""
                  />
                  <p>India</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Part time
                  </p>
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Project Work
                  </p>
                </div>
              </p>
              <JobDetails
                jobTitle="Junior UI/UX Designer"
                description="Google is looking for a creative and motivated Junior UI/UX Designer to contribute to innovative projects. This role involves supporting the design team in creating intuitive and visually appealing user experiences. As part of Google’s design ecosystem, you’ll gain exposure to impactful projects while developing your design skills in a supportive environment."
              />
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
              <p className="card-text">Twitter</p>
              <p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ height: "3vh", marginRight: "10px" }}
                    src={location}
                    alt=""
                  />
                  <p>India</p>
                </div>
                <div>
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Part time
                  </p>
                </div>
              </p>
              <JobDetails
                jobTitle="Senior Motion Designer"
                description="Twitter is seeking a talented and experienced Senior Motion Designer to elevate brand storytelling and create captivating motion graphics that enhance the platform's user experience. This role involves crafting dynamic visuals, working with cross-functional teams, and ensuring Twitter’s visual identity remains innovative and engaging."
              />
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
              <p className="card-text">Airbnb</p>
              <p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ height: "3vh", marginRight: "10px" }}
                    src={location}
                    alt=""
                  />
                  <p>India</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Part time
                  </p>
                  <p
                    style={{
                      border: "1px solid black",
                      borderRadius: "80px",
                      fontSize: "11px",
                      display: "inline",
                      padding: "5px",
                    }}
                  >
                    Senior Level
                  </p>
                </div>
              </p>
              <JobDetails
                jobTitle="Graphic Designer"
                description="Airbnb is looking for a skilled Graphic Designer to join our creative team and help shape the visual identity of the brand. As a senior graphic designer, you will create compelling visuals for campaigns, marketing materials, and user experiences, aligning with Airbnb's mission to create a world where anyone can belong anywhere."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
