import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import JobList from "./Components/JobList";
import JobApplicationForm from "./Components/JobApplicationForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <JobList />
              </>
            }
          />

          {/* Job application route with encoding support */}
          <Route path="/apply/:jobTitle/*" element={<JobApplicationForm />} />

          {/* Catch-all route for handling 404s */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
