# Amo Ofertas

Sitio estático con dos recorridos de venta que comparten configuración, checkout y página postcompra.

## Rutas

- `/ofertas`: landing principal con dos caminos: Asesoría personalizada de crédito y Mandy Academy.
- `/evaluacion`: funnel VSL dedicado a la asesoría de $100. La oferta principal de la landing enlaza primero a esta página.
- `/gracias?offer=comunidad`: próximos pasos de la membresía.
- `/gracias?offer=evaluacion`: agenda posterior a la asesoría.

Vercel redirige la raíz `/` hacia `/ofertas`, publica las páginas HTML sin extensión y mantiene una URL visible breve para cada funnel.

## Configuración de ofertas

Precios, beneficios, botones, checkouts y destinos posteriores están centralizados en `OFFER_CONFIG`, dentro de `js/app.js`.

Los contenedores con `data-offer-ids` deciden qué tarjetas renderizar:

- `data-offer-ids="evaluacion,comunidad"`: ambas ofertas, con la asesoría primero.
- `data-offer-ids="evaluacion"`: solo la asesoría.

En `/ofertas`, `data-offer-action="details"` hace que la tarjeta principal abra `/evaluacion` antes del checkout. Dentro de `/evaluacion`, los botones con `data-checkout-plan="evaluacion"` utilizan la URL de pago de $100. Los parámetros `utm_*`, `gclid` y `fbclid` se conservan al navegar entre ambas páginas, al salir hacia checkout y hacia el destino postcompra.

La promoción de la masterclass pertenece únicamente a la asesoría: quienes tomen acción durante la masterclass reciben un enlace gratuito privado. Ese enlace no se publica ni se configura en este sitio.

## Destinos posteriores pendientes

Reemplazar estos dos placeholders en `OFFER_CONFIG` cuando estén disponibles:

| Oferta | Campo | Placeholder |
| --- | --- | --- |
| Mandy Academy | `followUpUrl` | `#access-pending-comunidad` |
| Asesoría | `followUpUrl` | `#booking-pending-evaluacion` |

Mientras un valor siga siendo placeholder, el botón mostrará un aviso y no abandonará la página.

Configurar los retornos de los checkouts así:

- Mandy Academy: `/gracias?offer=comunidad`
- Asesoría: `/gracias?offer=evaluacion`

La página de gracias no verifica el pago por sí sola; por eso mantiene copy condicional y no confirma una transacción únicamente por el parámetro de URL.

## Probar localmente

Servir la carpeta con un servidor estático y revisar las tres rutas. Abrir los HTML directamente puede limitar algunas pruebas de video o navegación.
