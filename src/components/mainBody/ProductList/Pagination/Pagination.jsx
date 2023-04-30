import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PropsType from "prop-types";
export default function PaginationComp(props) {
  const [totalPage, setTotalPage] = React.useState(1);
  const handleChange = (event, value) => {
    props.changePage(value);
  };
  React.useEffect(() => {
    if (props.totalItems > 15) {
      setTotalPage(2);
    } else {
      setTotalPage(1);
    }
  }, [props.totalItems]);

  return (
    <Pagination
      count={totalPage}
      variant="outlined"
      page={props.pageNo}
      onChange={handleChange}
      color="primary"
    />
  );
}
PaginationComp.propTypes = {
  changePage: PropsType.func,
  totalItems: PropsType.number,
  pageNo: PropsType.number,
};
