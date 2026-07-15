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

const VISUAL_VARIANTS = [
  {
    id: "cercana",
    label: "Cercana",
    type: "Foto real",
    src: "assets/support-real.jpeg",
    alt: "Amanda Olmo en una sesión cercana de orientación"
  },
  {
    id: "autoridad",
    label: "Autoridad",
    type: "Foto real",
    src: "assets/variant-autoridad-real.jpeg",
    alt: "Amanda Olmo de pie frente a su escritorio en una imagen de autoridad"
  },
  {
    id: "dinamica",
    label: "Dinámica",
    type: "Foto real",
    src: "assets/variant-dinamica-real.jpeg",
    alt: "Amanda Olmo atendiendo una llamada y conectando desde su oficina"
  },
  {
    id: "estudio-identidad",
    label: "Estudio",
    type: "IA con identidad",
    src: "assets/variant-estudio-identidad.webp",
    alt: "Amanda Olmo en un estudio profesional azul y dorado"
  },
  {
    id: "comunidad-identidad",
    label: "Comunidad",
    type: "IA con identidad",
    src: "assets/variant-comunidad-identidad.webp",
    alt: "Amanda Olmo en un ambiente cercano y luminoso para su comunidad"
  },
  {
    id: "evaluacion-identidad",
    label: "Evaluación",
    type: "IA con identidad",
    src: "assets/variant-evaluacion-identidad.webp",
    alt: "Amanda Olmo preparada para una evaluación personalizada en su oficina"
  },
  {
    id: "fintech",
    label: "Fintech",
    type: "Concepto IA",
    src: "assets/variant-fintech-ia.webp",
    alt: "Concepto fintech de Amanda Olmo revisando información financiera"
  },
  {
    id: "credito",
    label: "Crédito",
    type: "Concepto IA",
    src: "assets/variant-credito-ia.webp",
    alt: "Concepto de Amanda Olmo con tarjetas frente a una computadora"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderOffers();
  renderComparison();
  initCheckoutButtons();
  initScrollButtons();
  initStickyCta();
  initAccordion();
  initVideoTestimonials();
  initVideoCarousel();
  initVisualVariants();
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
  const primaryCta = document.querySelector(".hero-actions .btn");
  if (!stickyCta || !primaryCta) return;

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

  observer.observe(primaryCta);
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

function initVisualVariants() {
  const target = document.querySelector("[data-visual-target]");
  const options = document.querySelector("[data-visual-options]");
  const label = document.querySelector("[data-visual-label]");
  if (!target || !options || !label) return;

  options.innerHTML = VISUAL_VARIANTS.map((variant, index) => `
    <button class="visual-variant-option" type="button" data-visual-variant="${escapeHtml(variant.id)}" aria-pressed="${index === 0 ? "true" : "false"}">
      <img src="${escapeHtml(variant.src)}" alt="" width="160" height="100" loading="lazy" decoding="async">
      <span>
        <strong>${escapeHtml(variant.label)}</strong>
        <small>${escapeHtml(variant.type)}</small>
      </span>
    </button>
  `).join("");

  const selectVariant = id => {
    const selected = VISUAL_VARIANTS.find(variant => variant.id === id) || VISUAL_VARIANTS[0];
    target.src = selected.src;
    target.alt = selected.alt;
    label.textContent = `Opción ${selected.label.toLowerCase()}`;

    options.querySelectorAll("[data-visual-variant]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.visualVariant === selected.id));
    });

    try {
      localStorage.setItem("amo-visual-variant", selected.id);
    } catch (_) {
      // La selección sigue funcionando aunque el navegador bloquee el almacenamiento local.
    }
  };

  options.addEventListener("click", event => {
    const button = event.target.closest("[data-visual-variant]");
    if (button) selectVariant(button.dataset.visualVariant);
  });

  let savedVariant = "cercana";
  try {
    savedVariant = localStorage.getItem("amo-visual-variant") || savedVariant;
  } catch (_) {
    // Usar la variante predeterminada.
  }

  selectVariant(savedVariant);
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
