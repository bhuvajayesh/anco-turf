import { useState } from "react";
import SectionTitle from "./SectionTitle";
import InfoBanner from "./InfoBanner";
import Image from "next/image";
import melbourneIcon from "../../public/images/melbourne-icon.svg";
import locationIcon from "../../public/images/location-icon.svg";
import Button from "./Button";

const TABS = [
  "Melbourne / Gippsland",
  "Geelong / Ballarat",
  "Swan Hill",
  "Areas We Service",
];

export default function LocationsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pt-20 pb-20 md:pb-10 px-2 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <SectionTitle title="Locations" />
        </div>
        <InfoBanner
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus velit vitae erat scelerisque venenatis. Nunc odio quam, varius vitae tincidunt sed, posuere at sapien. Cras velit tortor, dignissim at sagittis eu pretium sit amet lorem."
          backgroundImage="/images/choose-bg.jpg"
        />
        {/* Tabs */}
        <div className="mt-20 md:mt-[60px] grid grid-cols-2 gap-y-5 md:gap-0 md:flex justify-center">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`relative pb-5 text-[21px] md:text-xl lg:text-xl 2xl:text-[21px] leading-8 px-2 md:px-4 lg:px-[46px] border-b-2 md:border-0 border-[#F6F6F6] transition ${activeTab === index ? "text-[#5D9732]" : "text-[#404040]"
                }`}
            >
              {tab}
              {activeTab === index && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-[#5D9732]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="rounded-[20px] border border-[#F6F6F6] p-5 md:p-10">
          {activeTab === 0 && <MelbourneTab />}
          {activeTab === 1 && <Placeholder title="Geelong / Ballarat" />}
          {activeTab === 2 && <Placeholder title="Swan Hill" />}
          {activeTab === 3 && <Placeholder title="Areas We Service" />}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TAB CONTENT ---------------- */

function MelbourneTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 items-start">
      {/* MAP */}
      <div className="overflow-hidden rounded-lg h-[167px] md:h-[400px]">
        <iframe
          title="Melbourne Gippsland Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.505540318344!2d145.558035!3d-38.297454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b29ff219a53ff73%3A0x9fa890fcc0d4c8a2!2s5175%20S%20Gippsland%20Hwy%2C%20Lang%20Lang%20VIC%203984%2C%20Australia!5e0!3m2!1sen!2sus!4v1702700000000!5m2!1sen!2sus"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-[27px] font-bold leading-8 flex items-center gap-2.5">
          <Image src={melbourneIcon} alt="Icon" width={57} height={57} />{" "}
          <span>Melbourne / Gippsland</span>
        </h3>
        <p className="flex items-start gap-3 mt-6 mb-5 font-bold leading-6">
          <Image src={locationIcon} alt="Icon" width={17} height={24} />
          <span>5175 South Gippsland Highway, Lang Lang, 3984 Victoria</span>
        </p>

        <div className="mb-10 leading-6">
          <p className="font-bold mb-6">Open Hours (Main Office & Farm)</p>
          <p>Monday - Friday: 7:30am - 4:00pm</p>
          <p>Saturday (Office Closed): 8:00am - 10:30am</p>
          <p>(Farm Open For Pre-Ordered Pickups)</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2.5 md:gap-5">
          <a href="tel:1800010110" className="flex-none">
            <Button variant="primary" className="custom-px-small-mobile">1800 010 110</Button>
          </a>
          <a href="" className="flex-1 md:flex-none">
            <Button variant="secondary" className="custom-px-mobile w-full md:w-auto">GET DIRECTIONS</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- PLACEHOLDER ---------------- */

function Placeholder({ title }: { title: string }) {
  return <div className="text-center py-20">{title} content coming soon</div>;
}
