import { companiesLogo } from "@data/companiesLogo";
import * as style from "./CompaniesLogo.module.scss";

export default function CompaniesLogo() {
  return (
    <section className={style.companiesLogo}>
      {companiesLogo.map((logo, i) => {
        if (i < 6) {
          return (
            <div key={i} className={style.companiesLogo__column}>
              <img
                loading="lazy"
                className={style.companiesLogo__img}
                src={logo}
                alt="logo"
              />
            </div>
          );
        }
      })}
    </section>
  );
}
