import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import styles from "./SideNav.module.css";
import clsx from "clsx";
import { BiCategory, BiBookContent } from "react-icons/bi";
import { MdOutlinePriceChange, MdOutlineContactSupport } from "react-icons/md";
import { FaMale, FaFemale } from "react-icons/fa";
import { BiPolygon } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { GenderFilter } from "../../../redux";

import PriceFilterComp from "./PriceFilter/PriceFilter";
import PolygonFilterComp from "./PolygonFilter/PolygonFilter";
import AutoUploadSupportFilterComp from "./AutoUploadSupport/AutoUploadSupport";
import ContentFilterComp from "./ContentFilter/ContentFilter";

const SideNav = () => {
  const dispatch = useDispatch();
  const { collapseSidebar, collapsed } = useProSidebar();

  const avatarsState = useSelector((state) => state.avatars);
  return (
    <div className={clsx(styles["sidebar-wrapper"])}>
      <Sidebar
        rootStyles={{
          width: "20vw",
          color: "rgb(96, 116, 137)",
        }}
      >
        <div className={clsx(styles["sidebar-collapse-btn-wrapper"])}>
          <main>
            <div onClick={() => collapseSidebar()}>
              <div className={clsx(styles["sidebar-collapse-btn"])}>
                {collapsed === false ? (
                  <BsArrowLeftCircle />
                ) : (
                  <BsArrowRightCircle />
                )}
              </div>
            </div>
          </main>
        </div>
        <Menu>
          <>
            <SubMenu label="Catagory" icon={<BiCategory />}>
              <SubMenu label="Full Avatar">
                <MenuItem
                  icon={<FaMale />}
                  onClick={() => dispatch(GenderFilter(2))}
                  rootStyles={{
                    backgroundColor: `${
                      avatarsState.filterGender.code === 2 ? "#C5E4FF" : null
                    }`,
                  }}
                >
                  {" "}
                  Male{" "}
                </MenuItem>
                <MenuItem
                  icon={<FaFemale />}
                  active={avatarsState.filterGender.code === 1}
                  onClick={() => dispatch(GenderFilter(1))}
                  rootStyles={{
                    backgroundColor: `${
                      avatarsState.filterGender.code === 1 ? "#C5E4FF" : null
                    }`,
                  }}
                >
                  {" "}
                  Female{" "}
                </MenuItem>
                <MenuItem
                  icon={<ImUsers />}
                  active={avatarsState.filterGender.code === 0}
                  onClick={() => dispatch(GenderFilter(0))}
                  rootStyles={{
                    backgroundColor: `${
                      avatarsState.filterGender.code === 0 ? "#C5E4FF" : null
                    }`,
                  }}
                >
                  {" "}
                  All{" "}
                </MenuItem>
              </SubMenu>
              <MenuItem> Others </MenuItem>
            </SubMenu>
          </>
          <>
            <SubMenu label="Contents" icon={<BiBookContent />}>
              <ContentFilterComp />
            </SubMenu>
          </>
          <>
            <SubMenu label="Price" icon={<MdOutlinePriceChange />}>
              <PriceFilterComp />
            </SubMenu>
          </>
          <>
            <SubMenu label="Polygon amount" icon={<BiPolygon />}>
              <PolygonFilterComp />
            </SubMenu>
          </>
          <>
            <SubMenu
              label="Auto upload support"
              icon={<MdOutlineContactSupport />}
            >
              <AutoUploadSupportFilterComp />
            </SubMenu>
          </>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideNav;
