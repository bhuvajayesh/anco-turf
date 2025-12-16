"use client";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Logo from "../../public/images/anco-logo.svg";
import LocationIcon from "../../public/images/location-footer-icon.svg";

const socialLinks = [
  {
    id: "instagram",
    url: "https://www.instagram.com/",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.167 1.668C15.2712 1.67117 16.3292 2.1112 17.11 2.89198C17.8908 3.67276 18.3308 4.73082 18.334 5.835V14.168C18.3308 15.2722 17.8908 16.3302 17.11 17.111C16.3292 17.8918 15.2712 18.3318 14.167 18.335H5.833C4.72882 18.3318 3.67076 17.8918 2.88998 17.111C2.1092 16.3302 1.66917 15.2722 1.666 14.168V5.834C1.66917 4.72982 2.1092 3.67176 2.88998 2.89098C3.67076 2.1102 4.72882 1.67017 5.833 1.667H14.166M14.166 0H5.833C4.2872 0.00448633 2.80601 0.62061 1.71305 1.71376C0.620092 2.8069 0.00422134 4.2882 0 5.834V14.167C0.00422134 15.7128 0.620092 17.1941 1.71305 18.2872C2.80601 19.3804 4.2872 19.9965 5.833 20.001H14.166C15.7118 19.9968 17.1931 19.3809 18.2862 18.288C19.3794 17.195 19.9955 15.7138 20 14.168V5.834C19.9955 4.28837 19.3795 2.80733 18.2866 1.7144C17.1937 0.621472 15.7126 0.00548501 14.167 0.000999928L14.166 0Z"
          fill="white"
        />
        <path
          d="M15.3936 5.89831C15.1385 5.8989 14.889 5.82381 14.6766 5.68253C14.4642 5.54126 14.2986 5.34015 14.2005 5.10467C14.1025 4.86919 14.0766 4.60992 14.126 4.35968C14.1754 4.10944 14.2979 3.87948 14.478 3.69891C14.6582 3.51834 14.8879 3.39528 15.138 3.3453C15.3881 3.29532 15.6474 3.32067 15.8831 3.41814C16.1189 3.51562 16.3203 3.68083 16.4621 3.89287C16.6039 4.10491 16.6796 4.35424 16.6796 4.60931C16.68 4.77844 16.647 4.94599 16.5825 5.10236C16.5181 5.25873 16.4234 5.40085 16.304 5.52059C16.1845 5.64032 16.0426 5.73532 15.8864 5.80013C15.7302 5.86495 15.5627 5.89831 15.3936 5.89831Z"
          fill="white"
        />
        <path
          d="M9.99707 6.86588C10.6177 6.86588 11.2244 7.04992 11.7404 7.39472C12.2565 7.73953 12.6587 8.22962 12.8962 8.80301C13.1337 9.37641 13.1958 10.0074 13.0748 10.6161C12.9537 11.2248 12.6548 11.7839 12.216 12.2228C11.7771 12.6616 11.218 12.9605 10.6093 13.0816C10.0005 13.2027 9.3696 13.1405 8.7962 12.903C8.22281 12.6655 7.73272 12.2633 7.38791 11.7473C7.04311 11.2312 6.85906 10.6245 6.85906 10.0039C6.85986 9.17187 7.19072 8.37417 7.77904 7.78585C8.36736 7.19753 9.16506 6.86667 9.99707 6.86588ZM9.99707 5.29688C9.06591 5.29688 8.15567 5.57299 7.38144 6.09032C6.60721 6.60764 6.00378 7.34293 5.64744 8.2032C5.2911 9.06348 5.19787 10.0101 5.37953 10.9234C5.56119 11.8366 6.00958 12.6755 6.66801 13.3339C7.32643 13.9924 8.16532 14.4408 9.07858 14.6224C9.99184 14.8041 10.9385 14.7108 11.7987 14.3545C12.659 13.9982 13.3943 13.3947 13.9116 12.6205C14.4289 11.8463 14.7051 10.936 14.7051 10.0049C14.7048 8.75632 14.2087 7.55897 13.3258 6.67611C12.443 5.79325 11.2456 5.29714 9.99707 5.29688Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "facebook",
    url: "https://www.facebook.com/",
    icon: (
      <svg
        width="12"
        height="22"
        viewBox="0 0 12 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.762 12.095L11.362 8.204H7.625V5.678C7.5994 5.38757 7.63939 5.09509 7.74202 4.82219C7.84464 4.54929 8.00728 4.30294 8.2179 4.10134C8.42853 3.89973 8.68176 3.74804 8.95889 3.65745C9.23602 3.56687 9.52997 3.53972 9.819 3.578H11.519V0.263C10.5214 0.101836 9.5134 0.0139339 8.503 0C5.428 0 3.419 1.864 3.419 5.238V8.2H0V12.091H3.419V21.5H7.625V12.095H10.762Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "youtube",
    url: "https://www.youtube.com/",
    icon: (
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5406 2.425C21.4167 1.95622 21.1718 1.52823 20.8305 1.18389C20.4891 0.839546 20.0632 0.59095 19.5956 0.463C17.8806 -1.78814e-07 11.0006 0 11.0006 0C11.0006 0 4.12057 2.38419e-07 2.40057 0.464C1.93393 0.592625 1.5092 0.841409 1.16878 1.18551C0.828359 1.52962 0.584161 1.95701 0.460568 2.425C0.143372 4.18707 -0.0106135 5.97464 0.00056778 7.765C-0.0106135 9.55536 0.143372 11.3429 0.460568 13.105C0.585543 13.5698 0.831332 13.9931 1.17296 14.3321C1.51458 14.6711 1.93986 14.9136 2.40557 15.035C4.12057 15.5 11.0006 15.5 11.0006 15.5C11.0006 15.5 17.8806 15.5 19.6006 15.036C20.0663 14.9146 20.4916 14.6721 20.8332 14.3331C21.1748 13.9941 21.4206 13.5708 21.5456 13.106C21.8628 11.3439 22.0167 9.55636 22.0056 7.766C22.0167 5.97564 21.8628 4.18807 21.5456 2.426L21.5406 2.425ZM8.75057 11.043V4.488L14.5006 7.766L8.75057 11.043Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "twitter",
    url: "https://x.com/",
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.612 0H18.652L12.011 7.591L19.824 17.918H13.707L8.916 11.654L3.433 17.918H0.392L7.492 9.798L0 0.00100005H6.273L10.6 5.727L15.612 0ZM14.546 16.1H16.23L5.357 1.724H3.55L14.546 16.1Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "google mail",
    url: "https://mail.google.com/mail/u/0/",
    icon: (
      <svg
        width="22"
        height="14"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0635 5.75755C13.1369 6.12569 13.1737 6.50017 13.1735 6.87555C13.2252 7.74167 13.0946 8.609 12.79 9.42145C12.4855 10.2339 12.0138 10.9734 11.4055 11.5921C10.7972 12.2108 10.0657 12.6949 9.25856 13.0131C8.45137 13.3314 7.58637 13.4766 6.7195 13.4396C4.93738 13.4396 3.22825 12.7316 1.9681 11.4715C0.707945 10.2113 0 8.50218 0 6.72005C0 4.93793 0.707945 3.2288 1.9681 1.96865C3.22825 0.708499 4.93738 0.000553588 6.7195 0.000553588C8.3915 -0.021395 10.0061 0.610073 11.2195 1.76055L9.4005 3.51155C8.67852 2.82602 7.71485 2.45364 6.7195 2.47555C5.60507 2.49266 4.54208 2.94737 3.76004 3.74151C2.978 4.53565 2.53965 5.60549 2.53965 6.72005C2.53965 7.83461 2.978 8.90446 3.76004 9.6986C4.54208 10.4927 5.60507 10.9474 6.7195 10.9646C7.59842 11.0246 8.46929 10.7638 9.1705 10.2305C9.87171 9.69717 10.3556 8.92759 10.5325 8.06455H6.7195V5.75455H13.0635V5.75755ZM19.5525 5.98255V4.03255H17.5925V5.98255H15.6425V7.94255H17.5925V9.89255H19.5525V7.94255H21.5005V5.98255H19.5505H19.5525Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "pinterest",
    url: "https://in.pinterest.com/",
    icon: (
      <svg
        width="17"
        height="22"
        viewBox="0 0 17 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.789 0C4.368 0 0 2.943 0 7.716C0 10.749 1.706 12.472 2.74 12.472C3.167 12.472 3.412 11.283 3.412 10.947C3.412 10.547 2.391 9.693 2.391 8.026C2.37719 7.23384 2.52521 6.44719 2.826 5.71423C3.12679 4.98126 3.57402 4.3174 4.1403 3.76329C4.70658 3.20918 5.38 2.77648 6.11932 2.49168C6.85865 2.20689 7.64832 2.07599 8.44 2.107C11.374 2.107 13.545 3.774 13.545 6.837C13.545 9.125 12.627 13.415 9.655 13.415C9.39955 13.4253 9.14463 13.3843 8.90529 13.2944C8.66596 13.2046 8.44706 13.0676 8.26155 12.8917C8.07604 12.7158 7.92766 12.5045 7.8252 12.2702C7.72274 12.036 7.66827 11.7836 7.665 11.528C7.664 9.9 8.8 8.323 8.8 6.643C8.8 3.791 4.755 4.308 4.755 7.754C4.72901 8.50544 4.87078 9.25322 5.17 9.943C4.575 12.498 3.36 16.311 3.36 18.943C3.36 19.757 3.476 20.559 3.554 21.373C3.7 21.537 3.627 21.519 3.854 21.438C6.025 18.465 5.948 17.884 6.93 13.994C7.25693 14.483 7.70202 14.8815 8.224 15.1526C8.74598 15.4237 9.32796 15.5587 9.916 15.545C14.491 15.545 16.546 11.086 16.546 7.067C16.543 2.792 12.847 0 8.789 0Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    title: "Shop",
    order: "order-1 md:order-none",
    links: [
      "Fertilisers",
      "Seed",
      "Weed Control",
      "Disease & Pests",
      "Colour Guard",
      "Lawn Care Products",
      "Professional Lawn Care",
      "Tools & Equipment",
      "Sale",
      "Gift Voucher",
    ],
  },
  {
    title: "Turf Varieties",
    order: "order-2 md:order-none",
    links: [
      "Sir Walter",
      "Tif Tuf Bermuda",
      "Sir Grange",
      "Eureka Kikuyu",
      "RTF Tall Fescue",
      "Nullarbor Santa Ana",
    ],
  },
  {
    title: "Lawn Care",
    order: "order-5 md:order-none",
    links: [
      "Turf Guide",
      "Dr Turf",
      "Lawn Maintenance",
      "Weed Id",
      "Grass Diseases",
      "Insect Id",
      "How To Lay",
      "Lawn Fertilizers",
    ],
  },
  {
    title: "About",
    order: "order-6 md:order-none",
    links: [
      "Contact",
      "Why Choose Us",
      "Community Support",
      "Areas We Service",
      "Testimonials",
      "Faqs",
      "Gallery",
      "Geelong",
      "LSA",
      "Advice Blog",
      "Ausgap Cert",
      "Racetrack Award",
    ],
  },
  {
    title: "Resources",
    order: "order-3 md:order-none",
    links: ["Turf Calculator", "Turf Installation", "Problem Solver", "App"],
  },
  {
    title: "Trade",
    order: "order-4 md:order-none",
    links: ["Landscaper", "Turf Installers"],
  },
  {
    title: "Commercial",
    order: "order-7 md:order-none",
    links: ["Councils", "Schools", "Resorts", "Golf Course"],
  },
];

export default function Footer() {
  return (
    <>
      <div className="bg-[#F6F6F6] py-20 2xl:py-[100px] border-t-[5px] border-t-[#5D9732] rounded-tl-[70px] 2xl:rounded-tl-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-start gap-20 2xl:gap-[124px]">
            <div className="flex-none w-full xl:w-[480px] 2xl:w-[548px]">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={242}
                  height={83}
                  className="w-auto h-16 2xl:h-[83px]"
                />
              </Link>
              <div className="mt-8 2xl:mt-[66px] mb-5">
                <SectionTitle title="Sign Up To Our Newsletter" />
                <p className="mt-[15px] leading-6 text-[##404040]">
                  Get the latest news and offers delivered to your inbox
                </p>
              </div>
              <div className="flex gap-2.5 mt-5 mb-6 2xl:mb-9">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-[#81837F] rounded-[8px] bg-white xl:flex-none w-[340px] px-[30px] text-sm text-[#404040] tracking-[0.7px] outline-none placeholder:text-[#404040]"
                />
                <Button variant="secondary" className="2xl:leading-5 2xl:py-5">
                  Sign Up
                </Button>
              </div>
              <div className="mb-6 2xl:mb-9">
                <h3 className="tracking-[1.4px] font-bold uppercase">
                  Locations
                </h3>
                <ul className="space-y-2.5 2xl:space-y-[15px] mt-[15px]">
                  <li className="flex items-center gap-3">
                    <Image
                      src={LocationIcon}
                      alt="Location"
                      width={25}
                      height={25}
                      className="w-auto h-[25px]"
                    />
                    <span className="leading-6">
                      5175 S Gippsland Hwy, Lang Lang VIC 3984, Australia
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src={LocationIcon}
                      alt="Location"
                      width={25}
                      height={25}
                      className="w-auto h-[25px]"
                    />
                    <span className="leading-6">
                      1350 Surf Coast Hwy, Torquay VIC 3228, Australia
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src={LocationIcon}
                      alt="Location"
                      width={25}
                      height={25}
                      className="w-auto h-[25px]"
                    />
                    <span className="leading-6">
                      1 Woorinen-Vinifera Rd, Woorinen South VIC 3588, Australia
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-[15px]">
                <h3 className="tracking-[1.4px] font-bold uppercase">
                  Follow Us
                </h3>
                <ul className="mt-4 flex items-center gap-2.5">
                  {socialLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="w-10 aspect-square bg-[#5D9732] hover:bg-[#3D7303] flex items-center justify-center rounded-full"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-4 justify-between gap-4 2xl:gap-x-10">
                {footerLinks.map((section) => (
                  <div key={section.title} className={section.order}>
                    <h4 className="mb-5 text-sm 2xl:text-base font-semibold tracking-[1.4px] uppercase">
                      {section.title}
                    </h4>
                    <ul className="">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-[#404040] hover:text-[#528917] transition leading-6 2xl:leading-8 md:text-sm 2xl:text-base"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5D9732]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-[30px] text-white">
            <p className="leading-none flex-1">
              © 2025 Anco Seed and Turf Pty Ltd. Built & Managed by{" "}
              <Link href="" className="underline">
                Sharp Instincts
              </Link>
            </p>
            <ul className="flex items-center gap-8 leading-none">
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
