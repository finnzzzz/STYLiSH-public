import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  margin-top: 50px;
  width: 500px;
  height: 220px;
  display: flex;
  gap: 50px;
  align-items: center;
  box-shadow: 1px 1px 7px 1px #c1c1c1;
  border-radius: 20px;
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ProfileImg = styled.img`
  margin-left: 70px;
  width: 130px;
  height: 130px;
  border: 1px solid grey;
  border-radius: 100%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 30px;
`;

const Button = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid grey;
  cursor: pointer;
`;

export const LoginBtn = styled(Button)`
  background: #d5e1ff;
  border: 1px solid #a2bbfb;
  box-shadow: 1px 1px 7px 1px #d5e1ff;
  display: ${props => (props.$active ? "blcok" : "none")};
`;

export const LogoutBtn = styled(Button)`
  background: #ffd0d0;
  border: 1px solid #fca5a5;
  box-shadow: 1px 1px 7px 1px #ffd0d0;
  display: ${props => (props.$active ? "blcok" : "none")};
`;
