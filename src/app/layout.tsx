import Footer from "@/components/shared/Footer";
import QuickContactNav from "@/components/shared/QuickContactNav";
import WhatsappHead from "@/components/shared/WhatsappHead";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madinat al zahrat curtains",
  description: "Develop by siffahim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QuickContactNav />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <WhatsappHead />
      </body>
    </html>
  );
}
