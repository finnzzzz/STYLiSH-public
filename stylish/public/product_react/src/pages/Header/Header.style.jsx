import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../styles/style";

const black = "#313538";
const brown = "#8b572a";

export const HeaderContent = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const HeaderArea = styled.div`
  display: flex;
  width: 100%;
  padding: 26px 60px;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 40px solid ${black};
  ${MEDIA_QUERY_MD} {
    padding: 0px;
    height: 102px;
    flex-direction: column;
    align-items: center;
    border-bottom: 50px solid ${black};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderLogo = styled.img`
  height: 48px;
  margin-right: 57px;
  vertical-align: bottom;
  ${MEDIA_QUERY_MD} {
    margin-top: 14px;
    margin-bottom: 14px;
    height: 24px;
    margin-right: 0px;
  }
`;

export const Nav = styled.div`
  padding-top: 14px;
  display: flex;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    justify-content: space-around;
  }
`;

export const NavContainer = styled.div`
  border-left: 1px solid black;
  &:first-child {
    border: none;
  }
  ${MEDIA_QUERY_MD} {
    width: 100%;
    border-left: 1px solid grey;
  }
`;

export const NavLink = styled.span`
  display: inline-block;
  width: 150px;
  line-height: 20px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 30px;
  padding-left: 30px;
  padding-bottom: 3px;
  border-width: 0.08em;
  user-select: none;
  cursor: pointer;
  color: black;
  ${MEDIA_QUERY_MD} {
    letter-spacing: 0px;
    font-size: 16px;
    width: 100%;
    padding-left: 0px;
    color: white;
  }
`;

export const Search = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 214px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 20px;
  color: ${brown};
  padding: 10px 20px;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

export const MobileSearchIMG = styled.img`
  display: none;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    position: absolute;
    top: 6px;
    right: 6px;
    height: 40px;
    width: 40px;
    display: block;
  }
`;

export const SearchIMG = styled.img`
  position: absolute;
  right: 10px;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

export const CartAndMember = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    display: flex;
    justify-content: space-around;
    background: ${black};
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 60px;
  }
  span {
    display: none;
    ${MEDIA_QUERY_MD} {
      display: inline;
      color: white;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CartIMG = styled.img`
  display: block;
  margin-right: 42px;
  margin-left: 42px;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    filter: invert(100%);
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const CartAmount = styled.p`
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 100%;
  color: white;
  right: 40px;
  bottom: 5px;
  text-align: center;
  background-color: ${brown};
  z-index: 2;
  ${MEDIA_QUERY_MD} {
    bottom: 0px;
    left: 20px;
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MemberIMG = styled.img`
  display: block;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    filter: invert(100%);
  }
`;

export const DivingLine = styled.span`
  display: inline-block;
  height: 20px;

  border-right: 1px solid white;
`;
