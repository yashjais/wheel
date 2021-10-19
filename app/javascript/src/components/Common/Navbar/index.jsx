import React from "react";

import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import { NAV_LINKS } from "./constants";

const NavBar = () => (
  <Sidebar
    isCollapsed
    navLinks={NAV_LINKS}
    profileInfo={{
      name: "Kieran Miller",
      email: "kieranmiller@gmail.com",
      imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
      dropdownProps: [
        {
          label: "Edit"
        },
        {
          label: "Logout"
        }
      ]
    }}
  />
);

export default withRouter(NavBar);
