import React, { Fragment } from "react";

const TECH_SKILLS = [
    "HTML",
    "CSS",
    "Javascript",
    "React JS",
    "Gatsby",
    "Graph QL",
    "SCSS",
    "Less",
    "Node JS",
    "jQuery",
    "Handlebars JS",
    "Underscore JS",
    "Backbone JS",
    "Grunt JS",
    "Webpack",
];

const TechSkills = () => {
    return (<Fragment>
        <div className="heading-1">Tech Skills</div>
        <ul className="tech-skills">
            {TECH_SKILLS.map(skill => {
                return <li className="skill-tag" key={skill}>
                    {skill}
                </li>
            })}
        </ul>
    </Fragment>);
};

export default TechSkills;