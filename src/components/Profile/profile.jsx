import React from "react";
import "./profile.css";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Profile3 from "../../assets/profile3.jpg";
import Profile4 from "../../assets/profile4.jpg";
import Profile5 from "../../assets/profile5.jpg";
import Profile6 from "../../assets/profile6.jpg";

const Profile = () => {
  return (
    <section id="profile">
      <h2 className="profileTitle">My Profile</h2>
      <span className="profileDesc">
        I am a hard working, honest individual. I am a good timekeeper, always
        willing to learn new skills. I am friendly, helpful and polite, have a
        good sense of humour. I am well organized and always plan ahead to make
        sure I manage my time well.
      </span>
      <div className="profileImgList">
        <img src={Profile1} alt="Profile 1" className="profileImgItem" />
        <img src={Profile2} alt="Profile 2" className="profileImgItem" />
        <img src={Profile3} alt="Profile 3" className="profileImgItem" />
        <img src={Profile4} alt="Profile 4" className="profileImgItem" />
        <img src={Profile5} alt="Profile 5" className="profileImgItem" />
        <img src={Profile6} alt="Profile 6" className="profileImgItem" />
      </div>
      <button className="profileBtn">See more</button>
    </section>
  );
};

export default Profile;
