import * as style from "./Pagination.module.scss";
import IconArrow from "@assets/iconArrowDown.svg";
import { useState } from "react";

export default function Pagination({
  productPerPage,
  totalProducts,
  handlePage,
  page,
}) {
  const [numberPage, setNumberPage] = useState({
    from: 0,
    to: 5,
  });
  const pageAmount = [];
  const [lastPage, setLastPage] = useState(pageAmount[pageAmount.length - 1]);
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageAmount.push(i);
  }
  const result = pageAmount.slice(numberPage.from, numberPage.to);

  return (
    <section className={style.pagination}>
      <div className={style.pagination__wrapper}>
        <div className={style.pagination__innerPage}>
          <IconArrow
            onClick={() => {
              if (numberPage.from > 0) {
                setNumberPage({
                  ...numberPage,
                  from: numberPage.from - 1,
                  to: numberPage.to - 1,
                });
              }
            }}
            className={style.pagination__iconArrowLeft}
            stroke={"#1a1a1a"}
          />
          {result.map((number, i) => {
            return (
              <h3
                onClick={() => {
                  if (
                    number !== pageAmount[pageAmount.length - 1] &&
                    number !== 1
                  ) {
                    setNumberPage({
                      from: number - 3,
                      to: number + 2,
                    });
                  }
                  if (number === pageAmount[pageAmount.length - 2]) {
                    setNumberPage({
                      from: number - 4,
                      to: number + 1,
                    });
                  }
                  if (number === 2) {
                    setNumberPage({
                      from: number - 2,
                      to: number + 3,
                    });
                  }
                  handlePage(number);
                }}
                key={number}
                className={
                  page !== number
                    ? style.pagination__number
                    : `${style.pagination__number} ${style.pagination__number_active}`
                }
              >
                {number}
              </h3>
            );
          })}
          <h3 className={style.pagination__points}>...</h3>
          <h3
            onClick={() => {
              handlePage(pageAmount[pageAmount.length - 1]);
              if (lastPage === pageAmount[pageAmount.length - 1]) {
                setNumberPage({
                  ...numberPage,
                  from: lastPage - 5,
                  to: lastPage,
                });
              }
            }}
            className={style.pagination__number}
          >
            {pageAmount[pageAmount.length - 1]}
          </h3>
          <IconArrow
            onClick={() => {
              if (numberPage.to < pageAmount[pageAmount.length - 1]) {
                setNumberPage({
                  ...numberPage,
                  from: numberPage.from + 1,
                  to: numberPage.to + 1,
                });
              }
            }}
            className={style.pagination__iconArrowRight}
            stroke={"#1a1a1a"}
          />
        </div>
      </div>
    </section>
  );
}
