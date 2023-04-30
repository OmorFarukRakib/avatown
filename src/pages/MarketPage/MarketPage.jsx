import MainBody from "../../components/mainBody/MainBody";
import HeaderForMainPage from "../../components/header/HeaderForMainPage";
import styles from "../../App.module.css";
import clsx from "clsx";
const MarketPage = () => {
  return (
    <>
      <div className={clsx(styles["app-wrapper"])}>
        <HeaderForMainPage />
        <MainBody />
      </div>
    </>
  );
};

export default MarketPage;
