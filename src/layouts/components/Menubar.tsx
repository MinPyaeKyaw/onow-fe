import { ActionIcon, Box, Drawer } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";
import { useDisclosure } from "@mantine/hooks";

export function Menubar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size={250}
        withCloseButton={false}
        padding={0}
      >
        <Sidebar onClose={close} />
      </Drawer>

      <Box w="100%" bg="white" p="md">
        <ActionIcon onClick={open} variant="light" aria-label="Settings">
          <IconMenu2 />
        </ActionIcon>
      </Box>
    </>
  );
}
