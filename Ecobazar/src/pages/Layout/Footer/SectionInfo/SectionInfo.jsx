import * as style from "./SectionInfo.module.scss";
import IconApplePay from "@assets/iconApplePay.svg";
import IconVisa from "@assets/iconVisa.svg";
import IconDiscover from "@assets/iconDiscover.svg";
import IconMasterCard from "@assets/iconMasterCard.svg";
import IconSecurePayment from "@assets/iconSecurePayment.svg";
import BlockNavigate from "./BlockNavigate/BlockNavigate";

export default function SectionInfo({ active }) {
  return (
    <section className={style.sectionInfo}>
      <div className={style.sectionInfo__wrapper}>
        <BlockNavigate active={active} />
        <div className={style.sectionInfo__wrapPayment}>
          <div className={style.sectionInfo__line}></div>
          <div className={style.sectionInfo__innerPayment}>
            <h4 className={style.sectionInfo__subtitle}>
              Ecobazar eCommerce © 2021. All Rights Reserved
            </h4>
            <div className={style.sectionInfo__innerIcons}>
              <IconApplePay className={style.sectionInfo__icon} />
              <IconVisa className={style.sectionInfo__icon} />
              <IconDiscover className={style.sectionInfo__icon} />
              <IconMasterCard className={style.sectionInfo__icon} />
              <IconSecurePayment className={style.sectionInfo__icon_big} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
