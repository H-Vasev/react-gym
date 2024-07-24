import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Training, { loader as loadVideos, action as actionVideo } from "./components/Training";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/training", element: <Training />, loader: loadVideos, action: actionVideo },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
