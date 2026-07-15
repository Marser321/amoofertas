const OFFER_CONFIG = {
  packages: [
    {
      id: "comunidad",
      name: "Comunidad Mandy Academy",
      shortName: "Comunidad",
      badge: "Aprende y conecta",
      price: "$49.99/mes",
      description: "Un espacio privado en español para aprender con contenido de valor, compartir experiencias y avanzar junto a personas con metas similares.",
      checkoutUrl: "#checkout-pending-comunidad",
      followUpUrl: "#access-pending-comunidad",
      buttonLabel: "Quiero entrar a la comunidad",
      fineprint: "Membresía con renovación mensual. Puedes cancelar cuando quieras.",
      features: [
        "Contenido educativo de valor en español",
        "Acceso a un espacio privado para miembros",
        "Interacción, apoyo y aprendizaje entre la comunidad",
        "Nuevas herramientas para tomar decisiones informadas"
      ],
      thankYou: {
        eyebrow: "Bienvenido a la comunidad",
        title: "Tu lugar en la Comunidad Mandy Academy está listo",
        lede: "Si tu pago fue aprobado, ya diste el primer paso para aprender, conectar y avanzar junto a nuestra comunidad.",
        primaryLabel: "Acceder a la comunidad",
        summaryTitle: "Tu membresía de $49.99 al mes",
        summaryText: "La membresía se renueva mensualmente y puedes cancelarla cuando quieras. Revisa tu confirmación de compra para conservar los datos de tu suscripción.",
        steps: [
          ["Revisa tu correo", "Busca la confirmación de pago y las instrucciones de acceso. Revisa también spam o promociones."],
          ["Entra al espacio privado", "Usa el botón de acceso cuando el equipo haya habilitado tu entrada a la comunidad."],
          ["Preséntate y participa", "Conecta con otros miembros, explora el contenido y comienza a crear nuevas sinergias."]
        ]
      }
    },
    {
      id: "evaluacion",
      name: "Evaluación personalizada",
      shortName: "Evaluación",
      badge: "Atención individual",
      price: "$100 pago único",
      description: "Una evaluación individual para revisar tu situación crediticia, aclarar tus próximos pasos y recibir una cotización directa.",
      checkoutUrl: "#checkout-pending-evaluacion",
      followUpUrl: "#booking-pending-evaluacion",
      buttonLabel: "Quiero agendar mi evaluación",
      fineprint: "El pago cubre la evaluación y la cotización. No incluye el servicio de reparación de crédito.",
      featured: true,
      features: [
        "Evaluación personalizada de tu situación crediticia",
        "Orientación clara sobre los posibles próximos pasos",
        "Espacio para explicar tus necesidades y objetivos",
        "Cotización directa del servicio recomendado para tu caso"
      ],
      thankYou: {
        eyebrow: "Evaluación confirmada",
        title: "Ahora elige el horario de tu evaluación personalizada",
        lede: "Si tu pago de $100 fue aprobado, el siguiente paso es agendar tu cita para que podamos conocer tu situación y preparar una cotización.",
        primaryLabel: "Agendar mi evaluación",
        summaryTitle: "Qué incluye tu pago de $100",
        summaryText: "El pago cubre la evaluación personalizada y la preparación de una cotización. No incluye ni garantiza la contratación o el resultado de un servicio de reparación.",
        steps: [
          ["Guarda tu comprobante", "Conserva el email o recibo del checkout por si necesitas ayuda con tu compra."],
          ["Elige tu horario", "Usa el botón de agenda y selecciona una de las citas disponibles."],
          ["Prepárate para la evaluación", "Ten a mano la información que quieras revisar y las preguntas importantes sobre tu caso."]
        ]
      }
    }
  ],
  comparison: [
    {
      label: "Objetivo",
      comunidad: "Aprender y crecer acompañado",
      evaluacion: "Revisar tu situación individual"
    },
    {
      label: "Ideal para",
      comunidad: "Quien busca educación continua y conexión",
      evaluacion: "Quien necesita orientación personalizada"
    },
    {
      label: "Recibes",
      comunidad: "Contenido y espacio privado",
      evaluacion: "Evaluación y cotización directa"
    },
    {
      label: "Pago",
      comunidad: "$49.99 cada mes",
      evaluacion: "$100 una sola vez"
    },
    {
      label: "Siguiente paso",
      comunidad: "Acceder a la comunidad",
      evaluacion: "Elegir un horario disponible"
    }
  ],
  trackedParams: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"]
};

