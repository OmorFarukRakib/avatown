import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CartItem from "./cartItem/CartItem";
import { useDispatch } from "react-redux";
import { removeAllItemFromCart } from "../../redux";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CartModal = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [openBuyAllSnack, setOpenBuyAllSnack] = React.useState(false);
  const handleBuyAllSnack = () => {
    setOpenBuyAllSnack(true);
  };
  const handleCloseBuyAllSnack = () => {
    setOpenBuyAllSnack(false);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart Items</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {cart.total >= 1 ? (
          <>
            {cart.cartAvatars.map((item) => (
              <CartItem key={item.id} avatar={item} />
            ))}
          </>
        ) : (
          <h4 style={{ textAlign: "center" }}>Cart is Empty!!</h4>
        )}
      </Modal.Body>

      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="success" onClick={handleBuyAllSnack}>
          Buy All
        </Button>
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
        <Button
          variant="danger"
          onClick={() => dispatch(removeAllItemFromCart())}
        >
          Clear Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CartModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default CartModal;
