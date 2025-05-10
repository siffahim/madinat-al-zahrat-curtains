"use client";

import { MessageCircle } from "lucide-react";

const WhatsappHead = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/971569024192"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center w-14 h-14 hover:bg-green-600 transition"
      >
        <MessageCircle color="white" size={28} />
      </a>
    </div>
  );
};
export default WhatsappHead;
