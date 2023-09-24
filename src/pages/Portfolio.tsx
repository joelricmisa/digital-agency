import { projectsData } from "../lib/constants";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 100, opacity: 0 },
        }}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="mx-auto flex flex-col items-center justify-center gap-10 px-10 py-24  xl:w-11/12"
      >
        <p className="relative text-darkerNeutral before:mb-1 before:mr-4 before:inline-block before:h-[2px] before:bg-darkerNeutral/30 after:mb-1 after:ml-4 after:inline-block after:h-[2px] after:bg-darkerNeutral/30 xs:before:w-[80px] xs:after:w-[80px]   sm:before:w-[160px] sm:after:w-[160px]">
          Our Portfolio
        </p>

        <h1 className="text-center text-5xl font-bold leading-snug">
          <span className="text-primary">Projects</span> We Have <br />{" "}
          Completed
        </h1>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-5">
          {projectsData.categories.map((item, index) => (
            <li key={index}>
              <a
                href="#	"
                className={`${
                  index === 0 ? "bg-primary font-bold text-light" : "bg-neutral"
                } block rounded-md border border-black/10  px-4  py-2 shadow-sm shadow-black/10`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-10">
          {projectsData.images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt="project image" />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
