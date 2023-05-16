import PartnerItem from "./PartnerItem";

function Partners() {
  return (
    <div className="text-center text-xl uppercase bg-gray-200">
      <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f4bc22] tracking-widest text-4xl pb-5">
        Partners
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 content-around space-y-5 normal-case text-lg">
        <PartnerItem
          pName="Restless Coffee"
          pAddress="Baldwin County, AL"
          pPhone="restlesscoffeellc@gmail.com"
          pSite="Instagram"
          pHref="https://www.instagram.com/restless_coffee_"
          pSite2="Facebook"
          pHref2="https://www.facebook.com/profile.php?id=100089314069096"
        />

        <PartnerItem
          pName="Summer Moon Coffee"
          pAddress="Daphne, AL"
          pPhone="(251) 861-1970"
          pSite="Website"
          pHref="https://locations.summermooncoffee.com/locations/daphne/"
          pSite2="Facebook"
          pHref2="https://www.facebook.com/summermoondaphne"
        />

        <PartnerItem
          pName="Sweet Home Coffee"
          pAddress="Robertsdale, AL"
          pPhone="(251) 947-2267"
          pSite="sweethomecoffee@outlook.com"
          pHref=" "
          pSite2="Facebook"
          pHref2="https://www.facebook.com/sweethomecoffeerobertsdale"
        />
        <PartnerItem
          pName="Flying Pig Coffee co"
          pAddress="Fairhope and Loxley, AL"
          pPhone="(251) 949-2059"
          pSite="flyingpigcoffeeco@gmail.com"
          pHref=" "
          pSite2="Facebook"
          pHref2="https://www.facebook.com/profile.php?id=100084386017010"
        />
        <PartnerItem
          pName="Copper Kettle Tea Bar"
          pAddress="Foley, AL"
          pPhone="(251) 609-2832"
          pSite="Website"
          pHref="https://www.thecopperkettleteabar.com/"
          pSite2="Facebook"
          pHref2="https://www.facebook.com/CopperKettle.TeaBar"
        />
        <PartnerItem
          pName="Foam Coffee"
          pAddress="Gulf Shores, AL"
          pPhone="(251) 948-0660"
          pSite="Website"
          pHref="https://www.foamcoffeeandshop.com/"
          pSite2="Facebook"
          pHref2="https://www.facebook.com/foamcoffeeandshop"
        />
        <PartnerItem
          pName="Dropout Bakery & Company"
          pAddress="Mobile, AL"
          pPhone="
          (251) 472-5456"
          pSite="Instagram"
          pHref="https://www.instagram.com/dropoutbakeryandcompany/"
          pSite2="Facebook"
          pHref2="https://www.facebook.com/dropoutbakeryandcompany"
        />
      </div>
    </div>
  );
}

export default Partners;
