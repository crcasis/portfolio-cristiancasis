import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Education() {
  if (educationInfo.display) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
