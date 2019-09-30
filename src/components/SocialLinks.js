import React from "react";
import linkedInLogo from "../images/linkedin.png";
import twitterLogo from "../images/twitter.png";
import mediumLogo from "../images/medium.png";
import githubLogo from "../images/github.png";
import slidesLogo from "../images/slides.png";
import instaLogo from "../images/insta.png";

const SOCIAL_LINKS = [{
    link: "https://www.linkedin.com/in/anupama-h/",
    image: linkedInLogo,
    altText: "Linked In"
}, {
    link: "https://medium.com/@anuhosad",
    image: mediumLogo,
    altText: "Medium"
}, {
    link: "https://twitter.com/anuhosad",
    image: twitterLogo,
    altText: "Twitter Link"
}, {
    link: "https://github.com/AnupamaHosad",
    image: githubLogo,
    altText: "Github"
}, {
    link: "https://slides.com/anuhosad",
    image: slidesLogo,
    altText: "Slides dot com"
}, {
    link: "https://www.instagram.com/anunavada/",
    image: instaLogo,
    altText: "Instagram Link"
}];

const SocialLinks = () => {
    return (<div className="findme-section">
        {SOCIAL_LINKS.map((obj, index) => {
            const { link, image, altText } = obj;
            return <a href={link} className="findme-link" target="_blank" key={index}>
                <img src={image} alt={altText} />
            </a>
        })}
    </div>)
};

export default SocialLinks;