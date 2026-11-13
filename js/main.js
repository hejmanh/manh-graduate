const CONFIG = {
  colors: {
    bg: "#FF7A1A", paper: "#FFFFFF", deep: "#17110D", shade: "#C2500A",
    ice: "#FFE3CC", highlight: "#FFC23D", panel: "#FFF4E8", cream: "#FFFDF8"
  },
  graduate: "manh",
  fullName: "Nguyễn Ngọc Minh Anh",
  university: { vi: "Trường Đại học Việt Đức (VGU)", en: "Vietnamese-German University (VGU)" },
  event: {
    date: { vi: "20/11/2026", en: "20/11/2026" },
    address: { vi: "Đường Vành Đai 4, Phường Thới Hòa, HCMC", en: "Đường Vành Đai 4, Phường Thới Hòa, HCMC" },
    slots: ["12:00 - 13:00", "14:00 - 15:00"],
    gateNote: { vi: "(Cổng VĐ4, đừng nhầm sang cổng D9)", en: "(Gate VĐ4, don't enter through Gate D9.)"}
  },
  maps: {
    link: "https://www.google.com/maps/place/Vietnamese%E2%80%93German+University+(VGU)/@11.1075023,106.6115314,17z/data=!3m1!4b1!4m6!3m5!1s0x3174ce286d98ddc7:0xfa362a1ccda178aa!8m2!3d11.107497!4d106.6141063!16s%2Fm%2F0g9y6j9?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D",
    embed: "https://maps.google.com/maps?q=11.107497,106.6141063&z=17&output=embed"
  },
  parking: [
    { vi: "Gửi xe ở tầng hầm tòa nhà hành chính", en: "Park in the Administration Building basement" },
    { vi: "Đi thang máy lên tầng 2", en: "Take the elevator to the 2nd floor" },
    { vi: "Ra ngoài và đi qua cầu Đông", en: "Exit and cross East Bridge" }
  ],
  characterSprite: "",
  character: {
    width: 32,
    height: 48,
    palette: {
      ".": "transparent", "o": "#17110D", "g": "#2B221C", "h": "#B98A5A",
      "H": "#D1A878", "d": "#8E6438", "s": "#F2C9A0", "p": "#F29A8A", "e": "#17110D",
      "r": "#FF7A1A", "t": "#C2500A", "y": "#FFC23D", "w": "#FFFFFF"
    },
    // [y, x, width, height, paletteKey], painted in order.
    blocks: [
      [2, 10, 12, 1, "o"], [3, 6, 20, 1, "o"], [4, 3, 26, 2, "o"], [4, 5, 22, 1, "g"],
      [6, 8, 16, 2, "o"], [3, 15, 2, 1, "y"], [3, 17, 9, 1, "r"], [4, 26, 1, 1, "r"],
      [5, 27, 1, 6, "r"], [11, 26, 3, 1, "y"], [12, 25, 5, 3, "r"],
      [12, 26, 1, 3, "t"], [12, 28, 1, 3, "t"], [15, 25, 1, 1, "r"], [15, 27, 1, 1, "r"], [15, 29, 1, 1, "r"],
      [8, 9, 14, 11, "h"], [8, 11, 9, 2, "H"], [17, 9, 2, 4, "h"], [17, 21, 2, 4, "h"],
      [19, 9, 2, 2, "d"], [19, 21, 2, 2, "d"],
      [11, 11, 10, 8, "s"], [11, 13, 2, 1, "h"], [11, 17, 3, 1, "h"],
      [14, 13, 1, 2, "e"], [14, 18, 1, 2, "e"], [16, 12, 1, 1, "p"], [16, 19, 1, 1, "p"], [17, 15, 2, 1, "t"],
      [19, 14, 4, 2, "s"],
      [21, 7, 18, 4, "o"], [23, 4, 24, 9, "o"], [23, 7, 18, 19, "o"], [39, 6, 20, 5, "o"],
      [26, 8, 1, 13, "g"], [26, 23, 1, 13, "g"],
      [21, 10, 5, 18, "r"], [21, 17, 5, 18, "r"], [39, 11, 3, 1, "r"], [39, 18, 3, 1, "r"],
      [30, 4, 4, 4, "s"], [30, 24, 4, 4, "s"],
      [44, 8, 6, 3, "o"], [44, 18, 6, 3, "o"], [45, 9, 5, 1, "g"], [45, 19, 5, 1, "g"]
    ],
    sashText: [{ text: "VGU", x: 11, y: 22 }, { text: "CSE", x: 18, y: 22 }],
    sashColor: "w",
    tassel: { minX: 25, minY: 5 }
  },
  journey: [
    { year: "2022", image: "assets/journey/1.webp", alt: { vi: "Ảnh năm 2022", en: "Photo from 2022" }, caption: "" },
    { year: "2023", image: "assets/journey/2.webp", alt: { vi: "Ảnh năm 2023", en: "Photo from 2023" }, caption: "" },
    { year: "2024", image: "assets/journey/3.webp", alt: { vi: "Ảnh năm 2024", en: "Photo from 2024" }, caption: "" },
    { year: "2025", image: "assets/journey/4.webp", alt: { vi: "Ảnh năm 2025", en: "Photo from 2025" }, caption: "" },
    { year: "2026", image: "assets/journey/5.webp", alt: { vi: "Ảnh năm 2026", en: "Photo from 2026" }, caption: "" }
  ],
  dictionary: {
    vi: {
      homeSubtitle: "tốt nghiệp rùi nè! uwu", characterAlt: "{{name}} mặc áo tốt nghiệp", menuRecap: "quick recap: {{name}} ở VGU",
      menuInvitation: "thiệp mời", menuDirections: "làm sao để đến VGU", back: "← quay lại",
      recapTitle: "quick recap: {{name}} ở VGU", previous: "◀", next: "▶", recapInvitation: "thiệp mời ▶",
      continue: "tiếp tục ▶", guestDialog: "Thông tin thiệp mời", yourName: "nhập tên của bạn", nameRequired: "nhập tên của bạn", chooseTime: "bạn sẽ gặp mình lúc",
      guestGreeting: "Dear", guestLabel: "Dear {{guest}},", saveTheDate: "save the date",
      invitationTitle: "Tân cử nhân Khoa học Máy tính -", invitationLine: "mời bạn đến chụp hình cùng cô vào ngày tốt nghiệp!",
      time: "giờ gặp", download: "tải thiệp", directionsTitle: "làm sao để đến VGU",
      previousPhoto: "Ảnh trước", nextPhoto: "Ảnh tiếp theo",
      location: "địa điểm", mapsLink: "mở google maps ↗", driving: "đi xe riêng",
      ride: "cần hỗ trợ di chuyển", rideLine: "liên hệ tui",
      home: "về home", campusMapAlt: "Bản đồ khuôn viên VGU",
      longPress: "nhấn giữ ảnh để lưu", downloading: "đang tạo...", saved: "đã lưu", downloadError: "không tải được, thử lại",
      openBrowser: "mở bằng safari/chrome để tải", mapAlt: "Bản đồ khuôn viên VGU", photoCount: "{current} / {total}",
      documentTitle: "{{name}} tốt nghiệp rồi", description: "Thiệp mời tốt nghiệp của {{name}}.", homeRegion: "Home",
      mainMenu: "Main menu", languageGroup: "Language", imageViewer: "Campus map", saveImage: "Save image"
    },
    en: {
      homeSubtitle: "graduated! uwu", characterAlt: "{{name}} in a graduation gown", menuRecap: "quick recap: {{name}} at VGU",
      menuInvitation: "invitation", menuDirections: "how to get to VGU", back: "← back",
      recapTitle: "quick recap: {{name}} at VGU", previous: "◀", next: "▶", recapInvitation: "invitation ▶",
      continue: "next ▶", guestDialog: "Invitation details", yourName: "input ur name", nameRequired: "input ur name", chooseTime: "u'll meet me at",
      guestGreeting: "Dear", guestLabel: "Dear {{guest}},", saveTheDate: "save the date",
      invitationTitle: "Fresh Computer Science Graduate -", invitationLine: "invites you to come take photos with her on her graduation date!",
      time: "time", download: "download)", directionsTitle: "how to get to VGU",
      previousPhoto: "Previous photo", nextPhoto: "Next photo",
      location: "location", mapsLink: "open google maps ↗", driving: "driving",
      ride: "need a ride", rideLine: "contact me",
      home: "home", campusMapAlt: "VGU campus map",
      longPress: "long-press the image to save", downloading: "creating...", saved: "saved", downloadError: "failed, try again",
      openBrowser: "open in safari/chrome to download", mapAlt: "VGU campus map", photoCount: "{current} / {total}",
      documentTitle: "{{name}} graduated", description: "{{name}}'s graduation invitation.", homeRegion: "Home",
      mainMenu: "Main menu", languageGroup: "Language", imageViewer: "Campus map", saveImage: "Save image"
    }
  }
};

