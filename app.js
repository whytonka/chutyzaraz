const API_ENDPOINT = "/api/lead"; // backend endpoint

const formatUAH = (n) =>
  new Intl.NumberFormat("uk-UA").format(n) + " грн";

const discount30 = (oldPrice) => Math.round(oldPrice * 0.7);

const DATA = {
  oticon: [
    { line: "Oticon More", model: "More 1 miniRITE R", old: 114900 },
    { line: "Oticon More", model: "More 2 miniRITE R", old: 93910 },
    { line: "Oticon More", model: "More 3 miniRITE R", old: 62167 },

    { line: "Oticon Real", model: "Real 1 miniRITE R", old: 60134 },
    { line: "Oticon Real", model: "Real 2 miniRITE R", old: 97700 },
    { line: "Oticon Real", model: "Real 3 miniRITE R", old: 62060 },

    { line: "Oticon Xceed", model: "Xceed 1 BTE UP", old: 93800 },
    { line: "Oticon Xceed", model: "Xceed 2 BTE SP", old: 66233 },
    { line: "Oticon Xceed", model: "Xceed 3 BTE SP", old: 42400 },

    { line: "Oticon OPN S", model: "OPN S 1 miniRITE", old: 63451 },
    { line: "Oticon OPN S", model: "OPN S 2 miniRITE", old: 73500 },
    { line: "Oticon OPN S", model: "OPN S 3 miniRITE", old: 48545 },

    { line: "Oticon Intent", model: "Intent 2 miniRITE", old: 93313 },
    { line: "Oticon Intent", model: "Intent 3 miniRITE", old: 84032 },
    { line: "Oticon Intent", model: "Intent 4 miniRITE", old: 60800 },
  ],
  bernafon: [
    { line: "Bernafon Leox", model: "Leox 3 SP", old: 27000 },
    { line: "Bernafon Leox", model: "Leox 7 UP", old: 42000 },
    { line: "Bernafon Alpha", model: "Alpha 5 miniRITE T", old: 33500 },
    { line: "Bernafon Alpha", model: "Alpha 7 miniRITE T", old: 48000 },
    { line: "Bernafon Alpha", model: "Alpha 9 miniBTE T R", old: 58000 },
    { line: "Bernafon Viron", model: "Viron 1 BTE", old: 21400 },
    { line: "Bernafon Zerena", model: "Zerena 3 BTE", old: 22000 },
  ],
};

const REVIEWS = {
  uk: [
    { name: "Олена, Київ", text: "Дуже вдячна за допомогу у підборі апарату. Все налаштували під мою аудіограму — стало набагато комфортніше." },
    { name: "Віктор, 58 років", text: "Допомогли обрати Oticon, пояснили різницю між моделями. Приємно, що зробили знижку." },
    { name: "Марія, Київ", text: "Сподобалося, що не нав’язують найдорожче. Підібрали варіант під мій бюджет." },
    { name: "Ігор", text: "Все чітко: консультація, підбір, налаштування та гарантія. Рекомендую." },
    { name: "Наталія", text: "Розстрочка без відсотків дуже виручила. Дякую за сервіс і терпіння." },
    { name: "Сергій", text: "Після налаштування якість життя реально змінилась — стало легше спілкуватися з родиною." },
  ],
  ru: [
    { name: "Елена, Киев", text: "Очень благодарна за помощь в подборе. Все настроили по моей аудиограмме — стало намного комфортнее." },
    { name: "Виктор, 58 лет", text: "Помогли выбрать Oticon, объяснили разницу между моделями. Приятно, что сделали скидку." },
    { name: "Мария, Киев", text: "Понравилось, что не навязывают самое дорогое. Подобрали вариант под мой бюджет." },
    { name: "Игорь", text: "Все четко: консультация, подбор, настройка и гарантия. Рекомендую." },
    { name: "Наталья", text: "Рассрочка без процентов очень выручила. Спасибо за сервис и терпение." },
    { name: "Сергей", text: "После настройки стало реально легче общаться с семьей. Рекомендую." },
  ],
};

