// import { useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-28 p-2"
      alt="Food Villa"
      src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
    />
  </a>
);

const Header = () => {

  // const {user} = useContext(UserContext)
  const cartItems=useSelector(store=>store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to = "/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to = "/instamart">Instamart</Link>
          </li>
          <li className="px-2" >
            <Link to="/cart" data-testid="cart">Cart-{cartItems.length} items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
