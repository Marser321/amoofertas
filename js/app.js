const OFFER_CONFIG = {
  packages: [
    {
      id: "comunidad",
      name: "Mandy Academy",
      shortName: "Academy",
      badge: "Hazlo por tu cuenta",
      price: "$49.99/mes",
      regularPrice: "$49.99/mes",
      promoPrice: "7 días gratis",
      promoUrl: "https://www.skool.com/mandy-academy-2249/about?ref=c8c75f0ac6eb46acb608e2b44b952686",
      promoButtonLabel: "Activar mis 7 días gratis",
      promoSavingsText: "Entra ahora, prueba la Academia y cancela cuando quieras.",
      description: "Aprende a comprender y trabajar tu crédito por tu cuenta con educación práctica, herramientas en español y acceso a un espacio privado de aprendizaje. Durante la masterclass, comienza con 7 días gratis.",
      checkoutUrl: "https://www.skool.com/mandy-academy-2249/about?ref=c8c75f0ac6eb46acb608e2b44b952686",
      followUpUrl: "https://www.skool.com/mandy-academy-2249/about?ref=c8c75f0ac6eb46acb608e2b44b952686",
      buttonLabel: "Unirme a Mandy Academy",
      fineprint: "Oferta válida para quienes tomen acción durante la masterclass. Después de los 7 días gratis, la membresía cuesta $49.99 al mes. Puedes cancelar cuando quieras.",
      features: [
        "7 días gratis al unirte durante la masterclass",
        "Contenido educativo de valor en español",
        "Acceso a un espacio privado de aprendizaje",
        "Interacción y apoyo entre estudiantes",
        "Nuevas herramientas para tomar decisiones informadas"
      ],
      thankYou: {
        eyebrow: "Te damos la bienvenida a Mandy Academy",
        title: "Tu lugar en Mandy Academy está listo",
        lede: "Si tu pago fue aprobado, ya diste el primer paso para aprender, conectar y avanzar dentro de la Academia.",
        primaryLabel: "Acceder a Mandy Academy",
        summaryTitle: "Tu membresía de $49.99 al mes",
        summaryText: "Si te uniste durante la masterclass, tus primeros 7 días son gratis. Después, la membresía se renueva mensualmente y puedes cancelarla cuando quieras.",
        steps: [
          ["Revisa tu correo", "Busca la confirmación de pago y las instrucciones de acceso. Revisa también spam o promociones."],
          ["Entra a la Academia", "Usa el botón de acceso cuando el equipo haya habilitado tu entrada a Mandy Academy."],
          ["Comienza a aprender", "Explora el contenido, participa y aplica las herramientas a tu propio proceso."]
        ]
      }
    },
    {
      id: "evaluacion",
      name: "Asesoría personalizada de crédito",
      shortName: "Asesoría",
      badge: "Oferta especial de la masterclass",
      price: "$100",
      regularPrice: "US$100",
      promoPrice: "Gratis",
      promoUrl: "https://site.amomanagements.com/asesoria-personalizada",
      promoButtonLabel: "Agendar mi asesoría sin costo",
      promoSavingsText: "Ahorras US$100 al agendar durante la masterclass.",
      description: "Una sesión individual con una especialista para revisar tu situación crediticia, aclarar tus próximos pasos y recibir una cotización para tu caso.",
      detailsUrl: "/evaluacion",
      detailsButtonLabel: "Ver qué incluye la asesoría",
      checkoutUrl: "https://app.amomanagements.com/payment-link/6a57c274b1a0a3e48f24d353",
      followUpUrl: "https://site.amomanagements.com/asesoria-personalizada",
      buttonLabel: "Comprar mi asesoría por $100",
      fineprint: "Oferta disponible al agendar durante la masterclass. La asesoría no incluye el servicio de reparación de crédito.",
      featured: true,
      features: [
        "Asesoría personalizada sobre tu situación crediticia",
        "Orientación clara sobre los posibles próximos pasos",
        "Cotización directa del servicio recomendado para tu caso"
      ],
      thankYou: {
        eyebrow: "Asesoría confirmada",
        title: "Ahora elige el horario de tu asesoría personalizada",
        lede: "Si tu pago de US$100 fue aprobado, el siguiente paso es agendar tu cita y preparar la información que quieras revisar con la especialista.",
        primaryLabel: "Agendar mi asesoría",
        summaryTitle: "Qué incluye tu pago de US$100",
        summaryText: "El pago cubre la asesoría personalizada y la preparación de una cotización. No incluye ni garantiza la contratación o el resultado de un servicio de reparación.",
        steps: [
          ["Guarda tu comprobante", "Conserva el correo o recibo del checkout por si necesitas ayuda con tu compra."],
          ["Elige tu horario", "Usa el botón de agenda y selecciona una de las citas disponibles."],
          ["Prepárate para la asesoría", "Ten a mano la información que quieras revisar y las preguntas importantes sobre tu caso."]
        ]
      }
    }
  ],
  comparison: [
    {
      label: "Objetivo",
      comunidad: "Aprender y avanzar por tu cuenta",
      evaluacion: "Revisar tu situación con una especialista"
    },
    {
      label: "Ideal para",
      comunidad: "Quien quiere aprender con herramientas y contenido",
      evaluacion: "Quien necesita orientación personalizada"
    },
    {
      label: "Recibes",
      comunidad: "Contenido, herramientas y 7 días gratis durante la masterclass",
      evaluacion: "Asesoría individual y cotización directa"
    },
    {
      label: "Pago",
      comunidad: "7 días gratis; después $49.99 al mes",
      evaluacion: "Gratis durante la masterclass (valor US$100)"
    },
    {
      label: "Siguiente paso",
      comunidad: "Entrar a Mandy Academy",
      evaluacion: "Agendar la asesoría sin costo"
    }
  ],
  trackedParams: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"]
};

