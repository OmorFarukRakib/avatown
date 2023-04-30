import { FaRegUser } from "react-icons/fa";
import styles from "./userBar.module.css";
import clsx from "clsx";
const UserBar = () => {
  return (
    <div className={clsx(styles["user-container"])}>
      <FaRegUser />
    </div>
  );
};

export default UserBar;
