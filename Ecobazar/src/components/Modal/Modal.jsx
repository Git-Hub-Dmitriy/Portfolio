import * as style from "./Modal.module.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { resetProduct } from "@store/reducers/amountProductSlice";

export default function Modal({ children, activeModal, changeModal }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={
          activeModal ? classNames(style.modal, style.active) : style.modal
        }
        onClick={() => {
          dispatch(resetProduct(1));
          dispatch(changeModal({ modalReview: false, activeImage: false }));
        }}
      >
        <div
          className={
            activeModal
              ? classNames(style.modal__content, style.active)
              : style.modal__content
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}
