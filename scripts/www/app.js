const products = [
  {
    name: "本地小白菜",
    vendor: "阿珍鲜菜摊",
    price: 5.8,
    unit: "500g",
    icon: "🥬",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Napa_cabbage.jpg?width=900",
    source: "Wikimedia Commons · Napa cabbage",
    tag: "农残未检出",
    origin: "惠州横沥合作农场",
    pick: "今日 06:10",
    desc: "口感清甜，适合清炒、煮面、做粥。摊主按单现拣，入柜前二次称重。"
  },
  {
    name: "沙地番茄",
    vendor: "老周蔬果",
    price: 6.6,
    unit: "500g",
    icon: "🍅",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato-on-cuttingboard.jpg?width=900",
    source: "Wikimedia Commons · Tomato on cutting board",
    tag: "今日采摘",
    origin: "从化良口基地",
    pick: "今日 05:40",
    desc: "酸甜度高，适合番茄牛肉汤和凉拌。支持备注要熟一点或硬一点。"
  },
  {
    name: "胡萝卜",
    vendor: "绿源菜档",
    price: 3.9,
    unit: "500g",
    icon: "🥕",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fresh_Carrots_(Unsplash).jpg?width=900",
    source: "Wikimedia Commons · Fresh Carrots",
    tag: "比超市省2元",
    origin: "清远连州农场",
    pick: "昨日 18:30",
    desc: "脆甜少筋，适合炖汤和备餐。今晚下单可搭配牛腩享组合价。"
  },
  {
    name: "土鸡蛋",
    vendor: "春港蛋品",
    price: 12.8,
    unit: "10枚",
    icon: "🥚",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Carton_of_eggs.jpg?width=900",
    source: "Wikimedia Commons · Carton of eggs",
    tag: "明码溯源",
    origin: "河源灯塔养殖场",
    pick: "今日 08:00",
    desc: "每盒带批次码，破损包赔。常买用户可设置每周自动补货。"
  },
  {
    name: "鲜切牛腩",
    vendor: "林记肉档",
    price: 28.8,
    unit: "300g",
    icon: "🥩",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Thinly_sliced_beef.jpg?width=900",
    source: "Wikimedia Commons · Thinly sliced beef",
    tag: "冷链到柜",
    origin: "广州白云放心肉联厂",
    pick: "今日 09:20",
    desc: "已切块，适合番茄牛腩和萝卜炖牛腩。全程冷链，入柜温度 4℃。"
  }
];

const seasonalVegetables = [
  {
    name: "本地小白菜",
    subtitle: "叶片翠绿，适合清炒和煮面",
    price: "¥5.80 / 500g",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Napa_cabbage.jpg?width=1000",
    source: "Wikimedia Commons · Napa cabbage"
  },
  {
    name: "沙地番茄",
    subtitle: "酸甜多汁，今晚适合做番茄牛肉汤",
    price: "¥6.60 / 500g",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato-on-cuttingboard.jpg?width=1000",
    source: "Wikimedia Commons · Tomato on cutting board"
  },
  {
    name: "胡萝卜",
    subtitle: "脆甜少筋，炖汤、备餐都好用",
    price: "¥3.90 / 500g",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fresh_Carrots_(Unsplash).jpg?width=1000",
    source: "Wikimedia Commons · Fresh Carrots"
  },
  {
    name: "鲜香菇",
    subtitle: "菌香浓，适合焖饭和滑鸡",
    price: "¥9.90 / 300g",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiitake_mushroom.jpg?width=1000",
    source: "Wikimedia Commons · Shiitake mushroom"
  },
  {
    name: "西兰花",
    subtitle: "花球紧实，适合轻食和儿童餐",
    price: "¥7.90 / 500g",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Broccoli_vegetable.jpg?width=1000",
    source: "Wikimedia Commons · Broccoli vegetable"
  }
];