const FONT_FAMILY = "Manh Pixel";
let language = "vi";
let focusedOpener = null;
let toastTimer;
let cachedPng = null;
let carouselIndex = 0;
let mapReturn = false;
let saveReturn = false;
let inviteeName = "";
let selectedEventSlot = -1;

const SASH_FONT = {
  V: ["1.1", "1.1", "1.1", "1.1", ".1."], G: ["111", "1..", "1.1", "1.1", "111"],
  U: ["1.1", "1.1", "1.1", "1.1", "111"], C: ["111", "1..", "1..", "1..", "111"],
  S: ["111", "1..", "111", "..1", "111"], E: ["111", "1..", "111", "1..", "111"]
};

function buildCharacterMatrix() {
  const { width, height, blocks, sashText = [], sashColor } = CONFIG.character;
  const matrix = Array.from({ length: height }, () => Array(width).fill("."));
  const paint = (row, column, color) => { if (row < height && column < width) matrix[row][column] = color; };
  blocks.forEach(([y, x, blockWidth, blockHeight, color]) => {
    for (let row = y; row < y + blockHeight; row++) {
      for (let column = x; column < x + blockWidth; column++) paint(row, column, color);
    }
  });
  sashText.forEach(({ text, x, y }) => {
    [...text.toUpperCase()].forEach((letter, index) => {
      (SASH_FONT[letter] || []).forEach((line, row) => {
        [...line].forEach((bit, column) => { if (bit === "1") paint(y + index * 6 + row, x + column, sashColor); });
      });
    });
  });
  CONFIG.character.matrix = matrix.map(row => row.join(""));
  delete CONFIG.character.blocks;
}

