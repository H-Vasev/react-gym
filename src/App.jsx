import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";

import SelectTraining from "./pages/SelectTraining";
import ConfigureExercises from "./pages/ConfigureExercises";

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
      { path: "start", element: <ConfigureExercises /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
