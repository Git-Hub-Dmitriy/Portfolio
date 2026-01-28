import * as style from "./BtnActiveModal.module.scss";
import IconEye from "@assets/iconMiniEye.svg";
import { useDispatch } from "react-redux";
import { changeModalReview } from "@store/reducers/activeModalSlice";

export default function BtnActiveModal({ id }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(changeModalReview({ modalReview: true, id: id }))}
      className={style.btnActiveModal}
    >
      <IconEye stroke={"#1a1a1a"} className={style.btnActiveModal__icon} />
    </button>
  );
}
