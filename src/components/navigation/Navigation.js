import "./Navigation.css";
import navHomeIcon from "../../assets/navHomeIcon-64.png";
import navBookmarkIcon from "../../assets/navBookmarkIcon-64.png";
import navCreateCardIcon from "../../assets/navCreateCardIcon-64.png";
import navProfileIcon from "../../assets/navProfileIcon-64.png";
//import { useState } from "react";

export default function Navigation(props) {
  //const [activeSite, setActiveSite] = useState('home');

  return (
    <footer className="footer">
      <a
        onClick={(event) => {
          event.preventDefault();
          props.onChange("home");
        }}
        href="index.html"
        className={
          props.activeSite === "home"
            ? "footer__link footer--active"
            : "footer__link"
        }
        aria-label="go to homepage"
      >
        <img className="footer__image" alt="home icon" src={navHomeIcon} />
      </a>
      <a
        onClick={(event) => {
          event.preventDefault();
          props.onChange("bookmark");
        }}
        href="bookmark.html"
        className={
          props.activeSite === "bookmark"
            ? "footer__link footer--active"
            : "footer__link"
        }
        aria-label="go to bookmark site"
      >
        <img
          className="footer__image"
          alt="bookmark icon"
          src={navBookmarkIcon}
        />
      </a>
      <a
        onClick={(event) => {
          event.preventDefault();
          props.onChange("create");
        }}
        href="form.html"
        className={
          props.activeSite === "create"
            ? "footer__link footer--active"
            : "footer__link"
        }
        aria-label="go to create cards site"
      >
        <img
          className="footer__image"
          alt="create card icon"
          src={navCreateCardIcon}
        />
      </a>
      <a
        onClick={(event) => {
          event.preventDefault();
          props.onChange("profile");
        }}
        href="profile.html"
        className={
          props.activeSite === "profile"
            ? "footer__link footer--active"
            : "footer__link"
        }
        aria-label="go to profile site"
      >
        <img
          className="footer__image"
          alt="profile icon"
          src={navProfileIcon}
        />
      </a>
    </footer>
  );
}