const vendors = [
  { name: "阿珍鲜菜摊", score: "4.9", credit: 98, stock: "36款", deal: "青菜第二份半价", fans: "2.8k" },
  { name: "林记肉档", score: "4.8", credit: 96, stock: "18款", deal: "牛腩晚市特价", fans: "1.9k" },
  { name: "老周蔬果", score: "4.7", credit: 94, stock: "42款", deal: "番茄 6.6元/斤", fans: "3.1k" },
  { name: "春港水产", score: "4.8", credit: 95, stock: "15款", deal: "鲈鱼现杀预订", fans: "1.4k" }
];

const state = {
  cart: [],
  elder: false,
  activeTab: "home",
  seasonalIndex: 0,
  selectedSlot: "今晚 21:00-22:30",
  selectedPay: "微信支付"
};

const panelMap = {
  home: "homeTab",
  orders: "ordersTab",
  markets: "marketsTab",
  profile: "profileTab",
  freshBox: "freshBoxTab"
};

const productList = document.querySelector("#productList");
const vendorList = document.querySelector("#vendorList");
const seasonalCarousel = document.querySelector("#seasonalCarousel");
const toast = document.querySelector("#toast");
const sheet = document.querySelector("#sheet");
const sheetKicker = document.querySelector("#sheetKicker");
const sheetTitle = document.querySelector("#sheetTitle");
const sheetBody = document.querySelector("#sheetBody");

function money(value) {
  return `¥${value.toFixed(2)}`;
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function addRipple(event) {
  const target = event.target.closest("button");
  if (!target || target.disabled) return;
  target.classList.add("ripple-host");
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "tap-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function bumpCart() {
  const cart = document.querySelector(".cart-bar");
  cart.classList.remove("bump");
  void cart.offsetWidth;
  cart.classList.add("bump");
}

function openSheet(kicker, title, body) {
  sheetKicker.textContent = kicker;
  sheetTitle.textContent = title;
  sheetBody.innerHTML = body;
  sheet.classList.remove("hidden");
}

function closeSheet() {
  sheet.classList.add("hidden");
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.price, 0);
}

function renderProducts(list = products) {
  productList.innerHTML = list.map((item, index) => `
    <article class="product-card">
      <button class="product-main" type="button" data-product="${index}" aria-label="查看${item.name}详情">
        <div class="produce-photo"><img src="${item.image}" alt="${item.name}真实照片" loading="lazy"></div>
        <div>
          <h3>${item.name}</h3>
          <p>${item.vendor} · ${item.tag}</p>
          <div class="tag-line"><span>可夜间取</span><span>称重透明</span></div>
          <div class="price">${money(item.price)} / ${item.unit}</div>
        </div>
      </button>
      <button class="add-btn" type="button" aria-label="加入${item.name}" data-add="${index}">+</button>
    </article>
  `).join("");
}

function renderSeasonalCarousel() {
  const item = seasonalVegetables[state.seasonalIndex];
  seasonalCarousel.innerHTML = `
    <button class="seasonal-card" type="button" data-photo="${state.seasonalIndex}" aria-label="查看${item.name}真实照片">
      <img src="${item.image}" alt="${item.name}应季蔬菜真实照片">
      <span class="seasonal-info">
        <strong>${item.name}</strong>
        <span>${item.subtitle}</span>
        <span class="seasonal-meta"><b>${item.price}</b><em>点击看大图</em></span>
      </span>
    </button>
    <div class="seasonal-dots" aria-label="应季推荐切换">
      ${seasonalVegetables.map((veg, index) => `<button type="button" class="${index === state.seasonalIndex ? "active" : ""}" data-seasonal="${index}" aria-label="查看${veg.name}"></button>`).join("")}
    </div>
  `;
}

function renderVendors() {
  vendorList.innerHTML = vendors.map((vendor, index) => `
    <article class="vendor-card">
      <button class="vendor-open" type="button" data-vendor="${index}">
        <h3>${vendor.name}</h3>
        <p>评分${vendor.score} · 在售${vendor.stock} · 信用分${vendor.credit}</p>
        <p>${vendor.deal} · ${vendor.fans}人关注</p>
      </button>
      <button type="button" data-follow="${vendor.name}">关注</button>
    </article>
  `).join("");
}

