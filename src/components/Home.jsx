import React from "react";
import "./Home.css";
import HomeVid from "./HomeVid";

const Home = () => {
  return (
    <div>
      {/********************************* Nav Bar Start *******************************/}

      <div className="nav-container">
        <div className="nav-main">
          <div className="nav-main-wrapper">
            <div className="nav-icon-div">
              <div className="nav-icons" id="youtube"></div>
              <div className="nav-icons" id="steam"></div>
              <div className="nav-icons" id="twitch"></div>
              <div className="nav-icons" id="discord"></div>
            </div>
            <div className="nav-logo-div"></div>
            <div className="nav-account-div">
              <button className="nav-btn reg-btn">
                <div className="reg-icon-cont">
                  <div className="reg-icon"></div>
                </div>
                <span>REGISTER</span>
              </button>
              <div className="or">OR</div>
              <button className="nav-btn" id="signin-btn">
                <div className="sign-icon-cont">
                  <div className="sign-icon"></div>
                </div>
                <div className="sign-label">SIGN IN</div>
              </button>
            </div>
          </div>
        </div>

        {/*********************** Nav Sub ****************/}
        <div className="nav-sub">
          <div className="link-wrapper">
            <a href="none" className="nav-link">
              <div className="link-div">HOMEPAGES</div>
            </a>
            <a href="none" className="nav-link">
              <div className="link-div">HOW IT WORKS</div>
            </a>
            <a href="none" className="nav-link">
              <div className="link-div">TOURNAMENTS</div>
            </a>
            <a href="none" className="nav-link">
              <div className="link-div">BLOG</div>
            </a>
            <a href="none" className="nav-link">
              <div className="link-div">FORUMS</div>
            </a>
            <a href="none" className="nav-link">
              <div className="link-div">SHOP</div>
            </a>
            <a href="none" className="nav-link">
              <div className="link-div">CONTACT</div>
            </a>
          </div>
        </div>
      </div>
      {/********************************* Nav Bar End *******************************/}

      {/********************************* Video Container Starts *******************************/}

      <div className="video-container">
        <HomeVid />
      </div>

      {/********************************* Service Section Starts *******************************/}

      <div className="service-section">
        <div className="service-container">
          <div className="service-div">
            <div className="serv-img-cont">
              <div className="service-img" id="serv-icon1"></div>
            </div>
            <h1 className="service-heading">FOR TEAMS</h1>
            <p className="service-para">
              Create awesome websites for your <br /> team, full customizable
              theme <br /> that gives you unlimited <br /> possibilities!
            </p>
          </div>
          <div className="service-div">
            <div className="serv-img-cont">
              <div className="service-img" id="serv-icon2"></div>
            </div>
            <h1 className="service-heading">CREATE COMMUNITIES</h1>
            <p className="service-para">
              Arcane gives you the power to be <br /> able to create communities
              where <br /> users can create and manage <br /> teams, matches and
              tournaments.
            </p>
          </div>
          <div className="service-div">
            <div className="serv-img-cont">
              <div className="service-img" id="serv-icon3"></div>
            </div>
            <h1 className="service-heading">NEWS AND BLOGS</h1>
            <p className="service-para">
              If you aren’t interested in the <br /> community side, Arcane also{" "}
              <br /> allows you to create awesome <br /> pages focused on news
              and blogs.
            </p>
          </div>
          <div className="service-div">
            <div className="serv-img-cont">
              <div className="service-img" id="serv-icon4"></div>
            </div>
            <h1 className="service-heading">GAME STUDIOS</h1>
            <p className="service-para">
              Got a game or a project and a <br /> need a website? Create your{" "}
              <br />
              portfolio today with Arcane, easy <br /> peasy!
            </p>
          </div>
        </div>
      </div>

      {/********************************* Service Section Ends *******************************/}
    </div>
  );
};

export default Home;
