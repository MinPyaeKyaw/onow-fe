import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import { FinanceListPage, HistoryListPage, IncomeCreatePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <FinanceListPage />,
      },
      {
        path: "income",
        element: <IncomeCreatePage />,
      },
      {
        path: "history",
        element: <HistoryListPage />,
      },
    ],
  },
]);

export default router;
