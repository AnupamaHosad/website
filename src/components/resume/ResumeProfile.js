import React from "react";
import MidDot from "../MidDot";
  
const ResumeProfile = () => {
    return (<section className="profile-section">
        <div>
            <a href="http://anupamahosad.com" target="_blank" rel="noopener noreferrer">
                <img src="https://avatars2.githubusercontent.com/u/5268207?s=400&u=a8b97f444fae1d482bfb04eaeebdd3581294347a&v=4" 
                className="profile-img" alt="profile" />
            </a>
        </div>
        <div>
            <div className="name">Anupama H</div>
            <div className="role">Frontend Engineer</div>
            <div>
                <span className="profile-detail-item">
                    <img className="icon" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/mail-512.png" alt="email icon" />anuhosad@gmail.com
                </span>
                <MidDot />
                <span className="profile-detail-item">
                    <img className="icon" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/phone-512.png" alt="phone" />9242041508
                </span>
                <MidDot />
                <span className="profile-detail-item">
                    <a href="https://anupamahosad.com" target="_blank" rel="noopener noreferrer" className="website-url">
                        <img class="icon" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/world-512.png" alt="website" />anupamahosad.com
                    </a>
                </span>
            </div>
        </div>
    </section>);
};

export default ResumeProfile;