import { MenuItem } from "react-pro-sidebar";

import { BsTriangle } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { PolygonFilter } from "../../../../redux";
import FormControlLabel from "@mui/material/FormControlLabel";

import styles from "../SideNav.module.css";
import clsx from "clsx";

const PolygonFilterComp = () => {
  const avatarsState = useSelector((state) => state.avatars);
  const dispatch = useDispatch();

  const polygonFilterChange = (e, polygonLevel) => {
    if (e.target.checked === false) {
      dispatch(PolygonFilter(0));
    } else {
      dispatch(PolygonFilter(polygonLevel));
    }
    console.log(e.target.checked);
  };

  return (
    <div style={{ marginLeft: "20px", overflow: "hidden" }}>
      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 1}
              onChange={(e) => polygonFilterChange(e, 1)}
            />
          }
          label={
            <>
              {" "}
              Under{" "}
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              7,500
            </>
          }
        />
      </MenuItem>

      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 2}
              onChange={(e) => polygonFilterChange(e, 2)}
            />
          }
          label={
            <>
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              7,500 to{" "}
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              10,000
            </>
          }
        />
      </MenuItem>
      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 3}
              onChange={(e) => polygonFilterChange(e, 3)}
            />
          }
          label={
            <>
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              10,000 to{" "}
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              15,000
            </>
          }
        />
      </MenuItem>
      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 4}
              onChange={(e) => polygonFilterChange(e, 4)}
            />
          }
          label={
            <>
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              15,000 to{" "}
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              20,000
            </>
          }
        />
      </MenuItem>
      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 5}
              onChange={(e) => polygonFilterChange(e, 5)}
            />
          }
          label={
            <>
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              20,000 to{" "}
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              32,000
            </>
          }
        />
      </MenuItem>
      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 6}
              onChange={(e) => polygonFilterChange(e, 6)}
            />
          }
          label={
            <>
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              32,000 to{" "}
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              70,000
            </>
          }
        />
      </MenuItem>
      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterPolygon.code === 7}
              onChange={(e) => polygonFilterChange(e, 7)}
            />
          }
          label={
            <>
              <span className={clsx(styles["triangle"])}>{<BsTriangle />}</span>
              70,000 & Above
            </>
          }
        />
      </MenuItem>
    </div>
  );
};

export default PolygonFilterComp;