function characterSvg() {
  const { width, height, palette, matrix, tassel } = CONFIG.character;
  const pixels = [];
  const tasselPixels = [];
  matrix.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const shade = row[x];
      if (shade === ".") continue;
      const rect = `<rect${shade === "e" ? " class=\"sprite-blink\"" : ""} x="${x}" y="${y}" width="1" height="1" fill="${palette[shade]}"/>`;
      const isTassel = "rty".includes(shade) && x >= tassel.minX && y >= tassel.minY && y < 16;
      (isTassel ? tasselPixels : pixels).push(rect);
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges" aria-hidden="true">${pixels.join("")}<g class="sprite-tassel">${tasselPixels.join("")}</g></svg>`;
}

function tr(key) {
  return (CONFIG.dictionary[language][key] || "")
    .replaceAll("{{name}}", CONFIG.graduate)
    .replaceAll("{{guest}}", inviteeName)
    .replaceAll("{{fullName}}", CONFIG.fullName);
}
function localized(value) { return typeof value === "string" ? value : (value?.[language] || ""); }
function setLanguage(nextLanguage, persist = true) {
  language = nextLanguage === "en" ? "en" : "vi";
  document.documentElement.lang = language;
  document.title = tr("documentTitle");
  document.querySelector(".home-title").textContent = CONFIG.graduate;
  const description = tr("description");
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[name="twitter:title"]').content = document.title;
  document.querySelector('meta[name="twitter:description"]').content = description;
  document.querySelectorAll("[data-i18n]").forEach(node => { node.textContent = tr(node.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria]").forEach(node => { node.setAttribute("aria-label", tr(node.dataset.i18nAria)); });
  document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
  document.querySelectorAll("[data-config='fullName']").forEach(node => { node.textContent = CONFIG.fullName; });
  document.querySelectorAll("[data-config='university']").forEach(node => { node.textContent = localized(CONFIG.university); });
  document.getElementById("event-date").textContent = localized(CONFIG.event.date);
  document.getElementById("event-address").textContent = localized(CONFIG.event.address);
  document.getElementById("direction-address").textContent = localized(CONFIG.event.address);
  document.getElementById("gate-note").textContent = localized(CONFIG.event.gateNote);
  document.getElementById("maps-link").href = CONFIG.maps.link.startsWith("TODO:") ? "#" : CONFIG.maps.link;
  document.querySelectorAll(".language-button").forEach(button => button.classList.toggle("is-active", button.dataset.language === language));
  renderMenu();
  renderJourney();
  renderParking();
  document.getElementById("home-character").innerHTML = CONFIG.characterSprite ? `<img src="${CONFIG.characterSprite}" alt="">` : characterSvg();
  document.getElementById("card-character").innerHTML = CONFIG.characterSprite ? `<img src="${CONFIG.characterSprite}" alt="">` : characterSvg();
  document.getElementById("campus-map").alt = tr("campusMapAlt");
  document.getElementById("campus-map-large").alt = tr("campusMapAlt");
  if (CONFIG.maps.embed && !CONFIG.maps.embed.startsWith("TODO:")) {
    document.getElementById("map-embed-frame").innerHTML = `<iframe src="${CONFIG.maps.embed}" loading="lazy" title="${tr("location")}"></iframe>`;
  } else document.getElementById("map-embed-frame").replaceChildren();
  if (persist) { try { localStorage.setItem("manh-language", language); } catch { /* Storage may be disabled. */ } }
  cachedPng = null;
  if (document.getElementById("download-status")) document.getElementById("download-status").textContent = "";
}

function renderMenu() {
  const items = [
    { key: "menuRecap", dialog: "recap" },
    { key: "menuInvitation", dialog: "guest" },
    { key: "menuDirections", dialog: "directions" }
  ];
  document.getElementById("home-menu").innerHTML = items.map((item, index) => `<button class="pixel-button menu-button" type="button" data-open="${item.dialog}" data-menu-index="${index}" aria-current="${index === 0}">${tr(item.key)}</button>`).join("");
}

function enablePngFallback(image) {
  image.addEventListener("error", () => {
    const source = image.getAttribute("src") || "";
    if (!image.dataset.pngFallback && /\.webp$/i.test(source)) {
      image.dataset.pngFallback = "true";
      image.src = source.replace(/\.webp$/i, ".png");
      return;
    }
    image.hidden = true;
  });
}

function renderJourney() {
  const track = document.getElementById("journey-track");
  track.innerHTML = CONFIG.journey.map((item, index) => `<article class="journey-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${CONFIG.journey.length}"><div class="year-badge">${item.year}</div><div class="journey-photo-frame"><img src="${item.image}" alt="${localized(item.alt)}" loading="lazy"></div>${item.caption ? `<p class="journey-caption">${localized(item.caption)}</p>` : ""}</article>`).join("");
  track.querySelectorAll("img").forEach(enablePngFallback);
  document.getElementById("journey-dots").innerHTML = CONFIG.journey.map((_, index) => `<button class="carousel-dot" type="button" data-slide="${index}" aria-label="${index + 1}" aria-current="${index === carouselIndex}"></button>`).join("");
  updateCarousel();
}

function renderParking() {
  document.getElementById("parking-list").innerHTML = CONFIG.parking.map(item => `<li>${localized(item)}</li>`).join("");
}

function updateCarousel(scroll = false) {
  const slides = [...document.querySelectorAll(".journey-slide")];
  carouselIndex = Math.max(0, Math.min(CONFIG.journey.length - 1, carouselIndex));
  if (scroll && slides[carouselIndex]) slides[carouselIndex].scrollIntoView({ block: "nearest", inline: "start", behavior: "smooth" });
  document.getElementById("journey-prev").disabled = carouselIndex === 0;
  document.getElementById("journey-next").disabled = carouselIndex === CONFIG.journey.length - 1;
  document.getElementById("journey-counter").textContent = tr("photoCount").replace("{current}", carouselIndex + 1).replace("{total}", CONFIG.journey.length);
  document.querySelectorAll(".carousel-dot").forEach((dot, index) => dot.setAttribute("aria-current", String(index === carouselIndex)));
}

function fitHome() {
  const compact = innerWidth < 850;
  const scale = compact
    ? Math.min((innerWidth - 32) / 520, (innerHeight - 130) / 640, 1)
    : Math.max(.35, Math.min(innerWidth / 1512, innerHeight / 982));
  document.querySelector(".home-layout").style.setProperty("--home-scale", String(Math.max(.35, scale)));
}

function openDialog(name, opener = document.activeElement) {
  const dialog = document.getElementById(`${name}-dialog`);
  if (!dialog) return;
  if (!document.querySelector("dialog[open]")) focusedOpener = opener;
  document.querySelectorAll("dialog[open]").forEach(open => open.close());
  dialog.showModal();
  (dialog.querySelector("[data-autofocus]") || dialog.querySelector("[data-close]"))?.focus({ preventScroll: true });
}

function renderGuestTimeOptions() {
  const options = document.getElementById("guest-time-options");
  options.innerHTML = CONFIG.event.slots.map((slot, index) => `<label class="guest-time-option"><input type="radio" name="eventSlot" value="${index}" required><span>${slot}</span></label>`).join("");
}

function applyGuestDetails(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const nameInput = document.getElementById("guest-name-input");
  inviteeName = nameInput.value.trim();
  if (!inviteeName) {
    nameInput.setCustomValidity(tr("nameRequired"));
    nameInput.reportValidity();
    return;
  }
  nameInput.setCustomValidity("");
  selectedEventSlot = Number(new FormData(form).get("eventSlot"));
  document.getElementById("invitee-display").textContent = inviteeName;
  const selectedSlot = document.createElement("div");
  selectedSlot.className = "time-slot selected-time";
  selectedSlot.textContent = CONFIG.event.slots[selectedEventSlot];
  document.getElementById("time-slots").replaceChildren(selectedSlot);
  cachedPng = null;
  openDialog("invitation", focusedOpener || document.activeElement);
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function pxRect(context, x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(Math.round(x / 4) * 4, Math.round(y / 4) * 4, Math.round(width / 4) * 4, Math.round(height / 4) * 4);
}

function pixelPanel(context, x, y, width, height, fill, border = 8) {
  pxRect(context, x + 12, y + 12, width, height, CONFIG.colors.shade);
  pxRect(context, x, y, width, height, CONFIG.colors.deep);
  pxRect(context, x + border, y + border, width - border * 2, height - border * 2, fill);
  pxRect(context, x + border + 4, y + border + 4, width - border * 2 - 8, 4, `${CONFIG.colors.deep}0F`);
}

function drawCharacter(context, x, y, scale) {
  const { matrix, palette } = CONFIG.character;
  matrix.forEach((row, rowIndex) => {
    for (let column = 0; column < row.length; column++) {
      const shade = row[column];
      if (shade !== ".") pxRect(context, x + column * scale, y + rowIndex * scale, scale, scale, palette[shade]);
    }
  });
}

function wrapText(context, text, x, y, maxWidth, lineHeight, fontSize, minFontSize = 26) {
  let size = fontSize;
  let lines;
  do {
    context.font = `700 ${size}px "${FONT_FAMILY}", "Pixelify Sans", "VT323", monospace`;
    lines = [];
    const words = String(text).split(/\s+/);
    let line = "";
    words.forEach(word => {
      const candidate = line ? `${line} ${word}` : word;
      if (line && context.measureText(candidate).width > maxWidth) { lines.push(line); line = word; }
      else line = candidate;
    });
    if (line) lines.push(line);
    if (lines.every(lineText => context.measureText(lineText).width <= maxWidth) || size <= minFontSize) break;
    size -= 2;
  } while (size >= minFontSize);
  lines.forEach((line, index) => context.fillText(line, x, y + index * lineHeight, maxWidth));
  return { lines: lines.length, fontSize: size };
}

async function createInvitationPng() {
  if (cachedPng) return cachedPng;
  try { await document.fonts.load(`700 48px "${FONT_FAMILY}"`); } catch { /* Use the system fallback when the optional font is absent. */ }
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = 1240;
  canvas.height = 1748;
  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.textAlign = "center";
  context.textBaseline = "top";
  pxRect(context, 0, 0, canvas.width, canvas.height, CONFIG.colors.bg);
  pixelPanel(context, 72, 72, 1096, 1600, CONFIG.colors.cream, 12);
  pxRect(context, 190, 132, 860, 96, CONFIG.colors.bg);
  context.fillStyle = CONFIG.colors.paper;
  context.shadowColor = CONFIG.colors.shade;
  context.shadowOffsetX = 4;
  context.shadowOffsetY = 4;
  wrapText(context, tr("saveTheDate"), 620, 150, 820, 58, 52, 36);
  context.shadowColor = "transparent";
  drawCharacter(context, 556, 270, 4);
  context.fillStyle = CONFIG.colors.deep;
  const content = [
    { text: tr("guestLabel"), y: 470, size: 36, line: 50, min: 26, color: CONFIG.colors.deep },
    { text: tr("invitationTitle"), y: 545, size: 36, line: 50, min: 26, highlight: true },
    { text: CONFIG.fullName, y: 595, size: 36, line: 50, min: 26, color: CONFIG.colors.shade },
    { text: tr("invitationLine"), y: 670, size: 36, line: 50, min: 24 },
    { text: localized(CONFIG.event.date), y: 790, size: 36, line: 50, min: 28, highlight: true },
    { text: localized(CONFIG.university), y: 880, size: 32, line: 46, min: 24, color: CONFIG.colors.shade },
    { text: localized(CONFIG.event.address), y: 960, size: 32, line: 46, min: 22, color: CONFIG.colors.deep },
    { text: tr("time"), y: 1090, size: 36, line: 50, min: 28, color: CONFIG.colors.deep }
  ];
  content.forEach(item => {
    context.fillStyle = item.color || (item.highlight ? CONFIG.colors.shade : CONFIG.colors.deep);
    wrapText(context, item.text, 620, item.y, 900, item.line, item.size, item.min);
  });
  const slotY = 1210;
  pixelPanel(context, 380, slotY, 480, 140, CONFIG.colors.highlight, 8);
  context.fillStyle = CONFIG.colors.deep;
  wrapText(context, CONFIG.event.slots[selectedEventSlot], 620, slotY + 45, 430, 48, 34, 26);
  cachedPng = await new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("Canvas export failed")), "image/png"));
  return cachedPng;
}

