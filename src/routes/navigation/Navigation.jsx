import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logout from "../../components/Logout/Logout";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import CartIcon from "../../components/cart/cart-icon/CartIcon";
import CartDropdown from "../../components/cart/cartDropdown/CartDropdown";

const Navigation = () => {

  const { userState } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);



  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Navbar.Brand as={NavLink} to="/" className="ms-3">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
            <NavDropdown title={userState.infoUser.firstname}>
              <NavDropdown.Item as={NavLink} to='/user/myprofile'>My profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            { userState.authStatus ?  <Logout /> : <Nav.Link as={NavLink} to="/auth">
              Login
            </Nav.Link>
            }
            <CartIcon />
          </Nav>
          {isCartOpen && <CartDropdown />}

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
