import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo/index";
import NavItems from "./NavItems";
import {Slide as Menu} from "react-burger-menu";
import {useMediaQuery} from "react-responsive";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `};
`;

const LogoContainer = styled.div``;

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
