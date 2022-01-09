import React, { Fragment } from "react";
import { EXPERIENCE_ITEMS } from "../../data/projects";

const ProjectItem = (props) => {
    const { title, description, tasks } = props;

    return (<p>
        <b>{title}</b><br />
        <div className="m-bottom-10">{description}</div>
        {tasks && <ul className="tasks-list">
            {tasks.map((task, index) => {
                return (<li key={index}>{task}</li>)
            })}
        </ul>}
    </p>);
};

const RoleProjectItem = (props) => {
    const { role, duration, description, projects } = props;

    return (<Fragment>
        <div className="flex-space-center">
            <div className="role">{role}</div>
            <span className="calender-icon">{duration}</span>
        </div>
        {description && <p>{description}</p>}
        {projects.map((project, index) => {
            return <ProjectItem key={index} {...project} />;
        })}
    </Fragment>);
};

const ExperienceItem = (props) => {
    const { company, roleProjects } = props;

    return (<div className="experience-item">
        <div className="company">{company}</div>
        {roleProjects.map((roleProject, index) => {
            return <RoleProjectItem key={index} {...roleProject} />;
        })}
    </div>);
};

const Experience = () => {
    return (<div className="experience-section">
        <div className="heading-1">Work Experience</div>
        {EXPERIENCE_ITEMS.map((experienceItem, index) => {
            return <ExperienceItem key={index} {...experienceItem} />
        })}
    </div>);
};

export default Experience;