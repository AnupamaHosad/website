import React from "react";

const SKILL_ITEMS = [
    "HTML",
    "CSS",
    "Javascript",
    "ES6",
    "jQuery",
    "Underscore",
    "Handlebars",
    "Require JS",
    "Grunt",
    "Webpack",
    "Backbone",
    "React",
    "Node JS",
    "Bootstrap",
    "Less",
    "SCSS"
]

const Skills = () => {
    return (<div className="skills-section">
        {SKILL_ITEMS.map((item, index) => {
            return <div className="skill-item" key={index}>{item}</div>
        })}
    </div>);
};

export default Skills;