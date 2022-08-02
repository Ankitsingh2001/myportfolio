import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss"

const resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />


      <h1 className="resume__h1">Upload <span> resume </span> as soon as possible </h1>
    </section>
  );
};
export default resume;
