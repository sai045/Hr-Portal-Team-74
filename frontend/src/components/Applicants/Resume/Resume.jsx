import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Resume.css";

const Resume = () => {
  const [resume, setResume] = useState();
  const [resumeName, setResumeName] = useState("");
  const { aid } = useParams();
  const [Id, SetId] = useState(aid);
  const sendRequest = async (req, res, next) => {
    try {
      const response = await fetch(`http://localhost:5000/applicant/${Id}`);
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
      `http://localhost:5000/applicant/resume/${Id}`,
      {
        method: "DELETE",
      }
    );
    window.location.assign(`http://localhost:3000/ApplicantPage`);
  };

  return (
    <>
      <div>
        <h1>Hi {resumeName}</h1>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </>
  );
};

export default Resume;
