import React from "react";

// hero icons imports
import {
  UserIcon,
  InformationCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const dropdownData = [
  {
    title: "Profile",
    route: "/profile",
    icon: <UserIcon />,
  },
  {
    title: "Info",
    route: "/info",
    icon: <InformationCircleIcon />,
  },
  {
    title: "Logout",
    route: "/logout",
    icon: <ArrowRightStartOnRectangleIcon />,
  },
];
