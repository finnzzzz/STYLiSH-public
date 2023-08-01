const mainContainer = document.querySelector('.main__container');
const navlinks = document.querySelectorAll('.nav__link');
const mobileNavLinks = document.querySelectorAll('.header__nav');
const navWomen = document.querySelectorAll('#nav__women');
const navMen = document.querySelectorAll('#nav__men');
const navAcc = document.querySelectorAll('#nav__acc');
const searchLogo = document.querySelectorAll('#search__logo');
const mobileHeaderDefault = document.querySelector('.mobile__header__default');
const mobileHeaderSearchbar = document.querySelector('.mobile__header__searchbar');
const banner = document.querySelector('.banner');
const cartAmount = document.querySelector('.cart__amount');
const mobileDefaultSearchLogo = document.querySelector('.header__search__logo');
const searchInput = document.querySelectorAll('#searchInput');
const queryString = window.location.search;

// -------------------------------------------------------------
const hostName = 'api.appworks-school.tw';
const APIVersion = '1.0';

const ProductListAPIEndPoint = {
  all: 'all',
  women: 'women',
  men: 'men',
  accessories: 'accessories',
};

// -------------------------------------------------------------

// -------------------------------------------------------------
const AllProductListAPI = `https://${hostName}/api/${APIVersion}/products/${ProductListAPIEndPoint.all}`;
const womenProductListAPI = `https://${hostName}/api/${APIVersion}/products/${ProductListAPIEndPoint.women}`;
const menProductListAPI = `https://${hostName}/api/${APIVersion}/products/${ProductListAPIEndPoint.men}`;
const accProductListAPI = `https://${hostName}/api/${APIVersion}/products/${ProductListAPIEndPoint.accessories}`;
const searchAPI = `https://${hostName}/api/${APIVersion}/products/search?keyword=`;
const marketingCampaignsAPI = `https://${hostName}/api/${APIVersion}/marketing/campaigns`;

// -------------------------------------------------------------

//fetch(URL)
async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('something went wrong');
    }
  } catch (error) {
    fetchDataError(error);
    removeLoading();
  }
}

//渲染創造 loading animation
const renderLoading = (data, insertMode) => {
  const limitLoading = data;
  let allLoadingHTML = '';
  limitLoading.map(() => {
    const loadingHTML = `
    <div class="loading">
      <div class="loading__img__container">
         <img class="loading__img" src="./images/loading.gif" alt="" />
      </div>
      <div class="product__colors">
        <div class="loading__product__color"></div>
        <div class="loading__product__color"></div>
        <div class="loading__product__color"></div>
      </div>
        <span class="loading__product__name"></span>
        <span class="loading__product__price"></span>
    </div>
`;
    return (allLoadingHTML += loadingHTML);
  });
  switch (insertMode) {
    case 'insert':
      mainContainer.insertAdjacentHTML('beforeend', allLoadingHTML);
      break;
    default:
      mainContainer.innerHTML = allLoadingHTML;
      break;
  }
};

//渲染創造 prdouctlist 並且刪除loading animation
const renderData = (data, insertMode) => {
  const productData = data.data;
  let allhtml = '';
  productData.forEach((data) => {
    let colorsHTML = '';
    const productColors = data.colors;
    productColors.forEach((color) => {
      const singleColorHTML = `
          <div class="product__color" style="background:#${color.code}" ></div>
      `;
      colorsHTML += singleColorHTML;
    });
    const productListHTML = `
        <div class="product__container">
          <a href="/product?id=${data.id}">
          <img
            class="product__img"
            src=${data.main_image}
            alt=""
          />
          </a>
          <div class="product__colors">
            ${colorsHTML}
          </div>
          <span class="product__name">${data.title}</span>
          <span class="product__price">TWD.${data.price}</span>
        </div>
    `;
    allhtml += productListHTML;
  });
  switch (insertMode) {
    case 'insert':
      mainContainer.insertAdjacentHTML('beforeend', allhtml);
      removeLoading();
      break;
    default:
      mainContainer.innerHTML = '';
      mainContainer.insertAdjacentHTML('beforeend', allhtml);
      // removeLoading();
      break;
  }
  // mainContainer.innerHTML = allhtml;
};

//渲染創造 fetch error
const fetchDataError = (error) => {
  let errorMessage = document.createElement('h3');
  errorMessage.setAttribute('style', 'color:red');
  errorMessage.innerHTML = error;
  mainContainer.append(errorMessage);
};

//移除loading animation
const removeLoading = () => {
  const loading = document.querySelectorAll('.loading');
  loading.forEach((e) => {
    e.remove();
  });
};

// 整體執行順序
const fetchDataAndRender = (API, insertMode = 'innerHTML') => {
  renderLoading([1, 2, 3], insertMode);
  const data = fetchData(API).then((data) => {
    renderData(data, insertMode);
    return data;
  });
  return data;
};

