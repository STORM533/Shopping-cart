import Cartpage from "./components/Cartpage";
import Homepage from "./components/Homepage";
import Shoppage from "./components/Shoppage";
import ErrorPage from "./components/ErrorPage";
import App from "./components/App";
const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "Cart",
        element: <Cartpage />,
      },
      {
        path: "Shop",
        element: <Shoppage />,
      },
    ]
  }
  
];
export default routes;
