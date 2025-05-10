"use client";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <MapPin fill="#DD885F" size={40} color="#fff" />,
      title: "Location",
      value: "  Al Nad - Al Qasimia - Sharjah - United Arab Emirates",
    },
    {
      icon: <Mail fill="#DD885F" size={40} color="#fff" />,
      title: "Email",
      value: "humayonkobir173 @gmail.com",
    },
    {
      icon: <Phone fill="#DD885F" size={40} color="#fff" />,
      title: "Get in Touch",
      value: "+971569024192",
    },
  ];

  return (
    <div className="container relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            className=" p-5 rounded text-center"
          >
            <div className="  bg-white  w-16 h-16 mx-auto">{item.icon}</div>
            <div>
              <h2 className="text-2xl">{item.title}</h2>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
