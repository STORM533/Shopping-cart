import { Link } from "react-router";
function Navbar() {
    return (
        <div>
            <Link to ="shoppage">SHOP  </Link>

            <Link to ="Homepage">HOME  </Link>

            <Link to ="Cartpage">CART  </Link>
        </div>

    );
}
export default Navbar;