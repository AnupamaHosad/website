import React from "react";

const SKILL_ITEMS = [
    {
        name: "HTML",
        render: () => {
            return (<img src="/images/html.png" alt="Underscore Logo" />);
        }
    }, {
        name: "CSS",
        render: () => {
            return (<img src="/images/css.png" alt="Underscore Logo" />);
        }
    }, {
        name: "Javascript",
        render: () => {
            return (<img src="/images/js.png" alt="Underscore Logo" />);
        }
    }, {
        name: "ES6",
        render: () => {
            return (<img src="/images/es6.png" alt="Underscore Logo" />);
        }
    }, {
        name: "jQuery",
        render: () => {
            return (<img src="/images/jquery.png" alt="Underscore Logo" />);
        }
    }, {
        name: "Underscore",
        className: "medium",
        render: () => {
            return (<img src="/images/underscore.png" alt="Underscore Logo" />);
        }
    }, {
        name: "Handlebars",
        render: () => {
            return (<img src="/images/handlebars.png" alt="Handlebars Logo" />);
        }
    }, {
        name: "Require JS",
        render: () => {
            return (<img src="/images/require.png" alt="Require JS Logo" />);
        }
    }, {
        name: "Grunt",
        render: () => {
            return (<img src="/images/grunt.png" alt="Grunt JS Logo" />);
        }
    }, {
        name: "Webpack",
        className: "large",
        render: () => {
            return (<img src="/images/webpack.png" alt="Webpack Logo" />);
        }
    }, {
        name: "Backbone",
        className: "large",
        render: () => {
            return (<img src="/images/backbone.png" alt="Backbone JS Logo" />);
        }
    }, {
        name: "React",
        className: "medium",
        render: () => {
            return (<img src="/images/react.png" alt="React JS Logo" />);
        }
    }, {
        name: "Node JS",
        className: "medium",
        render: () => {
            return (<img src="/images/node.png" alt="Node JS Logo" />);
        }
    }, {
        name: "Bootstrap",
        className: "large",
        render: () => {
            return (<img src="/images/bootstrap.png" alt="Bootstrap Logo" />);
        }
    }, {
        name: "Less",
        render: () => {
            return (<img src="/images/less.png" alt="Less Logo" />);
        }
    }, {
        name: "SCSS",
        render: () => {
            return (<img src="/images/sass.png" alt="Scss Logo" />);
        }
    }
]

const Skills = () => {
    return (<div className="skills-section">
        {SKILL_ITEMS.map((itemObj, index) => {
            let { className = "", render } = itemObj;

            return <div className={`skill-item ${className}`} key={index}>{render()}</div>
        })}
    </div>);
};

export default Skills;