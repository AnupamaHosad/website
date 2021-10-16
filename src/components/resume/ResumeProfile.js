import React from "react";
  
const ResumeProfile = () => {
    return (<section className="profile-section">
        <div>
            <a href="http://anupamahosad.com" target="_blank">
                <img src="https://avatars2.githubusercontent.com/u/5268207?s=400&u=a8b97f444fae1d482bfb04eaeebdd3581294347a&v=4" 
                className="profile-img" />
            </a>
        </div>
        <div>
            <div className="name">Anupama H</div>
            <div className="role">UI Engineer</div>
            <div>
                <span className="profile-detail-item">
                    <a href="https://anupamahosad.com" target="_blank" className="website-url">
                        <img class="icon" src="https://cdn4.iconfinder.com/data/icons/internet-seo-and-online-activity/400/Internet_online_world_wide_web_globe_network-512.png"/>anupamahosad.com
                    </a>
                </span>
                <span className="profile-detail-item">
                    <img className="icon" src="https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-14-128.png"/>anuhosad@gmail.com
                </span>
                <span className="profile-detail-item">
                    <img className="icon" src="https://cdn3.iconfinder.com/data/icons/faticons/32/smartphone-01-128.png"/>9242041508
                </span>
            </div>
        </div>
    </section>);
};

export default ResumeProfile;