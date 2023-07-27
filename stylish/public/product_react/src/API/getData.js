import { api } from "./api.js";

const getData = {
  hostName: "https://api.appworks-school.tw",
  APIVersion: "1.0",
  getProducts(category, paging) {
    return api({
      url: `${this.hostName}/api/${this.APIVersion}/products/${category}?paging=${paging}`,
    });
  },
  searchProducts(keyword, paging) {
    return api({
      url: `${this.hostName}/api/${this.APIVersion}/products/search?keyword=${keyword}?paging=${paging}`,
    });
  },
  getMarketingCampaigns() {
    return api({
      url: `${this.hostName}/api/${this.APIVersion}/marketing/campaigns`,
    });
  },
  getProductDetail(id) {
    return api({
      url: `${this.hostName}/api/${this.APIVersion}/products/details?id=${id}`,
    });
  },
  getProfileInfo(body) {
    return api({
      url: `${this.hostName}/api/${this.APIVersion}/user/signin`,
      method: `POST`,
      data: body,
    });
  },
  getCheckOutDetails(body, Bearer) {
    return api({
      url: `${this.hostName}/api/${this.APIVersion}/order/checkout`,
      method: `POST`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Bearer}`,
      },
    });
  },
};

export default getData;
