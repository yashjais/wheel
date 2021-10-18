import React from "react";

import { Dashboard, UserCircle, Settings } from "neetoicons";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

const NavBar = () => (
  <Sidebar
    isCollapsed={true}
    navLinks={[
      {
        label: "Notes",
        to: "/notes",
        icon: () => <Dashboard color="#1e1e20" size={24} />
      },
      {
        label: "Contacts",
        to: "/contacts",
        icon: () => <UserCircle color="#1e1e20" size={24} />
      },
      {
        label: "Settings",
        to: "/my/profile",
        icon: () => <Settings color="#1e1e20" size={24} />
      }
    ]}
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
