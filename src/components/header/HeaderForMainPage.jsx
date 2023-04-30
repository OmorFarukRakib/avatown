import logo from "../../assets/logo.png"; // Import your logo image here
import clsx from "clsx";
import styles from "./HeaderForMainPage.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Notificaitonbar from "./NotificationBar/NotificationBar";
import CartBar from "./CartBar/CartBar";
import UserBar from "./UserBar/UserBar";
import { useNavigate } from "react-router-dom";
const HeaderForMainPage = () => {
  const navigate = useNavigate();
  return (
    <header className={clsx(styles["header-wrapper"])}>
      <div className={clsx(styles["leftSide-header-menus"])}>
        <div className={clsx(styles["logo-container"])}>
          <img src={logo} alt="My Logo" />
        </div>
        <div
          className={clsx(styles["goToMarketplace-container"])}
          onClick={() => navigate("/")}
        >
          Go to Marketpage
        </div>
      </div>
      <div className={clsx(styles["rightSide-header-menus"])}>
        <div className={clsx(styles["search-wrapper"])}>
          <SearchBar />
        </div>
        <div className={clsx(styles["noti-wrapper"])}>
          <Notificaitonbar />
        </div>
        <div className={clsx(styles["cart-wrapper"])}>
          <CartBar />
        </div>
        <div className={clsx(styles["user-wrapper"])}>
          <UserBar />
        </div>
      </div>
    </header>
  );
};

export default HeaderForMainPage;
