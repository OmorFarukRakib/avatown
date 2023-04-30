import { MenuItem } from "react-pro-sidebar";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AutoUploadSupportFilter } from "../../../../redux";
import FormControlLabel from "@mui/material/FormControlLabel";

const AutoUploadSupportFilterComp = () => {
  const avatarsState = useSelector((state) => state.avatars);
  const dispatch = useDispatch();

  const autoUploadSupportFilterChange = (e, supportLevel) => {
    if (e.target.checked === false) {
      dispatch(AutoUploadSupportFilter(0));
    } else {
      dispatch(AutoUploadSupportFilter(supportLevel));
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
              checked={avatarsState.filterAutoUploadSupport.code === 1}
              onChange={(e) => autoUploadSupportFilterChange(e, 1)}
            />
          }
          label={<>Supported</>}
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
              checked={avatarsState.filterAutoUploadSupport.code === 2}
              onChange={(e) => autoUploadSupportFilterChange(e, 2)}
            />
          }
          label={<>Unsupported</>}
        />
      </MenuItem>
    </div>
  );
};

export default AutoUploadSupportFilterComp;
