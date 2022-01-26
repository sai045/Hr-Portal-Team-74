import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import "./salary.css";
import Table from "./table";

const Salary = () => {
  const data = [
    { department: "Marketing", salary: 400 },
    { department: "Legal", salary: 700 },
    { department: "Product Managment", salary: 700 },
    { department: "Product Managment", salary: 700 },
    { department: "Product Managment", salary: 700 },
    { department: "Accounting", salary: 200 },
    { department: "Services", salary: 1000 },
    { department: "Engineering", salary: 1000 },
    { department: "Sales", salary: 1000 },
    { department: "Services", salary: 1000 },
  ];

  return (
    <div className="salary">
      <h2>Salary</h2>
      <div>
        {" "}
        <div className="tab">
          <Table />
        </div>
        <div className="pie">
          <h1 className="heading">Departments annualpay </h1>
          <div className="p">
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                dataKey="salary"
                outerRadius={100}
                label
                fill="rgb(88 99 161)"
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
