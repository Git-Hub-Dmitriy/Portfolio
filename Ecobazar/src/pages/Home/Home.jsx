import * as style from "./Home.module.scss";
import Banners from "@pages/Home/Banners/Banners";
import FeaturesStore from "@pages/Home/FeaturesStore/FeaturesStore";
import PopularCategories from "@pages/Home/PopularCategories/PopularCategories";
import PopularProducts from "@pages/Home/PopularProducts/PopularProducts";
import Stocks from "@components/Stocks/Stocks";
import HotDeals from "@pages/Home/HotDeals/HotDeals";
import Advertising from "@pages/Home/Advertising/Advertising";
import FeaturedProducts from "@pages/Home/FeaturedProducts/FeaturedProducts";
import LatestNews from "@pages/Home/LatestNews/LatestNews";
import Testimomials from "@components/Testimonials/Testimonials";
import CompaniesLogo from "@components/CompaniesLogo/CompaniesLogo";
import InstagramSection from "@pages/Home/InstagramSection/InstagramSection";

export default function Home() {
  return (
    <main className={style.home}>
      <Banners />
      <FeaturesStore />
      <PopularCategories />
      <PopularProducts />
      <Stocks />
      <HotDeals />
      <Advertising />
      <FeaturedProducts />
      <LatestNews />
      <Testimomials />
      <CompaniesLogo />
      <InstagramSection />
    </main>
  );
}
