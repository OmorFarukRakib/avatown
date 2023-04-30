import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import clsx from "clsx";
import { BsCartPlus } from "react-icons/bs";
import { TbShare2 } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../../../../redux";
import avatarImg from "../../../../assets/avatars/VRC image A(F).png";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProductCard = ({ avatarInfo }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [openAddToCardSnackSuccess, setOpenAddToCardSnackSuccess] =
    useState(false);
  const [openAddToCardSnackError, setOpenAddToCardSnackError] = useState(false);

  const handleAddToCardSnack = () => {
    const isItemExists = cart.cartAvatars.some(
      (obj) => obj.id === avatarInfo.id
    );
    console.log(isItemExists);
    if (isItemExists === false) {
      handleAddToCardSnackSuccess();
    } else {
      handleAddToCardSnackError();
    }
  };

  const handleAddToCardSnackSuccess = () => {
    dispatch(addToCart(avatarInfo));
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

  const goToAvatarPage = () => {
    navigate(`/avatar/${avatarInfo.id}`);
  };

  const { rating, likes, price, contents, supported, src } = avatarInfo;

  return (
    <>
      <div className={clsx(styles["productCard-wrapper"])}>
        <>
          <div
            className={clsx(styles["avatar-add-to-cart-btn"])}
            onClick={() => handleAddToCardSnack()}
          >
            <button>
              {" "}
              <BsCartPlus style={{ paddingBottom: "1px" }} />
              &nbsp; Add
            </button>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              key={1}
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
          </div>
        </>
        <div onClick={goToAvatarPage}>
          <div className={clsx(styles["avatarImg-wrapper"])}>
            <img src={`/src/assets/avatars/${src}`} alt="avatar" />
          </div>
          <div className={clsx(styles["avatar-title-wrapper"])}>
            Avatar name &quot;Avatown&quot; -nice original avatar of Avatown
          </div>
          <div className={clsx(styles["avatar-rating-wrapper"])}>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <span>
              {rating} & {likes} Likes
            </span>
            <span className={clsx(styles["avatar-rating-heart"])}>
              <AiOutlineHeart />
            </span>
          </div>
          <div className={clsx(styles["avatar-pp-wrapper"])}>
            <img src={avatarImg} alt="My Image" />
            <div> Avatar Joe&apos;s </div>
          </div>
          <div className={clsx(styles["avatar-price-wrapper"])}>
            <span className={clsx(styles["avatar-price-dollar"])}>$</span>
            <span className={clsx(styles["avatar-price-amount"])}>
              {price?.toFixed(2)}
            </span>
          </div>
          <div className={clsx(styles["avatar-contents-wrapper"])}>
            {contents === "PC Only" ? (
              <div className={clsx(styles["avatar-contents-dot-pc"])}></div>
            ) : (
              <div className={clsx(styles["avatar-contents-dot-quest"])}></div>
            )}
            <div className={clsx(styles["avatar-supported-dot"])}></div>
            <div className={clsx(styles["avatar-contents"])}> {contents} </div>
          </div>
          <div className={clsx(styles["avatar-share-info-wrapper"])}>
            <div className={clsx(styles["avatar-share-info-text"])}>
              {supported === true ? (
                <>
                  Auto upload service ready, you can use this avatar within 24
                  hours.
                </>
              ) : (
                <>Auto upload service is not supported</>
              )}
            </div>
            <div className={clsx(styles["avatar-share-btn"])}>
              <TbShare2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  avatarInfo: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    likes: PropTypes.number,
    price: PropTypes.number,
    contents: PropTypes.string,
    supported: PropTypes.bool,
    src: PropTypes.string,
  }),
};
