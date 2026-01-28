import * as style from "./HotDeals.module.scss";
import IconArrowRight from "@assets/iconArrowRight.svg";
import { hotDeals } from "@data/hotDeals";
import BestSale from "./BestSale/BestSale";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@components/Card/Card";

export default function HotDeals() {
  const [active, setActive] = useState(null);
  const deals = hotDeals.filter((product, i) => i > 0);

  return (
    <section className={style.hotDeals}>
      <div className={style.hotDeals__rowTop}>
        <div className={style.hotDeals__innerTitle}>
          <h1 className={style.hotDeals__title}>Hot Deals</h1>
        </div>
        <Link to="shop" className={style.hotDeals__innerArrowLink}>
          <h3 className={style.hotDeals__textLink}>View All</h3>
          <IconArrowRight
            stroke={"#00B207"}
            className={style.hotDeals__greenArrow}
          />
        </Link>
      </div>
      <div className={style.hotDeals__rowBottom}>
        <BestSale active={active} product={hotDeals[0]} setActive={setActive} />
        {deals.map((product) => {
          return <Card path={"shop/"} product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
}
