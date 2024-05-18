import { Navbar } from "@/pageComponents/Navbar";
import "./global.css";
import { Footer } from "@/pageComponents/Footer";
import { useRouter } from "next/router";
import store from "@/store";
import StoreProvider from "@/StoreProvider";

export const metadata = {
  title: "E Pasal22",
  description: "buy what you want, when you want, where you want.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Platypi:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>

      <StoreProvider>
        <Navbar />
        <body>{children}</body>
        <Footer />
      </StoreProvider>
    </html>
  );
}
