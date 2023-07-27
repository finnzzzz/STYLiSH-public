import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";

import useGetQuantity from "./hooks/useGetQuantity";

import GlobalStyles from "./pages/styles/style";

import { AppContainer } from "./pages/styles/style";
import { Header } from "./pages/Header/Header";
import { Product } from "./pages/Product/Product";
import { Footer } from "./pages/Footer/Footer";
import { Wrapper } from "./pages/styles/style";
import { Cart } from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import ThankPage from "./pages/ThankPage/ThankPage";

function App() {
  const { totalQuantity, setTotalQuantity } = useGetQuantity(0);
  const [accessToken, setAccessToken] = useState();
  const [orderNumber, setOrderNumber] = useState();

  return (
    <>
      <AppContainer>
        <GlobalStyles />
        <Wrapper>
          <Header totalQuantity={totalQuantity} />
          <Routes>
            <Route path="/" element={<Navigate to="/home.html" replace />} />
            <Route
              path="/product"
              element={
                <Product
                  totalQuantity={totalQuantity}
                  setTotalQuantity={setTotalQuantity}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  setTotalQuantity={setTotalQuantity}
                  accessToken={accessToken}
                  setOrderNumber={setOrderNumber}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile setAccessToken={setAccessToken} />}
            />
            <Route
              path="/thankyoupage"
              element={<ThankPage orderNumber={orderNumber} />}
            />
          </Routes>
        </Wrapper>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
