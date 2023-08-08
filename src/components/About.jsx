import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";

import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import CV from "../assets/CV-DIPTIRANJAN-SAHOO.pdf";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <a
          href={CV}
          download={true}
          className=" text-[18px] font-bold border rounded-xl p-2 text-white">
          Download CV
        </a>
        <br />
        <br />
        I'm Diptiranjan, and I'm all about embracing the world of technology
        with both hands. Currently, I'm diving headfirst into the world of
        B.Tech studies, where algorithms and software architecture have become
        my playground. There's something thrilling about untangling complex
        technical concepts and turning them into practical solutions. But that's
        not all - my alter ego comes alive when I put on my web developer hat.
        Crafting websites isn't just a job for me; it's a passion. I take pride
        in creating digital spaces that aren't just visually appealing, but
        super functional too. Whether it's making sure the layout works
        seamlessly on any device or experimenting with the latest tech trends,
        I'm always up for the challenge.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
