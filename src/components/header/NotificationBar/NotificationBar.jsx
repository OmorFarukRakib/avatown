import { IoMdNotificationsOutline } from "react-icons/io";
import styles from "./notificationBar.module.css";
import clsx from "clsx";
const index = () => {
  return (
    <div className={clsx(styles["noti-container"])}>
      <IoMdNotificationsOutline />
    </div>
  );
};

export default index;
