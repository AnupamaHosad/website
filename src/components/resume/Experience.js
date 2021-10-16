import React from "react";
  
const Experience = () => {
    return (<div className="experience-section">
        <div className="heading-1">Work Experience</div>
        <div className="experience-item">
            <div className="role">Technical Lead - UI</div>
            <div className="flex-space-center">
                <div className="company">Unbxd</div>
                <span className="calender-icon">Sept 2017 - Today</span>
            </div>
            <p>
                <b>Product Information Management System (PIM)</b><br />
                Built the Unbxd Product Information Management (PIM) system from scratch. PIM is a tool for e-commerce brands & retailers where they can efficiently manage all product related content 
                at one place of instant familiarity with seamless distribution in the right format to various channels. Was responsible for the complete lifecycle of the UI portal right from choosing the UI technology, setting up the code base & build lifecycles to  
                enforcing best practices. Built many reusable components that were used throughout the application which helped in building new features quickly.
            </p>
        </div>
        <div className="experience-item">
            <div className="role">Technical Lead - UI</div>
            <div className="flex-space-center">
                <div className="company">Inmobi</div>
                <span className="calender-icon">Jan 2016 - Sept 2017</span>
            </div>
            <p>
                <b>Inmobi Customer Interface Portal</b><br />
                The Inmobi Customer Interface Portal provides a platform for publishers and advertisers to come onboard and 
                advertise/monetize with InMobi. Contributed in building various pages in this portal.
                As a tech lead I was responsible for delivering all the UI projects for the 
                Performance App Download section on the customer interface portal. As part of this worked on creative manager which is a tool to simplify operations around creatives.
            </p>
        </div>
        <div className="experience-item">
            <div className="role">Senior Engineer - UI</div>
            <div className="flex-space-center">
                <div className="company">Inmobi</div>
                <span className="calender-icon">Jan 2015 - Dec 2016</span>
            </div>
            <p>
                <b>Reseller Platform</b><br />
                Contributed in building the campaign creation workflows in the Reseller Platform. 
                As part of this built the creation flows for Banner, Interstitial and Video adformats.
            </p>
            <p>
                <b>Video Interstitial Ads</b><br />
                Worked on building video ads and explored solutions for prebuffering videos for a buffer free instant play experience that helped in improving the render rates and play rates significantly. 
                Worked on implementing VAST and VPAID mobile video technologies. 
                Also implemented viewability tracking in the video ads through Moat and IAS integrations.
            </p>
            <p>
                <b>AdFormats</b><br />
                Worked on the creation of cutting edge AdFormats like Banner Ads, Static Interstitial Ads, Frame Ads, Enriched Interstitial Ads and Carousal Ads. 
                Automated the ad generation process using Grunt task runner that improved the efficiency of the deliverables.
            </p>
        </div>
        <div className="experience-item">
            <div className="role">Software Engineer - UI</div>
            <div className="flex-space-center">
                <div className="company">Inmobi</div>
                <span className="calender-icon">June 2012 - Dec 2014</span>
            </div>
            <p>
                <b>InMobi Lifetime Value Platform Portal</b><br />
                Contributed in building the InMobi Lifetime Value Platform Portal (LTVP). 
                LTVP is a one stop shop for Mobile App Developers to analyze, monetize, and drive engagement for their Apps.
            </p>
            <p>
                <b>App Intelligence Portal Rich UI</b><br />
                Redesigned the App Intelligence Insights portal as part of Bootcamp Project. 
                The main idea was to create a dashboard for the developer where they can view all the required information in brief at one place. 
                The application used various widgets to display all the data visually.
            </p>
        </div>
    </div>);
};

export default Experience;