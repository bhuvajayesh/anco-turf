import Link from "next/link";

export default function SitemapLinks() {
  return (
    <div className="container mx-auto xl:max-w-[1170px]!">
      <div className="hidden md:grid grid-cols-5 gap-4 xl:gap-20 relative h-[43px]">
        <span className="absolute left-0 right-0 top-[43px] h-px bg-black" />
        {[
          "Turf Varieties",
          "Shop",
          "Lawn Care",
          "Professional",
          "Support & Resources",
        ].map((title, i) => (
          <div key={i} className="relative text-center">
            <h4 className="tracking-[1.7px] uppercase font-bold leading-none">
              {title}
            </h4>
            <span className="absolute left-1/2 top-[43px] -translate-x-1/2 w-px h-[49px] bg-black" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 md:gap-4 xl:gap-20 mt-[49px] text-[#404040] leading-8">
        <ul>
          <h4 className="md:hidden tracking-[1.7px] uppercase font-bold leading-none mb-4">
            Turf Varieties
          </h4>
          <li>All Turfs</li>
          <li>Sir Walter</li>
          <li>Tif Tuf Bermuda</li>
          <li>Sir Grange</li>
          <li>Eureka Kikuyu</li>
          <li>RTF Tall Fescue</li>
          <li>Nullarbor Santa Ana</li>
          <li><br /></li>
          <li>CTA: Compare Varieties</li>
        </ul>

        <ul>
          <h4 className="md:hidden tracking-[1.7px] uppercase font-bold leading-none mb-4">
            Shop
          </h4>
          <li>Turfs</li>
          <li>Fertilisers</li>
          <li>Seed</li>
          <li>Weed Control</li>
          <li>Disease & Pests</li>
          <li>Colour Guard</li>
          <li>Lawn Care Products</li>
          <li>Professional Lawn Care</li>
          <li>Tools & Equipment</li>
          <li>Sale</li>
          <li className="text-[#FF0000]">Gift Voucher</li>
        </ul>

        <ul>
          <h4 className="md:hidden tracking-[1.7px] uppercase font-bold leading-none mb-4">
            Lawn Care
          </h4>
          <li>Turf Guide</li>
          <li>Dr Turf</li>
          <li>Lawn Maintenance</li>
          <li>Weed Id</li>
          <li>Grass Diseases</li>
          <li>Insect Id</li>
          <li>How To Lay</li>
          <li>Lawn Fertilizers</li>
        </ul>

        <div>
          <h4 className="md:hidden tracking-[1.7px] uppercase font-bold leading-none mb-4">
            Professional
          </h4>
          <h5 className="text-sm font-bold tracking-[1.7px] uppercase mb-2 leading-none text-[#202020]">
            Trade
          </h5>
          <ul className="mb-12">
            <li className="text-red-500">Landscaper -- NR</li>
            <li className="text-red-500">Turf Installers -- NR</li>
          </ul>

          <h5 className="text-sm font-bold tracking-[1.7px] uppercase mb-2 leading-none text-[#202020]">
            Commercial
          </h5>
          <ul>
            <li>Councils</li>
            <li>Schools</li>
            <li>Resorts</li>
            <li>Golf Course</li>
          </ul>
        </div>

        <ul>
          <h4 className="md:hidden tracking-[1.7px] uppercase font-bold leading-none mb-4">
            Support & Resources
          </h4>
          <li>Contact Us</li>
          <li>Turf Calculator</li>
          <li>Turf Installation</li>
          <li>Problem Solver</li>
          <li>Community Support</li>
          <li>Faqs</li>
          <li>App</li>
        </ul>

      </div>
    </div>
  );
}
