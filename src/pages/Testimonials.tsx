import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../lib/constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  const dummyArr = [1, 2, 3, 4, 5];
  return (
    <section id="testimonials" className="bg-secondary">
      <motion.div
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: -100, opacity: 0 },
        }}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="mx-auto flex flex-col gap-10  px-10 py-24 text-light xl:w-11/12"
      >
        <div className="flex flex-wrap justify-between px-5">
          <p className="relative before:mb-1 before:mr-2 before:inline-block before:h-[2px] before:w-[80px] before:bg-darkerNeutral sm:before:w-[250px]">
            Customer Feedback
          </p>
          <ul className="relative hidden  items-center justify-center gap-2 before:mr-1 before:mt-1 before:inline-block before:h-[2px] before:w-[250px] before:bg-darkerNeutral lg:flex">
            {dummyArr.map((bullet, index) => (
              <li
                key={index}
                className={`${
                  index === 1
                    ? "border-2 border-primary bg-secondary"
                    : "bg-light"
                } block h-4 w-4 rounded-full `}
              ></li>
            ))}
          </ul>
        </div>
        <h1 className="px-5 text-3xl font-bold leading-normal sm:text-5xl sm:leading-snug">
          What Our{" "}
          <span className="text-primary">
            Customer <br />
          </span>{" "}
          Say About Us
        </h1>
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-10">
          {testimonialsData.map((client, index) => (
            <TestimonialCard key={index} {...client} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
