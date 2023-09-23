import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <section
      onClick={() => setShow(!show)}
      className="mx-auto my-5 cursor-pointer "
    >
      <div
        className={`${
          show ? " bg-secondary text-light" : "bg-neutral text-secondary"
        } flex h-auto items-center justify-between gap-10 rounded-md px-10 py-5 shadow-sm  md:h-[70px] `}
      >
        <h1>{question}</h1>
        <span className="text-2xl">
          {!show ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>
      <div
        className={`${
          show ? "h-auto  px-10 py-5" : "h-0 overflow-hidden"
        } rounded-sm bg-light  text-sm leading-loose tracking-wide text-darkerNeutral shadow-sm transition-all`}
      >
        {answer}
      </div>
    </section>
  );
};

export default FaqCard;
