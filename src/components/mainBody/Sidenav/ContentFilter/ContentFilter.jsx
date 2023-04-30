import { MenuItem } from "react-pro-sidebar";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { ContentFilter } from "../../../../redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import clsx from "clsx";
import styles from "../SideNav.module.css";
const ContentFilterComp = () => {
  const avatarsState = useSelector((state) => state.avatars);
  const dispatch = useDispatch();

  const contentFilterChange = (e, contentType) => {
    if (e.target.checked === false) {
      dispatch(ContentFilter(0));
    } else {
      dispatch(ContentFilter(contentType));
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
        {" "}
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterContents.code === 2}
              onChange={(e) => contentFilterChange(e, 2)}
            />
          }
          label={
            <>
              VRChat(Quest)
              <span className={clsx(styles["vrchat-quest-circle"])}></span>
            </>
          }
        />
      </MenuItem>

      <MenuItem
        rootStyles={{
          marginLeft: "10px",
        }}
      >
        {" "}
        <FormControlLabel
          style={{ width: "105%" }}
          control={
            <Checkbox
              checked={avatarsState.filterContents.code === 1}
              onChange={(e) => contentFilterChange(e, 1)}
            />
          }
          label={
            <>
              <>VRChat(PCVR)</>
              <span className={clsx(styles["vrchat-pcvr-circle"])}></span>
            </>
          }
        />
      </MenuItem>

      <MenuItem
        rootStyles={{
          marginLeft: "10px",
          width: "",
        }}
      >
        {" "}
        <FormControlLabel control={<Checkbox disabled />} label="Other" />
      </MenuItem>
    </div>
  );
};

export default ContentFilterComp;
