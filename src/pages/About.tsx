import ActionButton from "../components/ActionButton";
import { aboutImg1 } from "../assets/images";
import { aboutImg2 } from "../assets/images";

const About = () => {
  return (
    <section>
      <div className="mx-auto my-24 flex flex-col items-center justify-between gap-20 px-10 lg:my-32 lg:flex-row lg:gap-0 xl:w-11/12">
        <div className="relative flex  lg:basis-4/12">
          <img
            src={aboutImg1}
            alt="company employees"
            className="w-1/2 lg:w-auto"
          />
          <img
            src={aboutImg2}
            alt="company employees"
            className="left-1/2 top-1/2 w-1/2 lg:absolute lg:w-auto"
          />
        </div>
        <div className="flex flex-col gap-8 lg:basis-6/12 ">
          <p className="before:mb-1 before:mr-3 before:inline-block before:h-[2px] before:w-1/4 before:bg-[#D8D8D8]">
            <span className="font-bold text-primary">About</span>
            <span className="text-darkerNeutral"> CanvasLancer</span>
          </p>
          <h1 className="text-3xl font-bold leading-snug sm:text-4xl md:text-5xl">
            Introduction To Best
            <span className="text-primary">
              <br /> Digital Agency
            </span>
          </h1>
          <p className="text-darkerNeutral leading-loose tracking-wide">
            Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu
            enim id gravida pulvinar. Tristique consectetur mi curabitur congue
            enim dignissim amet justo. Porta morbi nulla aliquet adipiscing. Sed
            diam mauris erat faucibus eu posuere ultricies quisque amet. Quam
            pellentesque in tristique
          </p>
          <p className="text-darkerNeutral leading-loose tracking-wide">
            sed neque scelerisque quam pulvinar. Risus dictum elementum lacus
            urna. Neque eget sagittis vulputate nam id morbi id. Aliquam
            molestie posuere pulvinar arcu
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
      </div>
    </section>
  );
};

export default About;
