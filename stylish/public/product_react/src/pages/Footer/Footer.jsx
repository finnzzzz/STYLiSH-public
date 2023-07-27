import React from "react";
import Line from "../../public/images/line.png";
import Twitter from "../../public/images/twitter.png";
import Facebook from "../../public/images/facebook.png";

import {
  DesktopFooter,
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterLogo,
  FooterLogos,
  FooterNavContainer,
} from "./Footer.style";

export const Footer = () => {
  return (
    <DesktopFooter>
      <FooterContent>
        <FooterContainer>
          <FooterNavContainer>
            <ul>
              <li>關於 STYLiSH</li>
              <li>服務條款</li>
              <li>隱私政策</li>
              <li>聯絡我們</li>
              <li>FAQ</li>
            </ul>
            <FooterLogos>
              <FooterLogo src={Line}></FooterLogo>
              <FooterLogo src={Twitter}></FooterLogo>
              <FooterLogo src={Facebook}></FooterLogo>
            </FooterLogos>
          </FooterNavContainer>
          <FooterCopyright>© 2018. All rights reserved.</FooterCopyright>
        </FooterContainer>
      </FooterContent>
    </DesktopFooter>
  );
};
