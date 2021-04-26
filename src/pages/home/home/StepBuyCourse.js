import React, { Component } from "react";

export default class StepBuyCourse extends Component {
  render() {
    return (
      <section
        className="stepbuycourse text-center"
        style={{
          backgroundImage: "url('./img/group-3.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center"
        }}
      >
        <h3 className="title ">
          Register your course in Four <br />
          simple steps
        </h3>
        <div className="content">
          <div className="step-group">
            <div>
              1<br />
              STEP
            </div>
            <p>
              Choose the course
              <br />
              you want
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              2<br />
              STEP
            </div>
            <p>
              Add
              <br />
              shopping cart
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              3<br />
              STEP
            </div>
            <p>
              Pay
              <br />
              your course
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              4<br />
              STEP
            </div>
            <p>
              Check
              <br />
              your course
            </p>
          </div>
        </div>
      </section>
    );
  }
}
