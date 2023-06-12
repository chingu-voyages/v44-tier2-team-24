import React from "react";
import Container from "../Components/Layout/Container";

export default function AboutUs() {
  return (
    <div className="main">
      <Container>
        <h1 className="mainHeader">About Us</h1>

        <section className="creator_section">
          {/* Jack's Info*/}
          <div className="imgContainer">
            <img src="/images/Jack.jpeg" alt="profile picture" />
          </div>
          <div className="content">
            <h4>Run Qi (Jack) Li</h4>
            <p>
              Jack is a self-taught full-stack Developer. Ex-Fukuoka JET (CIR -
              ALT) turned Web Dev. After being fascinated by Japan, teaching
              himself Japanese, and working in Japan for the past decade, Jack
              found an new direction in Web Dev, so he's now teaching himself
              programming languages.
            </p>
            <div className="icons">
              <a
                className="footer_link"
                href="https://www.linkedin.com/in/jackli0707/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="footer_link"
                href="https://jack-codes.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-briefcase"></i>
              </a>
              <a
                className="github_link_personal"
                href="https://github.com/jackli921"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
                
              </a>
            </div>
          </div>
        </section>
        <section className="creator_section">
          {/* Libby's Info*/}
          <div className="imgContainer">
            <img src="/images/Elizabeth.jpg" alt="profile picture" />
          </div>

          <div className="content">
            <h4>Libby Reeves</h4>
            <p>
              Libby is a Toronto-based front-end web developer. After taking
              an introductory course to web development, she made the switch
              into tech from her previous profession in science education. From
              there, she discovered a passion for web accessibility and creating
              unique web experiences for all users. In her non-coding time, you
              can find Elizabeth crocheting on her Twitch channel.
            </p>
            <div className="icons">
              <a
                className="footer_link"
                href="https://www.linkedin.com/in/elizabeth-reeves-web-developer/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="footer_link"
                href="https://elizabeth-reeves.ca"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-briefcase"></i>
              </a>
              <a
                className="github_link_personal"
                href="https://github.com/libbyreeves"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="creator_section">
          {/* Hector's Info*/}
          <div className="imgContainer">
            <img src="/images/Hector.jpeg" alt="profile picture" />
          </div>

          <div className="content">
            <h4>Hector Garcia</h4>
            <p>
              Hector recently graduated with a BS in Computer Science at The
              University of Texas Rio Grande Valley. He enjoy learning new
              things related to software development and looking for new
              opportunities to enhance his skills. He is passionate about
              building responsive and user-friendly interfaces that help shape
              the evolving digital world.{" "}
            </p>

            <div className="icons">
              <a
                className="footer_link"
                href="https://www.linkedin.com/in/hectorgarcia01/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="github_link_personal"
                href="https://github.com/hectorgarcia07"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="creator_section">
          {/* Sucheta's Info*/}
          <div className="imgContainer">
            <img src="/images/Sucheta.jpg" alt="profile picture" />
          </div>
          <div className="content">
            <h4>Sucheta Mukherjee</h4>
            <p>
              Sucheta is an enthusiastic self-taught Frontend Developer with a
              strong passion for designing user-friendly, scalable, and easily
              maintainable websites. Having recently made the decision to
              transition her career into the technology field, she has been
              actively expanding her skill set, constantly evolving and staying
              up to date with the latest techniques in the industry.
            </p>
            <div className="icons">
              <a
                className="footer_link"
                href="https://www.linkedin.com/in/sucheta-mukherjee-07347b88/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="footer_link"
                href="https://suchetamukherjee.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-briefcase"></i>
              </a>
              <a
                className="github_link_personal"
                href="https://github.com/sucheta90"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