function updateCart() {
  const count = state.cart.length;
  const total = cartTotal();
  document.querySelector("#cartCount").textContent = `${count}件`;
  document.querySelector("#cartTotal").textContent = money(total);
  const saving = Math.max(12.6, total * 0.18);
  document.querySelector("#savingText").textContent = `${saving.toFixed(1)}元`;
  document.querySelector("#orderSaving").textContent = `省 ${saving.toFixed(1)} 元`;
}

function addToCart(index) {
  state.cart.push(products[index]);
  updateCart();
  bumpCart();
  showToast(`${products[index].name} 已加入菜篮`);
}

function switchTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll("[data-tab-panel]").forEach((panel) => panel.classList.add("hidden"));
  document.querySelector(`#${panelMap[tab]}`).classList.remove("hidden");
  document.querySelectorAll(".tab-bar button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
}

function productDetail(index) {
  const item = products[index];
  openSheet("商品详情", item.name, `
    <button class="seasonal-card" type="button" data-product-photo="${index}">
      <img src="${item.image}" alt="${item.name}真实照片">
      <span class="seasonal-info">
        <strong>${item.name}</strong>
        <span>${item.source}</span>
        <span class="seasonal-meta"><b>${money(item.price)} / ${item.unit}</b><em>点击看大图</em></span>
      </span>
    </button>
    <div class="sheet-list">
      <div class="sheet-item"><div><b>${item.vendor}</b><span>摊主信用分 96，支持联系摊主备注挑选</span></div><button class="soft-btn" data-vendor-name="${item.vendor}">进摊</button></div>
      <div class="sheet-item"><div><b>产地与采摘</b><span>${item.origin} · ${item.pick}</span></div><strong>未检出</strong></div>
      <div class="sheet-item"><div><b>商品说明</b><span>${item.desc}</span></div></div>
    </div>
    <div class="sheet-actions">
      <button class="soft-btn" data-action="contact-vendor">联系摊主</button>
      <button class="primary-btn" data-add="${index}">加入菜篮</button>
    </div>
  `);
}

function photoViewer(item) {
  openSheet("真实照片", item.name, `
    <div class="photo-viewer">
      <img src="${item.image}" alt="${item.name}真实照片大图">
      <div class="photo-caption">
        <b>${item.name}</b>
        <span>${item.subtitle || item.desc || "真实菜品照片，仅用于原型展示"}</span>
        <span>图片来源：${item.source}</span>
      </div>
    </div>
    <button class="primary-btn full" data-action="close-sheet">看好了</button>
  `);
}

function vendorDetail(index) {
  const vendor = vendors[index];
  const goods = products.filter((item) => item.vendor === vendor.name).map((item) => item.name).join("、") || "当季鲜菜、净菜包";
  openSheet("摊位详情", vendor.name, `
    <div class="sheet-grid">
      <div class="sheet-chip active">评分 ${vendor.score}<br><small>近30天好评</small></div>
      <div class="sheet-chip">信用分 ${vendor.credit}<br><small>平台履约评分</small></div>
      <div class="sheet-chip">${vendor.stock}<br><small>今日在售</small></div>
      <div class="sheet-chip">${vendor.fans}<br><small>社区关注</small></div>
    </div>
    <div class="sheet-list" style="margin-top:10px">
      <div class="sheet-item"><div><b>今日特价</b><span>${vendor.deal}</span></div><strong>限时</strong></div>
      <div class="sheet-item"><div><b>代表商品</b><span>${goods}</span></div></div>
      <div class="sheet-item"><div><b>服务承诺</b><span>缺斤少两退差价，坏果坏菜当日赔付</span></div></div>
    </div>
    <div class="sheet-actions">
      <button class="soft-btn" data-follow="${vendor.name}">关注摊主</button>
      <button class="primary-btn" data-action="category" data-category="${vendor.name}">看TA的菜</button>
    </div>
  `);
}

