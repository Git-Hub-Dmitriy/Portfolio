import * as style from "./SectionSubscribe.module.scss";
import Subscribe from "@components/Forms/Subscribe/Subscribe";
import SocialMedia from "@components/SocialMedia/SocialMedia";

export default function SectionSubscribe({}) {
  return (
    <section className={style.sectionSubscribe}>
      <div className={style.sectionSubscribe__innerTitle}>
        <h1 className={style.sectionSubscribe__title}>
          Subcribe our Newsletter
        </h1>
        <h3 className={style.sectionSubscribe__subtitle}>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </h3>
      </div>
      <Subscribe />
      <SocialMedia />
    </section>
  );
}
