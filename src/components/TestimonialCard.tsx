import { fiveStar } from "../assets/images";

type Props = {
  customerName: string;
  message: string;
  customerPic: string;
};

const TestimonialCard = ({ customerName, message, customerPic }: Props) => {
  return (
    <section className="relative mt-16 flex w-full flex-col items-center justify-center rounded-md bg-light p-5 text-center sm:h-[250px] sm:w-[400px] ">
      <span className="absolute -top-[22%] grid h-[110px] w-[110px] place-items-center overflow-hidden rounded-full border-[4px] border-white bg-primary">
        <img
          src={customerPic}
          alt={customerName + " profile pic"}
          className="h-full w-full rounded-full "
        />
      </span>
      <h2 className="mb-5 mt-10 font-bold text-secondary">{customerName}</h2>
      <img src={fiveStar} alt="five star rating" className="mb-5" />
      <p className="text-sm leading-relaxed tracking-wider text-darkerNeutral">
        {message}
      </p>
    </section>
  );
};

export default TestimonialCard;
