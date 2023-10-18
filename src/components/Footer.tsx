import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { footerData } from "../lib/constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      transition={{ delay: 0.3 }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="bg-secondary "
    >
      <div className="lg: mx-auto  grid gap-14 px-10 py-24 font-inter  md:grid-cols-2 lg:grid-cols-5 xl:w-10/12 xl:gap-0 ">
        {footerData.map((col, indexCol) => (
          <ul
            key={indexCol}
            className={`${
              indexCol === 0 ? "pr-10 lg:col-span-2" : "lg:col-span-1"
            }  flex flex-col gap-2 `}
          >
            {col.map((item, indexData) => (
              <li
                key={indexData}
                className={`${
                  indexData === 0
                    ? "mb-5 text-2xl font-semibold text-light"
                    : "text-light/80"
                } flex items-center gap-4 `}
              >
                {indexCol === 0 && indexData === 0 ? (
                  <img src={"src/assets/logo.png"} className="h-9 w-9" />
                ) : (
                  ""
                )}

                {indexCol === 3 && indexData === 1 ? (
                  <FaEnvelope className="text-primary" />
                ) : (
                  ""
                )}
                {indexCol === 3 && indexData === 2 ? (
                  <FaPhone className="text-primary" />
                ) : (
                  ""
                )}
                {indexCol === 3 && indexData === 3 ? (
                  <FaLocationDot className="text-primary" />
                ) : (
                  ""
                )}

                {item}
              </li>
            ))}
            {indexCol === 0 ? (
              <li className="mt-5 flex gap-4">
                <span className="SocialIcon">
                  <FaFacebookF />
                </span>
                <span className="SocialIcon">
                  <FaInstagram />
                </span>
                <span className="SocialIcon">
                  <FaXTwitter />
                </span>
                <span className="SocialIcon">
                  <FaLinkedinIn />
                </span>
              </li>
            ) : (
              ""
            )}
          </ul>
        ))}
      </div>
      <p className="mx-auto flex flex-col justify-between gap-5 border-t border-light/10 px-10 py-10 text-light/80 xl:flex-row xl:px-28">
        Copyright ⓒ Canvas Lancer, 2023. All rights reserved.{" "}
        <span className="flex gap-4">
          <a href="" className="underline underline-offset-2">
            Website Terms
          </a>
          <a href="" className="underline underline-offset-2">
            Privacy Policy
          </a>
          <a href="" className="underline underline-offset-2">
            Cookies Policy
          </a>
        </span>
      </p>
    </motion.footer>
  );
};

export default Footer;