const I18N = {
  uk: {
    brandName: "Чути Зараз",
    navOticon: "Oticon",
    navBernafon: "Bernafon",
    navReviews: "Відгуки",
    navContacts: "Контакти",
    ctaHeader: "Записатися",
    badge: "Знижка 30% на весь асортимент",
    heroTitle: "Підбір і продаж слухових апаратів Oticon та Bernafon у Києві",
    heroSubtitle: "Безкоштовна консультація. Налаштування під вашу аудіограму. Розстрочка до 6 місяців без %. Гарантія 12 місяців.",
    b1: "Налаштування при покупці під аудіограму",
    b2: "Розстрочка до 6 місяців без %",
    b3: "Гарантія 12 місяців: обмін на новий при заводському браку",
    ctaHero: "Отримати безкоштовну консультацію",
    ctaCatalog: "Перейти до каталогу",
    phoneLabel: "Телефон / месенджери:",
    heroCardTitle: "Як це працює",
    s1: "Залишаєте заявку",
    s2: "Безкоштовно консультуємо",
    s3: "Підбираємо модель під потреби",
    s4: "Налаштовуємо під аудіограму",
    heroCardNote: "Особиста зустріч у Києві. Доставку можемо узгодити окремо.",

    oticonTitle: "Каталог Oticon",
    bernafonTitle: "Каталог Bernafon",
    catalogNote: "Ціни зі знижкою 30%. Доступна розстрочка до 6 місяців без %.",
    catalogNote2: "Ціни зі знижкою 30%. Доступна розстрочка до 6 місяців без %.",

    reviewsTitle: "Відгуки",
    reviewsNote: "Безкоштовна консультація та налаштування під аудіограму.",

    serviceTitle: "Налаштування при покупці",
    serviceText: "Налаштовуємо слуховий апарат(и) під вашу аудіограму та пояснюємо, як користуватися.",
    installmentTitle: "Розстрочка без %",
    installmentText: "Оформлення розстрочки до 6 місяців без відсотків. Деталі уточнюйте під час консультації.",
    warrantyTitle: "Гарантія 12 місяців",
    warrantyText: "У разі заводського браку — обмінюємо на новий слуховий апарат (за умов правильної експлуатації).",

    contactsTitle: "Контакти",
    contactsNote: "Київ. Безкоштовна консультація. Напишіть або залиште заявку.",
    contactsPhone: "Телефон / месенджери:",
    contactsMeet: "Формат:",
    contactsMeetText: "особиста зустріч у Києві (доставку можемо узгодити)",

    formTitle: "Записатися на безкоштовну консультацію",
    phName: "Ім’я",
    phPhone: "Телефон",
    phComment: "Коментар (за бажанням)",
    brandUnknown: "Не знаю",
    formSubmit: "Відправити",
    formNote: "Натискаючи “Відправити”, ви погоджуєтеся на зв’язок з вами для консультації.",
    stickyCta: "Записатися",
    popupTitle: "Безкоштовна консультація",
    popupText: "Залиште заявку — підберемо модель і підкажемо по бюджету.",
    popupBtn: "Записатися",
    footerNote: "Oticon • Bernafon • Київ",
  },

  ru: {
    brandName: "Чути Зараз",
    navOticon: "Oticon",
    navBernafon: "Bernafon",
    navReviews: "Отзывы",
    navContacts: "Контакты",
    ctaHeader: "Записаться",
    badge: "Скидка 30% на весь ассортимент",
    heroTitle: "Подбор и продаж слуховых аппаратов Oticon и Bernafon в Киеве",
    heroSubtitle: "Бесплатная консультация. Настройка по вашей аудиограмме. Рассрочка до 6 месяцев без %. Гарантия 12 месяцев.",
    b1: "Настройка при покупке по аудиограмме",
    b2: "Рассрочка до 6 месяцев без %",
    b3: "Гарантия 12 месяцев: обмен на новый при заводском браке",
    ctaHero: "Получить бесплатную консультацию",
    ctaCatalog: "Перейти в каталог",
    phoneLabel: "Телефон / мессенджеры:",
    heroCardTitle: "Как это работает",
    s1: "Оставляете заявку",
    s2: "Бесплатно консультируем",
    s3: "Подбираем модель под потребности",
    s4: "Настраиваем по аудиограмме",
    heroCardNote: "Личная встреча в Киеве. Доставку можем согласовать отдельно.",

    oticonTitle: "Каталог Oticon",
    bernafonTitle: "Каталог Bernafon",
    catalogNote: "Цены со скидкой 30%. Доступна рассрочка до 6 месяцев без %.",
    catalogNote2: "Цены со скидкой 30%. Доступна рассрочка до 6 месяцев без %.",

    reviewsTitle: "Отзывы",
    reviewsNote: "Бесплатная консультация и настройка по аудиограмме.",

    serviceTitle: "Настройка при покупке",
    serviceText: "Настраиваем слуховой аппарат(ы) по вашей аудиограмме и объясняем, как пользоваться.",
    installmentTitle: "Рассрочка без %",
    installmentText: "Оформление рассрочки до 6 месяцев без процентов. Детали уточняйте на консультации.",
    warrantyTitle: "Гарантия 12 месяцев",
    warrantyText: "При заводском браке — меняем на новый слуховой аппарат (при правильной эксплуатации).",

    contactsTitle: "Контакты",
    contactsNote: "Киев. Бесплатная консультация. Напишите или оставьте заявку.",
    contactsPhone: "Телефон / мессенджеры:",
    contactsMeet: "Формат:",
    contactsMeetText: "личная встреча в Киеве (доставку можем согласовать)",

    formTitle: "Записаться на бесплатную консультацию",
    phName: "Имя",
    phPhone: "Телефон",
    phComment: "Комментарий (по желанию)",
    brandUnknown: "Не знаю",
    formSubmit: "Отправить",
    formNote: "Нажимая “Отправить”, вы соглашаетесь на связь с вами для консультации.",
    stickyCta: "Записаться",
    popupTitle: "Бесплатная консультация",
    popupText: "Оставьте заявку — подберем модель и подскажем по бюджету.",
    popupBtn: "Записаться",
    footerNote: "Oticon • Bernafon • Киев",
  }
};

