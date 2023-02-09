import { BrowserRouter, useRoutes } from "react-router-dom";
import HomeScreen from "./Pages/Home/index";
const AppRoutes = () => {
  const routes = useRoutes([{ path: "/", element: <HomeScreen /> }]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
