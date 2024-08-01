import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import ExplorePage from "../pages/Explore";
import Previewpage from "../pages/Previewpage";
import VisualEditor from "../pages/VisualEditor";
import CodeEditor from "../pages/CodeEditor";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/preview",
        element: <Previewpage />,
      },
      {
        path: "/visual-editor",
        element: <VisualEditor />,
      },
      {
        path: "/code-editor",
        element: <CodeEditor />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
