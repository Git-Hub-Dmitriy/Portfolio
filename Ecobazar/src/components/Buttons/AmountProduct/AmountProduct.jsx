import * as style from "./AmountProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementedProduct,
  decrementedProduct,
} from "@store/reducers/amountProductSlice";
export default function AmountProduct() {
  const amountProduct = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={style.amountProduct}>
      <button
        onClick={() => dispatch(decrementedProduct({}))}
        className={style.amountProduct__minus}
      >
        -
      </button>
      <div className={style.amountProduct__number}>{amountProduct}</div>
      <button
        onClick={() => dispatch(incrementedProduct({}))}
        className={style.amountProduct__plus}
      >
        +
      </button>
    </div>
  );
}
