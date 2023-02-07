import { BrowserRouter, useRoutes } from "react-router-dom";
import HomeScreen from "./Pages/Home/index";
const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <HomeScreen /> }]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
