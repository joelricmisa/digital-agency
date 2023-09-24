import FaqCard from "../components/FaqCard";
import { faqsData } from "../lib/constants";
import { motion } from "framer-motion";

const Faqs = () => {
  return (
    <section id="faqs">
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        transition={{ delay: 0.3 }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="mx-auto flex flex-col items-center justify-center gap-10 px-10 py-24 lg:w-9/12"
      >
        <p className="relative text-darkerNeutral before:mb-1 before:mr-4 before:inline-block before:h-[2px] before:bg-darkerNeutral/30 after:mb-1 after:ml-4 after:inline-block after:h-[2px] after:bg-darkerNeutral/30 xs:before:w-[80px] xs:after:w-[80px]   sm:before:w-[160px] sm:after:w-[160px]">
          FAQs
        </p>
        <h1 className="text-center text-3xl font-bold leading-normal md:text-5xl md:leading-snug">
          Frequently Asked
          <span className="text-primary">
            <br /> Questions
          </span>
        </h1>

        <div>
          {faqsData.map((faq, index) => (
            <FaqCard key={index} {...faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;
