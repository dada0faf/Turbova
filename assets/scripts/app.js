(function () {
  const shell = document.getElementById("site-shell");
  const siteData = window.siteData;
  if (!shell || !siteData) return;

  const pageId = document.body.dataset.page || "home";
  const languageKey = "turbova-language";
  const transitionKey = "turbova-page-transition";

  const languages = (siteData.languages && siteData.languages.length)
    ? siteData.languages
    : [
        { code: "en", label: "English", short: "EN" },
        { code: "cs", label: "Čeština", short: "CZ" },
        { code: "ru", label: "Русский", short: "RU" },
        { code: "fr", label: "Français", short: "FR" },
      ];
  const validCodes = languages.map((item) => item.code);
  const storedLang = localStorage.getItem(languageKey);
  const lang = validCodes.includes(storedLang) ? storedLang : "en";

  const entering = sessionStorage.getItem(transitionKey) === "active";
  let cleanups = [];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Clean up stuck transition state when the browser restores this page from bfcache
  // (back/forward navigation). Without this, the green veil stays visible indefinitely.
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      document.body.classList.remove("is-transition-out", "menu-open");
      const menu = shell.querySelector(".mobile-menu");
      const toggle = shell.querySelector(".menu-button");
      if (menu) menu.classList.remove("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });

  const arrow = '<span class="button__arrow" aria-hidden="true">&rarr;</span>';

  function getGlobal(locale) {
    return siteData.global[locale] || siteData.global.en;
  }

  function getPage(locale) {
    return siteData.pages[pageId][locale] || siteData.pages[pageId].en;
  }

  // Wrap heading text in line-reveal masks (split on spaces into balanced lines is overkill;
  // we mask the whole heading as a single rising line for a calm, controlled motion).
  function heading(tag, text, className) {
    const cls = className ? ` class="${className}"` : "";
    return `<${tag}${cls}><span class="line-reveal"><span>${text}</span></span></${tag}>`;
  }

  function renderNavLinks(locale, className) {
    const globalData = getGlobal(locale);
    return siteData.navigation
      .map((item, index) => {
        const activeClass = item.slug === pageId ? " is-active" : "";
        const indexAttr =
          className === "mobile-nav-link"
            ? ` data-index="0${index + 1}"`
            : "";
        return `<a class="${className}${activeClass}"${indexAttr} href="${item.href}">${globalData.menu[item.slug]}</a>`;
      })
      .join("");
  }

  function renderLanguageSelect(locale, globalData) {
    const current = languages.find((item) => item.code === locale) || languages[0];
    const globeIcon = `
      <svg class="lang-globe__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <path d="M12 3c2.5 2.6 2.5 15.4 0 18c-2.5-2.6-2.5-15.4 0-18z"></path>
      </svg>`;
    return `
      <div class="lang-select" data-lang-select>
        <button class="lang-globe" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${globalData.languageLabel}">
          ${globeIcon}
          <span class="lang-globe__code">${current.short}</span>
          <span class="lang-globe__chevron" aria-hidden="true"></span>
        </button>
        <ul class="lang-menu" role="menu">
          ${languages
            .map(
              (item) => `
                <li role="none">
                  <button class="lang-option ${item.code === locale ? "is-active" : ""}" type="button" role="menuitemradio" aria-checked="${item.code === locale}" data-lang="${item.code}">
                    <span class="lang-option__label">${item.label}</span>
                    <span class="lang-option__code">${item.short}</span>
                  </button>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;
  }

  function renderNavigation(locale) {
    const globalData = getGlobal(locale);
    return `
      <header class="site-header">
        <a class="brandmark" href="index.html" aria-label="${globalData.brand}">
          <span class="brandmark-word">${globalData.brand}</span>
          <span class="brandmark-sub">${globalData.strap}</span>
        </a>
        <nav class="desktop-nav" aria-label="${globalData.menuLabel}">
          ${renderNavLinks(locale, "nav-link")}
        </nav>
        <div class="header-actions">
          <a class="button button-enquire" href="contact.html">${globalData.enquireLabel}</a>
          ${renderLanguageSelect(locale, globalData)}
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${globalData.menuLabel}">
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <aside class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu__head">
          <div>
            <p class="eyebrow">${globalData.strap}</p>
            <h2>${globalData.brand}</h2>
          </div>
          <button class="mobile-close" type="button">${globalData.closeLabel}</button>
        </div>
        <nav class="mobile-links" aria-label="${globalData.menuLabel}">
          ${renderNavLinks(locale, "mobile-nav-link")}
        </nav>
        <div class="mobile-menu__lang">
          ${renderLanguageSelect(locale, globalData)}
        </div>
      </aside>
    `;
  }

  function renderMetricStrip(items, className = "metric-strip") {
    return `
      <section class="${className} reveal stagger">
        ${items
          .map(
            (item) => `
              <article class="metric-card">
                <strong>${item.value}</strong>
                <span>${item.label}</span>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderGallery(items) {
    return `
      <div class="gallery-grid stagger">
        ${items
          .map(
            (item, index) => `
              <figure class="gallery-card ${index === 0 ? "gallery-card--wide" : ""}">
                <img src="${item.src}" alt="${item.alt}" loading="lazy" />
              </figure>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderFloatingBadges(badges) {
    return badges
      .map((badge, index) => {
        const label = typeof badge === "string" ? badge : badge.label;
        const note = typeof badge === "string" ? "" : badge.note;
        return `
          <div class="floating-badge floating-badge--${index + 1}">
            <strong>${label}</strong>
            ${note ? `<span>${note}</span>` : ""}
          </div>
        `;
      })
      .join("");
  }

  function renderImageCarousel(items) {
    // Duplicate the first slide at the end so the track can wrap seamlessly.
    const slides = items.concat(items.length > 1 ? [items[0]] : []);
    return `
      <div class="img-carousel" data-carousel>
        <div class="img-carousel__track">
          ${slides
            .map(
              (item) => `
                <figure class="img-carousel__slide">
                  <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                </figure>
              `
            )
            .join("")}
        </div>
        ${
          items.length > 1
            ? `
              <button class="img-carousel__arrow img-carousel__arrow--prev" type="button" aria-label="Previous image" data-carousel-prev>
                <span aria-hidden="true">&larr;</span>
              </button>
              <button class="img-carousel__arrow img-carousel__arrow--next" type="button" aria-label="Next image" data-carousel-next>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <div class="img-carousel__dots">${items
                .map((_, i) => `<button class="img-carousel__dot${i === 0 ? " is-active" : ""}" type="button" data-carousel-dot="${i}" aria-label="Go to image ${i + 1}"></button>`)
                .join("")}</div>`
            : ""
        }
      </div>
    `;
  }

  function renderCollage(items, variant, badges) {
    return `
      <div class="collage collage--${variant}">
        ${renderImageCarousel(items)}
      </div>
    `;
  }

  function renderHome(locale) {
    const data = getPage(locale);
    const globalData = getGlobal(locale);
    const collageItems = [
      { src: data.hero.media[0].src, alt: data.hero.media[0].alt },
      { src: data.hero.media[1].src, alt: data.hero.media[1].alt },
    ];

    return `
      <main class="page page-home">
        <section class="hero-shell hero-shell--home reveal is-visible">
          <div class="hero-shell__copy">
            <p class="eyebrow">${data.hero.eyebrow}</p>
            ${heading("h1", data.hero.title)}
            <p class="lead">${data.hero.lead}</p>
            <p class="description">${data.hero.description}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${data.hero.primary.href}">${data.hero.primary.label}${arrow}</a>
              <a class="button button-secondary" href="${data.hero.secondary.href}">${data.hero.secondary.label}</a>
            </div>
            <div class="hero-badge-row">
              ${data.hero.badges.map((badge) => `<span class="hero-badge">${badge}</span>`).join("")}
            </div>
          </div>
          ${renderCollage(collageItems, "home", [])}
        </section>

        ${renderMetricStrip(data.stats)}

        <section class="chapter-rail reveal">
          <div class="section-heading">
            <p class="eyebrow">${globalData.chapterLabel}</p>
            ${heading("h2", data.chaptersTitle)}
          </div>
          <div class="chapter-list stagger">
            ${data.chapters
              .map(
                (chapter) => `
                  <a class="chapter-card" href="${chapter.href}">
                    <span class="chapter-card__number">${chapter.number}</span>
                    <h3>${chapter.title}</h3>
                    <p>${chapter.text}</p>
                    <span class="chapter-card__arrow" aria-hidden="true">&rarr;</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="legacy-spotlight reveal">
          <div class="legacy-spotlight__media">
            ${renderImageCarousel([
              { src: data.legacy.mediaLeft, alt: data.legacy.title },
              { src: data.legacy.mediaRight, alt: data.legacy.title },
            ])}
          </div>
          <div class="legacy-spotlight__copy">
            <div class="section-heading">
              <p class="eyebrow">${globalData.strap}</p>
              ${heading("h2", data.legacy.title)}
            </div>
            <p class="section-copy">${data.legacy.text}</p>
            <div class="detail-card-grid stagger">
              ${data.legacy.cards
                .map(
                  (card) => `
                    <article class="detail-card">
                      <h3>${card.title}</h3>
                      <p>${card.text}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </section>
      </main>
    `;
  }

  function renderStoryBeat(beat, index) {
    return `
      <section class="story-beat ${index % 2 === 1 ? "story-beat--reverse" : ""} reveal">
        <div class="story-beat__media">
          ${renderImageCarousel(beat.media)}
        </div>
        <div class="story-beat__copy">
          <span class="story-beat__number">${beat.number}</span>
          ${heading("h2", beat.title)}
          ${beat.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <div class="story-beat__chips">
            ${beat.points.map((point) => `<span>${point}</span>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderStory(locale) {
    const data = getPage(locale);
    return `
      <main class="page page-story">
        <section class="hero-shell hero-shell--story reveal is-visible">
          <div class="hero-shell__copy hero-shell__copy--story">
            <p class="eyebrow">${data.hero.eyebrow}</p>
            ${heading("h1", data.hero.title)}
            <p class="lead">${data.hero.lead}</p>
            <p class="description">${data.hero.description}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${data.hero.button.href}">${data.hero.button.label}${arrow}</a>
            </div>
          </div>
          ${renderCollage(data.hero.collage, "story", data.hero.badges)}
        </section>

        <section class="story-introduction reveal" id="story-intro">
          <div class="section-heading section-heading--center">
            <p class="eyebrow">${data.intro.eyebrow}</p>
            ${heading("h2", data.intro.title)}
          </div>
          <div class="story-introduction__grid stagger">
            ${data.intro.cards
              .map(
                (card) => `
                  <article class="story-profile-card">
                    <figure class="story-profile-card__media">
                      <img src="${card.image}" alt="${card.alt}" loading="lazy" />
                    </figure>
                    <div class="story-profile-card__copy">
                      <p class="eyebrow">${card.subtitle}</p>
                      <h3>${card.title}</h3>
                      <p>${card.text}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="timeline-strip stagger">
            ${data.timeline
              .map(
                (item) => `
                  <article class="timeline-item">
                    <strong>${item.year}</strong>
                    <span>${item.label}</span>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        ${data.beats.map((beat, index) => renderStoryBeat(beat, index)).join("")}

        <section class="quote-panel quote-panel--story reveal">
          <p>${data.quote}</p>
          <a class="button button-secondary" href="${data.next.href}">${data.next.label}</a>
        </section>

        <section class="mission-block reveal">
          <div class="section-heading section-heading--center">
            <p class="eyebrow">${data.mission.eyebrow}</p>
            ${heading("h2", data.mission.title)}
          </div>
          <div class="mission-block__copy">
            ${data.mission.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            <span class="mission-block__note">${data.mission.note}</span>
          </div>
        </section>

        <section class="cta-panel reveal">
          <div class="section-heading">
            <p class="eyebrow">${data.cta.eyebrow}</p>
            ${heading("h2", data.cta.title)}
          </div>
          <p class="section-copy">${data.cta.text}</p>
          <div class="cta-panel__cards stagger">
            ${data.cta.cards
              .map(
                (card) => `
                  <a class="cta-card" href="${card.href}">
                    <p class="eyebrow">${card.eyebrow}</p>
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                    <span>${card.label}${arrow}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>
      </main>
    `;
  }

  function renderChapter(locale) {
    const data = getPage(locale);
    const globalData = getGlobal(locale);
    const heroMedia = Array.isArray(data.hero.media) ? data.hero.media : [data.hero.media];
    const secondaryMedia = heroMedia[1] || heroMedia[0];

    return `
      <main class="page page-chapter">
        <section class="chapter-hero reveal is-visible">
          <div class="chapter-hero__copy">
            <p class="eyebrow">${data.hero.eyebrow}</p>
            ${heading("h1", data.hero.title)}
            <p class="lead">${data.hero.lead}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${data.next.href}">${data.next.label}${arrow}</a>
              <a class="button button-secondary" href="story.html">${globalData.menu.story}</a>
            </div>
          </div>
          <div class="chapter-hero__media">
            ${renderImageCarousel([
              { src: heroMedia[0], alt: data.hero.title },
              { src: secondaryMedia, alt: data.story.title },
            ])}
          </div>
        </section>

        ${renderMetricStrip(data.metrics, "metric-strip metric-strip--tight")}

        <section class="chapter-story reveal">
          <div class="section-heading">
            <p class="eyebrow">${globalData.brand}</p>
            ${heading("h2", data.story.title)}
          </div>
          <div class="chapter-story__layout">
            <div class="chapter-story__copy">
              ${data.story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <div class="pillar-grid stagger">
              ${data.pillars
                .map(
                  (pillar) => `
                    <article class="pillar-card">
                      <h3>${pillar.title}</h3>
                      <p>${pillar.text}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="gallery-section reveal">
          <div class="section-heading">
            <p class="eyebrow">${globalData.chapterLabel}</p>
            ${heading("h2", data.hero.title)}
          </div>
          ${renderGallery(data.gallery)}
        </section>

        <section class="quote-panel reveal">
          <p>${data.quote}</p>
          <a class="button button-primary" href="${data.next.href}">${data.next.label}${arrow}</a>
        </section>
      </main>
    `;
  }

  function renderRadioGroup(name, field) {
    return `
      <fieldset class="field field--choice">
        <legend class="field__label">${field.label}</legend>
        <div class="choice-row">
          ${field.options
            .map(
              (option, index) => `
                <label class="choice-chip">
                  <input type="radio" name="${name}" value="${option.value}"${index === 0 ? " checked" : ""} />
                  <span>${option.label}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </fieldset>
    `;
  }

  function renderContact(locale) {
    const data = getPage(locale);
    const form = data.form;
    const countries = siteData.countries || [];
    const defaultCountry =
      countries.find((country) => country.iso === "CZ") || countries[0] || { dial: "+420" };

    const countryOptions = countries
      .map(
        (country) =>
          `<option value="${country.dial}" data-iso="${country.iso}"${
            country.iso === defaultCountry.iso ? " selected" : ""
          }>${country.name} (${country.dial})</option>`
      )
      .join("");

    return `
      <main class="page page-contact">
        <section class="contact-hero reveal is-visible">
          <p class="eyebrow">${data.hero.eyebrow}</p>
          ${heading("h1", data.hero.title)}
          <p class="lead">${data.hero.lead}</p>
        </section>

        <section class="contact-shell reveal">
          <form class="contact-form" data-contact-form novalidate>
            <fieldset class="contact-form__group">
              <legend class="contact-form__legend">${form.detailsLegend}</legend>
              <div class="field-grid">
                <label class="field">
                  <span class="field__label">${form.firstName.label}</span>
                  <input class="field__input" type="text" name="firstName" autocomplete="given-name" placeholder="${form.firstName.placeholder}" required />
                  <span class="field__error" data-error-for="firstName"></span>
                </label>
                <label class="field">
                  <span class="field__label">${form.lastName.label}</span>
                  <input class="field__input" type="text" name="lastName" autocomplete="family-name" placeholder="${form.lastName.placeholder}" required />
                  <span class="field__error" data-error-for="lastName"></span>
                </label>
                <label class="field field--full">
                  <span class="field__label">${form.email.label}</span>
                  <input class="field__input" type="email" name="email" autocomplete="email" placeholder="${form.email.placeholder}" required />
                  <span class="field__error" data-error-for="email"></span>
                </label>
                <label class="field">
                  <span class="field__label">${form.country.label}</span>
                  <div class="field__select-wrap">
                    <select class="field__input field__select" name="country" data-country>${countryOptions}</select>
                  </div>
                </label>
                <label class="field">
                  <span class="field__label">${form.phone.label}</span>
                  <div class="phone-input">
                    <span class="phone-input__prefix" data-dial-prefix>${defaultCountry.dial}</span>
                    <input class="field__input phone-input__field" type="tel" name="phone" autocomplete="tel-national" inputmode="tel" placeholder="${form.phone.placeholder}" required />
                  </div>
                  <span class="field__error" data-error-for="phone"></span>
                </label>
              </div>
            </fieldset>

            <fieldset class="contact-form__group">
              <legend class="contact-form__legend">${form.interestLegend}</legend>
              <div class="choice-stack">
                ${renderRadioGroup("intent", form.intent)}
                ${renderRadioGroup("apartmentSize", form.apartmentSize)}
                ${renderRadioGroup("contactMethod", form.contactMethod)}
              </div>
              <label class="field field--full">
                <span class="field__label">${form.message.label}</span>
                <textarea class="field__input field__textarea" name="message" rows="4" placeholder="${form.message.placeholder}"></textarea>
              </label>
            </fieldset>

            <p class="contact-form__consent">${form.consent}</p>
            <div class="contact-form__actions">
              <button class="button button-primary" type="submit" data-submit>${form.submit}${arrow}</button>
            </div>
            <p class="contact-form__status" data-form-status role="alert" hidden></p>
          </form>

          <div class="contact-success" data-contact-success hidden>
            <p class="eyebrow">${getGlobal(locale).brand}</p>
            ${heading("h2", data.form.success.title)}
            <p class="lead">${data.form.success.text}</p>
          </div>
        </section>
      </main>
    `;
  }

  function renderFooter(locale) {
    const globalData = getGlobal(locale);
    return `
      <footer class="site-footer reveal stagger">
        <div class="footer-brand">
          <p class="eyebrow">${globalData.availableLabel} ${globalData.availableValue}</p>
          <h2>${globalData.footerTitle}</h2>
          <p>${globalData.footerText}</p>
        </div>
        <nav class="footer-links" aria-label="${globalData.menuLabel}">
          ${siteData.navigation
            .map((item) => `<a class="footer-link" href="${item.href}">${globalData.menu[item.slug]}</a>`)
            .join("")}
        </nav>
        <div class="footer-actions">
          <a class="button button-primary" href="residences.html">${globalData.footerPrimary}${arrow}</a>
          <a class="button button-secondary" href="story.html">${globalData.footerSecondary}</a>
          <p class="footer-note">${globalData.footerNote}</p>
        </div>
      </footer>
    `;
  }

  function setMeta(name, content) {
    let el = document.head.querySelector(`meta[name="${name}"]`);
    if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
    el.content = content || "";
  }

  function setOgMeta(property, content) {
    let el = document.head.querySelector(`meta[property="${property}"]`);
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
    el.content = content || "";
  }

  function renderPage(locale) {
    const pageMarkup =
      pageId === "home"
        ? renderHome(locale)
        : pageId === "story"
          ? renderStory(locale)
          : pageId === "contact"
            ? renderContact(locale)
            : renderChapter(locale);
    shell.innerHTML = `
      <div class="scroll-progress" aria-hidden="true"></div>
      <div class="ambient ambient--one"></div>
      <div class="ambient ambient--two"></div>
      <div class="ambient ambient--three"></div>
      ${renderNavigation(locale)}
      ${pageMarkup}
      ${renderFooter(locale)}
    `;
    const pageData = getPage(locale);
    const globalData = getGlobal(locale);
    document.title = pageData.title;
    document.documentElement.lang = locale;
    setMeta("description", pageData.metaDescription);
    setOgMeta("og:title", pageData.title);
    setOgMeta("og:description", pageData.metaDescription);
    setOgMeta("og:type", "website");
    setOgMeta("og:site_name", globalData.brand);
  }

  function bindLanguageSelect() {
    const selects = shell.querySelectorAll("[data-lang-select]");
    if (!selects.length) return;

    const closeAll = () => {
      selects.forEach((s) => {
        s.classList.remove("is-open");
        s.querySelector(".lang-globe").setAttribute("aria-expanded", "false");
      });
    };

    selects.forEach((select) => {
      const globe = select.querySelector(".lang-globe");

      globe.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = select.classList.contains("is-open");
        closeAll();
        if (!isOpen) {
          select.classList.add("is-open");
          globe.setAttribute("aria-expanded", "true");
        }
      });

      select.querySelectorAll(".lang-option").forEach((button) => {
        button.addEventListener("click", () => {
          const code = button.dataset.lang;
          if (!validCodes.includes(code)) return;
          localStorage.setItem(languageKey, code);
          closeAll();
          renderPage(code);
          bindInteractions();
        });
      });
    });

    const onDocClick = (event) => {
      if (![...selects].some((s) => s.contains(event.target))) closeAll();
    };
    const onKey = (event) => {
      if (event.key === "Escape") closeAll();
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    cleanups.push(() => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    });
  }

  function bindMenu() {
    const menu = shell.querySelector(".mobile-menu");
    const toggle = shell.querySelector(".menu-button");
    const close = shell.querySelector(".mobile-close");
    if (!menu || !toggle || !close) return;

    const setMenu = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
    close.addEventListener("click", () => setMenu(false));
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  }

  function bindTransitions() {
    document.querySelectorAll("a[href$='.html']").forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("http") || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }
        event.preventDefault();
        if (document.body.classList.contains("is-transition-out")) return;
        document.body.classList.add("is-transition-out");
        sessionStorage.setItem(transitionKey, "active");
        window.setTimeout(() => {
          window.location.href = href;
        }, 480);
      });
    });
  }

  function bindReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll(".reveal, .stagger, .line-reveal").forEach((element) => observer.observe(element));
    cleanups.push(() => observer.disconnect());
  }

  function bindScrollProgress() {
    const bar = shell.querySelector(".scroll-progress");
    const header = shell.querySelector(".site-header");
    if (!bar) return;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      bar.style.setProperty("--progress", Math.min(1, Math.max(0, progress)).toFixed(4));
      if (header) header.classList.toggle("is-stuck", window.scrollY > 40);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    cleanups.push(() => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    });
  }

  function bindCarousels() {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const track = carousel.querySelector(".img-carousel__track");
      const dots = carousel.querySelectorAll(".img-carousel__dot");
      const real = dots.length; // number of unique images
      if (!track || real < 2) return;

      // The track holds real + 1 slides — the trailing one is a clone of the
      // first image so a forward wrap can animate seamlessly before snapping.
      let index = 0;
      const transition = "transform 1.1s var(--ease-soft)";
      track.style.transition = transition;

      const syncDots = () => {
        const activeDot = ((index % real) + real) % real;
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === activeDot));
      };

      const moveTo = (next) => {
        index = next;
        track.style.transition = transition;
        track.style.transform = `translateX(-${index * 100}%)`;
        syncDots();
      };

      const next = () => {
        moveTo(index + 1);
        // Landing on the cloned slide: snap back to the real first slide without
        // animation once the transition finishes.
        if (index === real) {
          const reset = () => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0)";
            void track.offsetWidth; // force reflow so the next move animates
            track.style.transition = transition;
            track.removeEventListener("transitionend", reset);
          };
          track.addEventListener("transitionend", reset);
        }
      };

      const prev = () => {
        if (index === 0) {
          // Jump (no animation) to the trailing clone, then animate to the last
          // real slide so the backward wrap reads smoothly.
          track.style.transition = "none";
          index = real;
          track.style.transform = `translateX(-${index * 100}%)`;
          void track.offsetWidth;
          moveTo(real - 1);
        } else {
          moveTo(index - 1);
        }
      };

      let timer = null;
      const start = () => {
        if (!reduceMotion) timer = setInterval(next, 5000);
      };
      const restart = () => {
        if (timer) clearInterval(timer);
        start();
      };

      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");
      if (prevButton) {
        prevButton.addEventListener("click", () => {
          prev();
          restart();
        });
      }
      if (nextButton) {
        nextButton.addEventListener("click", () => {
          next();
          restart();
        });
      }

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          moveTo(i);
          restart();
        });
      });

      start();
      cleanups.push(() => {
        if (timer) clearInterval(timer);
      });
    });
  }

  function bindContactForm() {
    const form = shell.querySelector("[data-contact-form]");
    if (!form) return;

    const locale = document.documentElement.lang || lang;
    const messages = getPage(locale).form.errors;
    const sendingLabel = getPage(locale).form.sending;
    const submitLabel = getPage(locale).form.submit;

    const countrySelect = form.querySelector("[data-country]");
    const dialPrefix = form.querySelector("[data-dial-prefix]");
    const phoneField = form.querySelector('input[name="phone"]');
    const submitButton = form.querySelector("[data-submit]");
    const success = shell.querySelector("[data-contact-success]");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const getDial = () => (countrySelect ? countrySelect.value : "");

    if (countrySelect && dialPrefix) {
      countrySelect.addEventListener("change", () => {
        dialPrefix.textContent = getDial();
      });
    }

    // Keep the phone field to digits and spaces only.
    if (phoneField) {
      phoneField.addEventListener("input", () => {
        const cleaned = phoneField.value.replace(/[^\d\s]/g, "");
        if (cleaned !== phoneField.value) phoneField.value = cleaned;
      });
    }

    const setError = (name, text) => {
      const slot = form.querySelector(`[data-error-for="${name}"]`);
      const input = form.querySelector(`[name="${name}"]`);
      if (slot) slot.textContent = text || "";
      if (input) input.classList.toggle("is-invalid", Boolean(text));
    };

    const validate = () => {
      let valid = true;
      const value = (name) => (form.querySelector(`[name="${name}"]`).value || "").trim();

      ["firstName", "lastName"].forEach((name) => {
        if (!value(name)) {
          setError(name, messages.required);
          valid = false;
        } else {
          setError(name, "");
        }
      });

      const email = value("email");
      if (!email) {
        setError("email", messages.required);
        valid = false;
      } else if (!emailPattern.test(email)) {
        setError("email", messages.email);
        valid = false;
      } else {
        setError("email", "");
      }

      const phoneDigits = value("phone").replace(/\D/g, "");
      if (!phoneDigits) {
        setError("phone", messages.required);
        valid = false;
      } else if (phoneDigits.length < 6 || phoneDigits.length > 14) {
        setError("phone", messages.phone);
        valid = false;
      } else {
        setError("phone", "");
      }

      return valid;
    };

    // Re-validate a field as the visitor corrects it.
    form.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("blur", () => {
        if (input.classList.contains("is-invalid")) validate();
      });
    });

    const collect = () => {
      const value = (name) => {
        const node = form.querySelector(`[name="${name}"]`);
        return node ? node.value.trim() : "";
      };
      const checked = (name) => {
        const node = form.querySelector(`[name="${name}"]:checked`);
        return node ? node.value : "";
      };
      const phoneDigits = value("phone").replace(/\D/g, "");
      return {
        firstName: value("firstName"),
        lastName: value("lastName"),
        email: value("email"),
        phone: `${getDial()} ${phoneDigits}`.trim(),
        country: countrySelect
          ? countrySelect.options[countrySelect.selectedIndex].dataset.iso
          : "",
        intent: checked("intent"),
        apartmentSize: checked("apartmentSize"),
        contactMethod: checked("contactMethod"),
        message: value("message"),
      };
    };

    const showSuccess = () => {
      if (success) {
        form.hidden = true;
        success.hidden = false;
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }
    };

    const status = form.querySelector("[data-form-status]");
    const showError = (text) => {
      if (!status) return;
      status.textContent = text;
      status.hidden = false;
    };
    const clearStatus = () => {
      if (!status) return;
      status.hidden = true;
      status.textContent = "";
    };
    const resetButton = () => {
      submitButton.disabled = false;
      submitButton.innerHTML = `${submitLabel}${arrow}`;
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearStatus();
      if (!validate()) {
        const firstInvalid = form.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const payload = collect();
      payload.submittedAt = new Date().toISOString();
      payload.language = locale;

      const endpoint = siteData.contactEndpoint;

      // No backend configured yet: keep the page usable but make it obvious to
      // the developer that nothing was stored. See CONTACT_SETUP.md.
      if (!endpoint) {
        console.warn(
          "[contact] siteData.contactEndpoint is empty — submission was NOT stored. See CONTACT_SETUP.md."
        );
        showSuccess();
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = sendingLabel;

      // Google Apps Script web apps don't return CORS headers, so we POST in
      // "no-cors" mode with a CORS-safelisted text/plain body. The script
      // appends the row server-side; the response is opaque (can't be read)
      // and its 302 redirect can be slow, so we settle the UI on whichever
      // comes first — the request resolving or a short safety timeout — and
      // never leave the button stuck on "Sending…". Only an outright network
      // failure surfaces the error state.
      let settled = false;
      const succeed = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(safety);
        showSuccess();
      };
      const fail = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(safety);
        showError(getPage(locale).form.submitError);
        resetButton();
      };
      const safety = window.setTimeout(succeed, 8000);

      fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      })
        .then(succeed)
        .catch(fail);
    });
  }

  function bindInteractions() {
    cleanups.forEach((fn) => fn());
    cleanups = [];

    bindLanguageSelect();
    bindMenu();
    bindTransitions();
    bindReveal();
    bindScrollProgress();
    bindCarousels();
    bindContactForm();
  }

  if (entering) {
    document.body.classList.add("is-transition-enter");
    sessionStorage.removeItem(transitionKey);
  }

  renderPage(lang);
  bindInteractions();

  if (entering) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.body.classList.remove("is-transition-enter");
      });
    });
  }
})();
