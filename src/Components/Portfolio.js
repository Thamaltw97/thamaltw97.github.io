import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            {/* <Zmage alt={projects.title} src={projectImage} /> */}
            <div style={{ textAlign: "center" }}><b>{projects.title}</b></div>
            {/* <a href={projects.url} target="_blank" style={{ textAlign: "center" }}>Source</a> */}
            <p style={{ textAlign: "left", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>{projects.category}</p>
            <a href={projects.url} target="_blank" style={{ textAlign: "center", marginTop: "0.5rem" }}><button className="btn" style={{ textAlign: "center", paddingTop: "0.2rem", paddingBottom: "0.2rem" }}>Source</button></a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects. (COMPANY PROJECTS ARE EXCLUDED)</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
