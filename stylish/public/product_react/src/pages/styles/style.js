import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root::-webkit-scrollbar {
  width: 0px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Sans TC";
  list-style: none;
}
`;

export default GlobalStyles;

export const MEDIA_QUERY_MD = "@media screen and (max-width: 1279px)";
export const MEDIA_QUERY_SM = "@media screen and (max-width: 479px)";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  flex: 1;
`;
