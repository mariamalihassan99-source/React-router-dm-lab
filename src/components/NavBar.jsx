import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
      <h2>Grocery Management</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/ProductDetails">Product Details</Link>
        <Link to="/products">Products</Link>
        <Link to="/new-product">New Products</Link>
      </div>
    </nav>
  );
}

export default NavBar;