async function downloadInvitation() {
  const button = document.getElementById("download-button");
  const status = document.getElementById("download-status");
  button.disabled = true;
  button.textContent = tr("downloading");
  status.textContent = tr("downloading");
  try {
    const blob = await createInvitationPng();
    const fileName = language === "vi" ? "manh-tot-nghiep.png" : "manh-graduation.png";
    const file = new File([blob], fileName, { type: "image/png" });
    const userAgent = navigator.userAgent || "";
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const inApp = /FBAN|FBAV|Instagram|TikTok|Twitter|Zalo|Messenger/i.test(userAgent);
    if (inApp) showToast(tr("openBrowser"));
    if (isIOS && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: document.title });
      status.textContent = tr("saved");
      showToast(tr("saved"));
    } else if (isIOS) {
      const url = URL.createObjectURL(blob);
      document.getElementById("save-image").src = url;
      saveReturn = true;
      document.getElementById("save-dialog").addEventListener("close", () => URL.revokeObjectURL(url), { once: true });
      openDialog("save", button);
    } else {
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = fileName;
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      status.textContent = tr("saved");
      showToast(tr("saved"));
    }
  } catch (error) {
    if (error?.name !== "AbortError") {
      status.textContent = tr("downloadError");
      showToast(tr("downloadError"));
    }
  } finally {
    button.disabled = false;
    button.textContent = tr("download");
  }
}