const HERO_MEDIA_CONFIG = {
  defaultMode: "video",
  banners: [
    {
      id: "dos-caminos",
      eyebrow: "Dos caminos para avanzar",
      title: "Dos caminos. Tú eliges cómo avanzar.",
      body: "Comunidad educativa o evaluación personalizada.",
      src: "assets/hero-banner-dos-caminos.webp",
      alt: "Amanda Olmo presenta dos caminos para avanzar con el crédito"
    },
    {
      id: "comunidad",
      eyebrow: "Comunidad Mandy Academy",
      title: "Aprende. Conecta. Avanza.",
      body: "$49.99 al mes · Cancela cuando quieras.",
      src: "assets/hero-banner-comunidad.webp",
      alt: "Amanda Olmo en un espacio profesional que representa la Comunidad Mandy Academy"
    },
    {
      id: "evaluacion",
      eyebrow: "Evaluación personalizada",
      title: "Claridad para tu caso.",
      body: "$100 pago único · Incluye evaluación y cotización.",
      src: "assets/hero-banner-evaluacion.webp",
      alt: "Amanda Olmo ofrece atención individual durante una evaluación personalizada"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  renderOffers();
  renderComparison();
  initCheckoutButtons();
  initScrollButtons();
  initStickyCta();
  initAccordion();
  initVideoTestimonials();
  initVideoCarousel();
  initHeroMedia();
  initThankYouPage();
});

function renderOffers() {
  const grid = document.getElementById("offer-grid");
  if (!grid) return;

  grid.innerHTML = OFFER_CONFIG.packages.map(plan => `
    <article class="offer-card${plan.featured ? " is-featured" : ""}" data-offer="${escapeHtml(plan.id)}">
      <span class="offer-badge">${escapeHtml(plan.badge)}</span>
      <div class="offer-title-row">
        <h3>${escapeHtml(plan.name)}</h3>
        <div class="offer-price">${escapeHtml(plan.price)}</div>
      </div>
      <p class="offer-description">${escapeHtml(plan.description)}</p>
      <ul class="offer-features">
        ${plan.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}
      </ul>
      <button class="btn btn-primary" type="button" data-checkout-plan="${escapeHtml(plan.id)}">
        ${escapeHtml(plan.buttonLabel)}
      </button>
      <p class="offer-small">${escapeHtml(plan.fineprint)}</p>
    </article>
  `).join("");
}

function renderComparison() {
  const card = document.getElementById("comparison-card");
  if (!card) return;

  card.innerHTML = `
    <div class="comparison-row is-head">
      <strong>Detalle</strong>
      <strong>${escapeHtml(OFFER_CONFIG.packages[0].shortName)}</strong>
      <strong>${escapeHtml(OFFER_CONFIG.packages[1].shortName)}</strong>
    </div>
    ${OFFER_CONFIG.comparison.map(row => `
      <div class="comparison-row">
        <strong>${escapeHtml(row.label)}</strong>
        <span data-label="${escapeHtml(OFFER_CONFIG.packages[0].shortName)}">${escapeHtml(row.comunidad)}</span>
        <span data-label="${escapeHtml(OFFER_CONFIG.packages[1].shortName)}">${escapeHtml(row.evaluacion)}</span>
      </div>
    `).join("")}
  `;
}

function initCheckoutButtons() {
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-checkout-plan]");
    if (!button) return;

    const planId = button.getAttribute("data-checkout-plan");
    const plan = OFFER_CONFIG.packages.find(item => item.id === planId);
    if (!plan) return;

    if (isPlaceholderCheckout(plan.checkoutUrl)) {
      showToast(`El checkout de ${plan.name} está en preparación. Muy pronto podrás completar tu compra desde este botón.`);
      return;
    }

    window.location.href = withTrackingParams(plan.checkoutUrl);
  });
}

