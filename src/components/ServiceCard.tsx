type Props = {
  title: string;
  description: string;
  icon: string;
  altName: string;
};

const ServiceCard = ({ title, description, icon, altName }: Props) => {
  return (
    <section className="relative flex h-[220px] w-[270px] flex-col items-center justify-center rounded-md bg-light p-5 text-center text-secondary shadow-md shadow-white/30 ">
      {/* card icon  */}
      <div className="absolute -top-[18%] left-1/2  grid h-[85px] w-[85px]  -translate-x-1/2 place-items-center rounded-full border-[4px] border-white bg-primary">
        <img src={icon} alt={altName} />
      </div>
      {/* content  */}
      <h2 className="mb-3 mt-5 font-bold">{title}</h2>
      <p className="text-darkerNeutral text-xs leading-loose">{description}</p>
    </section>
  );
};

export default ServiceCard;
