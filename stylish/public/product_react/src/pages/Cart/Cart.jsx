import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getData from "../../API/getData";

import deleteLogo from "../../public/images/cart-remove.png";

import {
  CartContainer,
  CartContent,
  CartList,
  CartListDetails,
  CartListImg,
  CartListLeft,
  CartListRight,
  CartSection,
  CartTable,
  CartTableHeader,
  CountSection,
  CountContainer,
  List,
  Line,
  Price,
  Total,
  OrderForm,
  OrderSection,
  PaymentForm,
  PaymentSection,
  Quantity,
  CheckoutBtn,
  QuantityContainer,
  TotalContainer,
  DeleteBtn,
} from "./Cart.style";

export const Cart = ({ setTotalQuantity, accessToken, setOrderNumber }) => {
  const [productData, setProductData] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [subTotalPrice, setSubTotalPrice] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    deliveryTime: "none",
  });

  const navigate = useNavigate();
  const toThankYouPage = () => {
    navigate("/thankyoupage", { state: { value: 111 } });
  };

  useEffect(() => {
    window.TPDirect.setupSDK(
      12348,
      "app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF",
      "sandbox"
    );

    let fields = {
      number: {
        // css selector
        element: "#card-number",
        placeholder: "**** **** **** ****",
      },
      expirationDate: {
        // DOM object
        element: "#card-expiration-date",
        placeholder: "MM / YY",
      },
      ccv: {
        element: "#card-ccv",
        placeholder: "後三碼",
      },
    };

    window.TPDirect.card.setup({
      fields: fields,
      styles: {
        // Style all elements
        input: {
          color: "gray",
        },
        // Styling ccv field
        "input.ccv": {
          // 'font-size': '16px'
        },
        // Styling expiration-date field
        "input.expiration-date": {
          // 'font-size': '16px'
        },
        // Styling card-number field
        "input.card-number": {
          // 'font-size': '16px'
        },
        // style focus state
        ":focus": {
          // 'color': 'black'
        },
        // style valid state
        ".valid": {
          color: "green",
        },
        // style invalid state
        ".invalid": {
          color: "red",
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        "@media screen and (max-width: 400px)": {
          input: {
            color: "orange",
          },
        },
      },
      // 此設定會顯示卡號輸入正確後，會顯示前六後四碼信用卡卡號
      isMaskCreditCardNumber: true,
      maskCreditCardNumberRange: {
        beginIndex: 6,
        endIndex: 11,
      },
    });
  }, []);

  //get localstorage data
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("productData"));
    const quantiyList = product?.map(item => {
      return {
        key: Object.values(item)[0].key,
        quantity: Object.values(item)[0].quantity,
      };
    });
    setProductData(product);
    setSelectedValue(quantiyList);
  }, []);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("productData"));
    const priceList = product?.map(item => {
      return Object.values(item)[0].price;
    });
    const subTotal = selectedValue?.map((item, index) => {
      return item.quantity * priceList[index];
    });
    setSubTotalPrice(subTotal);
  }, [selectedValue]);

  //remove list function
  const removeList = key => {
    const newList = productData.filter(
      item => Object.values(item)[0].key !== key
    );

    const newQuantityList = selectedValue.filter(item => item.key !== key);

    const newQuantity = newQuantityList.reduce(
      (total, item) => (total += item.quantity),
      0
    );

    localStorage.setItem("productData", JSON.stringify(newList));
    localStorage.setItem("storeQuantity", JSON.stringify(newQuantity));
    setProductData(newList);
    setSelectedValue(newQuantityList);
    setTotalQuantity(newQuantity);
  };

  //handle quantity option
  const handleQuantity = (e, key) => {
    const value = e.target.value;
    const newQuantityList = selectedValue.map(item => {
      if (item.key === key) {
        return { ...item, quantity: +value };
      }
      return item;
    });
    const newQuantity = newQuantityList.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);

    setSelectedValue(newQuantityList);
    localStorage.setItem("storeQuantity", newQuantity);
    setTotalQuantity(newQuantity);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phoneNumber, address, email } = formData;
    const isFormValid = [name, phoneNumber, address, email].every(
      fieldValue => fieldValue !== ""
    );
    if (isFormValid) {
      window.TPDirect.card.getPrime(function (result) {
        if (result.status !== 0) {
          alert("get prime error " + result.msg);
          return;
        }
        alert("get prime 成功，prime: " + result.card.prime);

        //整理商品資料
        const finalList = productData.map((item, index) => {
          const key = Object.keys(item)[0];
          const newItem = item[key];
          return {
            id: key,
            name: newItem.title,
            price: newItem.price,
            color: {
              code: newItem.color,
              name: newItem.colorName,
            },
            size: newItem.size,
            qty: selectedValue[index].quantity,
          };
        });

        const CheckOutDetails = {
          prime: result.card.prime,
          order: {
            shipping: "delivery",
            payment: "credit_card",
            subtotal: Number(
              subTotalPrice.reduce((total, item) => (total += item), 0)
            ),
            freight: 30,
            total:
              Number(
                subTotalPrice.reduce((total, item) => (total += item), 0)
              ) + 30,
            recipient: {
              name: formData.name,
              phone: formData.phoneNumber,
              email: formData.email,
              address: formData.address,
              time: formData.deliveryTime,
            },
            list: finalList,
          },
        };

        const bearer = accessToken;
        console.log("bearer", bearer);
        console.table("CheckOutDetails", CheckOutDetails);

        getData
          .getCheckOutDetails(CheckOutDetails, bearer)
          .then(res => {
            console.log(res.data.number);
            setOrderNumber(res.data.number);
            toThankYouPage();
            setTotalQuantity(0);
            localStorage.removeItem("productData");
            localStorage.removeItem("storeQuantity");
          })
          .catch(err => console.log(err));
      });
    } else {
      alert("There are some fields left unfilled");
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  };

  //render product list
  const ListData = productData?.map((item, index) => {
    const data = Object.values(item)[0];

    const stocks = Array(data.stock)
      .fill(null)
      .map((_, index) => {
        const value = index + 1;
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      });
    return (
      <CartList key={data.key}>
        <CartListLeft>
          <CartListImg src={data.image} />
          <CartListDetails>
            <p>{data.titel}</p>
            <p>{Object.entries(item)[0][0]}</p>
            <p>顏色｜{data.colorName}</p>
            <p>尺寸｜{data.size}</p>
          </CartListDetails>
        </CartListLeft>
        <CartListRight>
          <QuantityContainer>
            <Quantity>
              <span>數量</span>
              <select
                key={data.key}
                value={selectedValue[index].quantity}
                onChange={e => {
                  handleQuantity(e, data.key);
                }}
                name=""
                id=""
              >
                {stocks}
              </select>
            </Quantity>
          </QuantityContainer>
          <Price>
            <span>單價</span>
            <p>TWD.{data.price}</p>
          </Price>
          <TotalContainer>
            <Total>
              <span>小計</span>
              <p>TWD.{data.price * selectedValue[index].quantity}</p>
            </Total>
          </TotalContainer>
          <DeleteBtn
            src={deleteLogo}
            onClick={() => {
              removeList(data.key);
            }}
          ></DeleteBtn>
        </CartListRight>
      </CartList>
    );
  });

  return (
    <>
      <CartContainer>
        <CartContent>
          <CartSection>
            <CartTableHeader>
              <ul>
                <li>購物車</li>
                <li>數量</li>
                <li>單價</li>
                <li>小計</li>
              </ul>
            </CartTableHeader>
            <CartTable>{ListData}</CartTable>
          </CartSection>
          <OrderSection>
            <CartTableHeader>
              <ul>
                <li>訂購資料</li>
              </ul>
            </CartTableHeader>
            <OrderForm>
              <ul>
                <li>
                  <p>收件人姓名</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </li>
                <span>務必填寫完整收件人姓名，避免包裹無法順利簽收</span>
                <li>
                  <p>手機</p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <p>地址</p>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <p>Email</p>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <p>配送時間</p>
                  <form action="">
                    <input
                      type="radio"
                      name="deliveryTime"
                      value="0800"
                      checked={formData.deliveryTime === "0800"}
                      onChange={handleChange}
                    />
                    <label htmlFor="">08:00-12:00</label>
                    <input
                      type="radio"
                      name="deliveryTime"
                      value="1400"
                      checked={formData.deliveryTime === "1400"}
                      onChange={handleChange}
                    />
                    <label htmlFor="">14:00-18:00</label>
                    <input
                      type="radio"
                      name="deliveryTime"
                      value="none"
                      checked={formData.deliveryTime === "none"}
                      onChange={handleChange}
                    />
                    <label htmlFor="">不指定</label>
                  </form>
                </li>
              </ul>
            </OrderForm>
          </OrderSection>
          <PaymentSection>
            <PaymentForm>
              <CartTableHeader>
                <ul>
                  <li>付款資料</li>
                </ul>
              </CartTableHeader>
              <OrderForm>
                <ul>
                  <li>
                    <p>信用卡號碼</p>
                    <div id="card-number"></div>
                  </li>
                  <li>
                    <p>有效期限</p>
                    <div id="card-expiration-date"></div>
                  </li>
                  <li>
                    <p>安全碼</p>
                    <div id="card-ccv"></div>
                  </li>
                </ul>
              </OrderForm>
            </PaymentForm>
          </PaymentSection>
          <CountSection>
            <CountContainer>
              <List>
                <p>總金額</p>
                <span>
                  <p>NT.</p>
                  <p>
                    {subTotalPrice?.reduce(
                      (total, item) => (total += item),
                      0
                    ) || 0}
                  </p>
                </span>
              </List>
              <List>
                <p>運費</p>
                <span>
                  <p>NT.</p>
                  <p>{productData?.length ? 30 : 0}</p>
                </span>
              </List>
              <Line />
              <List>
                <p>應付金額</p>
                <span>
                  <p>NT.</p>
                  <p>
                    {Number(
                      subTotalPrice?.reduce((total, item) => (total += item), 0)
                    ) + Number(productData?.length ? 30 : 0) || 0}
                  </p>
                </span>
              </List>
              <CheckoutBtn type="submit" onClick={handleSubmit}>
                確認付款
              </CheckoutBtn>
              <div id="curl"></div>
            </CountContainer>
          </CountSection>
        </CartContent>
      </CartContainer>
    </>
  );
};
