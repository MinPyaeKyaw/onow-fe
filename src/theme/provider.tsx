import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "../routes/routes";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

function ThemeProvider() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
      <Notifications />
    </MantineProvider>
  );
}

export default ThemeProvider;
