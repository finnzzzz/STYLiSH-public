import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../styles/style";

export const ProductContainer = styled.div`
  margin: auto;
  margin-top: 65px;
  width: 960px;
  margin-bottom: 50px;
  ${MEDIA_QUERY_MD} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0px;
  }
`;

export const ProductTop = styled.div`
  display: flex;
  gap: 40px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    gap: 17px;
    display: flex;
    flex-direction: column;
  }
`;

export const ProductMainIMG = styled.img`
  display: block;
  width: 560px;
  height: 100%;
  ${MEDIA_QUERY_MD} {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: block;
  width: 560px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    padding: 0 24px;
  }
`;

export const ProductName = styled.p`
  font-size: 32px;
  line-height: 38px;
  color: #3f3a3a;
  margin-bottom: 16px;
  letter-spacing: 6.4px;
  ${MEDIA_QUERY_MD} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }
`;

export const ProductNumber = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #bababa;
  letter-spacing: 4px;
  margin-bottom: 40px;
  ${MEDIA_QUERY_MD} {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 3.2px;
    margin-bottom: 20px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 30px;
  line-height: 36px;
  color: #3f3a3a;
  margin-bottom: 20px;
  ${MEDIA_QUERY_MD} {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
`;

export const DivingLine = styled.div`
  border-top: 1px solid #3f3a3a;
  width: 100%;
  margin-bottom: 36px;
  ${MEDIA_QUERY_MD} {
    margin-bottom: 30px;
  }
`;

export const ProductStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  &:last-child {
    margin-bottom: 0px;
  }
  p {
    letter-spacing: 4px;
    font-size: 20px;
    line-height: 24px;
    color: #3f3a3a;
    ${MEDIA_QUERY_MD} {
      font-size: 14px;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -15px;
`;

export const QuantityText = styled.span`
  letter-spacing: 4px;
  font-size: 20px;
  line-height: 24px;
  color: #3f3a3a;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

export const QuantityTextMax = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: #f61f1f;
  margin-left: 10px;
  ${props => (props.$active ? `display: block;` : `display: none;`)}
  ${MEDIA_QUERY_MD} {
    font-size: 12px;
    white-space: nowrap;
  }
`;

export const Colors = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ color }) => color};
  border: 1px solid #d3d3d3;
  margin-left: 32px;
  outline-offset: 6px;
  cursor: pointer;
  ${props => props.$active && `outline: 1px solid #979797;`}
`;

export const Size = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-left: 26px;

  background-color: ${props =>
    props.$active ? `black;` : props.$available ? `#ECECEC` : `#ececec40`};

  color: ${props =>
    props.$active ? `white;` : props.$available ? `black` : `#3d3a3a40`};

  pointer-events: ${props => (props.$available ? "" : "none")};
`;

export const QuantityMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 15px;
  border: 1px solid #979797;
  width: 160px;
  height: 44px;
  margin-left: 28px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    padding: 11px 48px;
    margin-left: 0px;
  }
`;

export const Quantity = styled.p`
  color: #8b572a !important;
  ${MEDIA_QUERY_MD} {
    font-size: 20px !important;
  }
`;

export const Minus = styled.p`
  cursor: pointer;
`;

export const Plus = styled.p`
  cursor: pointer;
`;

export const SmallDiving = styled.span`
  height: 20px;
  border-right: 1px solid black;
  color: #3f3f3a;
  margin-left: 10px;
`;

export const QuantityLine = styled.span`
  height: 20px;
  border-right: 1px solid black;
  color: #3f3f3a;
  margin-left: 12px;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

export const AddToCart = styled.button`
  width: 360px;
  height: 64px;
  background: #000000;
  border: 1px solid #979797;
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 4px;
  margin-top: -8px;
  margin-bottom: 40px;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin-bottom: 28px;
  }
`;

export const ProductTips = styled.div`
  padding-left: 8px;
  font-size: 20px;
  margin-bottom: 30px;
  span {
    white-space: pre-wrap;
    display: block;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 14px;
  }
`;

export const ProductBottom = styled.div`
  ${MEDIA_QUERY_MD} {
    padding: 0 24px;
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 30px;
  ${MEDIA_QUERY_MD} {
    gap: 35px;
    margin-top: 0px;
  }
`;

export const InfoTitle = styled.span`
  flex-shrink: 0;
  font-size: 20px;
  line-height: 30px;
  color: #8b572a;
  letter-spacing: 3px;
  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }
`;

export const InfoLine = styled.div`
  width: 100%;
  border-top: 1px solid black;
`;

export const InfoContent = styled.div`
  margin-top: 28px;
  ${MEDIA_QUERY_MD} {
    margin-top: 12px;
  }
`;

export const InfoIntroduce = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: #3f3a3a;
  margin-bottom: 30px;
  ${MEDIA_QUERY_MD} {
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 20px;
  }
`;

export const ProductIMG = styled.img`
  display: block;
  width: 960px;
  margin-bottom: 30px;
  ${MEDIA_QUERY_MD} {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
