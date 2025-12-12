import Image from "next/image";
import turfSupplierImg from "../../public/images/turf-supplier.png";
import SectionTitle from "./SectionTitle";

export default function TurfSupplier() {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div className="flex gap-14 2xl:gap-[88px]">
          <div className="flex-1 h-[498px] 2xl:h-[680px] flex flex-col items-start">
            <SectionTitle
              title={
                <>
                  Anco Turf - Leading Instant Turf <br /> Supplier for Melbourne
                  & Geelong
                </>
              }
            />
            <div className="mt-9 flex-1 w-full overflow-auto pr-[43px]">
              <p className="leading-6 mb-5">
                Whether you need turf for a small front garden or a large
                landscaping project, Anco Turf are the turf suppliers you can
                trust. With a wide range of premium instant turf and a full
                suite of turf care products we are sure to have all your turf
                needs covered.
              </p>
              <p className="leading-6 mb-5">
                Our Melbourne, Geelong & Victorian regional distribution means
                we can supply your area with our own fleet of trucks and
                delivery drivers. You can even track the delivery to your door
                with our app!
              </p>
              <p className="leading-6 mb-5">
                Whilst our instant turf is a fantastic solution for homes, we
                are also the turf suppliers for many commercial and civic
                projects too. No job is too big or small for our expert turf
                team. If you need help measuring your turf, you can use our Turf
                Calculator to get started or contact our friendly team to answer
                any questions you have to ensure you order the right turf in the
                right amount.
              </p>
              <h4 className="text-2xl 2xl:text-[27px] 2xl:leading-[46px] mb-5">
                Buy Premium Quality Turf at Affordable Prices
              </h4>
              <p className="leading-6 mb-5">
                At Anco Turf, we stock the finest range of premium quality
                instant turf at affordable prices. <br /> If you require instant turf in Melbourne, you can be assured
                that you have come to the right place.
              </p>
              <p className="leading-6 mb-5">
                We aim to please and our service covers everything from helping
                you select and order the right
              </p>
              <h4 className="text-2xl 2xl:text-[27px] 2xl:leading-[46px] mb-5">
                Buy Premium Quality Turf at Affordable Prices
              </h4>
              <p className="leading-6 mb-5">
                At Anco Turf, we stock the finest range of premium quality
                instant turf at affordable prices. <br /> If you require instant turf in Melbourne, you can be assured
                that you have come to the right place.
              </p>
              <p className="leading-6 mb-5">
                We aim to please and our service covers everything from helping
                you select and order the right
              </p>
            </div>
          </div>
          <div className="flex-1 2xl:flex-none 2xl:w-[815px] group">
            <Image
              src={turfSupplierImg}
              alt=""
              width={815}
              height={680}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
