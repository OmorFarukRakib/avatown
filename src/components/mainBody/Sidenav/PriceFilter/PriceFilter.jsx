import { MenuItem } from "react-pro-sidebar";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { PriceFilter } from "../../../../redux";
import FormControlLabel from "@mui/material/FormControlLabel";

const PriceFilterComp = () => {
  const avatarsState = useSelector((state) => state.avatars);
  const dispatch = useDispatch();
  const priceFilterChange = (e, priceLevel) => {
    if (e.target.checked === false) {
      dispatch(PriceFilter(0));
    } else {
      dispatch(PriceFilter(priceLevel));
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
              checked={avatarsState.filterPrice.code === 1}
              onChange={(e) => priceFilterChange(e, 1)}
            />
          }
          label="Under $10"
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
              checked={avatarsState.filterPrice.code === 2}
              onChange={(e) => priceFilterChange(e, 2)}
            />
          }
          label={<> $10 to $20</>}
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
              checked={avatarsState.filterPrice.code === 3}
              onChange={(e) => priceFilterChange(e, 3)}
            />
          }
          label={<> $20 to $30</>}
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
              checked={avatarsState.filterPrice.code === 4}
              onChange={(e) => priceFilterChange(e, 4)}
            />
          }
          label={<> $30 to $40</>}
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
              checked={avatarsState.filterPrice.code === 5}
              onChange={(e) => priceFilterChange(e, 5)}
            />
          }
          label={<> $40 to $50</>}
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
              checked={avatarsState.filterPrice.code === 6}
              onChange={(e) => priceFilterChange(e, 6)}
            />
          }
          label={<> $50 to $70</>}
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
              checked={avatarsState.filterPrice.code === 7}
              onChange={(e) => priceFilterChange(e, 7)}
            />
          }
          label={<> $70 & Above</>}
        />
      </MenuItem>
    </div>
  );
};

export default PriceFilterComp;
