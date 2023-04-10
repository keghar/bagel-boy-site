import "./globals.css";
import Navbar from "../components/Navbar";
import { Lilita_One } from "next/font/google";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={lilitaOne.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
