# Amo Ofertas

Sitio estático con dos recorridos de venta que comparten ofertas, checkout y página postcompra.

## Rutas

- `index.html`: landing principal con Comunidad Mandy Academy y Evaluación personalizada.
- `evaluacion.html`: funnel VSL dedicado a la evaluación de $100. Se distribuye mediante campañas y no se enlaza desde la landing principal.
- `gracias.html?offer=comunidad`: próximos pasos de la membresía.
- `gracias.html?offer=evaluacion`: agenda posterior a la evaluación.

## Configuración de ofertas

Precios, beneficios, botones, checkouts y destinos posteriores están centralizados en `OFFER_CONFIG`, dentro de `js/app.js`.

Los contenedores con `data-offer-ids` deciden qué tarjetas renderizar:

- `data-offer-ids="comunidad,evaluacion"`: ambas ofertas.
- `data-offer-ids="evaluacion"`: solo la evaluación.

Todos los botones con `data-checkout-plan="evaluacion"` utilizan la misma URL de checkout. Los parámetros `utm_*`, `gclid` y `fbclid` se conservan al salir hacia checkout y hacia el destino postcompra.

## URLs pendientes

Reemplazar estos cuatro placeholders en `OFFER_CONFIG`:

| Oferta | Campo | Placeholder |
| --- | --- | --- |
| Comunidad | `checkoutUrl` | `#checkout-pending-comunidad` |
| Comunidad | `followUpUrl` | `#access-pending-comunidad` |
| Evaluación | `checkoutUrl` | `#checkout-pending-evaluacion` |
| Evaluación | `followUpUrl` | `#booking-pending-evaluacion` |

Mientras un valor siga siendo placeholder, el botón mostrará un aviso y no abandonará la página.

Configurar los retornos de los checkouts así:

- Comunidad: `gracias.html?offer=comunidad`
- Evaluación: `gracias.html?offer=evaluacion`

La página de gracias no verifica el pago por sí sola; por eso mantiene copy condicional y no confirma una transacción únicamente por el parámetro de URL.

## Hero de la landing principal

La imagen, los futuros videos animados y el texto alternativo están centralizados en `OFFERS_HERO_CONFIG`, dentro de `js/app.js`.

Configuración inicial:

- `posterDesktop`: `assets/hero-banner-dos-caminos.webp`
- `posterMobile`: `assets/hero-banner-dos-caminos.webp`
- `videoDesktop`: vacío
- `videoMobile`: vacío

Para activar el banner animado:

1. Guardar los MP4 optimizados en `assets/`.
2. Completar `videoDesktop` y `videoMobile`.
3. Mantener los posters como fallback.

El video ambiental se reproduce silenciado, en loop y con `playsinline`. Si el navegador bloquea la reproducción, el archivo falla o la persona prefiere movimiento reducido, se conserva el poster estático.

Los prompts de generación y animación están documentados en [`BANNER_PROMPTS.md`](BANNER_PROMPTS.md).

## Probar localmente

Servir la carpeta con un servidor estático y revisar las tres rutas. Abrir los HTML directamente puede limitar algunas pruebas de video o navegación.
