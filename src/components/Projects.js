import React from "react";

const PROJECT_ITEMS = [{
    title: "PIM",
    description: ""
}, {
    title: "Video Ads",
    description: ""
}, {
    title: "Interstitial Ads",
    description: ""
}, {
    title: "Reseller Portal",
    description: ""
}, {
    title: "Kensho",
    description: ""
}, {
    title: "LTVP",
    description: ""
}];

const Projects = () => {
    return (<div className="projects-section">
        {PROJECT_ITEMS.map((obj, index) => {
            const { title } = obj;
            return (<div className="project-item">{title}</div>)
        })}
    </div>);
};

export default Projects;