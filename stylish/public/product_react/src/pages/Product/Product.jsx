import React, { useState } from "react";

import getData from "../../API/getData";
import useFetch from "../../hooks/useFetch";
import getParameter from "../../utils/getParameter";

import {
  ProductContainer,
  ProductTop,
  ProductMainIMG,
  ProductInfo,
  ProductName,
  ProductNumber,
  ProductPrice,
  DivingLine,
  ProductStyle,
  QuantityContainer,
  QuantityText,
  Colors,
  Size,
  QuantityMenu,
  Quantity,
  Minus,
  Plus,
  SmallDiving,
  QuantityLine,
  AddToCart,
  ProductTips,
  ProductBottom,
  Info,
  InfoTitle,
  InfoLine,
  InfoContent,
  InfoIntroduce,
  ProductIMG,
  Loading,
  QuantityTextMax,
} from "./Product.style";

const id = getParameter("id");
const fetchData = getData.getProductDetail(id || 201807201824);
//test = 201807201824

export const Product = ({ totalQuantity, setTotalQuantity }) => {
  const {
    data: { data },
    loading,
    error,
  } = useFetch(fetchData);

  // ----------------------------------------hook-----------------------
  const [details, setDetails] = useState({});
  const [curVariants, setCurVariants] = useState([]);
  const [allVariants, setAllVariants] = useState([]);
  const [quantity, setQuantity] = useState(0);
  // ----------------------------------------hook-----------------------

  const getDetails = (detail, value) => {
    setDetails(prev => {
      const newDetails = { ...prev };
      newDetails[detail] = value;
      return newDetails;
    });
  };

  const getVariants = color => {
    const variant = data.variants.filter(item => item["color_code"] === color);
    setCurVariants(variant);
  };

  const createElement = () => {
    const colors = data?.colors.map(color => (
      <Colors
        color={`#${color.code}`}
        code={color.code}
        key={color.code}
        onClick={() => {
          getDetails("color", color.code);
          getDetails("colorName", color.name);
          getVariants(color.code);
          setQuantity(0);
        }}
        $active={color.code === details.color}
      ></Colors>
    ));
    const sizes = data?.sizes.map(size => (
      <Size
        key={size}
        onClick={() => {
          getDetails("size", size);
          setQuantity(0);
        }}
        $active={size === details.size}
        $available={
          details.color &&
          curVariants.filter(item => item.size === size)[0]?.stock !== 0
        }
      >
        {size}
      </Size>
    ));
    const images = data.images.map((image, index) => (
      <ProductIMG src={image} key={index}></ProductIMG>
    ));
    return { colors, sizes, images };
  };

  const plus = () => {
    const stock = curVariants?.filter(item => item.size === details.size)[0]
      ?.stock;
    if (details.color && stock)
      setQuantity(prev => (prev + 1 > stock ? stock : prev + 1));
  };

  const minus = () => {
    setQuantity(prev => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const storeData = key => {
    const localStorageData =
      JSON.parse(localStorage.getItem("productData")) || [];
    const localStorageQuantity =
      JSON.parse(localStorage.getItem("storeQuantity")) || 0;

    const allData = {
      [key]: {
        key: localStorageData.length,
        title: data.title,
        price: data.price,
        image: data.main_image,
        color: details.color,
        colorName: details.colorName,
        size: details.size,
        quantity: quantity,
        stock: curVariants.filter(item => item.size === details.size)[0]?.stock,
      },
    };
    localStorageData.push(allData);

    const allQuantity = +localStorageQuantity + quantity;

    localStorage.setItem("productData", JSON.stringify(localStorageData));
    localStorage.setItem("storeQuantity", JSON.stringify(allQuantity));
  };

  //todo v2(not finish)
  // const storeVaritants = () => {
  //   if (localStorage.getItem("vari")) {
  //     const variant = localStorage.getItem("vari");
  //     setAllVariants(variant);
  //   } else {
  //     setAllVariants(data.variants);
  //   }
  // };

  // const updateStock = (colorCode, size, newStock) => {
  //   const updatedVariants = data.variants.map(variant => {
  //     if (variant.color_code === colorCode && variant.size === size) {
  //       return { ...variant, stock: newStock };
  //     }
  //     return variant;
  //   });
  //   return updatedVariants;
  // };

  const addToCart = () => {
    if (
      details.hasOwnProperty("color") &&
      details.hasOwnProperty("size") &&
      quantity !== 0
    ) {
      storeData(data.id);
      setTotalQuantity(totalQuantity => totalQuantity + quantity);
      setDetails({});
      setQuantity(0);
    }
  };

  if (loading)
    return (
      <Loading>
        <h2>Loading...</h2>
      </Loading>
    );

  if (error) console.log(error);

  return (
    data?.id && (
      <ProductContainer>
        <ProductTop>
          <ProductMainIMG src={data.main_image} />
          <ProductInfo>
            <div>
              <ProductName>{data.title}</ProductName>
              <ProductNumber>{data.id}</ProductNumber>
              <ProductPrice>TWD.{data.price}</ProductPrice>
            </div>
            <DivingLine></DivingLine>
            <ProductStyle>
              <span>顏色</span>
              <SmallDiving></SmallDiving>
              {createElement().colors}
            </ProductStyle>
            <ProductStyle>
              <span>尺寸</span>
              <SmallDiving></SmallDiving>
              {createElement().sizes}
            </ProductStyle>
            <ProductStyle>
              <QuantityContainer>
                <QuantityText>數量</QuantityText>
                <QuantityLine></QuantityLine>
                <QuantityMenu>
                  <Minus onClick={minus}>-</Minus>
                  <Quantity>{quantity}</Quantity>
                  <Plus onClick={plus}>+</Plus>
                </QuantityMenu>
                <QuantityTextMax
                  $active={
                    curVariants?.filter(item => item.size === details.size)[0]
                      ?.stock === quantity
                  }
                >
                  已達最大庫存
                </QuantityTextMax>
              </QuantityContainer>
            </ProductStyle>
            <AddToCart onClick={addToCart}>加入購物車</AddToCart>
            <div>
              <ProductTips>{data.note}</ProductTips>
              <ProductTips>
                <span>{data.texture}</span>
                <span>{data.description}</span>
              </ProductTips>
              <ProductTips>
                <span>清洗：{data.wash}</span>
                <span>產地：{data.place}</span>
              </ProductTips>
            </div>
          </ProductInfo>
        </ProductTop>
        <ProductBottom>
          <Info>
            <InfoTitle>更多產品資訊</InfoTitle>
            <InfoLine></InfoLine>
          </Info>
          <InfoContent>
            <InfoIntroduce>{data.story}</InfoIntroduce>
            {createElement().images}
          </InfoContent>
        </ProductBottom>
      </ProductContainer>
    )
  );
};
