import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";

import SelectTraining from "./pages/SelectTraining";
import ConfigureExercises from "./pages/ConfigureExercises";
import LogIn from "./pages/LogIn";

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
      {path: "login", element: <LogIn/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
