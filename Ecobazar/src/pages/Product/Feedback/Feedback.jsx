import * as style from "./Feedback.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@data/products";
import UserRating from "./UserRating/UserRating";

export default function Feedback() {
  const [showMoreUsers, setShowMoreUsers] = useState(3);
  const { id } = useParams();
  const card = products.find((item) => item.id == id);
  const comments = card.feedback.filter((user, i) => i <= showMoreUsers);

  return (
    <section className={style.productFeedback}>
      <div className={style.productFeedback__container}>
        {comments.map((user, i) => {
          return (
            <div key={i} className={style.productFeedback__wrapUser}>
              <div className={style.productFeedback__innerUser}>
                <h3 className={style.productFeedback__userName}>{user.name}</h3>
                <UserRating stars={user.stars} />
              </div>
              <h3 className={style.productFeedback__comment}>{user.text}</h3>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => setShowMoreUsers(showMoreUsers + 4)}
        className={style.productFeedback__btnMoreUsers}
      >
        Load More
      </div>
    </section>
  );
}
