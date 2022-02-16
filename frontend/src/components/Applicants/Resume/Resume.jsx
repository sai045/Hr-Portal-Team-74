import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./Resume.css";

const Resume = () => {
  const [resume, setResume] = useState();
  const [resumeName, setResumeName] = useState("");
  const { aid, id } = useParams();
  const [Id, setId] = useState(id);
  const [Aid, SetAid] = useState(aid);
  const sendRequest = async (req, res, next) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/applicant/${Aid}`
      );
      const ResumeData = await response.json();
      setResume(ResumeData.applicant);
      const name = ResumeData.applicant.name;

      setResumeName(name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const deleteHandler = async () => {
    const response = await fetch(
      `http://localhost:5000/api/applicant/resume/${Aid}`,
      {
        method: "DELETE",
      }
    );
    window.location.assign(`http://localhost:3000/${Id}/applicantpage`);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Hi {resumeName}</h1>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </>
  );
};

export default Resume;
