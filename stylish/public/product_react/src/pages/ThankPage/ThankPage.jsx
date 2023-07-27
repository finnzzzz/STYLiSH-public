import React from "react";

import { Container } from "./ThankPage.style";

const ThankPage = ({ orderNumber }) => {
  return (
    <Container>
      <h2>Thank you for purchasing our products！🥳</h2>
      <h3>order number：{orderNumber}</h3>
    </Container>
  );
};

export default ThankPage;
