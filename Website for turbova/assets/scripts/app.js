(function () {
  const shell = document.getElementById("site-shell");
  const siteData = window.siteData;
  if (!shell || !siteData) return;

  const pageId = document.body.dataset.page || "home";
  const languageKey = "turbova-language";
  const transitionKey = "turbova-page-transition";
  const lang = localStorage.getItem(languageKey) || "en";
  const entering = sessionStorage.getItem(transitionKey) === "active";
  let parallaxCleanup = null;
  let revealCleanup = null;

  function getGlobal(locale) {
    return siteData.global[locale] || siteData.global.en;
  }

  function getPage(locale) {
    return siteData.pages[pageId][locale] || siteData.pages[pageId].en;
  }

  function renderNavLinks(locale, className) {
    const globalData = getGlobal(locale);
    return siteData.navigation
      .map((item) => {
        const activeClass = item.slug === pageId ? " is-active" : "";
        return `<a class="${className}${activeClass}" href="${item.href}">${globalData.menu[item.slug]}</a>`;
      })
      .join("");
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
          <div class="lang-toggle" aria-label="${globalData.languageLabel}">
            <button class="lang-button ${locale === "en" ? "is-active" : ""}" data-lang="en">EN</button>
            <button class="lang-button ${locale === "cs" ? "is-active" : ""}" data-lang="cs">CZ</button>
          </div>
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu">
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
      </aside>
    `;
  }

  function renderMetricStrip(items, className = "metric-strip") {
    return `
      <section class="${className} reveal">
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
      <div class="gallery-grid">
        ${items
          .map(
            (item, index) => `
              <figure class="gallery-card ${index === 0 ? "gallery-card--wide" : ""}">
                <img src="${item.src}" alt="${item.alt}" />
                <figcaption>${item.caption}</figcaption>
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

  function renderCollage(items, variant, badges) {
    return `
      <div class="collage collage--${variant}">
        ${items
          .map(
            (item) => `
              <figure class="collage-card collage-card--${item.slot}" data-parallax="${item.speed || 1}">
                <img src="${item.src}" alt="${item.alt}" />
                ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
              </figure>
            `
          )
          .join("")}
        ${renderFloatingBadges(badges)}
      </div>
    `;
  }

  function renderHome(locale) {
    const data = getPage(locale);
    const globalData = getGlobal(locale);
    const collageItems = [
      {
        src: data.hero.media[0].src,
        alt: data.hero.media[0].alt,
        caption: data.hero.media[0].caption,
        slot: "primary",
        speed: 1.05,
      },
      {
        src: data.hero.media[1].src,
        alt: data.hero.media[1].alt,
        caption: data.hero.media[1].caption,
        slot: "secondary",
        speed: 0.8,
      },
      {
        src: data.legacy.mediaLeft,
        alt: data.legacy.title,
        caption: data.legacy.title,
        slot: "tertiary",
        speed: 1.2,
      },
    ];
    const collageBadges = [
      { label: "22", note: locale === "cs" ? "rezidencí" : "residences" },
      { label: globalData.availableValue, note: locale === "cs" ? "dokončení" : "completion" },
      { label: locale === "cs" ? "Praha 5" : "Prague 5", note: locale === "cs" ? "soukromý park" : "private park" },
    ];

    return `
      <main class="page page-home">
        <section class="hero-shell hero-shell--home reveal is-visible">
          <div class="hero-shell__copy">
            <p class="eyebrow">${data.hero.eyebrow}</p>
            <h1>${data.hero.title}</h1>
            <p class="lead">${data.hero.lead}</p>
            <p class="description">${data.hero.description}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${data.hero.primary.href}">${data.hero.primary.label}</a>
              <a class="button button-secondary" href="${data.hero.secondary.href}">${data.hero.secondary.label}</a>
            </div>
            <div class="hero-badge-row">
              ${data.hero.badges.map((badge) => `<span class="hero-badge">${badge}</span>`).join("")}
            </div>
          </div>
          ${renderCollage(collageItems, "home", collageBadges)}
        </section>

        ${renderMetricStrip(data.stats)}

        <section class="chapter-rail reveal">
          <div class="section-heading">
            <p class="eyebrow">${globalData.chapterLabel}</p>
            <h2>${data.chaptersTitle}</h2>
          </div>
          <div class="chapter-list">
            ${data.chapters
              .map(
                (chapter) => `
                  <a class="chapter-card" href="${chapter.href}">
                    <span class="chapter-card__number">${chapter.number}</span>
                    <h3>${chapter.title}</h3>
                    <p>${chapter.text}</p>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="legacy-spotlight reveal">
          <div class="legacy-spotlight__media">
            <figure class="frame frame--primary" data-parallax="1.12">
              <img src="${data.legacy.mediaLeft}" alt="${data.legacy.title}" />
            </figure>
            <figure class="frame frame--secondary" data-parallax="0.82">
              <img src="${data.legacy.mediaRight}" alt="${data.legacy.title}" />
            </figure>
          </div>
          <div class="legacy-spotlight__copy">
            <div class="section-heading">
              <p class="eyebrow">${globalData.strap}</p>
              <h2>${data.legacy.title}</h2>
            </div>
            <p class="section-copy">${data.legacy.text}</p>
            <div class="detail-card-grid">
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
          <figure class="media-stack__primary" data-parallax="${index % 2 === 0 ? 1.04 : 0.86}">
            <img src="${beat.media[0].src}" alt="${beat.media[0].alt}" />
          </figure>
          <figure class="media-stack__secondary" data-parallax="${index % 2 === 0 ? 0.74 : 1.12}">
            <img src="${beat.media[1].src}" alt="${beat.media[1].alt}" />
            <figcaption>${beat.media[1].caption}</figcaption>
          </figure>
          <span class="media-stack__badge">${beat.badge}</span>
        </div>
        <div class="story-beat__copy">
          <span class="story-beat__number">${beat.number}</span>
          <h2>${beat.title}</h2>
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
            <h1>${data.hero.title}</h1>
            <p class="lead">${data.hero.lead}</p>
            <p class="description">${data.hero.description}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${data.hero.button.href}">${data.hero.button.label}</a>
            </div>
          </div>
          ${renderCollage(data.hero.collage, "story", data.hero.badges)}
        </section>

        <section class="story-introduction reveal" id="story-intro">
          <div class="section-heading section-heading--center">
            <p class="eyebrow">${data.intro.eyebrow}</p>
            <h2>${data.intro.title}</h2>
          </div>
          <div class="story-introduction__grid">
            ${data.intro.cards
              .map(
                (card) => `
                  <article class="story-profile-card">
                    <figure class="story-profile-card__media">
                      <img src="${card.image}" alt="${card.alt}" />
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
          <div class="timeline-strip">
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
            <h2>${data.mission.title}</h2>
          </div>
          <div class="mission-block__copy">
            ${data.mission.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            <span class="mission-block__note">${data.mission.note}</span>
          </div>
        </section>

        <section class="cta-panel reveal">
          <div class="section-heading">
            <p class="eyebrow">${data.cta.eyebrow}</p>
            <h2>${data.cta.title}</h2>
          </div>
          <p class="section-copy">${data.cta.text}</p>
          <div class="cta-panel__cards">
            ${data.cta.cards
              .map(
                (card) => `
                  <a class="cta-card" href="${card.href}">
                    <p class="eyebrow">${card.eyebrow}</p>
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                    <span>${card.label}</span>
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
            <h1>${data.hero.title}</h1>
            <p class="lead">${data.hero.lead}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${data.next.href}">${data.next.label}</a>
              <a class="button button-secondary" href="story.html">${globalData.menu.story}</a>
            </div>
          </div>
          <div class="chapter-hero__media">
            <figure class="chapter-hero__frame chapter-hero__frame--primary" data-parallax="1.05">
              <img src="${heroMedia[0]}" alt="${data.hero.title}" />
            </figure>
            <figure class="chapter-hero__frame chapter-hero__frame--secondary" data-parallax="0.78">
              <img src="${secondaryMedia}" alt="${data.story.title}" />
            </figure>
            <div class="floating-badge floating-badge--1">
              <strong>${data.metrics[0].value}</strong>
              <span>${data.metrics[0].label}</span>
            </div>
          </div>
        </section>

        ${renderMetricStrip(data.metrics, "metric-strip metric-strip--tight")}

        <section class="chapter-story reveal">
          <div class="section-heading">
            <p class="eyebrow">${globalData.brand}</p>
            <h2>${data.story.title}</h2>
          </div>
          <div class="chapter-story__layout">
            <div class="chapter-story__copy">
              ${data.story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
            <div class="pillar-grid">
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
            <h2>${data.hero.title}</h2>
          </div>
          ${renderGallery(data.gallery)}
        </section>

        <section class="quote-panel reveal">
          <p>${data.quote}</p>
          <a class="button button-primary" href="${data.next.href}">${data.next.label}</a>
        </section>
      </main>
    `;
  }

  function renderFooter(locale) {
    const globalData = getGlobal(locale);
    return `
      <footer class="site-footer reveal">
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
          <a class="button button-primary" href="residences.html">${globalData.footerPrimary}</a>
          <a class="button button-secondary" href="story.html">${globalData.footerSecondary}</a>
          <p class="footer-note">${globalData.footerNote}</p>
        </div>
      </footer>
    `;
  }

  function renderPage(locale) {
    const pageMarkup =
      pageId === "home" ? renderHome(locale) : pageId === "story" ? renderStory(locale) : renderChapter(locale);
    shell.innerHTML = `
      <div class="ambient ambient--one"></div>
      <div class="ambient ambient--two"></div>
      <div class="ambient ambient--three"></div>
      ${renderNavigation(locale)}
      ${pageMarkup}
      ${renderFooter(locale)}
    `;
    document.title = getPage(locale).title;
    document.documentElement.lang = locale === "cs" ? "cs" : "en";
  }

  function bindLanguageToggle() {
    shell.querySelectorAll(".lang-button").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem(languageKey, button.dataset.lang);
        renderPage(button.dataset.lang);
        bindInteractions();
      });
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
        }, 420);
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
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    revealCleanup = () => observer.disconnect();
  }

  function bindParallax() {
    const elements = document.querySelectorAll("[data-parallax]");
    if (!elements.length) return;

    const update = () => {
      const midpoint = window.innerHeight / 2;
      elements.forEach((element) => {
        const depth = Number(element.dataset.parallax || 1);
        const rect = element.getBoundingClientRect();
        const distance = (rect.top + rect.height / 2 - midpoint) * -0.024 * depth;
        element.style.setProperty("--parallax-shift", `${distance.toFixed(1)}px`);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    parallaxCleanup = () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }

  function bindInteractions() {
    if (parallaxCleanup) {
      parallaxCleanup();
      parallaxCleanup = null;
    }
    if (revealCleanup) {
      revealCleanup();
      revealCleanup = null;
    }

    bindLanguageToggle();
    bindMenu();
    bindTransitions();
    bindReveal();
    bindParallax();
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
