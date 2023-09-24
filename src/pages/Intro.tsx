import ActionButton from "../components/ActionButton";

const Intro = () => {
  return (
    <section id="intro">
      <div className="h-screen bg-hero bg-cover bg-no-repeat">
        <div className=" grid h-full place-items-center bg-secondary/70 text-light">
          <div className=" flex w-full flex-col items-center  justify-center gap-10 px-5 text-center sm:px-10 md:gap-5 lg:w-5/6 lg:gap-10  xl:w-4/6 ">
            <p>
              Welcome To <span className="text-primary">Canvas Lancer</span>
            </p>
            <h1 className=" text-2xl font-bold  xs:text-4xl sm:text-6xl md:text-[70px] md:leading-snug">
              Designing the Future <br />
              with
              <span className="relative ml-4 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-full after:bg-primary">
                Canvas Lancer
              </span>
            </h1>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam quisque cursus
              proin adipiscing quis diam. Eu fringilla elit commodo nec aliquet.
              Augue pharetra nibh co
            </p>
            <div className="mt-5 flex w-1/2 justify-center gap-5 ">
              <ActionButton
                bgColor="bg-primary"
                txtColor="text-light"
                linkId="#contact"
                width="w-[150px]"
              >
                Hire Us
              </ActionButton>
              <ActionButton
                bgColor="bg-light"
                txtColor="text-secondary"
                linkId="#portfolio"
              >
                View Portfolio
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