//首次執行

// fetchDataAndRender(AllProductListAPI);

// console.log("queryString: " + queryString);
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('category');
// console.log("category: " + category);

const navLinkAddStyle = (API, categoryIndex) => {
  navlinks[categoryIndex].classList.add('nav__link__active');
  mobileNavLinks[categoryIndex].classList.add('header__nav__active');
  return fetchDataAndRender(API);
};

switch (category) {
  case 'women':
    const data = navLinkAddStyle(womenProductListAPI, 0);
    data.then((data) => {
      console.log(data);
      if ('next_paging' in data) {
        console.log(data.next_paging);
        return data.next_paging;
      } else {
        console.log('nonextpaging');
      }
    });
    break;
  case 'men':
    navLinkAddStyle(menProductListAPI, 1);
    break;
  case 'accessories':
    navLinkAddStyle(accProductListAPI, 2);
    break;
  default:
    const searchKeyword = urlParams.get('q');
    if (searchKeyword) {
      const data = fetchDataAndRender(`${searchAPI}${searchKeyword}`);
      data.then((data) => {
        const dataAmount = data.data.length;
        console.log(dataAmount);
        if (!dataAmount) {
          renderNoDataMessage();
        }
        let paginga;
        if ('next_paing' in data) {
          paginga = data.nextPaging;
          infiniteScroll(`${searchAPI}${searchKeyword}`, paginga);
        }
      });
    } else {
      const data = fetchDataAndRender(AllProductListAPI);
      data.then((data) => {
        let paginga;
        if ('next_paging' in data) {
          paginga = data.next_paging;
          infiniteScroll(AllProductListAPI, paginga);
        }
      });
    }
    break;
}

const url = new URL(window.location.href);
url.searchParams.set('category', 'sdasdasa');

const removeNavlinkStyle = (element, className) => {
  [...element].map((navlink) => {
    return navlink.classList.remove(className);
  });
};

for (let women of navWomen) {
  women.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState(null, '', 'index.html?category=women');
    const data = fetchDataAndRender(womenProductListAPI);
    removeNavlinkStyle(navlinks, 'nav__link__active');
    removeNavlinkStyle(mobileNavLinks, 'header__nav__active');
    navlinks[0].classList.add('nav__link__active');
    mobileNavLinks[0].classList.add('header__nav__active');
    data.then((data) => {
      let paginga;
      if ('next_paging' in data) {
        paginga = data.next_paging;
        infiniteScroll(womenProductListAPI, paginga);
      }
    });
  });
}

for (let men of navMen) {
  men.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState(null, '', 'index.html?category=men');
    const data = fetchDataAndRender(menProductListAPI);
    removeNavlinkStyle(navlinks, 'nav__link__active');
    removeNavlinkStyle(mobileNavLinks, 'header__nav__active');
    navlinks[1].classList.add('nav__link__active');
    mobileNavLinks[1].classList.add('header__nav__active');
    data.then((data) => {
      let paginga;
      if ('next_paging' in data) {
        paginga = data.next_paging;
        infiniteScroll(menProductListAPI, paginga);
      }
    });
  });
}

for (let acc of navAcc) {
  acc.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState(null, '', 'index.html?category=accessories');
    const data = fetchDataAndRender(accProductListAPI);
    removeNavlinkStyle(navlinks, 'nav__link__active');
    removeNavlinkStyle(mobileNavLinks, 'header__nav__active');
    navlinks[2].classList.add('nav__link__active');
    mobileNavLinks[2].classList.add('header__nav__active');
    data.then((data) => {
      let paginga;
      if ('next_paging' in data) {
        paginga = data.next_paging;
        infiniteScroll(menProductListAPI, paginga);
      }
    });
  });
}

const renderNoDataMessage = () => {
  const messageHTML = `
  <div ></div>
  <h3 >沒有符合的商品</h3>
  <div ></div>
  `;
  mainContainer.insertAdjacentHTML('beforeend', messageHTML);
};

//---------------------searchInput---------------------------------------------
const searchFeature = () => {
  const searchKeyword = [...searchInput].map((e) => e.value).filter(Boolean);
  if (searchKeyword === '') {
    fetchDataAndRender(AllProductListAPI);
  } else {
    const data = fetchDataAndRender(`${searchAPI}${searchKeyword}`);
    [...searchInput].map((e) => (e.value = ''));
    data.then((data) => {
      const dataAmount = data.data.length;
      if (!dataAmount) {
        renderNoDataMessage();
      }
    });
  }
  window.history.pushState(null, '', `index.html?q=${searchKeyword}`);
  removeNavlinkStyle(navlinks, 'nav__link__active');
  removeNavlinkStyle(mobileNavLinks, 'header__nav__active');
};

