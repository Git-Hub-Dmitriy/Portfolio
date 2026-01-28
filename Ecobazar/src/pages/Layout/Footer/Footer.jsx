import * as style from "./Footer.module.scss";
import SectionSubscribe from "./SectionSubscribe/SectionSubscrube";
import SectionInfo from "./SectionInfo/SectionInfo";

export default function Footer() {
  const active = ({ isActive }) => (isActive ? style.active : style.noActive);

  return (
    <>
      <footer className={style.footer}>
        <SectionSubscribe />
        <SectionInfo active={active} />
      </footer>
    </>
  );
}
