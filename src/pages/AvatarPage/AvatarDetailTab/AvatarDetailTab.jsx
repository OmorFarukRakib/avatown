import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./AvatarDetailTab.module.css";
import Rating from "@mui/material/Rating";
import clsx from "clsx";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ avatarDetails }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Features" {...a11yProps(0)} />
          <Tab label="Descriptions" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={clsx(styles["features-wrapper"])}>
          <div className={clsx(styles["features-title"])}>
            <div> Name</div>
            <div> Rating</div>
            <div> Likes</div>
            <div> Content</div>
            <div> Price </div>
            <div> Polygon </div>
            <div> Gender</div>
            <div>Auto Upload Support</div>
          </div>
          <div className={clsx(styles["features-title"])}>
            <div> {avatarDetails.title}</div>
            <div>
              <Rating
                // style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.11)" }}
                name="half-rating-read"
                value={parseFloat(avatarDetails.rating)}
                // value={3}
                // defaultValue={avatarDetails?.rating?.}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
            <div> {avatarDetails.likes}</div>
            <div> {avatarDetails.contents}</div>
            <div> $ {avatarDetails.price?.toFixed(2)}</div>
            <div> {avatarDetails.polygon}</div>
            <div> {avatarDetails.gender}</div>
            <div>
              {avatarDetails.supported === true ? "Supported" : "Not Supported"}
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        volutpat, quam id maximus congue, libero ipsum faucibus ex, eu tincidunt
        lorem velit a sapien. In hac habitasse platea dictumst. Aenean eget est
        non est accumsan vulputate a nec lacus. Donec malesuada nulla eu purus
        ultricies mollis. Fusce auctor, purus ac malesuada vulputate, dolor
        tortor vulputate lacus, vel bibendum metus mauris eget sapien. Sed
        euismod arcu sit amet metus euismod malesuada. Fusce laoreet urna et
        turpis maximus, vel eleifend metus lobortis. Quisque at ante eu ipsum
        consequat varius sit amet sit amet urna. In hac habitasse Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Phasellus volutpat, quam id
        maximus congue, libero ipsum faucibus ex, eu tincidunt lorem velit a
        sapien. In hac habitasse platea dictumst. Aenean eget est non est
        accumsan vulputate a nec lacus. Donec malesuada nulla eu purus ultricies
        mollis. Fusce auctor, purus ac malesuada vulputate, dolor tortor
        vulputate lacus, vel bibendum metus mauris eget sapien. Sed euismod arcu
        sit amet metus euismod malesuada. Fusce laoreet urna et turpis maximus,
        vel eleifend metus lobortis. Quisque at ante eu ipsum consequat varius
        sit amet sit amet urna. In hac habitasseLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus volutpat, quam id maximus congue,
        libero ipsum faucibus ex, eu tincidunt lorem velit a sapien. In hac
        habitasse platea dictumst. Aenean eget est non est accumsan vulputate a
        nec lacus. Donec malesuada nulla eu purus ultricies mollis. Fusce
        auctor, purus ac malesuada vulputate, dolor tortor vulputate lacus, vel
        bibendum metus mauris eget sapien. Sed euismod arcu sit amet metus
        euismod malesuada. Fusce laoreet urna et turpis maximus, vel eleifend
        metus lobortis. Quisque at ante eu ipsum consequat varius sit amet sit
        amet urna. In hac habitasseLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus volutpat, quam id maximus congue, libero
        ipsum faucibus ex, eu tincidunt lorem velit a sapien. In hac habitasse
        platea dictumst. Aenean eget est non est accumsan vulputate a nec lacus.
        Donec malesuada nulla eu purus ultricies mollis. Fusce auctor, purus ac
        malesuada vulputate, dolor tortor vulputate lacus, vel bibendum metus
        mauris eget sapien. Sed euismod arcu sit amet metus euismod malesuada.
        Fusce laoreet urna et turpis maximus, vel eleifend metus lobortis.
        Quisque at ante eu ipsum consequat varius sit amet sit amet urna. In hac
        habitasse
      </TabPanel>
      <TabPanel value={value} index={2}>
        No Reviews yet
      </TabPanel>
    </Box>
  );
}

BasicTabs.propTypes = {
  avatarDetails: PropTypes.shape({
    title: PropTypes.string,
    rating: PropTypes.number,
    likes: PropTypes.number,
    contents: PropTypes.string,
    price: PropTypes.number,
    polygon: PropTypes.number,
    gender: PropTypes.string,
    supported: PropTypes.bool,
  }),
};
