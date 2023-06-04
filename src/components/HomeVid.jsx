import React from "react";

const HomeVid = () => {
  return (
    <div className="vid-wrapper">
      <div className="overlay"></div>
      <video
        src="/Video/video.mp4"
        autoPlay
        loop
        muted
        className="video"
      ></video>
      <div className="vid-content">
        <div>
          <h1 className="vid-heading">
            THE MOST POWERFUL THEME FOR <span id="gaming-span">GAMING</span>
          </h1>
        </div>
        <p className="vid-para">
          Arcane gives you the power to create the perfect website for your team
          and community. A trully perfect theme for games!
        </p>
        <button className="vid-btn">
          <div className="vid-btn-icon"></div>
          <span className="vid-btn-text">REGISTER TODAY</span>
        </button>
      </div>
    </div>
  );
};

export default HomeVid;
