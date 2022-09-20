import "./Navigation.css";
import navHomeIcon from "../../assets/navHomeIcon-64.png";
import navBookmarkIcon from "../../assets/navBookmarkIcon-64.png";
import navCreateCardIcon from "../../assets/navCreateCardIcon-64.png";
import navProfileIcon from "../../assets/navProfileIcon-64.png";


export default function Navigation() {
  return (
    <footer className="footer">
      <a
        href="index.html"
        className="footer__link footer--active"
        aria-label="go to homepage"
      >
        <img
          className="footer__image"
          alt="home icon"
          src={navHomeIcon}
        />
      </a>
      <a
        href="bookmark.html"
        className="footer__link"
        aria-label="go to bookmark site"
      >
        <img
          className="footer__image"
          alt="bookmark icon"
          src={navBookmarkIcon}
        />
      </a>
      <a
        href="form.html"
        className="footer__link"
        aria-label="go to create cards site"
      >
        <img
          className="footer__image"
          alt="create card icon"
          src={navCreateCardIcon}
        />
      </a>
      <a
        href="profile.html"
        className="footer__link"
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
