import React from "react";
import "../../style/logo.css";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            width="auto"
            height="75vh"
            src={require("../../images/ChicnChocLogo.png")}
            alt="logo"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact us
          </NavLink>
          <LoginButton />
          <LogoutButton />
          <Avatar alt="avatar" src={user.picture} />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
