import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Resume.css";

const Data = [
  {
    id: "u1",
    name: "Juditha Brookshaw",
    qualification: "Services",
    age: 39,
    experience: 4,
    position: "Research and Development",
  },
  {
    id: "u2",
    name: "Jesse Butson",
    qualification: "Accounting",
    age: 25,
    experience: 3,
    position: "Marketing",
  },
  {
    id: "u3",
    name: "Laurianne Jurkowski",
    qualification: "Marketing",
    age: 58,
    experience: 9,
    position: "Services",
  },
  {
    id: "u4",
    name: "Oliviero Catt",
    qualification: "Marketing",
    age: 54,
    experience: 9,
    position: "Training",
  },
];

const Resume = (props) => {
  const userId = useParams().userId;
  const resume = Data.filter((data) => data.id === userId);
  return (
    <>
      <div>
        <h1>Hi {resume[0].name}</h1>
      </div>
    </>
  );
};

export default Resume;
