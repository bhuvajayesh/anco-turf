import Usps from "./components/Usps";
import YourResults from "./components/YourResults";
import LawnStep from "./components/LawnStep";
import TurfVarieties from "./components/TurfVarieties";
import ChooseRightTurf from "./components/ChooseRightTurf";
import CookieManager from "./components/CookieManager";
import HeroSection from "./components/HeroSection";
import {
  FAQ_CATEGORIES_WITH_FAQS,
  HOME_PAGE_VIDEO,
  LATEST_BLOGS,
  LAWN4STEPS,
  PARTNER_WITH_ANCO,
  TURF_VARIANTS,
  VIDEO_SLIDER,
  WHY_ANCO_TURF,
} from "./lib/graphql/queries/homePageApis";
import { tokenData } from "./utils/tokenData";
import ReadyForLife from "./components/ReadyForLife";
import PromoBanner from "./components/PromoBanner";
import PartnerSplitHero from "./components/PartnerSplitHero";
import TurfSupplier from "./components/TurfSupplier";
import BlogSlider from "./components/BlogSlider";
import CustomerSplitSlider from "./components/CustomerSplitSlider";
import AppPromoSection from "./components/AppPromoSection";
import LocationsTabs from "./components/LocationsTabs";
import SocialMediaGrid from "./components/SocialMediaGrid";
import FaqSection from "./components/FaqSection";
import { customFetchQuery } from "./lib/fetchQuery";
import {
  BlogItemDataMain,
  FaqSectionProps,
  HeroSectionProps,
  PartnerSplitHeroProps,
  VideoSliderDataType,
} from "./types/types";

export default async function Home() {
  // fetching hero section data
  const { data: heroData, error: heroError } = await customFetchQuery(
    HOME_PAGE_VIDEO
  );
  // fetching usps section data
  const { data: uspsData, error: uspsError } = await customFetchQuery(
    WHY_ANCO_TURF
  );
  // fetching turf variants section data
  const { data: turfVariantsData, error: turfVariantsError } =
    await customFetchQuery(TURF_VARIANTS);
  // fetching lawn steps section data
  const { data: lawnStepsData, error: lawnStepsError } = await customFetchQuery(
    LAWN4STEPS
  );
  // fetching video slider section data
  const { data: videoSliderData, error: videoSliderError } =
    await customFetchQuery(VIDEO_SLIDER);
  // fetching partner with anco section data
  const { data: partnerData, error: partnerError } = await customFetchQuery(
    PARTNER_WITH_ANCO
  );
  // fetching latest blogs section data
  const { data: blogsData, error: blogsError } = await customFetchQuery(
    LATEST_BLOGS
  );

  // fetching faq section data
  const { data: faqData, error: faqError } = await customFetchQuery(
    FAQ_CATEGORIES_WITH_FAQS
  );

  const { updated: isTokenUpdated, auth_token: currentToken } = tokenData;

  return (
    <div>
      {isTokenUpdated && <CookieManager token={currentToken} />}
      <HeroSection data={heroData as HeroSectionProps} />
      {/* Optionally show loading/error small banners if you want */}
      {/* {loading && <div className="container mx-auto text-white">Loading homepage...</div>}
      {error && <div className="container mx-auto text-red-500">Failed to load homepage.</div>} */}
      <Usps data={uspsData} />
      <TurfVarieties data={turfVariantsData} />
      <ChooseRightTurf />
      {/* Api Call Pending */}
      <YourResults />
      {/*  */}
      <LawnStep data={lawnStepsData} />
      <ReadyForLife data={videoSliderData as VideoSliderDataType} />
      {/* Api Call Pending */}
      <PromoBanner
        bgImage="/images/choose-bg.jpg"
        productImage="/images/promo-banner.png"
        title="Complimentary lawn starter"
        subtitle="with turf orders over 50m2"
        buttonText="BUY NOW"
        buttonLink="/buy"
      />
      {/*  */}
      <PartnerSplitHero data={partnerData as PartnerSplitHeroProps} />
      {/* Api Call Pending */}
      <TurfSupplier />
      {/*  */}
      <BlogSlider data={blogsData as BlogItemDataMain} />
      {/* Api Call Pending */}
      <CustomerSplitSlider />
      <AppPromoSection />
      <LocationsTabs />
      <SocialMediaGrid />
      {/*  */}
      <FaqSection data={faqData as FaqSectionProps} />
    </div>
  );
}
