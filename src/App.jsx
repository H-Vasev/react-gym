import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";

import SelectTraining from "./pages/SelectTraining";
import Training from "./pages/Training";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "exercise",
        element: <SelectTraining />,
      },
      { path: "start", element: <Training /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
