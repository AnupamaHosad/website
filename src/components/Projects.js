import React, { Fragment, useRef } from "react";
import { EXPERIENCE_ITEMS } from "../data/projects";
import Modal from "./Modal";

const ROLE_PROJECTS = EXPERIENCE_ITEMS.reduce((result, experienceItem) => {
    const { company, roleProjects } = experienceItem;
    const projects = roleProjects.map((roleProject) => {
        return {
            company,
            ...roleProject
        };
    });

    result.push(...projects);
    return result;
}, []);

const ExperienceDescription = (props) => {
    const { role, company, projects } = props;

    return (<div className="experience-item">
        <div className="company">{company}</div>
        <div className="role">{role}</div>
        <div className="role-projects-list">
        {projects.map(project => {
            const { title, description, tasks } = project;

            return (<p key={title}>
                <b>{title}</b>
                <div>{description}</div>
                {tasks && <ul className="tasks-list">
                    {tasks.map((task, index) => {
                        return (<li key={index}>{task}</li>)
                    })}
                </ul>}
            </p>)
        })}
        </div>
    </div>)
};

const ExperienceItem = (props) => {
    const { role, company, className } = props;
    const modalRef = useRef();

    const showModal = () => {
        modalRef.current.showModal();
    };

    return (<Fragment>
        <div className={`project-item ${className}`} onClick={showModal}>
            <div className="project-info">
                {/* <div className="name">{title}</div> */}
                <div className="role">{role}</div>
                <div className="company">{company}</div>
            </div>
        </div>
        <Modal ref={modalRef} className="role-project-modal">
            <ExperienceDescription {...props} />
        </Modal>
    </Fragment>);
}

const Projects = () => {
    return (<div className="projects-section">
        {ROLE_PROJECTS.map((obj, index) => <ExperienceItem {...obj} key={index} />)}
    </div>);
};

export default Projects;