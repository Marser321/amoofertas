# Amo Ofertas

Landing estática de compra para la Comunidad Mandy Academy y la evaluación personalizada de crédito.

## Multimedia del hero

El bloque principal comienza siempre en modo `Video` y permite cambiar manualmente a `Presentación`. Los tres banners, su orden y sus textos están centralizados en `HERO_MEDIA_CONFIG`, dentro de `js/app.js`.

Archivos finales:

- `assets/hero-banner-dos-caminos.webp`
- `assets/hero-banner-comunidad.webp`
- `assets/hero-banner-evaluacion.webp`

El texto se renderiza con HTML/CSS sobre las imágenes para mantenerlo nítido, accesible y editable.

## Editar paquetes

Los nombres, precios, inclusiones, links de checkout y destinos posteriores a la compra están centralizados en `js/app.js`, dentro de `OFFER_CONFIG`.

Campos principales por paquete:

- `name`: nombre visible del paquete.
- `price`: precio o texto de precio.
- `checkoutUrl`: link externo de pago.
- `followUpUrl`: acceso a la comunidad o calendario de evaluación.
- `features`: lista de beneficios.
- `buttonLabel`: texto del botón.

Mientras `checkoutUrl` o `followUpUrl` sean placeholders, los botones mostrarán un aviso de que el flujo está en preparación.

## URLs pendientes antes de publicar

Reemplazar estos cuatro placeholders en `OFFER_CONFIG`:

| Oferta | Campo | Placeholder actual |
| --- | --- | --- |
| Comunidad | `checkoutUrl` | `#checkout-pending-comunidad` |
| Comunidad | `followUpUrl` | `#access-pending-comunidad` |
| Evaluación | `checkoutUrl` | `#checkout-pending-evaluacion` |
| Evaluación | `followUpUrl` | `#booking-pending-evaluacion` |

Los parámetros `utm_*`, `gclid` y `fbclid` se conservan al salir hacia checkout y hacia el siguiente paso postcompra.

## Retornos del checkout

Configurar cada plataforma de pago para volver a una de estas direcciones después de una compra aprobada:

- Comunidad: `gracias.html?offer=comunidad`
- Evaluación: `gracias.html?offer=evaluacion`

La página de gracias usa el parámetro `offer` para mostrar el próximo paso correcto. Sin un valor válido muestra el estado general y el acceso a soporte.

La página es informativa y no verifica por sí misma el estado del pago. Por eso el copy usa la condición “si tu pago fue aprobado” y evita confirmar una transacción basándose únicamente en el parámetro de URL.

## Probar localmente

Abrir `index.html` directamente en el navegador o servir la carpeta con cualquier servidor estático.
