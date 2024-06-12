import { Box, NavLink, Stack, Text } from "@mantine/core";
import menu from "../../configs/menu";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  onClose?: () => void;
}

export function Sidebar({ onClose }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickNav = (r: string) => {
    navigate(r);
    onClose && onClose();
  };

  return (
    <Stack
      h="100vh"
      w={250}
      bg="white"
      gap={0}
      align="flex-start"
      justify="flex-start"
    >
      <Box bg="blue" w="100%" py="lg" px="md">
        <Text c="white" fz="xl" fw="bold">
          ONOW Ascent
        </Text>
      </Box>
      <Box w="100%">
        {menu.map((m: MenuType) => (
          <NavLink
            key={m.id}
            onClick={() => handleClickNav(m.route)}
            label={m.name}
            leftSection={m.icon}
            active={m.route === location.pathname}
          />
        ))}
      </Box>
    </Stack>
  );
}
