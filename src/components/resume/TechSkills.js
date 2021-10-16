import React, { Fragment } from "react";

const TECH_SKILLS = [
    "HTML",
    "CSS",
    "Javascript",
    "Node JS",
    "jQuery",
    "Handlebars.js",
    "Backbone JS",
    "React JS",
    "Gatsby",
    "Less",
    "SCSS",
    "Grunt",
    "Webpack"
];

const TechSkills = () => {
    return (<Fragment>
        <div className="heading-1">Tech Skills</div>
        <ul className="tech-skills">
            {TECH_SKILLS.map(skill => {
                return <li className="skill-tag">
                    {skill}
                </li>
            })}
        </ul>
    </Fragment>);
};

export default TechSkills;