import { styled } from "styled-components";
import { MEDIA_QUERY_MD } from "../styles/style";

const black = "#313538";

export const DesktopFooter = styled.div`
  ${MEDIA_QUERY_MD} {
    margin-bottom: 60px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 115px;
  background-color: ${black};
  ${MEDIA_QUERY_MD} {
    height: 146px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* border: 1px solid white;/ */
  ${MEDIA_QUERY_MD} {
    gap: 13px;
    width: 296px;
    flex-direction: column;
  }
  ul {
    display: flex;
    color: #f5f5f5;
    font-size: 16px;
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      width: 90px;
      height: 84px;
      flex-direction: column;
      flex-wrap: wrap;
    }
    li {
      width: 134px;
      height: 22px;
      text-align: center;
      list-style: none;
      color: #d3d3d3;
      border-right: 1px solid #828282;
      ${MEDIA_QUERY_MD} {
        width: 120px;
        margin-bottom: 8px;
        text-align: start;
        border: none;
        &:nth-child(3) {
          margin-bottom: 0;
        }
      }

      &:last-child {
        border: none;
      }
    }
  }
`;

export const FooterNavContainer = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    margin-top: 20px;
  }
`;

export const FooterLogos = styled.div`
  display: flex;
  padding-top: 6px;
  margin-left: 101px;
`;

export const FooterLogo = styled.img`
  margin-right: 30px;
  width: 50px;
  height: 50px;
  ${MEDIA_QUERY_MD} {
    margin-right: 14px;
    width: 20px;
    height: 20px;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 12px;
  color: #828282;
`;
