import NotFoundGIF from "../../assets/lottie/404.gif";
import clsx from "clsx";
import styles from "./NotFoundPage.module.css";
import HeaderForMainPage from "../../components/header/HeaderForMainPage";
const NotFoundPage = () => {
  return (
    <>
      <HeaderForMainPage />
      <div className={clsx(styles["page-not-found-wrapper"])}>
        <img src={NotFoundGIF} alt="not-found" />
      </div>
    </>
  );
};

export default NotFoundPage;