function openMapViewer() {
  mapReturn = document.getElementById("directions-dialog").open;
  closeDialog(document.getElementById("directions-dialog"));
  const viewer = document.getElementById("image-viewer");
  viewer.style.setProperty("--zoom", "1");
  viewer.style.setProperty("--pan-x", "0px");
  viewer.style.setProperty("--pan-y", "0px");
  openDialog("image", document.getElementById("campus-map-button"));
}

function initMapGestures() {
  const viewer = document.getElementById("image-viewer");
  const image = document.getElementById("campus-map-large");
  let pointers = new Map();
  let startDistance = 0;
  let startZoom = 1;
  let start = null;
  let pan = { x: 0, y: 0 };
  const distance = values => Math.hypot(values[0].x - values[1].x, values[0].y - values[1].y);
  viewer.addEventListener("pointerdown", event => {
    viewer.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 1) { start = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y }; viewer.classList.add("is-dragging"); }
    else if (pointers.size === 2) { startDistance = distance([...pointers.values()]); startZoom = Number(viewer.style.getPropertyValue("--zoom")) || 1; }
  });
  viewer.addEventListener("pointermove", event => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 2) {
      const zoom = Math.min(5, Math.max(1, startZoom * distance([...pointers.values()]) / startDistance));
      viewer.style.setProperty("--zoom", String(zoom));
    } else if (start) {
      pan.x = start.panX + event.clientX - start.x;
      pan.y = start.panY + event.clientY - start.y;
      viewer.style.setProperty("--pan-x", `${pan.x}px`);
      viewer.style.setProperty("--pan-y", `${pan.y}px`);
    }
  });
  const end = event => { pointers.delete(event.pointerId); if (!pointers.size) { start = null; viewer.classList.remove("is-dragging"); } };
  viewer.addEventListener("pointerup", end);
  viewer.addEventListener("pointercancel", end);
  image.addEventListener("wheel", event => {
    event.preventDefault();
    const zoom = Math.min(5, Math.max(1, (Number(viewer.style.getPropertyValue("--zoom")) || 1) - Math.sign(event.deltaY) * .2));
    viewer.style.setProperty("--zoom", String(zoom));
  }, { passive: false });
}

