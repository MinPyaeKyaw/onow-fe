import { Box, Group, ScrollArea } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Sidebar } from "./components/Sidebar";
import { Menubar } from "./components/Menubar";

function RootLayout() {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Group bg="gray.0" w="100%" gap={0} align="flex-start">
      {matches ? <Sidebar /> : <Menubar />}
      <Box w={matches ? "calc(100vw - 250px)" : "100vw"}>
        <ScrollArea h="100vh" p="md">
          <Box bg="white" w="100%">
            <Outlet />
          </Box>
        </ScrollArea>
      </Box>
    </Group>
  );
}

export default RootLayout;
