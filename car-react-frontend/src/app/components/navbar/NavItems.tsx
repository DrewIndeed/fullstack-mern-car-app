import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive/index";
import menuStyles from "./menuStyles";

/* nav bar text content */
const NAV_CONTENT: string[] = ["Home", "Cars", "Service", "Contact Us"];

const ListContainer = styled.ul`
  ${tw`
      flex
      list-none
    `}
`;

const NavItem = styled.li<{ menu?: boolean }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
`}

  ${({ menu }) =>
    menu &&
    css`
      ${tw` 
      text-white 
      text-xl 
      mb-3
      focus:text-white`};
    `};
`;

export default function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          {NAV_CONTENT.map((content) => (
            <NavItem menu>
              <a href="/">{content}</a>
            </NavItem>
          ))}
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      {NAV_CONTENT.map((content) => (
        <NavItem>
          <a href="/">{content}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
}
