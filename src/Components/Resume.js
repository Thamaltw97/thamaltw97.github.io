import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.degree}>
    //       <h3>{education.degree}</h3>
    //       <p className="info">
    //         {education.school} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //     </div>
    //   );
    // });

    // const work = this.props.data.work.map(function (work) {
    //   return (
    //     <div key={work.title}>
    //       <h3>{work.title}</h3>
    //       <p className="info">
    //         {work.company}
    //         <span>&bull;</span> <em className="date">{work.years}</em>
    //       </p>
    //       <p>{work.description}</p>
    //     </div>
    //   );
    // });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {/* {education} */}
                  <div>
                    <h3>Bachelor of Science (Honours) in Information Technology Specializing in Software Engineering</h3>
                    <p className="info">
                      Sri Lanka Institute of Information Technology <span>&bull;</span>
                      <em className="date">July 2021</em>
                    </p>
                    <p style={{marginBottom: "0.1rem"}}>• Completed the 4th year research on Intelligent system for agriculture in Sri Lanka, using Android with Java and Python with Tensorflow lite.</p>
                    <p>• Completed 3rd year project on implementing an e-commerce site using ReactJS, NodeJS, ExpressJS and MongoDB. And completed several other projects as well.</p>
                  </div>
                  <div>
                    <h3>Completion of Advanced level</h3>
                    <p className="info">
                      Dharmasoka College <span>&bull;</span>
                      <em className="date">August 2016</em>
                    </p>
                    <p>• Completed the Advanced level studies on Combined Mathematics, Chemistry and Physics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* {work} */}
              <div>
                <h3>Associate Software Engineer</h3>
                <p className="info">
                  DP Infotech (Pvt) Ltd
                  <span>&bull;</span> <em className="date">October 2020 - Present</em>
                </p>
                <p style={{marginBottom: "0.1rem"}}>• Full implementation of Pearl-bay system with ERP and POS system for the David Peiris water park.</p>
                <p style={{marginBottom: "0.1rem"}}>• Drafted software requirements and managed software design and implementation.</p>
                <p style={{marginBottom: "0.1rem"}}>• Implemented new modules into the current ERP system.</p>
                <p style={{marginBottom: "0.1rem"}}>• Developed, coordinated and conducted complex tests and debug the systems.</p>
                <p style={{marginBottom: "0.1rem"}}>• Managed software throughout SDLC and collaborated with team members to address issues.</p>
                <p>• Defined and continuously improved UI development best practices.</p>
              </div>
              {/* <br/> */}
              <div>
                <h3>Trainee Software Engineer</h3>
                <p className="info">
                  DP Infotech (Pvt) Ltd
                  <span>&bull;</span> <em className="date">November 2019 - September 2020</em>
                </p>
                <p style={{marginBottom: "0.1rem"}}>• Drafted software requirements and managed software design and implementation.</p>
                <p style={{marginBottom: "0.1rem"}}>• Implemented new modules into the current ERP system.</p>
                <p>• Managed software throughout SDLC and collaborated with team members to address issues.</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
