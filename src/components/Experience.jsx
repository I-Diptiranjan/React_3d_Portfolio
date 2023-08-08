import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Experiencecard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{
      borderRight: "7px solid #232631",
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img src={experience.icon} alt={experience.company_name} />
      </div>
    }>
    <div className="text-white tet-[24px] font-bold">
      <h3>{experience.title}</h3>
      <p
        className="text-secondary text-[16px]font-semibold "
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    {/* <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`exprience-point-${index}`}
          className="text-white-100 text-[14px]pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul> */}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far </p>
        <h2 className={styles.sectionHeadText}>My Academic Journey</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <Experiencecard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
