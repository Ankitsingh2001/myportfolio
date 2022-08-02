import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.scss'
// import ImageOne from '../../image/imagg1'
const projects = () => {
  return (
    <section id="project" className="project">
      <PageHeaderContent
        headerText="My project"
        icon={<BsInfoCircleFill size={40} />}
      />

      <h1 className="project__h1">Upload  projects as soon as posible</h1>
    </section>
  );
};
export default projects;
