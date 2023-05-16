import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import React from "react";

export default function PartnersPage() {
  return (
    <>
      <div className="bg-gray-200 pt-60 ">
        <div className="flex flex-col">
          <Partners />
          <div className="mt-60">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
