import React from "react";

const SOCIAL_LINKS = [{
    link: "https://www.linkedin.com/in/anupama-h/",
    image: "/images/linked.png",
    altText: "Linked In"
}, {
    link: "https://medium.com/@anuhosad",
    image: "/images/medium.png",
    altText: "Medium"
}, {
    link: "https://twitter.com/anuhosad",
    image: "/images/twiitter.png",
    altText: "Twitter Link"
}, {
    link: "https://github.com/AnupamaHosad",
    image: "/images/github.png",
    altText: "Github"
}, {
    link: "https://slides.com/anuhosad",
    image: "/images/slides.png",
    altText: "Slides dot com"
}, {
    link: "https://www.instagram.com/photography_by_anu/",
    image: "/images/insta.png",
    altText: "Instagram Link"
}];

const SocialLinks = () => {
    return (<div className="findme-section">
        {SOCIAL_LINKS.map((obj, index) => {
            const { link, image, altText } = obj;
            return <a href={link} className="findme-link" target="_blank" key={index} rel="noopener noreferrer">
                <img src={image} alt={altText} />
            </a>
        })}
    </div>)
};

export default SocialLinks;