import { Helmet } from "react-helmet";
import * as style from "./About.module.scss";
import Testimonials from "@components/Testimonials/Testimonials";
import CompaniesLogo from "@components/CompaniesLogo/CompaniesLogo";
import SectionTeam from "./SectionTeam/SectionTeam";
import Description from "./Description/Description";
import SectionFeatures from "./SectionFeatures/SectionFeatures";
import SectionDeliver from "./SectionDeliver/SectionDeliver";
import { useEffect } from "react";
import { team } from "@data/team";

function About() {
  const settingsCarousel = {
    innerColumnGap: "24px",
    visibleElements: 4,
    colorArrow: "#1a1a1a",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={style.about}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <Description />
      <SectionFeatures />
      <SectionDeliver />
      <SectionTeam team={team} settingsCarousel={settingsCarousel} />
      <Testimonials />
      <CompaniesLogo />
    </main>
  );
}

export default About;
