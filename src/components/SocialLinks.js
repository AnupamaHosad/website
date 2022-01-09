import React from "react";

const SocialLinks = (props) => {
    const { source } = props;
    const isResumeView = (source === "resume");
    const className = `social-links ${isResumeView ? "resume-social-links" : "findme-section"}`;

    let SOCIAL_LINKS = [{
        id: "LINKED_IN",
        link: "https://www.linkedin.com/in/anupama-h/",
        image: isResumeView ? "//d2c297xniuypar.cloudfront.net/images/linkedin-w.png" : "//d2c297xniuypar.cloudfront.net/images/linked.png",
        altText: "Linked In"
    }, {
        id: "MEDIUM",
        link: "https://medium.com/@anuhosad",
        image: isResumeView ? "//d2c297xniuypar.cloudfront.net/images/medium-w.png" : "//d2c297xniuypar.cloudfront.net/images/medium.png",
        altText: "Medium"
    }, {
        id: "TWITTER",
        link: "https://twitter.com/anuhosad",
        image: isResumeView ? "//d2c297xniuypar.cloudfront.net/images/twitter-w.png" : "//d2c297xniuypar.cloudfront.net/images/twiitter.png",
        altText: "Twitter Link"
    }, {
        id: "GITHUB",
        link: "https://github.com/AnupamaHosad",
        image: isResumeView ? "//d2c297xniuypar.cloudfront.net/images/github-w.png" : "//d2c297xniuypar.cloudfront.net/images/github.png",
        altText: "Github"
    }];

    if (!isResumeView) {
        SOCIAL_LINKS.push({
            id: "SLIDES",
            link: "https://slides.com/anuhosad",
            image: "//d2c297xniuypar.cloudfront.net/images/slides.png",
            altText: "Slides dot com"
        }, {
            id: "INSTAGRAM",
            link: "https://www.instagram.com/photography_by_anu/",
            image: "//d2c297xniuypar.cloudfront.net/images/insta.png",
            altText: "Instagram Link"
        });
    }

    return (<div className={className}>
        {isResumeView && <div className="find-me-title">Find me on</div>}
        {SOCIAL_LINKS.map((obj, index) => {
            const { link, image, altText } = obj;
            return <a href={link} className="findme-link" target="_blank" key={index} rel="noopener noreferrer">
                <img src={image} alt={altText} className="social-link-image" />
            </a>
        })}
    </div>)
};

export default SocialLinks;