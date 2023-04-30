import ProductList from "./ProductList/ProductList";
import Sidenav from "./Sidenav/SideNav";
import styles from "./MainBody.module.css";
import clsx from "clsx";
const MainBody = () => {
  return (
    <div className={clsx(styles["mainBody-wrapper"])}>
      <div className={clsx(styles["sidenav-wrapper"])}>
        <Sidenav />
      </div>
      <div className={clsx(styles["productList-wrapper"])}>
        <ProductList />
      </div>
    </div>
  );
};

export default MainBody;
