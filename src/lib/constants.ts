import {
  development,
  mobileDev,
  project1,
  project2,
  project3,
  seo,
  user1,
  user2,
  user3,
  wireframe,
} from "../assets/images";

export const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Faqs",
    href: "#faqs",
  },
] as const;

export const serivcesData = [
  {
    title: "UI/UX",
    description:
      " Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique",
    icon: wireframe,
    altName: "Wireframe Image",
  },
  {
    title: "Development",
    description:
      " Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique",
    icon: development,
    altName: "Development Image",
  },
  {
    title: "Mobile Development",
    description:
      " Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique",
    icon: mobileDev,
    altName: "Mobile Dev Image",
  },
  {
    title: "SEO",
    description:
      " Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique",
    icon: seo,
    altName: "SEO Image",
  },
] as const;

export const projectsData = {
  categories: ["All", "UI/UX", "Development", "Mobile Development", "SEO"],
  images: [project1, project2, project3],
} as const;

export const testimonialsData = [
  {
    customerName: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur. Nisi ullamcorper tincidunt odio arcu id praesent vitae. Facilisis vitae fringilla donec",
    customerPic: user1,
  },
  {
    customerName: "Joel Roger",
    message:
      "Lorem ipsum dolor sit amet consectetur. Nisi ullamcorper tincidunt odio arcu id praesent vitae. Facilisis vitae fringilla donec",
    customerPic: user2,
  },
  {
    customerName: "Samantha Smith",
    message:
      "Lorem ipsum dolor sit amet consectetur. Nisi ullamcorper tincidunt odio arcu id praesent vitae. Facilisis vitae fringilla donec",
    customerPic: user3,
  },
];
