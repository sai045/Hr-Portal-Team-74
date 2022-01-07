import React, { Component } from "react";
import "./Applicant.css";

class Applicant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: this.props.name,
      Age: this.props.Age,
      Position_Applied_For: this.props.Position_Applied_For,
      Qualification: this.props.Qualification,
      Experience: this.props.Experience,
    };
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="m-2 p-2">
        <div className="applicant m-2 p-2 rounded-3">
          <div className="image m-2">
            <img
              src={this.props.imgurl}
              alt=""
              height="150px"
              width="150px"
              className="m-2 rounded-circle"
            />
          </div>
          <div className="data m-2">
            <table>
              <tr>
                <th className="p-1 px-4">Name</th>
                <td className="p-1 px-4">{this.state.Name}</td>
              </tr>
              <tr>
                <th className="p-1 px-4">Age</th>
                <td className="p-1 px-4">{this.state.Age}</td>
              </tr>
              <tr>
                <th className="p-1 px-4">Position</th>
                <td className="p-1 px-4">{this.state.Position_Applied_For}</td>
              </tr>
              <tr>
                <th className="p-1 px-4">Qualification</th>
                <td className="p-1 px-4">{this.state.Qualification}</td>
              </tr>
              <tr>
                <th className="p-1 px-4">Experience</th>
                <td className="p-1 px-4">{this.state.Experience}</td>
              </tr>
            </table>
            {/* <ul className="list m-1">
              <li className="list-items m-1">Name:{this.state.Name}</li>
              <li className="list-items m-1">Age:{this.state.Age}</li>
              <li className="list-items m-1">Position:{this.state.Position_Applied_For}</li>
              <li className="list-items m-1">Qualification:{this.state.Qualification}</li>
              <li className="list-items m-1">Experience:{this.state.Experience}</li>
            </ul> */}
            {/* <ul className="list m-2">
              <li className="list-items-answers m-1">{this.state.Name}</li>
              <li className="list-items-answers m-1">{this.state.Age}</li>
              <li className="list-items-answers m-1">
                {this.state.Position_Applied_For}
              </li>
              <li className="list-items-answers m-1">
                {this.state.Qualification}
              </li>
              <li className="list-items-answers m-1">
                {this.state.Experience}
              </li>
            </ul> */}
          </div>
          <div className="schedule m-2">
            <button className="btn btn-secondary btn-lg">Schedule</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Applicant;
