"use client";
import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialItems = [
    {
      icon: <Facebook color="#fff" />,
      link: "https://www.facebook.com/share/1BEf31DiLB",
      bgColor: "bg-blue-500",
      title: "fa",
    },
    {
      icon: <Youtube color="#fff" />,
      link: "https://youtube.com/@madinatcurtains6090?si=pl_AFraiZjmOxAas",
      bgColor: "bg-[#ff0000]",
      title: "yo",
    },
    {
      icon: <Mail color="#fff" />,
      link: "humayonkobir173 @gmail.com",
      bgColor: "bg-[#fbbc04]",
      title: "ma",
    },
  ];
  return (
    <>
      <div className="bg-black text-center md:text-start px-3">
        <div className="grid grid-cols-1 md:grid-cols-4  container gap-14 py-24">
          <div>
            <img alt="image" width="60%" src="/logo-org.png" />

            <p className="text-white mt-5 text-left text-sm">
              *We're a furniture brand that carries everything needed to make
              your house or office look modern with minimal furniture's and
              boosts up your work energy!
            </p>

            {/*  */}
          </div>
          <div className="text-white sm:text-left md:mx-auto">
            <h2 className="uppercase text-left md:text-center font-semibold">
              Quick Links
            </h2>
            <div className="flex md:flex-col mt-3 md:mt-8 gap-4">
              <Link
                href="/contact"
                className="hover:underline duration-200 text-sm md:text-lg"
              >
                Map Direction
              </Link>
              <Link
                href="/faq"
                className="hover:underline duration-200 text-sm  md:text-lg"
              >
                FAQ
              </Link>
              <Link
                href="/happy-clients"
                className="hover:underline duration-200 text-sm  md:text-lg"
              >
                Happy clients
              </Link>
            </div>
          </div>
          <div className="text-white sm:text-left md:mx-auto">
            <h2 className="uppercase text-left font-semibold md:text-center">
              CONTACT DETAILS
            </h2>
            <div className="flex flex-col mt-8 gap-4">
              <a
                href="https://maps.app.goo.gl/yH2bCg7rtNjrRUyU7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin color="#fff" />
                Al Nad - Al Qasimia - Sharjah - UAE
              </a>

              <a href="tel:+971569024192" className="flex items-center gap-2">
                <Phone color="#fff" />
                +971569024192
              </a>

              <a
                href="mailto:humayonkobir173@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail color="#fff" />
                humayonkobir173@gmail.com
              </a>
            </div>
          </div>
          <div className="text-white mx-auto">
            <h2 className="uppercase font-semibold">Get in touch</h2>
            <div className="flex mt-8 gap-4">
              {socialItems.map((item, index) => {
                const uri =
                  item.title === "ma" ? `mailto:${item.link}` : item.link;
                return (
                  <div
                    className="border w-10 h-10 flex justify-center items-center rounded"
                    key={index}
                  >
                    <a
                      key={index}
                      href={uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pb-5">
          <p className="text-white text-center">
            © 2025 Madinat al Zahrat Furniture & Curtains.
          </p>
        </div>
      </div>
    </>
  );
}
