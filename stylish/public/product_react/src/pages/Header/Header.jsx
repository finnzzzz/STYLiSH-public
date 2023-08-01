import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../public/images/logo.png';
import SearchL from '../../public/images/search.png';
import CartL from '../../public/images/cart.png';
import MemberL from '../../public/images/member.png';

import {
  HeaderArea,
  HeaderContent,
  HeaderContainer,
  HeaderLogo,
  CartContainer,
  CartIMG,
  CartAmount,
  MemberIMG,
  CartAndMember,
  MemberContainer,
  DivingLine,
  MobileSearchIMG,
} from './Header.style';

export const Header = ({ totalQuantity }) => {
  return (
    <HeaderContent>
      <HeaderArea>
        <HeaderContainer>
          <a href='/home.html'>
            <HeaderLogo src={Logo}></HeaderLogo>
          </a>
          <MobileSearchIMG src={SearchL}></MobileSearchIMG>
        </HeaderContainer>
        <HeaderContainer>
          <CartAndMember>
            <CartContainer>
              <CartAmount>{totalQuantity}</CartAmount>
              <Link to='/cart'>
                <CartIMG src={CartL} />
              </Link>
              <span>購物車</span>
            </CartContainer>
            <DivingLine></DivingLine>
            <MemberContainer>
              <Link to='/profile'>
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
