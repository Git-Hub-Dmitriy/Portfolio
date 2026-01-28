import * as style from "./PostInfo.module.scss";
import SectionComments from "./SectionComments/SectionComments";
import IconTag from "@assets/iconTag.svg";
import IconUser from "@assets/iconProfile.svg";
import IconComment from "@assets/iconComment.svg";
import IconTwitter from "@assets/twitterBlog.svg";
import IconPatreon from "@assets/patreonBlog.svg";
import IconFacebook from "@assets/facebookBlog.svg";
import IconInstagram from "@assets/instagramBlog.svg";
import IconLink from "@assets/linkBlog.svg";
import BtnLinkShop from "@components/Buttons/BtnLinkShop/BtnLinkShop";

export default function PostInfo({ post, banner, getMonthString }) {
  return (
    <section className={style.postInfo__wrapPost}>
      <div className={style.postInfo__innerImg}>
        <img
          loading="lazy"
          className={style.postInfo__hugeImg}
          src={post.img}
          alt="post image"
        />
      </div>
      <div className={style.postInfo__innerTag}>
        <div className={style.postInfo__tag}>
          <IconTag stroke={"#00B207"} className={style.postInfo__icon} />
          <h4 className={style.postInfo__tagText}>{post.category}</h4>
        </div>
        <div className={style.postInfo__author}>
          <IconUser stroke={"#00B207"} className={style.postInfo__icon} />
          <h4 className={style.postInfo__tagText}>by Admin</h4>
        </div>
        <div className={style.postInfo__comment}>
          <IconComment stroke={"#00B207"} className={style.postInfo__icon} />
          <h4 className={style.postInfo__tagText}>
            {`${post.comments.length} Comments`}
          </h4>
        </div>
      </div>
      <h1 className={style.postInfo__title}>{post.title}</h1>
      <div className={style.editor}>
        <div className={style.editor__inner}>
          <img
            loading="lazy"
            className={style.editor__img}
            src="/images/admin-photo.webp"
            alt="admin image"
          />
          <div className={style.editor__innerName}>
            <h3 className={style.editor__name}>Cameron Williamson</h3>
            <div className={style.editor__innerDate}>
              <h3
                className={style.editor__date}
              >{`${post.date.getDate()} ${getMonthString(
                post.date.getMonth()
              )}, ${post.date.getFullYear()}`}</h3>
              <span className={style.editor__point}>&#8226;</span>
              <h3 className={style.editor__timeToRead}>6 min read</h3>
            </div>
          </div>
        </div>
        <div className={style.postInfo__innerSocial}>
          <div className={style.postInfo__social}>
            <IconFacebook
              fill={"#4d4d4d"}
              className={style.postInfo__iconSocial}
            />
          </div>
          <div
            className={`${style.postInfo__social_green} ${style.postInfo__social}`}
          >
            <IconTwitter
              stroke={"#ffffff"}
              className={style.postInfo__iconSocial}
            />
          </div>
          <div className={style.postInfo__social}>
            <IconPatreon
              fill={"#4d4d4d"}
              className={style.postInfo__iconSocial}
            />
          </div>
          <div className={style.postInfo__social}>
            <IconInstagram
              fill={"#4d4d4d"}
              className={style.postInfo__iconSocial}
            />
          </div>
          <div className={style.postInfo__social}>
            <IconLink fill={"#4d4d4d"} className={style.postInfo__iconSocial} />
          </div>
        </div>
      </div>
      <h3 className={style.postInfo__subtitle}>{post.subTitle}</h3>
      <p className={style.postInfo__text}>{post.descriptionOne}</p>
      <br />
      <p className={style.postInfo__text}>{post.descriptionTwo}</p>
      <div className={style.postInfo__innerOtherImg}>
        <img
          loading="lazy"
          className={style.postInfo__otherImg}
          src={post.images[0]}
          alt="post image"
        />
        <img
          loading="lazy"
          className={style.postInfo__otherImg}
          src={post.images[1]}
          alt="post image"
        />
      </div>
      <h4 className={style.postInfo__text}>{post.descriptionThree}</h4>
      <div className={style.postInfo__advertising}>
        <BtnLinkShop />
        <img
          loading="lazy"
          className={style.postInfo__advertisingImg}
          src={banner.img}
          alt="Banner"
        />
      </div>
      <SectionComments getMonthString={getMonthString} post={post} />
    </section>
  );
}
