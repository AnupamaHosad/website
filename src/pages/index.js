import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import SocialLinks from "../components/SocialLinks";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MidDot from "../components/MidDot";
import "../styles/index.scss";

const getAnchorTag = (url, content) => {
    return (<a href={url} target="_blank" rel="noopener noreferrer" className="anchor-link">{content}</a>)
};

const App = () => {
    const currentYear = new Date().getFullYear();

    return (<Fragment>
        <Helmet>
            <html lang="en" />
            <title>Anupama Hosad</title>
            <link rel="icon" href="//d2c297xniuypar.cloudfront.net/images/AH.png" />
            <link href="https://fonts.googleapis.com/css?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="initial-scale=1,width=device-width" />
            <meta name="description" content="Profile page of Anupama Hosad" />
            <meta name="keywords" content="Anupama, Hosad, UI Engineer, Front end developer, UI, Front end" />
            {/* Global site tag (gtag.js) - Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149349342-1"></script>
            <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "UA-149349342-1");
                `}
            </script>
        </Helmet>
        <nav className="nav-cont">
            <Link to="/blog">
                <span className="pill-item">Blog</span>
            </Link>
        </nav>
        <section className="section about-me-section">
            <img src="//d2c297xniuypar.cloudfront.net/images/profile.jpeg" className="profile-image" alt="profile"/> 
            <div className="about-me-side">
                <h1 className="profile-name">Anupama Hosad</h1>
                <h4 className="profile-subtitle">UI Engineer <MidDot /> Bibliophile <MidDot /> INFJ</h4>
                <p className="profile-desc">
                I am a UI Engineer having 7+ years of experience in using client side technologies like HTML, CSS, JavaScript and libraries / frameworks 
                like jQuery, Backbone, React, Handlebars, Underscore, Require JS, Node JS, Bootstrap, Less, SCSS, Grunt and Webpack 
                for building highly performant and scalable web applications.<br />
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
            <h1 className="section-title">Skills</h1>
            <Skills />
        </section>
        <section className="section">
            <h1 className="section-title">Projects</h1>
            <Projects />
        </section>
        <section className="section">
            <h1 className="section-title">Find me on</h1>
            <SocialLinks />
        </section>
        <footer>
            <span>Copyright &copy; {currentYear} Anupama Hosad</span><MidDot />
            <span>All rights reserved</span><MidDot />
            <span>Made with <span role="img" aria-label="love">❤️</span>using {getAnchorTag("https://www.gatsbyjs.org/", "Gatsby JS")}</span>
        </footer>
    </Fragment>);
}

export default App;

