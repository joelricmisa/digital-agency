import React from "react";
import ActionButton from "../components/ActionButton";
import { serivcesData } from "../lib/constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="bg-secondary">
      <div className="mx-auto flex flex-col items-center justify-evenly gap-20 px-10 py-24 text-light  lg:gap-10 lg:py-32 xl:w-11/12 xl:flex-row">
        <div className="flex flex-col justify-center gap-8 lg:basis-4/12">
          <p className="before:mb-1 before:mr-3 before:inline-block before:h-[2px] before:w-1/4 before:bg-[#D8D8D8]">
            <span>What We Are</span>
            <span className="font-bold text-primary"> Offering</span>
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl md:leading-snug">
            <span className="text-primary">Services</span> We Can Offer You !
          </h1>
          <p className="leading-loose tracking-wide">
            Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu
            enim id gravida pulvinar. Tristique consectetur mi curabitur congue
            enim dignissim amet justo. Porta morbi nulla aliquet adipiscing. Sed
            diam mauris erat faucibus eu posuere ultricies quisque amet. Quam
            pellentesque in tristique
          </p>

          <ActionButton
            bgColor="bg-primary"
            txtColor="text-light"
            linkId="#contact"
            width="w-[150px]"
          >
            Hire Us
          </ActionButton>
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-16 lg:basis-6/12">
          {serivcesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
