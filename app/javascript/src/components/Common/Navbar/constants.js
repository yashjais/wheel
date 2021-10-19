import React from "react";
import { Dashboard, UserCircle, Settings } from "neetoicons";

export const NAV_LINKS = [
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
];