function initThankYouPage() {
  const page = document.querySelector("[data-thankyou-page]");
  if (!page) return;

  const offerId = new URLSearchParams(window.location.search).get("offer");
  const plan = OFFER_CONFIG.packages.find(item => item.id === offerId);
  if (!plan) return;

  const content = plan.thankYou;
  setText("[data-thankyou-eyebrow]", content.eyebrow);
  setText("[data-thankyou-title]", content.title);
  setText("[data-thankyou-lede]", content.lede);
  setText("[data-thankyou-summary-title]", content.summaryTitle);
  setText("[data-thankyou-summary-text]", content.summaryText);

  const primaryButton = page.querySelector("[data-thankyou-primary]");
  if (primaryButton) {
    primaryButton.textContent = content.primaryLabel;
    primaryButton.hidden = false;
    primaryButton.addEventListener("click", () => {
      if (isPlaceholderCheckout(plan.followUpUrl)) {
        const pendingAction = plan.id === "comunidad" ? "El acceso a la comunidad" : "La agenda de evaluaciones";
        showToast(`${pendingAction} está en preparación. Revisa tu correo o contacta a soporte para recibir ayuda.`);
        return;
      }

      window.location.href = withTrackingParams(plan.followUpUrl);
    });
  }

  const steps = page.querySelectorAll("[data-thankyou-step]");
  steps.forEach((step, index) => {
    const stepContent = content.steps[index];
    if (!stepContent) return;
    setText("[data-step-title]", stepContent[0], step);
    setText("[data-step-copy]", stepContent[1], step);
  });
}

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function initScrollButtons() {
  document.querySelectorAll("[data-scroll-offers]").forEach(button => {
    button.addEventListener("click", () => {
      const section = document.getElementById("paquetes");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initStickyCta() {
  const stickyCta = document.querySelector(".sticky-cta");
  const heroSection = document.querySelector(".hero-section");
  if (!stickyCta || !heroSection) return;

  if (!("IntersectionObserver" in window)) {
    stickyCta.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(entries => {
    const [entry] = entries;
    stickyCta.classList.toggle("is-visible", !entry.isIntersecting);
  }, {
    threshold: 0,
    rootMargin: "0px"
  });

  observer.observe(heroSection);
}

function initAccordion() {
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion-trigger").forEach(otherTrigger => {
        if (otherTrigger !== trigger) otherTrigger.setAttribute("aria-expanded", "false");
      });

      trigger.setAttribute("aria-expanded", String(!isExpanded));
    });
  });
}

