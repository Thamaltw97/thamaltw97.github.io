"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I landed my dream role as a Software Engineer.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Node.js, and MongoDB, C#, .NET, SQL
        </span>
        . I am also familiar with Java, Python and TypeScript. I am always looking to
        learn new technologies. I am based in <span className="font-medium">Ontario, Canada </span> and currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer in <span className="font-medium">Canada/North America</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span> like,{" "}
        <span className="font-medium">history and science</span>. I also love to play badminton.
      </p>
    </motion.section>
  );
}
