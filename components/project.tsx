// "use client";

// import { useRef } from "react";
// import { projectsData } from "@/lib/data";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// type ProjectProps = (typeof projectsData)[number];

// export default function Project({
//   title,
//   description,
//   tags,
//   imageUrl,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgess,
//         opacity: opacityProgess,
//       }}
//       className="group mb-3 sm:mb-8 last:mb-0"
//     >
//       <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
//         <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
//           <h3 className="text-2xl font-semibold">{title}</h3>
//           <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
//             {description}
//           </p>
//           <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//             {tags.map((tag, index) => (
//               <li
//                 className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
//                 key={index}
//               >
//                 {tag}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <Image
//           src={imageUrl}
//           alt="Project I worked on"
//           quality={95}
//           className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
//         transition 
//         group-hover:scale-[1.04]
//         group-hover:-translate-x-3
//         group-hover:translate-y-3
//         group-hover:-rotate-2

//         group-even:group-hover:translate-x-3
//         group-even:group-hover:translate-y-3
//         group-even:group-hover:rotate-2

//         group-even:right-[initial] group-even:-left-40"
//         />
//       </section>
//     </motion.div>
//   );
// }



"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  exploreUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6 dark:bg-gray-800 dark:border-gray-700 transition hover:shadow-xl"
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-700 dark:text-gray-300 text-base">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 overflow-hidden max-h-16 overflow-y-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full dark:text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <FaGithub size={16} /> GitHub Repo
          </a>
        )}
        {exploreUrl && (
          <a
            href={exploreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-md hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt size={16} /> Explore More
          </a>
        )}
      </div>
    </motion.div>
  );
}