const SOCIAL_PROOF_CONFIG = {
  initialDelayMs: 3000,
  minDelayMs: 8000,
  maxDelayMs: 12000,
  visibleMs: 4500,
  minMinutesAgo: 2,
  maxMinutesAgo: 28,
  names: [
    "Valentina R.",
    "Martín G.",
    "Sofía L.",
    "Sebastián P.",
    "Camila F.",
    "Federico M.",
    "Lucía A.",
    "Diego C.",
    "Agustina S.",
    "Nicolás B.",
    "Carolina V.",
    "Matías H.",
    "Paula D.",
    "Rodrigo T.",
    "Micaela N.",
    "Gonzalo Q.",
    "Natalia J.",
    "Bruno E.",
    "Florencia O.",
    "Andrés K."
  ],
  actions: [
    {
      tone: "action",
      title: "se registró en la masterclass",
      text: "Acaba de asegurar su lugar para la próxima masterclass en vivo.",
      route: "Masterclass"
    },
    {
      tone: "advisory",
      title: "agendó su asesoría gratis",
      text: "Reservó su asesoría personalizada sin costo con el equipo.",
      route: "Ruta Asesoría"
    },
    {
      tone: "academy",
      title: "activó sus 7 días gratis",
      text: "Comenzó su prueba gratuita dentro de Mandy Academy.",
      route: "Ruta Academy"
    },
    {
      tone: "action",
      title: "se sumó a la comunidad",
      text: "Se unió a la comunidad para acompañar la masterclass.",
      route: "Comunidad"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  renderOffers();
  renderComparison();
  initCheckoutButtons();
  initStickyCta();
  initVideoTestimonials();
  initVideoCarousel();
  initThankYouPage();
  initSocialProof();
});

function renderOffers() {
  const grid = document.getElementById("offer-grid");
  if (!grid) return;

  const requestedIds = (grid.dataset.offerIds || "")
    .split(",")
    .map(id => id.trim())
    .filter(Boolean);
  const packages = requestedIds.length
    ? requestedIds.map(id => OFFER_CONFIG.packages.find(plan => plan.id === id)).filter(Boolean)
    : OFFER_CONFIG.packages;
  const destinationMode = grid.dataset.offerAction || "checkout";

  grid.classList.toggle("is-single", packages.length === 1);
  grid.innerHTML = packages.map(plan => `
    <article class="offer-card${plan.featured ? " is-featured" : ""}" data-offer="${escapeHtml(plan.id)}">
      <span class="offer-badge">${escapeHtml(plan.badge)}</span>
      <div class="offer-title-row${plan.featured ? " is-promotional" : ""}">
        <h3>${escapeHtml(plan.name)}</h3>
        ${plan.promoPrice ? "" : `<div class="offer-price">${escapeHtml(plan.price)}</div>`}
      </div>
      <p class="offer-description">${escapeHtml(plan.description)}</p>
      ${plan.promoPrice ? `
        <div class="offer-price-stack${plan.id === "comunidad" ? " is-academy-promo" : ""}" aria-label="${escapeHtml(plan.id === "comunidad" ? `Oferta de ${plan.promoPrice}; después ${plan.regularPrice}` : `Valor regular ${plan.regularPrice}, hoy gratis`)}">
          <span>${escapeHtml(plan.id === "comunidad" ? "Entra ahora" : "Valor regular")}</span>
          ${plan.id === "comunidad" ? `<small class="offer-after-price">Después ${escapeHtml(plan.regularPrice)}</small>` : `<del>${escapeHtml(plan.regularPrice)}</del>`}
          <strong>${plan.id === "comunidad" ? "" : "<small>Hoy:</small> "}${escapeHtml(plan.promoPrice)}</strong>
          <p>${escapeHtml(plan.promoSavingsText)}</p>
        </div>
      ` : ""}
      <ul class="offer-features">
        ${plan.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}
      </ul>
      <button class="btn ${plan.featured ? "btn-primary is-priority-action" : `btn-secondary${destinationMode === "promo" ? " is-academy-action" : ""}`}" type="button" data-checkout-plan="${escapeHtml(plan.id)}" data-offer-destination="${escapeHtml(destinationMode)}">
        ${escapeHtml(destinationMode === "promo" && plan.promoButtonLabel ? plan.promoButtonLabel : destinationMode === "details" && plan.detailsButtonLabel ? plan.detailsButtonLabel : plan.buttonLabel)}
      </button>
      ${destinationMode === "promo" && plan.detailsUrl ? `<button class="offer-detail-link" type="button" data-checkout-plan="${escapeHtml(plan.id)}" data-offer-destination="details">${escapeHtml(plan.detailsButtonLabel)}</button>` : ""}
      <p class="offer-small">${escapeHtml(plan.fineprint)}</p>
    </article>
  `).join("");
}

function renderComparison() {
  const card = document.getElementById("comparison-card");
  if (!card) return;

  const academy = OFFER_CONFIG.packages.find(plan => plan.id === "comunidad");
  const advisory = OFFER_CONFIG.packages.find(plan => plan.id === "evaluacion");
  if (!academy || !advisory) return;

  card.innerHTML = `
    <div class="comparison-row is-head">
      <strong>Detalle</strong>
      <strong>${escapeHtml(advisory.shortName)}</strong>
      <strong>${escapeHtml(academy.shortName)}</strong>
    </div>
    ${OFFER_CONFIG.comparison.map(row => `
      <div class="comparison-row">
        <strong>${escapeHtml(row.label)}</strong>
        <span data-label="${escapeHtml(advisory.shortName)}">${escapeHtml(row.evaluacion)}</span>
        <span data-label="${escapeHtml(academy.shortName)}">${escapeHtml(row.comunidad)}</span>
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

    const destination = button.getAttribute("data-offer-destination");
    if (destination === "promo" && plan.promoUrl) {
      window.location.href = withTrackingParams(plan.promoUrl);
      return;
    }

    if (destination === "details" && plan.detailsUrl) {
      window.location.href = withTrackingParams(plan.detailsUrl);
      return;
    }

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

  const params = new URLSearchParams(window.location.search);
  const pathMatch = window.location.pathname.toLowerCase().match(/(comunidad|evaluacion)/);
  const offerId = params.get("offer") || (pathMatch && pathMatch[1]);
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
        const pendingAction = plan.id === "comunidad" ? "El acceso a Mandy Academy" : "La agenda de asesorías";
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

function initStickyCta() {
  const stickyCta = document.querySelector(".sticky-cta");
  const heroSection = document.querySelector("[data-sticky-threshold], .hero-section");
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

function initSocialProof() {
  const toast = document.querySelector("[data-social-proof]");
  if (!toast || !SOCIAL_PROOF_CONFIG.names.length || !SOCIAL_PROOF_CONFIG.actions.length) return;

  const title = toast.querySelector("[data-social-proof-title]");
  const text = toast.querySelector("[data-social-proof-text]");
  const avatar = toast.querySelector("[data-social-proof-avatar]");
  const meta = toast.querySelector("[data-social-proof-meta]");
  const close = toast.querySelector("[data-social-proof-close]");
  let lastNameIndex = -1;
  let actionIndex = Math.floor(Math.random() * SOCIAL_PROOF_CONFIG.actions.length);
  let showTimer;
  let hideTimer;
  let paused = false;

  const buildMessage = () => {
    const { names, actions, minMinutesAgo, maxMinutesAgo } = SOCIAL_PROOF_CONFIG;
    let nameIndex;
    do {
      nameIndex = Math.floor(Math.random() * names.length);
    } while (names.length > 1 && nameIndex === lastNameIndex);
    lastNameIndex = nameIndex;

    const name = names[nameIndex];
    const action = actions[actionIndex % actions.length];
    actionIndex += 1;

    const minutes = minMinutesAgo + Math.floor(Math.random() * (maxMinutesAgo - minMinutesAgo + 1));
    const initials = name
      .split(/\s+/)
      .map(part => part.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
    const firstName = name.split(" ")[0];

    return {
      avatar: initials,
      tone: action.tone,
      title: `${firstName} ${action.title}`,
      text: action.text,
      meta: `Hace ${minutes} min · ${action.route}`
    };
  };

  const clearTimers = () => {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
  };

  const nextDelay = () => Math.round(
    SOCIAL_PROOF_CONFIG.minDelayMs
      + Math.random() * (SOCIAL_PROOF_CONFIG.maxDelayMs - SOCIAL_PROOF_CONFIG.minDelayMs)
  );

  const schedule = delay => {
    clearTimeout(showTimer);
    if (paused || document.hidden) return;
    showTimer = setTimeout(showMessage, delay);
  };

  const hideMessage = () => {
    clearTimeout(hideTimer);
    toast.classList.remove("is-visible");
    window.setTimeout(() => {
      if (!toast.classList.contains("is-visible")) toast.hidden = true;
    }, 350);
    schedule(nextDelay());
  };

  function showMessage() {
    if (paused || document.hidden) return;
    const message = buildMessage();
    if (title) title.textContent = message.title;
    if (text) text.textContent = message.text;
    if (meta) meta.textContent = message.meta;
    if (avatar) {
      avatar.textContent = message.avatar;
      avatar.dataset.tone = message.tone;
    }
    toast.hidden = false;
    window.requestAnimationFrame(() => toast.classList.add("is-visible"));
    hideTimer = setTimeout(hideMessage, SOCIAL_PROOF_CONFIG.visibleMs);
  }

  const pause = () => {
    paused = true;
    clearTimers();
  };
  const resume = () => {
    paused = false;
    if (toast.classList.contains("is-visible")) {
      hideTimer = setTimeout(hideMessage, SOCIAL_PROOF_CONFIG.visibleMs);
    } else {
      schedule(nextDelay());
    }
  };

  toast.addEventListener("pointerenter", pause);
  toast.addEventListener("pointerleave", resume);
  toast.addEventListener("focusin", pause);
  toast.addEventListener("focusout", event => {
    if (!toast.contains(event.relatedTarget)) resume();
  });
  close?.addEventListener("click", () => {
    paused = false;
    hideMessage();
  });
  document.addEventListener("visibilitychange", () => {
    clearTimers();
    if (document.hidden) {
      toast.classList.remove("is-visible");
      toast.hidden = true;
    } else {
      schedule(nextDelay());
    }
  });

  schedule(SOCIAL_PROOF_CONFIG.initialDelayMs);
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
