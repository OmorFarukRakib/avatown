import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./cartBar.module.css";
import clsx from "clsx";
import CartModal from "../../cartModal/CartModal";
import { useSelector } from "react-redux";
const CartBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const cartTotalItem = useSelector((state) => state.cart.total);

  return (
    <div
      className={clsx(styles["cart-container"])}
      onClick={() => setModalShow(true)}
    >
      <AiOutlineShoppingCart />
      <div onClick={(e) => e.stopPropagation()}>
        <div className={clsx(styles["icon-wrapper"])}>
          <CartModal show={modalShow} onHide={() => setModalShow(false)} />
          {cartTotalItem > 0 && (
            <span
              onClick={() => setModalShow(true)}
              className={clsx(styles["badge"])}
            >
              {cartTotalItem}
            </span>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default CartBar;
