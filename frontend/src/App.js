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
import TravelConfirmation from "./components/TravelRequest/TravelConfirmation/TravelConfirmation";
import Dash from "./components/Dashboard/Dash";
import Home from "./components/Home/Home";
import Salary from "./components/Salary/Salary";
import Complaints from "./components/Complaints/Complaints";
import Details from "./components/Complaints/Complaint";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dash />} />
          <Route path="/ApplicantPage" element={<ApplicantPage />} />
          <Route path="/TravelRequests" element={<TravelRequests />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/LeaveRequests" element={<LeaveRequests />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/:id/resume" element={<Resume />} />

          <Route
            path="/:id/employeeDashboard"
            element={<EmployeeDashboard />}
          />
          <Route
            path="/:id/leaveConfirmation"
            element={<LeaveConfirmation />}
          />
          <Route
            path="/:id/travelConfirmation"
            element={<TravelConfirmation />}
          />
          <Route path="/salary" element={<Salary />} />
          <Route path="/Complaints" element={<Complaints />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