function marketDetail() {
  openSheet("菜场详情", "春港社区菜场", `
    <div class="sheet-list">
      <div class="sheet-item"><div><b>营业时间</b><span>06:00-22:00，线上预订 24小时可下单</span></div><strong>营业中</strong></div>
      <div class="sheet-item"><div><b>自提柜</b><span>东门 32 格，冷藏/常温分区，离小区南门 4 分钟</span></div><strong>可用28格</strong></div>
      <div class="sheet-item"><div><b>信任体系</b><span>每日抽检，摊主信用分公开，价格对比透明</span></div><strong>98%好评</strong></div>
      <div class="sheet-item"><div><b>附近市场</b><span>星河菜市 1.4km · 江湾农贸 2.1km</span></div></div>
    </div>
    <div class="sheet-actions">
      <button class="soft-btn" data-action="map-detail">查看路线</button>
      <button class="primary-btn" data-action="category" data-category="春港菜场">逛菜场</button>
    </div>
  `);
}

function checkoutSheet() {
  if (!state.cart.length) {
    showToast("先选几样菜，再去结算");
    return;
  }
  const items = state.cart.map((item) => `<div class="sheet-item"><div><b>${item.name}</b><span>${item.vendor} · ${item.unit}</span></div><strong>${money(item.price)}</strong></div>`).join("");
  openSheet("确认订单", "选择取货时间", `
    <div class="sheet-grid">
      <button class="sheet-chip ${state.selectedSlot.includes("21:00") ? "active" : ""}" data-slot="今晚 21:00-22:30">今晚<br><small>21:00-22:30</small></button>
      <button class="sheet-chip" data-slot="明早 07:00-09:00">明早<br><small>07:00-09:00</small></button>
      <button class="sheet-chip" data-slot="明午 11:30-13:00">明午<br><small>11:30-13:00</small></button>
      <button class="sheet-chip" data-slot="夜间 22:30-24:00">夜间<br><small>22:30-24:00</small></button>
    </div>
    <div class="sheet-list" style="margin-top:10px">${items}</div>
    <div class="sheet-list" style="margin-top:10px">
      <div class="sheet-item"><div><b>优惠券</b><span>新人夜间自提券</span></div><strong>-¥3.00</strong></div>
      <div class="sheet-item"><div><b>支付方式</b><span>${state.selectedPay}</span></div><button class="soft-btn" data-action="pay-method">切换</button></div>
      <div class="sheet-item"><div><b>合计</b><span>已含称重差价预估</span></div><strong>${money(Math.max(0, cartTotal() - 3))}</strong></div>
    </div>
    <button class="primary-btn full" data-action="pay-order">支付并生成取货码</button>
  `);
}

function cartDetail() {
  if (!state.cart.length) {
    openSheet("菜篮", "还没有选菜", `<div class="sheet-item"><div><b>去首页挑几样今晚吃的菜</b><span>支持一键复购和菜谱食材包</span></div></div>`);
    return;
  }
  openSheet("菜篮", `${state.cart.length}件商品`, `
    <div class="sheet-list">
      ${state.cart.map((item) => `<div class="sheet-item"><div><b>${item.name}</b><span>${item.vendor}</span></div><strong>${money(item.price)}</strong></div>`).join("")}
      <div class="sheet-item"><div><b>预计可省</b><span>按周边超市均价对比</span></div><strong>${Math.max(12.6, cartTotal() * 0.18).toFixed(1)}元</strong></div>
    </div>
    <button class="primary-btn full" data-action="checkout">去结算</button>
  `);
}

function payOrder() {
  const code = `A${Math.floor(1 + Math.random() * 8)}-${Math.floor(1000 + Math.random() * 8999)}`;
  document.querySelector("#pickupCode").textContent = code;
  closeSheet();
  switchTab("orders");
  showToast(`已支付，${state.selectedSlot} 到柜取菜`);
}

