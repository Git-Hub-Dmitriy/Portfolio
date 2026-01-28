import * as style from "./SocialMedia.module.scss";
import IconFacebook from "@assets/iconFacebook.svg";
import IconTwitter from "@assets/iconTwitter.svg";
import IconPatreon from "@assets/iconPatreon.svg";
import IconInstagram from "@assets/iconInstagram.svg";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <div className={style.socialMedia}>
      <Link to="https://uk-ua.facebook.com/login/?next=https%3A%2F%2Fuk-ua.facebook.com%2F">
        <IconFacebook className={style.socialMedia__iconFacebook} />
      </Link>
      <Link to="https://x.com">
        <IconTwitter
          fill={"#4D4D4D"}
          className={style.socialMedia__iconTwitter}
        />
      </Link>
      <Link to="https://www.instagram.com/">
        <IconPatreon className={style.socialMedia__iconPatreon} />
      </Link>
      <Link to="https://www.patreon.com">
        <IconInstagram
          fill={"#4D4D4D"}
          className={style.socialMedia__iconInstagram}
        />
      </Link>
    </div>
  );
}
