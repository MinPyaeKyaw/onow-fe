import {
  IconCoin,
  IconHistory,
  IconSquareRoundedPlus,
} from "@tabler/icons-react";

const menu: MenuType[] = [
  {
    id: "1",
    route: "/",
    name: "Your Finance",
    icon: <IconCoin size="1rem" stroke={1.5} />,
  },
  {
    id: "2",
    route: "/income",
    name: "Set Up Income",
    icon: <IconSquareRoundedPlus size="1rem" stroke={1.5} />,
  },
  {
    id: "3",
    route: "/history",
    name: "History",
    icon: <IconHistory size="1rem" stroke={1.5} />,
  },
];

export default menu;
