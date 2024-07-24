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
                    <h3>Ontario College Graduate Certificate in Computer Software and Database Development</h3>
                    <p className="info">
                      Loyalist College in Toronto-Victoria Park Campus, Ontario <span>&bull;</span>
                      <em className="date">August 2024</em>
                    </p>
                    <p style={{marginBottom: "0.1rem"}}>• Complet</p>
                    <p></p>
                  </div>
                  <div>
                    <h3>Bachelor of Science (Honours) in Information Technology Specializing in Software Engineering</h3>
                    <p className="info">
                      Sri Lanka Institute of Information Technology, Sri Lanka <span>&bull;</span>
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
                <h3>Software Engineer</h3>
                <p className="info">
                  DP Infotech (Pvt) Ltd
                  <span>&bull;</span> <em className="date">September 2022 - December 2022</em>
                </p>
                <p style={{marginBottom: "0.1rem"}}>• Completion of the Pearl Bay system with ERP and POS system for the David Pieris water park using ReactJS, NodeJS, ExpressJS & MongoDB, which was awarded the FITIS and SLASSCOM awards.</p>
                <p style={{marginBottom: "0.1rem"}}>• Implemented new modules into the current ERP system.</p>
                <p>• Implemented Management Accounts module into the current ERP system of David Pieris Group using JavaScript with jQuery, .NET Core & Oracle database.</p>
              </div>
              <div>
                <h3>Associate Software Engineer</h3>
                <p className="info">
                  DP Infotech (Pvt) Ltd
                  <span>&bull;</span> <em className="date">October 2020 - August 2022</em>
                </p>
                <p style={{marginBottom: "0.1rem"}}>• Full design and implementation of Pearl Bay system with ERP and POS system for the David Pieris water park using ReactJS, NodeJS, ExpressJS & MongoDB.</p>
                <p style={{marginBottom: "0.1rem"}}>• Drafted software requirements and managed software design and implementation.</p>
                <p style={{marginBottom: "0.1rem"}}>• Developed, coordinated and conducted complex tests and debugged the systems.</p>
                <p style={{marginBottom: "0.1rem"}}>• Managed software throughout SDLC and collaborated with team members to address issues.</p>
                <p>• Implemented Workshop module into the current ERP system of David Pieris Group using JavaScript with jQuery, .NET Core & Oracle database.</p>
              </div>
              {/* <br/> */}
              <div>
                <h3>Trainee Software Engineer</h3>
                <p className="info">
                  DP Infotech (Pvt) Ltd
                  <span>&bull;</span> <em className="date">November 2019 - September 2020</em>
                </p>
                <p style={{marginBottom: "0.1rem"}}>• Implemented new modules (Imports, Technical) into the current ERP system of David Pieris Group using JavaScript with jQuery, .NET Core & Oracle database.</p>
                <p style={{marginBottom: "0.1rem"}}>• Managed software throughout SDLC and collaborated with team members to address issues.</p>
                <p>• Gained knowledge in ERP level systems, Oracle database development and web development.</p>
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
