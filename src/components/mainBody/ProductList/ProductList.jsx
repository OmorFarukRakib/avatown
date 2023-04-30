import { useEffect, useState } from "react";
import SortByFeatured from "./SortByFeatured/SortByFeatured";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import clsx from "clsx";
import PaginationComp from "./Pagination/Pagination";
import { useSelector } from "react-redux";
import noContentFoundGIF from "../../../assets/lottie/no-content.gif";
const ProductList = () => {
  const [pageNo, setPageNo] = useState(1);
  const avatars = useSelector((state) => state.avatars);
  useEffect(() => {
    setPageNo(1);
  }, [avatars]);
  console.log(avatars.avatars);

  const changePage = (newPageNo) => {
    setPageNo(newPageNo);
  };

  return (
    <div className={clsx(styles["productList-wrapper"])}>
      <div className={clsx(styles["productList-header-wrapper"])}>
        <div>
          {avatars.filterGender.name}
          {avatars.filterContents.name}
          {avatars.filterPrice.name}

          <span
            dangerouslySetInnerHTML={{
              __html: avatars.filterPolygon.name,
            }}
          ></span>

          {avatars.filterAutoUploadSupport.name}
        </div>
        <div>
          <SortByFeatured />
        </div>
      </div>
      {avatars.total > 0 ? (
        <>
          <div className={clsx(styles["productCards-wrapper"])}>
            {pageNo === 1 ? (
              <>
                {avatars.avatars.slice(0, 15).map((avatar) => (
                  <ProductCard key={avatar.id} avatarInfo={avatar} />
                ))}
              </>
            ) : null}
            {pageNo === 2 ? (
              <>
                {avatars.avatars.slice(16, avatars.total).map((avatar) => (
                  <ProductCard key={avatar.id} avatarInfo={avatar} />
                ))}
              </>
            ) : null}
          </div>
          <div className={clsx(styles["productList-pagination-wrapper"])}>
            <PaginationComp
              pageNo={pageNo}
              totalItems={avatars.total}
              changePage={changePage}
            />
          </div>
        </>
      ) : (
        <div className={clsx(styles["no-content-found-wrapper"])}>
          <img src={noContentFoundGIF} alt="content-not-found" />
          <div>Sorry! No Content Found</div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
