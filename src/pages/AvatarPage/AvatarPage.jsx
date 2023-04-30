import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderForMainPage from "../../components/header/HeaderForMainPage";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux";
import styles from "./AvatarPage.module.css";
import clsx from "clsx";
import { avatars } from "../../redux/features/avatars/initialState";
import BasicTabs from "../AvatarPage/AvatarDetailTab/AvatarDetailTab";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AvatarPage = () => {
  const [avatar, setAvatar] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(id);
    const object = avatars.find((item) => item.id == id);
    const result = object ? object : false;
    if (result === false) {
      navigate("/error");
    } else {
      setAvatar(result);
    }
  }, [id, navigate]);

  const [openAddToCardSnackSuccess, setOpenAddToCardSnackSuccess] =
    useState(false);
  const [openAddToCardSnackError, setOpenAddToCardSnackError] = useState(false);
  const [openBuyAllSnack, setOpenBuyAllSnack] = React.useState(false);

  const handleAddToCardSnack = () => {
    const isItemExists = cart.cartAvatars.some((obj) => obj.id === avatar.id);
    console.log(isItemExists);
    if (isItemExists === false) {
      handleAddToCardSnackSuccess();
    } else {
      handleAddToCardSnackError();
    }
  };

  const handleAddToCardSnackSuccess = () => {
    dispatch(addToCart(avatar));
    setOpenAddToCardSnackSuccess(true);
  };

  const handleCloseAddToCardSnackSuccess = () => {
    setOpenAddToCardSnackSuccess(false);
  };

  const handleAddToCardSnackError = () => {
    setOpenAddToCardSnackError(true);
  };
  const handleCloseAddToCardSnackError = () => {
    setOpenAddToCardSnackError(false);
  };

  const handleBuyAllSnack = () => {
    setOpenBuyAllSnack(true);
  };
  const handleCloseBuyAllSnack = () => {
    setOpenBuyAllSnack(false);
  };

  return (
    <>
      <HeaderForMainPage />
      <div className={clsx(styles["avatarPage-wrapper"])}>
        <div className={clsx(styles["avatarPage-product-show-wrapper"])}>
          <div className={clsx(styles["avatarPage-product-img-wrapper"])}>
            <img src={`/src/assets/avatars/${avatar.src}`} alt="My Image" />
          </div>
        </div>
        <div className={clsx(styles["avatarPage-product-show-wrapper"])}>
          <div className={clsx(styles["avatarPage-product-title"])}>
            {avatar.title}
          </div>
          <div className={clsx(styles["avatarPage-product-description"])}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            volutpat, quam id maximus congue, libero ipsum faucibus ex, eu
            tincidunt lorem velit a sapien. In hac habitasse platea dictumst.
            Aenean eget est non est accumsan vulputate a nec lacus. Donec
            malesuada nulla eu purus ultricies mollis. Fusce auctor, purus ac
            malesuada vulputate, dolor tortor vulputate lacus, vel bibendum
            metus mauris eget sapien. Sed euismod arcu sit amet metus euismod
            malesuada. Fusce laoreet urna et turpis maximus, vel eleifend metus
            lobortis. Quisque at ante eu ipsum consequat varius sit amet sit
            amet urna. In hac habitasse
          </div>
          <div className={clsx(styles["avatarPage-product-btn-wrapper"])}>
            <div
              className={clsx(
                styles["avatarPage-product-btn"],
                styles["add-to-cart-btn"]
              )}
              onClick={handleAddToCardSnack}
            >
              Add to cart
            </div>
            <Snackbar
              key={1}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={openAddToCardSnackSuccess}
              autoHideDuration={4000}
              onClose={handleCloseAddToCardSnackSuccess}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                successfully Added to the cart!!
              </Alert>
            </Snackbar>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              key={2}
              open={openAddToCardSnackError}
              autoHideDuration={4000}
              onClose={handleCloseAddToCardSnackError}
            >
              <Alert severity="error" sx={{ width: "100%" }}>
                Item already exists in the cart!!
              </Alert>
            </Snackbar>
            <div
              className={clsx(
                styles["avatarPage-product-btn"],
                styles["add-to-cart-btn"]
              )}
              onClick={handleBuyAllSnack}
            >
              Buy Now
            </div>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={openBuyAllSnack}
              autoHideDuration={5000}
              onClose={handleCloseBuyAllSnack}
            >
              <Alert severity="error" sx={{ width: "100%" }}>
                Buying function is disable for now!!
              </Alert>
            </Snackbar>
          </div>
        </div>
        <div className={clsx(styles["avatarPage-product-details-wrapper"])}>
          <BasicTabs avatarDetails={avatar} />
        </div>
      </div>
    </>
  );
};

export default AvatarPage;
