import { Link } from "react-router";

function Navbar() {
    return (
        <div>
            <Link to="/Shop">SHOP  </Link>
            <Link to="/Home">HOME  </Link>
            <Link to="/Cart">CART  </Link>
        </div>
    );
}
export default Navbar;
