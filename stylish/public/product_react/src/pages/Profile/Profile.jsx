import React, { useEffect, useState } from "react";
import getData from "../../API/getData";

import member from "../../public/images/profiledefault.png";

import {
  Container,
  ProfileContainer,
  ProfileImg,
  ProfileInfo,
  LoginBtn,
  LogoutBtn,
  ButtonContainer,
} from "./Profile.style";

const Profile = ({ setAccessToken }) => {
  const [token, setToken] = useState();
  const [getDataformAPI, setGetDataformAPI] = useState();
  const [getPicture, setGetPicture] = useState();

  useEffect(() => {
    // 初始化 Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1613329775839762",
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });

      console.log("[fbAsyncInit] after window.FB.init");

      // 獲取登入狀態
      window.FB.getLoginStatus(function (res) {
        console.log("[refreshLoginStatus]", res);
        if (res.status === "connected") {
          const token = res?.authResponse?.accessToken;
          console.log(token);
          setToken(token);
        }
      });

      window.FB.AppEvents.logPageView();
    };

    // 載入 Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleLogin = () => {
    window.FB.login(
      function (res) {
        console.log("handleLogin", res);
        const token = res?.authResponse?.accessToken;
        setToken(token);
        if (res.status === "connected") {
          window.FB.api(
            "/me",
            "GET",
            { fields: "id,name,picture,email" },
            function (res) {
              console.log("loginBTN", res);
              setGetPicture(res.picture);
            }
          );
          const body = {
            provider: "facebook",
            access_token: token,
          };

          getData
            .getProfileInfo(body)
            .then(res => {
              console.log("getdatafromAPI", res);
              setGetDataformAPI(res);
              console.log(res?.data?.access_token || "fail");
              const token = res?.data?.access_token;
              setAccessToken(token);
            })
            .catch(err => console.log(err));
        }
      },
      { scope: "public_profile,email" }
    );
  };

  const handleLogout = () => {
    window.FB.logout(function (res) {
      console.log("handleLogout", res);
      setToken("");
      setGetDataformAPI({});
      setGetPicture("");
    });
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileImg src={token ? getPicture?.data?.url : member} />
        <ProfileInfo>
          <span>
            Name：{token ? getDataformAPI?.data?.user?.name : "未登入"}
          </span>
          <span>
            Email：{token ? getDataformAPI?.data?.user?.email : "未登入"}
          </span>
        </ProfileInfo>
      </ProfileContainer>
      <ButtonContainer>
        <LoginBtn onClick={handleLogin} $active={token ? false : true}>
          Login
        </LoginBtn>
        <LogoutBtn onClick={handleLogout} $active={token ? true : false}>
          Logout
        </LogoutBtn>
      </ButtonContainer>
    </Container>
  );
};

export default Profile;
