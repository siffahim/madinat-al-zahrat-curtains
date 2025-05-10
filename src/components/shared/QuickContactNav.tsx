"use client";
import { Facebook, Mail, Phone, Youtube } from "lucide-react";
import { usePathname } from "next/navigation";

const QuickContactNav = () => {
  const path = usePathname();
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
    <div
      className={path !== "/" ? "bg-primary " : "bg-primary sticky top-0 z-50"}
    >
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <a href="tel:00971569024192" className="flex items-center gap-2">
            <Phone className={` text-white animate-pulse`} />
            <p className="text-lg text-white">00971569024192</p>
          </a>
        </div>
        <div className="flex gap-2">
          {socialItems.map((item, index) => {
            const uri = item.title === "ma" ? `mailto:${item.link}` : item.link;
            return (
              <div
                className="w-10 h-10 flex justify-center items-center rounded"
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
  );
};

export default QuickContactNav;
