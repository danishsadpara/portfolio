import {
  UserIcon,
  InformationCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const AppbarSchema = [
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
