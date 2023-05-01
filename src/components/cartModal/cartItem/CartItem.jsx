import clsx from "clsx";
import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CartItem = ({ avatar }) => {
  const dispatch = useDispatch();
  const [openCartItemRemoveSnack, setOpenCartItemRemoveSnack] =
    React.useState(false);
  const [openCartItemBuySnack, setOpenCartItemBuySnack] = React.useState(false);
  const handleCartItemRemove = () => {
    dispatch(removeFromCart(avatar.id));
    setOpenCartItemRemoveSnack(true);
  };
  const handleCartItemBuy = () => {
    setOpenCartItemBuySnack(true);
  };

  const handleCloseRemoveSnack = () => {
    setOpenCartItemRemoveSnack(false);
  };
  const handleCloseBuySnack = () => {
    setOpenCartItemBuySnack(false);
  };

  return (
    <div className={clsx(styles["cartItem-wrapper"])}>
      <div className={clsx(styles["item-wrapper"])}>
        <img src={`/avatars/${avatar.src}`} alt="avatar" />
        <div className={clsx(styles["item-details"])}>
          <div>
            Avatar name &quot;Avatown&quot; -nice original avatar of Avatown
          </div>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={avatar.rating}
              precision={0.5}
              readOnly
              size="small"
            />
          </div>
          <div>$ {avatar?.price?.toFixed(2)}</div>
        </div>
      </div>
      <div className={clsx(styles["cart-btn-wrapper"])}>
        <Button variant="outlined" onClick={handleCartItemBuy}>
          Buy
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={openCartItemBuySnack}
          autoHideDuration={4000}
          onClose={handleCloseBuySnack}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Buying function is disable for now!!
          </Alert>
        </Snackbar>
        <Button variant="outlined" color="error" onClick={handleCartItemRemove}>
          Remove
        </Button>
        <Snackbar
          open={openCartItemRemoveSnack}
          autoHideDuration={4000}
          onClose={handleCloseRemoveSnack}
        >
          <Alert severity="warning" sx={{ width: "100%" }}>
            Cart item has been removed!!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  avatar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