function init() {
  buildCharacterMatrix();
  try { language = localStorage.getItem("manh-language") || "vi"; } catch { language = "vi"; }
  setLanguage(language, false);
  renderGuestTimeOptions();
  fitHome();
  window.addEventListener("resize", fitHome);
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  document.getElementById("home-menu").addEventListener("pointerover", event => {
    const button = event.target.closest("[data-menu-index]");
    if (!button) return;
    document.querySelectorAll(".menu-button").forEach(item => item.setAttribute("aria-current", String(item === button)));
  });
  document.getElementById("home-menu").addEventListener("keydown", event => {
    if (!event.target.matches(".menu-button") || !["ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    const buttons = [...document.querySelectorAll(".menu-button")];
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const next = (buttons.indexOf(event.target) + direction + buttons.length) % buttons.length;
    buttons.forEach((button, index) => button.setAttribute("aria-current", String(index === next)));
    buttons[next].focus();
  });
  document.getElementById("home-menu").addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target.matches(".menu-button")) event.target.click();
  });
  document.getElementById("character-button").addEventListener("click", event => {
    event.currentTarget.classList.remove("is-hopping");
    requestAnimationFrame(() => event.currentTarget.classList.add("is-hopping"));
  });
  document.addEventListener("click", event => {
    const opener = event.target.closest("[data-open]");
    if (opener) openDialog(opener.dataset.open, opener);
    if (event.target.closest("[data-close]")) closeDialog(event.target.closest("dialog"));
    const home = event.target.closest("[data-home]");
    if (home) { closeDialog(home.closest("dialog")); document.querySelector(".menu-button")?.focus(); }
  });
  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(dialog); });
    dialog.addEventListener("close", () => {
      if (dialog.id === "save-dialog" && saveReturn) {
        saveReturn = false;
        openDialog("invitation", document.getElementById("download-button"));
        document.getElementById("download-button").focus({ preventScroll: true });
      } else if (dialog.id === "image-dialog" && mapReturn) {
        mapReturn = false;
        openDialog("directions", document.getElementById("campus-map-button"));
        document.getElementById("campus-map-button").focus({ preventScroll: true });
      } else if (focusedOpener?.isConnected && !document.querySelector("dialog[open]")) focusedOpener.focus({ preventScroll: true });
    });
  });
  document.getElementById("journey-prev").addEventListener("click", () => { carouselIndex--; updateCarousel(true); });
  document.getElementById("journey-next").addEventListener("click", () => { carouselIndex++; updateCarousel(true); });
  document.getElementById("journey-dots").addEventListener("click", event => {
    const dot = event.target.closest("[data-slide]");
    if (dot) { carouselIndex = Number(dot.dataset.slide); updateCarousel(true); }
  });
  document.getElementById("journey-track").addEventListener("scroll", () => {
    const track = document.getElementById("journey-track");
    const width = track.clientWidth;
    if (width) { carouselIndex = Math.round(track.scrollLeft / width); updateCarousel(); }
  }, { passive: true });
  document.addEventListener("keydown", event => {
    if (!document.getElementById("recap-dialog").open) return;
    if (event.key === "ArrowRight") { carouselIndex++; updateCarousel(true); }
    if (event.key === "ArrowLeft") { carouselIndex--; updateCarousel(true); }
  });
  document.getElementById("download-button").addEventListener("click", downloadInvitation);
  document.getElementById("guest-form").addEventListener("submit", applyGuestDetails);
  document.getElementById("guest-name-input").addEventListener("input", event => event.currentTarget.setCustomValidity(""));
  document.getElementById("campus-map-button").addEventListener("click", openMapViewer);
  [document.getElementById("campus-map"), document.getElementById("campus-map-large")].forEach(enablePngFallback);
  initMapGestures();
}

init();