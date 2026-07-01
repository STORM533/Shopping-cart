import Cartpage from "./components/Cartpage";
import Homepage from "./components/Homepage";
import Shoppage from "./components/Shoppage";
import ErrorPage from "./components/ErrorPage";
const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Cart",
    element: <Cartpage />,
  },
  {
    path: "Shop",
    element: <Shoppage />,
  },
];
export default routes;