// 獲取search input value若為空 render全部產品
searchInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    const searchKeyword = e.target.value;
    if (searchKeyword === '') {
      fetchDataAndRender(AllProductListAPI);
    }
  });
  input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
      searchFeature();
    }
  });
});

//---------------------searchInput---------------------------------------------

// search logo點擊事件
searchLogo.forEach((logo) => {
  logo.addEventListener('click', () => {
    searchFeature();
  });
});

// --------------------------------mobile----------------------------
// mobileSearchInput.addEventListener("change", e => {
//   const withinLogo = e.composedPath().includes(mobileInputSearchLogo);
//   if (!withinLogo) {
//     mobileHeaderSearchbar.style.display = "none";
//     mobileHeaderDefault.style.display = "block";
//   }
// });

window.addEventListener('scroll', () => {
  mobileHeaderSearchbar.style.display = 'none';
  mobileHeaderDefault.style.display = 'block';
});

mobileDefaultSearchLogo.addEventListener('click', () => {
  mobileHeaderSearchbar.style.display = 'block';
  mobileHeaderDefault.style.display = 'none';
});
//---------------------^^^^^searchInput^^^^^^-----------------------------

//解決上一頁產品不會更新
// window.addEventListener("popstate", () => {
//   self.location.reload();
// });

// https://api.appworks-school.tw/api/1.0/products/all?paging=1

const infiniteScroll = (API, paging) => {
  let isLoading = false;
  let isEnd = false;
  let nextPaging = paging;
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const distance = Math.floor(scrollHeight - clientHeight - scrollTop);
    const triggerDistance = 200;
    if (!isLoading && !isEnd && distance <= triggerDistance) {
      isLoading = true;
      if (paging) {
        const data = fetchDataAndRender(`${API}?paging=${nextPaging}`, 'insert');
        data.then((data) => {
          if ('next_paging' in data) {
            nextPaging = data.next_paging;
          } else {
            isEnd = true;
          }
        });
        setTimeout(() => {
          isLoading = false;
        }, 1000);
      }
    }
  });
};

const renderBanner = (data) => {
  let dotsHTML = '';
  let bannersHTML = '';
  data.data.forEach((data, index) => {
    const dotHTML = `
    <span class="banner__dot" data-index="${index}"></span>
    `;
    dotsHTML += dotHTML;
  });
  let allDotsHTML = `
      <div class="banner__dots">
        ${dotsHTML}
      </div>
  `;
  data.data.forEach((data, index) => {
    const picture = data.picture;
    const story = data.story;
    const title = story.split('。')[0].replace(/\r\n/g, '<br/>');
    const author = story.split('。')[1].slice(2);
    const bannerHTML = `
    <a href="/product?id=${data.product_id}">
      <div class="${
        index === 0 ? 'banner__img__container banner__img__active' : 'banner__img__container '
      }">
        <img
          class="banner__img"
          src="${picture}"
          alt=""
        />
        <div class="banner__title__container">
          <div class="banner__title">
            ${title}
          </div>
          <div class="banner__title__author">${author}</div>
        </div>
      </div>
    </a>
  `;
    bannersHTML += bannerHTML;
  });
  const allbannerHTML = bannersHTML + allDotsHTML;
  banner.insertAdjacentHTML('beforeend', allbannerHTML);
};

let activeIndex = 0;
const toggleBannerActive = (element, dots) => {
  element[activeIndex].classList.remove('banner__img__active');
  dots[activeIndex].classList.remove('banner__dot__active');
  activeIndex = (activeIndex + 1) % element.length;
  element[activeIndex].classList.add('banner__img__active');
  dots[activeIndex].classList.add('banner__dot__active');
};

let allBanner;
let alldots;
fetchData(marketingCampaignsAPI).then((data) => {
  renderBanner(data);
  allBanner = document.querySelectorAll('.banner__img__container');
  alldots = document.querySelectorAll('.banner__dot');
  alldots[0].className = 'banner__dot banner__dot__active';
  [...alldots].forEach((data, index) => {
    let dataIndex = data.dataset.index;
    data.onclick = function (e) {
      for (let i = 0; i < alldots.length; i++) {
        alldots[i].className = 'banner__dot';
        alldots[index].className = 'banner__dot banner__dot__active';
      }
      allBanner[activeIndex].classList.remove('banner__img__active');
      activeIndex = dataIndex;
      allBanner[activeIndex].classList.add('banner__img__active');
    };
  });
});

let bannerChange = setInterval(() => {
  toggleBannerActive(allBanner, alldots);
}, 5000);

banner.addEventListener('mouseenter', () => {
  clearInterval(bannerChange);
  // bannerChange = null;
});

banner.addEventListener('mouseleave', () => {
  bannerChange = setInterval(() => {
    toggleBannerActive(allBanner, alldots);
  }, 5000);
});

cartAmount.innerHTML = localStorage.getItem('storeQuantity') || 0;
