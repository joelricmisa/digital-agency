import ActionButton from "../components/ActionButton";

const Intro = () => {
  return (
    <section>
      <div className="h-screen bg-hero bg-cover bg-no-repeat">
        <div className=" grid h-full place-items-center bg-secondary/70 text-light">
          <div className=" flex w-full flex-col items-center  justify-center gap-10 px-5 text-center sm:px-10 md:gap-5 lg:w-5/6 lg:gap-10  xl:w-4/6 ">
            <p>
              Welcome To <span className="text-primary">Canvas Lancer</span>
            </p>
            <h1 className="text-2xl font-bold leading-normal xs:text-4xl sm:text-6xl md:text-[70px]">
              Designing the Future <br /> with Canvas Lancer
            </h1>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Aliquam quisque cursus
              proin adipiscing quis diam. Eu fringilla elit commodo nec aliquet.
              Augue pharetra nibh co
            </p>
            <div className="mt-5 flex gap-5">
              <ActionButton
                bgColor="bg-primary"
                txtColor="text-light"
                linkId="#contact"
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
