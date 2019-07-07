import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/userActions";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  ButtonGroup
} from "reactstrap";
const Header = props => {
  const logoutuser = () => {
    props.logoutUser();
  };
  const usermenu = (
    <Nav className="ml-auto" navbar>
      <ButtonGroup>
        <NavItem>
          <Link
            to="/Signin"
            className="btn btn-link"
            style={{ color: "white" }}
          >
            <i className="fa fa-user-plus" />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Login" className="btn btn-link" style={{ color: "white" }}>
            <i className="fas fa-sign-in-alt" />
          </Link>
        </NavItem>
        {/* <NavItem>
       <Scocial/>
        </NavItem> */}
      </ButtonGroup>
    </Nav>
  );
  const menuuser = (
    <Nav className="ml-auto" navbar>
      <NavItem style={{ color: "white" }}>
        <Link to={`/Dashboar/${props.user.user.id}`} style={{ color: "white" }}>
          ({props.user.user.fullName}){" "}
        </Link>

        <Link
          className="btn btn-link"
          style={{ color: "white" }}
          onClick={logoutuser.bind(null)}
          to="/Login"
        >
          {" "}
          Logout
        </Link>
      </NavItem>
    </Nav>
  );

  return (
    <Navbar style={{ background: "#009688" }} expand="md">
      <NavbarBrand href="/" style={{ color: "white" }}>
        Home
      </NavbarBrand>
     
      <NavbarBrand href="/ListPost" style={{ color: "white" }}>
        ListPost
      </NavbarBrand>
      {/* <NavbarBrand href="/Modal" style={{color:'white'}}>Modal</NavbarBrand> */}
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          <NavItem />
        </Nav>

        {props.user.isAuthenticated ? menuuser : usermenu}
      </Collapse>
    </Navbar>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
