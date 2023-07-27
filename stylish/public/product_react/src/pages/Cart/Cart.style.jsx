import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from "../styles/style";

const fontBlack = "#3f3a3a";

// ----------------------------------------
// ----------------------------cart section

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 1160px;
  height: 100%;
  margin-top: 51px;
  ${MEDIA_QUERY_MD} {
    margin-top: 20px;
    margin-left: 24px;
    margin-right: 24px;
    gap: 20px;
  }
`;

export const CartSection = styled.div``;

export const CartTableHeader = styled.div`
  height: 34px;
  ${MEDIA_QUERY_MD} {
    height: 19px;
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    li {
      font-size: 16px;
      color: ${fontBlack};
      line-height: 19px;
      text-align: center;
      width: 190px;
      &:nth-child(2) {
        width: 193px;
      }
      &:first-child {
        font-weight: 700;
        font-size: 16px;
        text-align: start;
        width: 460px;
        ${MEDIA_QUERY_MD} {
          width: 100%;
        }
      }
      ${MEDIA_QUERY_MD} {
        &:not(:first-child) {
          display: none;
        }
      }
    }
  }
`;

export const CartTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  border: 1px solid grey;
  padding: 40px 30px;
  ${MEDIA_QUERY_MD} {
    padding: 0px;
    border: none;
    gap: 18px;
  }
`;

export const CartList = styled.div`
  display: flex;
  width: 100%;
  height: 152px;
  ${MEDIA_QUERY_MD} {
    height: 100%;
    border-top: 1px solid black;
    /* padding-top: 20px; */
    gap: 20px;
    flex-direction: column;
  }
`;

export const CartListLeft = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 427px;
  height: 100%;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin-top: 20px;
  }
`;

export const CartListRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  ${MEDIA_QUERY_MD} {
    padding-left: 12px;
  }
  p {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    display: inline-block;
    width: 190px;
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
      width: 100px;
    }
  }
`;

export const CartListImg = styled.img`
  display: block;
  width: 114px;
  height: 152px;
  margin-right: 16px;
  ${MEDIA_QUERY_MD} {
    margin-right: 10px;
  }
`;

