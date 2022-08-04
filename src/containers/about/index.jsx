import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiCss3Full } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import "./style.scss";

const job_summary =
  "Hello, I am front End developer. A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging";

const personalDeltails = [
  {
    label: "Name :",
    value: "Ankit Singh",
  },
  {
    label: "Age :",
    value: "21",
  },
  {
    label: "Address :",
    value:
      "Azamgarh, Uttar Pradesh, India 276122",
  },
  {
    label: "Email :",
    value: "ankitsi3211@gmail.com",
  },
  {
    label: "Contact :",
    value: "+919950874842",
  },
];
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translate(-900px)" }}
            end={{ transform: "translate(0px)" }}
          >
            <div>
              <h3>front End Developer</h3>
              <p>{job_summary}</p>
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translate(500px)" }}
            end={{ transform: "translate(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Presonal Information
            </h3>
            <ul>
              {personalDeltails.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
          play
          duration={1.5}
          delay={1}
          start={
            {transform:"translateX(600px)"}
          }
          end={
            {transform:"translateX(0)"}
          }>
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <DiHtml5 size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiCss3Full size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJavascript size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
