import * as React from "react";
import logo from "../../assets/logo.png"; // Import your logo image here
import clsx from "clsx";
import styles from "./HeaderForMainPage.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Notificaitonbar from "./NotificationBar/NotificationBar";
import CartBar from "./CartBar/CartBar";
import UserBar from "./UserBar/UserBar";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
const HeaderForMainPage = () => {
  const [anchorElN, setAnchorElN] = React.useState(null);
  const openN = Boolean(anchorElN);
  const handleClickN = (event) => {
    setAnchorElN(event.currentTarget);
  };
  const handleCloseN = () => {
    setAnchorElN(null);
  };
  const [anchorElU, setAnchorElU] = React.useState(null);
  const openU = Boolean(anchorElU);
  const handleClickU = (event) => {
    setAnchorElU(event.currentTarget);
  };
  const handleCloseU = () => {
    setAnchorElU(null);
  };

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
          <Button
            id="basic-button"
            aria-controls={openN ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openN ? "true" : undefined}
            onClick={handleClickN}
          >
            <Notificaitonbar />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElN}
            open={openN}
            onClose={handleCloseN}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleCloseN}>Newest Notifications</MenuItem>
            <MenuItem onClick={handleCloseN}>All Notifications</MenuItem>
            <MenuItem onClick={handleCloseN}>Unread Notifications</MenuItem>
          </Menu>
        </div>
        <div className={clsx(styles["cart-wrapper"])}>
          <CartBar />
        </div>
        <div className={clsx(styles["user-wrapper"])}>
          <Button
            id="basic-button"
            aria-controls={openU ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openU ? "true" : undefined}
            onClick={handleClickU}
          >
            <UserBar />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElU}
            open={openU}
            onClose={handleCloseU}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleCloseU}>Profile</MenuItem>
            <MenuItem onClick={handleCloseU}>My account</MenuItem>
            <MenuItem onClick={handleCloseU}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default HeaderForMainPage;
