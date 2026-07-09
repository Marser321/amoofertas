const OFFER_CONFIG = {
  packages: [
    {
      id: "esencial",
      name: "Plan Esencial",
      badge: "Para empezar",
      price: "Precio pendiente",
      description: "La ruta base para entender el crédito, leer tu reporte y reconocer qué debes revisar antes de actuar.",
      checkoutUrl: "#checkout-pending-esencial",
      buttonLabel: "Comprar Plan Esencial",
      fineprint: "Nombre, precio, cuotas e inclusiones finales se pueden editar aquí.",
      features: [
        "Qué es el crédito y cómo leen tu historial",
        "Burós principales: Experian, Equifax, TransUnion e Innovis",
        "Reporte de crédito, datos personales y marcas importantes",
        "Hábitos básicos: balances bajos y pagos a tiempo"
      ]
    },
    {
      id: "premium",
      name: "Plan Premium",
      badge: "Más completo",
      price: "Precio pendiente",
      description: "La opción más completa para profundizar en revisión, disputas y próximos pasos con más estructura.",
      checkoutUrl: "#checkout-pending-premium",
      buttonLabel: "Comprar Plan Premium",
      fineprint: "Usar este plan para la oferta de mayor valor cuando se confirmen condiciones.",
      featured: true,
      features: [
        "Todo lo incluido en el Plan Esencial",
        "Qué revisar en pagos tarde, colecciones, charge-offs e inquiries",
        "Conceptos clave de EWS, ChexSystems y verificación bancaria",
        "Guía para identificar qué puede revisarse o disputarse según tu caso"
      ]
    }
  ],
  comparison: [
    {
      label: "Enfoque",
      esencial: "Fundamentos del crédito",
      premium: "Fundamentos + revisión guiada"
    },
    {
      label: "Ideal para",
      esencial: "Empezar con claridad",
      premium: "Profundizar antes de actuar"
    },
    {
      label: "Aprendes",
      esencial: "Reporte, burós y hábitos",
      premium: "Marcas negativas, disputas y sistemas bancarios"
    },
    {
      label: "Pago",
      esencial: "Checkout externo",
      premium: "Checkout externo"
    }
  ],
  trackedParams: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"]
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
});

function renderOffers() {
  const grid = document.getElementById("offer-grid");
  if (!grid) return;

  grid.innerHTML = OFFER_CONFIG.packages.map(plan => `
    <article class="offer-card${plan.featured ? " is-featured" : ""}">
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
      <strong>${escapeHtml(OFFER_CONFIG.packages[0].name)}</strong>
      <strong>${escapeHtml(OFFER_CONFIG.packages[1].name)}</strong>
    </div>
    ${OFFER_CONFIG.comparison.map(row => `
      <div class="comparison-row">
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.esencial)}</span>
        <span>${escapeHtml(row.premium)}</span>
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
      showToast(`El checkout de ${plan.name} está en preparación. Cuando el link final esté configurado, este botón enviará directo al pago.`);
      return;
    }

    window.location.href = withTrackingParams(plan.checkoutUrl);
  });
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
  const hero = document.querySelector(".hero-section");
  if (!stickyCta || !hero) return;

  if (!("IntersectionObserver" in window)) {
    stickyCta.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(entries => {
    const [entry] = entries;
    stickyCta.classList.toggle("is-visible", !entry.isIntersecting);
  }, {
    threshold: 0,
    rootMargin: "0px 0px -35% 0px"
  });

  observer.observe(hero);
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