export const CartListDetails = styled.div`
  p {
    font-size: 16px;
    line-height: 19px;
    &:nth-child(1) {
      margin-bottom: 18px;
      ${MEDIA_QUERY_MD} {
        margin-bottom: 20px;
      }
    }
    &:nth-child(2) {
      margin-bottom: 22px;
      ${MEDIA_QUERY_MD} {
        margin-bottom: 24px;
      }
    }
    &:nth-child(3) {
      margin-bottom: 10px;
      ${MEDIA_QUERY_MD} {
        margin-bottom: 12px;
      }
    }
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const QuantityContainer = styled.div`
  ${MEDIA_QUERY_MD} {
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  width: 190px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
  span {
    display: none;
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
      display: block;
    }
  }
  select {
    width: 80px;
    height: 32px;
    border-radius: 8px;
    background: #f3f3f3;
    font-size: 14px;
    padding: 0px 12px;
    ${MEDIA_QUERY_MD} {
      height: 30px;
      padding: 0px 10px;
    }
    option {
    }
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 194px;
  gap: 18px;
  ${MEDIA_QUERY_MD} {
    padding-bottom: 7px;
    width: 100%;
  }
  span {
    display: none;
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
      display: block;
    }
  }
  p {
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const TotalContainer = styled.div`
  height: 100%;
  /* margin-right: -40px; */
`;

export const DeleteBtn = styled.img`
  position: absolute;
  top: 54px;
  right: 0px;
  width: 44px;
  ${MEDIA_QUERY_MD} {
    top: -173px;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 18px;
  ${MEDIA_QUERY_MD} {
    padding-bottom: 7px;
    width: 100%;
  }
  span {
    display: none;
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
      display: block;
    }
  }
  p {
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

// ---------------------------------------
//---------------------------order section
export const OrderSection = styled.div``;

export const OrderForm = styled.div`
  padding-top: 25px;
  width: 100%;
  border-top: 1px solid black;
  margin-bottom: 4px;
  ${MEDIA_QUERY_MD} {
    padding-top: 20px;
    margin-bottom: 0px;
  }
  ul {
    ${MEDIA_QUERY_MD} {
      width: 100%;
    }
    span {
      font-size: 16px;
      line-height: 19px;
      color: #8b572a;
      margin-left: 344px;
      display: inline-block;
      margin-top: 10px;
      margin-bottom: 30px;
      ${MEDIA_QUERY_MD} {
        font-size: 14px;
        line-height: 17px;
        margin-top: 6px;
        margin-left: 0px;
        margin-bottom: 20px;
      }
    }
    li {
      div {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        border: 1px solid #979797;
        border-radius: 8px;
        width: 576px;
        margin: 5px 0;
        padding: 0px 8px;
        &::placeholder {
          color: #d3d3d3;
        }
        ${MEDIA_QUERY_MD} {
          width: 100%;
        }
      }
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      &:nth-child(5) {
        margin-bottom: 27px;
        ${MEDIA_QUERY_MD} {
          margin-bottom: 19px;
        }
        ${MEDIA_QUERY_SM} {
          margin-bottom: 19px;
        }
      }
      &:first-child,
      &:last-child {
        margin-bottom: 0px;
      }
      ${MEDIA_QUERY_MD} {
        align-items: start;
        flex-direction: column;
        margin-bottom: 20px;
        width: 100%;
      }
      p {
        font-size: 16px;
        color: ${fontBlack};
        line-height: 32px;
        width: 120px;
        ${MEDIA_QUERY_MD} {
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 10px;
        }
      }
      input {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        border: 1px solid #979797;
        border-radius: 8px;
        width: 576px;
        padding: 0px 8px;
        &::placeholder {
          color: #d3d3d3;
        }
        ${MEDIA_QUERY_MD} {
          width: 100%;
        }
      }
      form {
        display: flex;
        align-items: center;
        input {
          width: 16px;
          margin-right: 8px;
          ${MEDIA_QUERY_MD} {
            margin-right: 6px;
          }
        }
        label {
          font-size: 16px;
          line-height: 26px;
          margin-right: 32px;
          &:last-child {
            margin-right: 0px;
          }
          ${MEDIA_QUERY_MD} {
            margin-right: 26px;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

// ----------------------------------------
// -------------------------payemnt section

export const PaymentSection = styled.div`
  margin-top: -7px;
  ${MEDIA_QUERY_MD} {
    margin-top: -7px;
  }
`;

export const PaymentForm = styled.div`
  ul {
    li {
      &:first-child {
        margin-bottom: 30px;
        ${MEDIA_QUERY_MD} {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

// ------------------------------------------
// -----------------------------count section
export const CountSection = styled.div`
  margin-top: -14px;
  ${MEDIA_QUERY_MD} {
    margin-top: 4px;
  }
`;

export const CountContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  margin-bottom: 148px;
  ${MEDIA_QUERY_MD} {
    margin-bottom: 28px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  margin-bottom: 20px;
  span {
    display: flex;
    align-items: center;
    p {
      font-size: 16px;
      line-height: 19px;
      &:last-child {
        font-size: 30px;
        line-height: 36px;
        margin-left: 8px;
      }
    }
  }
  p {
    color: ${fontBlack};
  }
`;

export const Line = styled.div`
  width: 240px;
  border-top: 1px solid black;
  margin-bottom: 20px;
`;

export const CheckoutBtn = styled.button`
  margin-top: 30px;
  text-align: center;
  padding-top: 17px;
  padding-bottom: 17px;
  width: 240px;
  background: black;
  color: white;
  letter-spacing: 4px;
  font-size: 20px;
  ${MEDIA_QUERY_MD} {
    /* height: 44px; */
    padding-top: 7px;
    padding-bottom: 7px;
    letter-spacing: 3.2px;
    font-size: 16px;
    line-height: 30px;
    margin-top: 16px;
    width: 100%;
  }
`;