function repeatOrder() {
  state.cart.push(products[0], products[1], products[3]);
  updateCart();
  bumpCart();
  showToast("已加入上次常买清单");
}

function recipeBuy() {
  state.cart.push(products[1], products[2], products[4]);
  updateCart();
  bumpCart();
  showToast("晚餐食材包已加入菜篮");
}

function toggleElder() {
  state.elder = !state.elder;
  document.body.classList.toggle("elder", state.elder);
  document.querySelector("#elderState").textContent = state.elder ? "开启" : "关闭";
  showToast(state.elder ? "长辈模式已开启：字体更大、步骤更少" : "长辈模式已关闭");
}

function infoPanel(action, label = "") {
  const panels = {
    notifications: ["消息中心", "备货完成、取货提醒、摊主上新都会在这里推送。", "今晚 20:44 已入柜 · 阿珍鲜菜摊上新小白菜"],
    "scan-locker": ["扫码开柜", "到柜后对准柜机扫码区，或直接使用离线取货码。", "支持语音提醒：柜门已开，请取走菜品"],
    "group-buy": ["社区团购", "小区团长可发起拼单，统一配送到自提柜，价格更低。", "春港花园团购：满 20 单再减 8%"],
    "map-detail": ["自提柜路线", "春港社区菜场东门，步行 4 分钟。", "已规划：小区南门 → 斑马线 → 菜场东门"],
    coupons: ["积分与优惠券", "积分可抵扣，优惠券按取货时段自动推荐。", "夜间自提券 ¥3 · 满39减5 · 积分1280"],
    preferences: ["自提偏好", "你可以固定常用菜场、取货时间和支付方式。", "当前：夜间优先 · 微信支付 · 冷藏柜优先"],
    feedback: ["意见反馈", "告诉我们菜品、价格、取货体验哪里需要改。", "提交后客服会在 24 小时内回复"],
    fault: ["故障上报", "用于上报柜门打不开、二维码失效、商品缺漏等问题。", "紧急问题会同步通知值班人员"],
    membership: ["放心菜会员", "会员享检测赔付、夜间免服务费、常买菜补货提醒。", "预计每月多省 ¥18-36"],
    "pickup-codes": ["取货码收藏", "常用取货码和历史柜口会离线保存。", "A8-2196 · 东门12号格 · 今天22:30前"],
    "qr-detail": ["取货二维码", "二维码已放大，可直接给柜机扫码。", "取货码 A8-2196 · 离线可用"],
    "contact-vendor": ["联系摊主", "可以备注菜品大小、熟度、是否去根。", "已为你打开阿珍鲜菜摊对话入口"],
    "pay-method": ["支付方式", "支持微信、支付宝和积分抵扣组合支付。", "当前使用微信支付"],
    "share-dish": ["晒单积分", "上传成品照，可获得积分并生成下次复购清单。", "本次晒单预计 +20积分"],
    "recipe-detail": ["菜谱详情", "番茄牛肉汤搭配清炒时蔬，3人份，25分钟。", "已包含牛腩、番茄、胡萝卜、小白菜和基础调料"],
    "meal-detail": [`${label}菜谱`, "根据时段推荐快手搭配，可一键生成购物清单。", "可替换口味：少油、低盐、儿童友好"],
    "order-step": [label || "订单进度", "订单状态实时同步，异常会自动提醒。", "如超过预约时间未取，系统会再次推送提醒"]
  };
  const [title, text, note] = panels[action] || ["功能详情", "这个入口已经接入，可继续扩展真实服务。", "原型中先展示关键体验"];
  openSheet("功能入口", title, `
    <div class="sheet-list">
      <div class="sheet-item"><div><b>${text}</b><span>${note}</span></div></div>
    </div>
    <div class="form-box" style="margin-top:10px">
      <textarea placeholder="可输入备注，例如：番茄要熟一点，青菜少一点根"></textarea>
    </div>
    <button class="primary-btn full" data-action="close-sheet">知道了</button>
  `);
}

