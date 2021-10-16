import React from "react";
// import Modal from "./Modal";

const PROJECT_ITEMS = [{
    title: "Self Serve",
    className: "project-ss",
    role: "Tech Lead - UI",
    company: "Unbxd",
    description: ""
}, {
    title: "PIM",
    className: "project-pim",
    role: "Tech Lead - UI",
    company: "Unbxd",
    description: ""
}, {
    title: "Video Ads",
    className: "project-video",
    role: "Tech Lead - UI",
    company: "Inmobi",
    description: ""
}, {
    title: "Interstitial Ads",
    className: "project-ads",
    role: "Senior Software Engineer",
    company: "Inmobi",
    description: ""
}, {
    title: "Reseller Portal",
    className: "project-rso",
    role: "Senior Software Engineer",
    company: "Inmobi",
    description: ""
}, {
    title: "Kensho",
    className: "project-kensho",
    role: "Software Engineer",
    company: "Inmobi",
    description: ""
}, {
    title: "LTVP",
    className: "project-ltvp",
    role: "Software Engineer",
    company: "Inmobi",
    description: ""
}];

const ProjectItem = (props) => {
    const { title, role, company, className } = props;

    return (<div className={`project-item ${className}`}>
        <div className="project-info">
            <div className="name">{title}</div>
            <div className="role">{role}</div>
            <div className="company">{company}</div>
        </div>
        {/* <Modal open={isModalOpen}>
            <div></div>
        </Modal> */}
    </div>)
}

const Projects = () => {
    return (<div className="projects-section">
        {PROJECT_ITEMS.map((obj, index) => <ProjectItem {...obj} key={index} />)}
    </div>);
};

export default Projects;