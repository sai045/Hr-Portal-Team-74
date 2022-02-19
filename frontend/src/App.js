import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicantPage from "./components/Applicants/ApplicantsTable/ApplicantPage";
import TravelRequests from "./components/TravelRequest/TravelRequest/TravelRequests";
import Employee from "./components/Employees/Employee/Employee";
import LeaveRequests from "./components/Leave Request/Leave Request/LeaveRequests";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Signup";
import Schedule from "./components/Schedule/Schedule";
import Resume from "./components/Applicants/Resume/Resume";
import EmployeeDashboard from "./components/Employees/EmployeeDashboard/EmployeeDashboard";
import LeaveConfirmation from "./components/Leave Request/LeaveConfirmation/LeaveConfirmation";
import Dash from "./components/Dashboard/Dash";
import Home from "./components/Home/Home";
import Salary from "./components/Salary/Salary";
import Complaints from "./components/Complaints/Complaints";
import NewComplaint from "./components/Complaints/NewComplaint";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/navbar/:id" element={<Navbar />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/:id/Dashboard" element={<Dash />} />
          <Route path="/:id/ApplicantPage" element={<ApplicantPage />} />
          <Route
            path="/:id/TravelRequests"
            element={<TravelRequests popup={false} />}
          />
          <Route
            path="/:id/travel/:tid"
            element={<TravelRequests popup={true} />}
          />
          <Route path="/:id/Employee" element={<Employee />} />
          <Route
            path="/:id/LeaveRequests"
            element={<LeaveRequests popup={false} />}
          />
          <Route
            path="/:id/leaves/:lid"
            element={<LeaveRequests popup={true} />}
          />
          <Route path="/:id/Schedule" element={<Schedule />} />

          <Route
            path="/:id/employeeDashboard/:eid"
            element={<EmployeeDashboard />}
          />
          {/* <Route
            path="/:id/leaveConfirmation"
            element={<LeaveConfirmation />}
          /> */}

          <Route
            path="/:id/applicant/:aid"
            element={<ApplicantPage popup={true} />}
          />
          <Route path="/:id/salary" element={<Salary />} />
          <Route path="/:id/Complaints" element={<Complaints />} />
          <Route path="/newComplaints" element={<NewComplaint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