function initVideoTestimonials() {
  const videos = Array.from(document.querySelectorAll("[data-testimonial-video]"));
  if (!videos.length) return;

  videos.forEach(video => {
    video.addEventListener("play", () => {
      videos.forEach(otherVideo => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) videos.forEach(video => video.pause());
  });
}

function initVideoCarousel() {
  const carousel = document.querySelector("[data-video-carousel]");
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  if (!carousel || !prevButton || !nextButton) return;

  const scrollByCard = direction => {
    const firstCard = carousel.querySelector(".video-card");
    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap || styles.gap) || 16;
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : carousel.clientWidth * 0.8;

    carousel.scrollBy({
      left: direction * distance,
      behavior: "smooth"
    });
  };

  prevButton.addEventListener("click", () => scrollByCard(-1));
  nextButton.addEventListener("click", () => scrollByCard(1));
}

function initHeroMedia() {
  const root = document.querySelector("[data-hero-media]");
  if (!root) return;

  const modeButtons = Array.from(root.querySelectorAll("[data-media-mode]"));
  const panels = Array.from(root.querySelectorAll("[data-media-panel]"));
  const video = root.querySelector("[data-vsl-video]");
  const bannerViewport = root.querySelector("[data-hero-banner]");
  const dotsContainer = root.querySelector("[data-hero-banner-dots]");
  const prevButton = root.querySelector("[data-hero-banner-prev]");
  const nextButton = root.querySelector("[data-hero-banner-next]");
  if (!modeButtons.length || !panels.length || !bannerViewport || !dotsContainer) return;

  let activeBannerIndex = 0;

  const renderBanner = index => {
    const count = HERO_MEDIA_CONFIG.banners.length;
    activeBannerIndex = (index + count) % count;
    const banner = HERO_MEDIA_CONFIG.banners[activeBannerIndex];

    bannerViewport.innerHTML = `
      <article class="hero-banner" data-banner-id="${escapeHtml(banner.id)}">
        <img src="${escapeHtml(banner.src)}" alt="${escapeHtml(banner.alt)}" width="1672" height="941" decoding="async">
        <div class="hero-banner-shade" aria-hidden="true"></div>
        <div class="hero-banner-copy">
          <span>${escapeHtml(banner.eyebrow)}</span>
          <h2>${escapeHtml(banner.title)}</h2>
          <p>${escapeHtml(banner.body)}</p>
        </div>
      </article>
    `;

    dotsContainer.querySelectorAll("[data-hero-banner-dot]").forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeBannerIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  };

  dotsContainer.innerHTML = HERO_MEDIA_CONFIG.banners.map((banner, index) => `
    <button type="button" data-hero-banner-dot="${index}" aria-label="Mostrar ${escapeHtml(banner.eyebrow)}" aria-pressed="${index === 0 ? "true" : "false"}"></button>
  `).join("");

  const setMode = mode => {
    const nextMode = mode === "presentation" ? "presentation" : HERO_MEDIA_CONFIG.defaultMode;
    if (nextMode === "presentation" && video && !video.paused) video.pause();
    root.dataset.activeMediaMode = nextMode;

    modeButtons.forEach(button => {
      const isActive = button.dataset.mediaMode === nextMode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    panels.forEach(panel => {
      const isActive = panel.dataset.mediaPanel === nextMode;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  };

  modeButtons.forEach(button => {
    button.addEventListener("click", () => setMode(button.dataset.mediaMode));
  });

  dotsContainer.addEventListener("click", event => {
    const dot = event.target.closest("[data-hero-banner-dot]");
    if (dot) renderBanner(Number(dot.dataset.heroBannerDot));
  });

  prevButton?.addEventListener("click", () => renderBanner(activeBannerIndex - 1));
  nextButton?.addEventListener("click", () => renderBanner(activeBannerIndex + 1));

  renderBanner(0);
  setMode(HERO_MEDIA_CONFIG.defaultMode);
}

function isPlaceholderCheckout(url) {
  if (!url || typeof url !== "string") return true;
  const value = url.trim();
  return !value || value.startsWith("#") || value.includes("checkout-pending") || value.includes("REPLACE_WITH");
}

function withTrackingParams(rawUrl) {
  const checkoutUrl = new URL(rawUrl, window.location.href);
  const currentParams = new URLSearchParams(window.location.search);

  OFFER_CONFIG.trackedParams.forEach(param => {
    const value = currentParams.get(param);
    if (value && !checkoutUrl.searchParams.has(param)) {
      checkoutUrl.searchParams.set(param, value);
    }
  });

  return checkoutUrl.toString();
}

function showToast(message) {
  const toast = document.getElementById("checkout-toast");
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.hidden = true;
  }, 5200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
