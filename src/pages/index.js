import React from "react";
import { Link } from "gatsby";
import SocialLinks from "../components/SocialLinks";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MidDot from "../components/MidDot";
import "../styles/main.scss";
import HeadSection from "../components/HeadSection";

const getAnchorTag = (url, content) => {
    return (<a href={url} target="_blank" rel="noopener noreferrer" className="anchor-link">{content}</a>)
};

const App = () => {
    const currentYear = new Date().getFullYear();

    return (<div className="home">
        <HeadSection />
        <nav className="navbar">
            <a href="/resume" target="_blank" rel="noopener noreferrer">
                <span className="navbar__pill">Resume</span>
            </a>
            <Link to="/blog">
                <span className="navbar__pill">Blog</span>
            </Link>
        </nav>
        <section className="section about-me">
            <img src="//d2c297xniuypar.cloudfront.net/images/profile.jpeg" className="profile-image" alt="profile"/> 
            <div className="about-me__side">
                <h1 className="profile-name">Anupama Hosad</h1>
                <h4 className="profile-subtitle">Frontend Engineer <MidDot /> Bibliophile <MidDot /> INFJ</h4>
                <p className="profile-desc">
                I am a UI Engineer having 9+ years of experience in using client side technologies like HTML, CSS, JavaScript and libraries / frameworks 
                like jQuery, Backbone, React, Gatsby, Grahp QL, Handlebars, Underscore, Require JS, Node JS, Bootstrap, Less, SCSS, Grunt and Webpack 
                for building highly performant and scalable web applications.<br /><br />
                In my spare time I attend meetups, explore new technologies & read a lot of fiction! Come say hi if you attend 
                &nbsp;{getAnchorTag("https://www.meetup.com/Girls-Who-Javascript/", "Girls Who Javascript")}, 
                &nbsp;{getAnchorTag("https://www.meetup.com/jslovers-bengaluru/", "JS Lovers-Bengaluru")},
                &nbsp;{getAnchorTag("https://www.meetup.com/JavaScriptMeetup/", "Javascript Meetup")} or
                &nbsp;{getAnchorTag("https://www.meetup.com/ReactJS-Bangalore/", "React JS Bangalore")}.&nbsp;
                Always in search of new experiences, I have recently started dabbling into {getAnchorTag("https://www.instagram.com/photography_by_anu/", "photography")}.
                </p>
            </div>
        </section>
        <section className="section">
            <h1 className="section__title">Skills</h1>
            <Skills />
        </section>
        <section className="section">
            <h1 className="section__title">Roles & Projects</h1>
            <Projects />
        </section>
        <section className="section">
            <h1 className="section__title">Find me on</h1>
            <SocialLinks />
        </section>
        <footer>
            <span>Copyright &copy; {currentYear} Anupama Hosad</span><MidDot />
            <span>All rights reserved</span><MidDot />
            <span>Made with <span role="img" aria-label="love">❤️</span> using {getAnchorTag("https://www.gatsbyjs.org/", "Gatsby JS")}</span>
        </footer>
    </div>);
}

export default App;

