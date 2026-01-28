import * as style from "./SectionComments.module.scss";
import { useState } from "react";

export default function SectionComments({ post, getMonthString }) {
  const [showMoreComments, setShowMoreComments] = useState(5);
  const [checkbox, setCheckbox] = useState(false);
  const comments = post.comments.filter((comment, i) => i < showMoreComments);

  return (
    <section className={style.sectionComments}>
      <div className={style.sectionComments__wrapForm}>
        <h2 className={style.sectionComments__title}>Leave a Comment</h2>
        <form name="comment" className={style.sectionComments__form} action="">
          <div className={style.sectionComments__wrapInput}>
            <div className={style.sectionComments__innerInput}>
              <h4 className={style.sectionComments__subtitle}>Full Name</h4>
              <input
                placeholder="Zalir Hossen"
                autoComplete="off"
                required
                id="nameCommentator"
                className={style.sectionComments__nameInput}
                type="text"
              />
            </div>
            <div className={style.sectionComments__innerInput}>
              <h4 className={style.sectionComments__subtitle}>Email</h4>
              <input
                className={style.sectionComments__emailInput}
                type="email"
                autoComplete="off"
                id="emailCommentator"
                placeholder="zakirsoft.20@gl"
              />
            </div>
          </div>
          <div className={style.sectionComments__wrapTextArea}>
            <h4 className={style.sectionComments__subtitle}>Message</h4>
            <textarea
              rows={4}
              cols={15}
              className={style.sectionComments__textarea}
              autoComplete="off"
              id="messageCommentator"
              placeholder="Write your comment here…"
            ></textarea>
          </div>
          <div className={style.sectionComments__innerRememberCheck}>
            <input
              onClick={() => {
                if (!checkbox) {
                  setCheckbox(true);
                } else {
                  setCheckbox(false);
                }
              }}
              className={style.sectionComments__check}
              id="checkboxRemember"
              type="checkbox"
              checked={checkbox}
            />
            <span className={style.sectionComments__checkText}>
              Save my name and email in this browser for the next time I
              comment.
            </span>
          </div>
          <button type="submit" className={style.sectionComments__btnComment}>
            Post Comments
          </button>
        </form>
      </div>
      <div className={style.sectionComments__wrapComments}>
        <h2 className={style.sectionComments__title}>Comments</h2>
        <div className={style.sectionComments__innerComments}>
          {comments.map((comment) => {
            return (
              <div key={comment.id} className={style.sectionComments__comment}>
                <img
                  loading="lazy"
                  className={style.sectionComments__userPhoto}
                  src={comment.userPhoto}
                  alt="image user"
                />
                <div className={style.sectionComments__userInfo}>
                  <div className={style.sectionComments__innerUserName}>
                    <h3 className={style.sectionComments__userName}>
                      {comment.userName}
                    </h3>
                    <div className={style.sectionComments__point}>&#8226;</div>
                    <span className={style.sectionComments__date}>
                      {`${comment.date.getDate()} ${getMonthString(
                        comment.date.getMonth()
                      )}, ${comment.date.getFullYear()}`}
                    </span>
                  </div>
                  <h4 className={style.sectionComments__userComment}>
                    {comment.comment}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => setShowMoreComments(showMoreComments + 5)}
        className={style.sectionComments__btn}
      >
        Load More
      </button>
    </section>
  );
}
