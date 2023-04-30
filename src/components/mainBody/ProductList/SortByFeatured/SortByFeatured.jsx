import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { SortAvatarList } from "../../../../redux";
export default function SortByFeatured() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(SortAvatarList(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">Sort by featured</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Sort by featured"
        autoWidth
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>Price: Low to High</MenuItem>
        <MenuItem value={2}>Price: High to Low</MenuItem>
        <MenuItem disabled>Customer Review</MenuItem>
        <MenuItem value={3}>New</MenuItem>
        <MenuItem value={4}>Polygon:Low to High</MenuItem>
        <MenuItem value={5}>Polygon:High to Low</MenuItem>
      </Select>
    </FormControl>
  );
}