function renderCatalog(items, rootId) {
  const root = document.getElementById(rootId);
  root.innerHTML = "";

  items.forEach((it) => {
    const newPrice = discount30(it.old);
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card__top">
        <div>
          <p class="card__meta">${escapeHtml(it.line)}</p>
          <h3 class="card__title">${escapeHtml(it.model)}</h3>
        </div>
        <span class="tag tag--ok">-30%</span>
      </div>

      <div class="price">
        <span class="price__old">${formatUAH(it.old)}</span>
        <span class="price__new">${formatUAH(newPrice)}</span>
      </div>

      <div class="card__tags">
        <span class="tag" data-i18n="installmentTitle">Розстрочка без %</span>
        <a class="tag" href="#form">Записатися</a>
      </div>
    `;

    root.appendChild(card);
  });
}

function renderReviews(lang) {
  const root = document.getElementById("reviewsGrid");
  root.innerHTML = "";
  REVIEWS[lang].forEach((r) => {
    const el = document.createElement("div");
    el.className = "review";
    el.innerHTML = `
      <div class="stars">★★★★★</div>
      <div class="review__name">${escapeHtml(r.name)}</div>
      <p class="review__text">${escapeHtml(r.text)}</p>
    `;
    root.appendChild(el);
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function setLang(lang) {
  const dict = I18N[lang] || I18N.uk;
  document.documentElement.lang = lang === "ru" ? "ru" : "uk";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  renderReviews(lang);
}

function setupLang() {
  const urlLang = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("lang");
  const lang = (urlLang === "ru" || urlLang === "uk") ? urlLang : (saved || "uk");
  setLang(lang);

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const l = btn.dataset.lang;
      localStorage.setItem("lang", l);
      setLang(l);
    });
  });
}

function setupForm() {
  const form = document.getElementById("leadForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form__status";
    status.textContent = "";

    const fd = new FormData(form);
    // honeypot
    if (fd.get("company")) return;

    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      brand: String(fd.get("brand") || "Не знаю"),
      comment: String(fd.get("comment") || "").trim(),
      page: location.href,
    };

    if (!payload.name || !payload.phone) {
      status.classList.add("bad");
      status.textContent = "Заповніть ім’я та телефон.";
      return;
    }

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Bad response");
      form.reset();
      status.classList.add("ok");
      status.textContent = "Дякуємо! Ми зв’яжемося з вами найближчим часом.";
    } catch (err) {
      status.classList.add("bad");
      status.textContent = "Помилка відправки. Напишіть у месенджер або зателефонуйте: +380633646566";
    }
  });
}

function setupScrollPopup() {
  const popup = document.getElementById("scrollPopup");
  const closeBtn = document.getElementById("popupClose");
  const key = "popupShown";

  const show = () => {
    if (localStorage.getItem(key) === "1") return;
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");
    localStorage.setItem(key, "1");
  };

  const hide = () => {
    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");
  };

  closeBtn.addEventListener("click", hide);

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const doc = document.documentElement.scrollHeight - window.innerHeight;
    if (doc <= 0) return;
    const p = scrolled / doc;
    if (p > 0.45) show();
  }, { passive: true });
}

document.getElementById("year").textContent = String(new Date().getFullYear());

renderCatalog(DATA.oticon, "oticonGrid");
renderCatalog(DATA.bernafon, "bernafonGrid");
setupLang();
setupForm();
setupScrollPopup();