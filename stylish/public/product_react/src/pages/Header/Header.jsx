import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../public/images/logo.png";
import SearchL from "../../public/images/search.png";
import CartL from "../../public/images/cart.png";
import MemberL from "../../public/images/member.png";

import {
  HeaderArea,
  HeaderContent,
  HeaderContainer,
  HeaderLogo,
  CartContainer,
  CartIMG,
  Search,
  SearchInput,
  SearchIMG,
  CartAmount,
  MemberIMG,
  Nav,
  NavContainer,
  NavLink,
  CartAndMember,
  MemberContainer,
  DivingLine,
  MobileSearchIMG,
} from "./Header.style";

export const Header = ({ totalQuantity }) => {
  return (
    <HeaderContent>
      <HeaderArea>
        <HeaderContainer>
          <a href="/home.html">
            <HeaderLogo src={Logo}></HeaderLogo>
          </a>
          <MobileSearchIMG src={SearchL}></MobileSearchIMG>
          <Nav>
            <NavContainer>
              <NavLink>女裝</NavLink>
            </NavContainer>
            <NavContainer>
              <NavLink>男裝</NavLink>
            </NavContainer>
            <NavContainer>
              <NavLink>配件</NavLink>
            </NavContainer>
          </Nav>
        </HeaderContainer>
        <HeaderContainer>
          <Search>
            <SearchIMG src={SearchL}></SearchIMG>
            <SearchInput />
          </Search>
          <CartAndMember>
            <CartContainer>
              <CartAmount>{totalQuantity}</CartAmount>
              <Link to="/cart">
                <CartIMG src={CartL} />
              </Link>
              <span>購物車</span>
            </CartContainer>
            <DivingLine></DivingLine>
            <MemberContainer>
              <Link to="/profile">
                <MemberIMG src={MemberL} />
              </Link>
              <span>會員</span>
            </MemberContainer>
          </CartAndMember>
        </HeaderContainer>
      </HeaderArea>
    </HeaderContent>
  );
};