document.addEventListener("click", (event) => {
  addRipple(event);
  const addButton = event.target.closest("[data-add]");
  const tabButton = event.target.closest("[data-tab]");
  const actionButton = event.target.closest("[data-action]");
  const followButton = event.target.closest("[data-follow]");
  const productButton = event.target.closest("[data-product]");
  const productPhotoButton = event.target.closest("[data-product-photo]");
  const vendorButton = event.target.closest("[data-vendor]");
  const photoButton = event.target.closest("[data-photo]");
  const seasonalButton = event.target.closest("[data-seasonal]");
  const slotButton = event.target.closest("[data-slot]");
  const orderStatus = event.target.closest("[data-order-status]");

  if (addButton) addToCart(Number(addButton.dataset.add));
  if (productButton) productDetail(Number(productButton.dataset.product));
  if (productPhotoButton) photoViewer(products[Number(productPhotoButton.dataset.productPhoto)]);
  if (photoButton) photoViewer(seasonalVegetables[Number(photoButton.dataset.photo)]);
  if (seasonalButton) {
    state.seasonalIndex = Number(seasonalButton.dataset.seasonal);
    renderSeasonalCarousel();
  }
  if (vendorButton) vendorDetail(Number(vendorButton.dataset.vendor));
  if (tabButton) switchTab(tabButton.dataset.tab);
  if (followButton) showToast(`已关注${followButton.dataset.follow}，上新会提醒你`);
  if (slotButton) {
    state.selectedSlot = slotButton.dataset.slot;
    checkoutSheet();
  }
  if (orderStatus) {
    document.querySelectorAll("[data-order-status]").forEach((button) => button.classList.toggle("active", button === orderStatus));
    showToast(`已切换到${orderStatus.dataset.orderStatus}订单`);
  }

  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "close-sheet") closeSheet();
  if (action === "checkout") checkoutSheet();
  if (action === "pay-order") payOrder();
  if (action === "cart-detail") cartDetail();
  if (action === "next-seasonal") {
    state.seasonalIndex = (state.seasonalIndex + 1) % seasonalVegetables.length;
    renderSeasonalCarousel();
  }
  if (action === "quick-order") checkoutSheet();
  if (action === "repeat-order") repeatOrder();
  if (action === "recipe-buy") recipeBuy();
  if (action === "toggle-elder") toggleElder();
  if (action === "market-detail" || action === "market-card-detail") marketDetail();
  if (action === "category") {
    closeSheet();
    switchTab("home");
    showToast(`已筛选：${actionButton.dataset.category}`);
  }
  if (action === "open-locker") showToast("柜门已打开，请取走本单菜品");
  if (action === "navigate") infoPanel("map-detail");
  if (["notifications", "scan-locker", "group-buy", "map-detail", "coupons", "preferences", "feedback", "fault", "membership", "pickup-codes", "qr-detail", "contact-vendor", "pay-method", "share-dish", "recipe-detail"].includes(action)) infoPanel(action);
  if (action === "meal-detail") infoPanel(action, actionButton.dataset.meal);
  if (action === "order-step") infoPanel(action, actionButton.dataset.title);
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  const keyword = event.target.value.trim();
  const filtered = products.filter((item) => `${item.name}${item.vendor}${item.tag}${item.desc}`.includes(keyword));
  renderProducts(keyword ? filtered : products);
});

window.setInterval(() => {
  const timer = document.querySelector("#pickupTimer");
  const minutes = Number(timer.textContent.match(/\d+/)?.[0] || 42);
  timer.textContent = `剩余 ${Math.max(1, minutes - 1)} 分钟`;
}, 60000);

renderProducts();
renderVendors();
renderSeasonalCarousel();
updateCart();

window.setInterval(() => {
  if (state.activeTab !== "home" || !sheet.classList.contains("hidden")) return;
  state.seasonalIndex = (state.seasonalIndex + 1) % seasonalVegetables.length;
  renderSeasonalCarousel();
}, 4500);
