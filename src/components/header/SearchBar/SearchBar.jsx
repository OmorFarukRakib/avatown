import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import clsx from "clsx";

const SearchBar = () => {
  return (
    <div className={clsx(styles["search-bar"])}>
      <input type="text" placeholder="Search..." />
      <div className={clsx(styles["search-icon"])}>
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
