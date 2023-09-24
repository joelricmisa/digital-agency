import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCircleInfo, FaPaperPlane } from "react-icons/fa6";
import { contactImg } from "../assets/images";

const FormSchema = z.object({
  name: z.string().min(1, "This field is required, please input your name."),
  email: z.string().email("Invalid email, please input an appropriate email."),
  message: z
    .string()
    .min(1, "This field is required, please input some message."),
});

type FormType = z.infer<typeof FormSchema>;

const Contact = () => {
  const {
    register,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    } else {
      reset();
    }
  };

  return (
    <section className="bg-neutral">
      <div className="mx-auto flex flex-col  px-10  py-24 xl:w-11/12 xl:flex-row">
        <div className="flex w-full basis-full flex-col items-center  gap-8  xl:basis-1/2">
          <p className=" w-full font-bold text-primary before:mb-1 before:mr-2 before:inline-block before:h-0.5 before:w-[140px] before:bg-darkerNeutral/20 md:w-10/12 ">
            Contact Us
          </p>
          <h1 className=" w-full  text-3xl  font-bold leading-normal md:w-10/12 md:text-5xl md:leading-snug ">
            <span className="text-primary">Contact </span>Us & We Can <br />
            Work Together
          </h1>
          <p className=" w-full text-darkerNeutral md:w-10/12">
            Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu
            enim id gravida pulvinar. Tristique consectetur mi curabitur congue
            enim dignissim
          </p>

          <form
            action=""
            onSubmit={handleSubmit}
            className=" w-full md:w-10/12"
          >
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="contactInput"
            />
            {errors.name && (
              <p className="errorMessage">
                <span className="text-xl">
                  <FaCircleInfo />
                </span>
                {errors?.name?.message}
              </p>
            )}
            <input
              type="text"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="contactInput"
            />
            {errors.email && (
              <p className="errorMessage">
                <span className="text-xl">
                  <FaCircleInfo />
                </span>
                {errors?.email?.message}
              </p>
            )}

            <textarea
              cols={30}
              rows={10}
              placeholder="Your message"
              {...register("message", { required: true })}
              className="contactInput"
            ></textarea>
            {errors.message && (
              <p className="errorMessage">
                <span className="text-xl">
                  <FaCircleInfo />
                </span>
                {errors?.message?.message}
              </p>
            )}

            <button className="mt-5 flex items-center gap-2 rounded-md border  border-gray-400 bg-primary px-5 py-3 text-light shadow-sm hover:scale-105 hover:bg-opacity-70 active:scale-100">
              Submit Message <FaPaperPlane />
            </button>
          </form>
        </div>
        <img src={contactImg} alt="contact image" className="hidden xl:block" />
      </div>
    </section>
  );
};

export default Contact;
