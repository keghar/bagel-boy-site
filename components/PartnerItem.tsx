import React from "react";
import Link from "next/link";

function PartnerItem({
  pName,
  pAddress,
  pPhone,
  pSite,
  pHref,
  pSite2,
  pHref2,
}: any) {
  return (
    <div
      className="flex flex-col mt-5 normal-case pb-5 text-gray-500 text-xs md:text-base lg:text-lg
  ">
      <p className="text-gray-600 underline">{pName}</p>
      <p>{pAddress}</p>
      <p>{pPhone}</p>
      <Link href={pHref}>
        <p>{pSite}</p>
      </Link>
      <Link href={pHref2}>
        <p>{pSite2}</p>
      </Link>
    </div>
  );
}

export default PartnerItem;
