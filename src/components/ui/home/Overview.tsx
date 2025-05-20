import { Award, Package, WalletMinimal } from "lucide-react";

const Overview = () => {
  const services = [
    {
      icon: <Package strokeWidth={0.5} size={60} />,
      title: "Home Service",
      description:
        "FREE home delivery with assembling inside Dhaka within 3 days and 5-7 days anywhere in United Arab Emirates. Inside UAE City, we offer free home deliver",
    },
    {
      icon: <Award strokeWidth={0.5} size={60} />,
      title: "Returns & Warranty",
      description:
        "Madinatal zahrat provides an easy, hassle-free servicing system where we pick up your product from your home if there is any problem and get it back to you.",
    },
    {
      icon: <WalletMinimal strokeWidth={0.5} size={60} />,
      title: "EMI Policy",
      description:
        "FREE home delivery with assembling inside Dhaka within 3 days and 5-7 days anywhere in Bangladesh. Inside Dhaka City, we offer free home deliver",
    },
  ];
  return (
    <div className="container my-14">
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className=" text-center p-5">
            <div className="flex justify-center">{service.icon}</div>
            <h2 className="text-xl md:text-2xl font-medium text-secondary my-4">
              {service.title}
            </h2>
            <p className="text-md md:text-xl text-gray">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1">
        {services.map((service, index) => (
          <></>

          //    <h2 className="text-2xl font-medium text-secondary my-4">
          //      {service.title}
          //    </h2>
          //    <p className="text-xl text-gray">{service.description}</p>
          //  </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
