import React from "react";
import ResumeProfile from "../components/resume/ResumeProfile";
import Experience from "../components/resume/Experience";
import AboutMe from "../components/resume/AboutMe";
import TechSkills from "../components/resume/TechSkills";
import Education from "../components/resume/Education";
import "../styles/resume.scss";
  
const Resume = () => {
    return (<section className="resume">
        <section className="resume-left">
            <section className="resume-block">
                <ResumeProfile />
            </section>
            <section className="resume-block">
                <Experience />
            </section>
        </section>
        <section className="resume-right">
            <section className="resume-block">
                <AboutMe />
            </section>
            <section className="resume-block">
                <TechSkills />
            </section>
            <section className="resume-block">
                <Education />
            </section>
        </section>
    </section>);
};

export default Resume;