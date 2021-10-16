import React, { Fragment } from "react";
  
const Education = () => {
    return (<Fragment>
        <div className="heading-1">Education</div>
        <ul className="education-list">
            <li className="education-row">
                <div className="institute">
                    <span>PES School Of Engineering (2008 - 2012)</span><br />
                    <span>( Bachelor Of Engineering )</span>
                </div>
                <div className="grade">81.28%</div>
            </li>
            <li className="education-row">
                <div className="institute">
                    <span>St Francis Composite PU college (2006 - 2008)</span><br />
                    <span>( Pre University Course )</span>
                </div>
                <div className="grade">87.66%</div>
            </li>
            <li className="education-row">
                <div className="institute">
                    <span>Mary Immaculate High School (1996 - 2006)</span><br />
                    <span>( Secondary School Education )</span>
                </div>
                <div className="grade">84.8%</div>
            </li>
        </ul>
    </Fragment>);
};

export default Education;