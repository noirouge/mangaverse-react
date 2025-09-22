import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import MangaPage from "../pages/MangaPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "library",
    children: [
      { index: true, Component: LibraryPage },
      { path: ":id", Component: MangaPage, },
    ],
  },
]);

export default router;
