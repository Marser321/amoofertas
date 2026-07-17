# Amo Ofertas

Sitio estático con dos recorridos que comparten configuración, seguimiento de campañas y páginas de próximos pasos.

## Rutas

- `/ofertas`: landing principal con dos caminos: Asesoría personalizada de crédito y Mandy Academy.
- `/evaluacion`: detalle VSL de la asesoría personalizada regular de US$100.
- `/gracias?offer=comunidad`: próximos pasos de la membresía.
- `/gracias?offer=evaluacion`: agenda posterior a la asesoría.

Vercel redirige la raíz `/` hacia `/ofertas`, publica las páginas HTML sin extensión y mantiene una URL visible breve para cada funnel.

## Configuración de ofertas

Precios, beneficios, botones, checkouts y destinos están centralizados en `OFFER_CONFIG`, dentro de `js/app.js`.

Los contenedores con `data-offer-ids` deciden qué tarjetas renderizar:

- `data-offer-ids="evaluacion,comunidad"`: ambas ofertas, con la asesoría primero.
- `data-offer-ids="evaluacion"`: solo la asesoría, si vuelve a necesitarse una tarjeta independiente.

En `/ofertas`, `data-offer-action="promo"` hace que la tarjeta principal abra `promoUrl`. Los CTA promocionales estáticos usan `data-offer-destination="promo"`. El enlace secundario abre `/evaluacion` mediante `data-offer-destination="details"`. Los parámetros `utm_*`, `gclid` y `fbclid` se conservan en todos estos destinos.

En `/ofertas`, la asesoría es gratuita para quienes agenden durante la masterclass y ahorran su valor regular de US$100. El registro se gestiona en `https://site.amomanagements.com/asesoria-personalizada`. Esta promoción no se muestra dentro de `/evaluacion`, que conserva la oferta regular pagada.

Mandy Academy ofrece 7 días gratis y después cuesta US$49.99 al mes. Su CTA abre `https://www.skool.com/mandy-academy-2249/about?ref=c8c75f0ac6eb46acb608e2b44b952686`.

El checkout pagado de US$100 se conserva en `checkoutUrl` y se utiliza únicamente dentro de `/evaluacion`.

## Notificaciones de actividad

Los mensajes promocionales y sus tiempos se administran en `SOCIAL_PROOF_CONFIG`, dentro de `js/app.js`. Usan avatares gráficos y llamadas a la acción verificables, sin presentar identidades o registros simulados como actividad real.

## Destinos posteriores pendientes

Reemplazar el siguiente placeholder en `OFFER_CONFIG` cuando esté disponible:

| Oferta | Campo | Placeholder |
| --- | --- | --- |
| Mandy Academy | `followUpUrl` | `#access-pending-comunidad` |

Mientras un valor siga siendo placeholder, el botón mostrará un aviso y no abandonará la página.

Configurar los retornos de los checkouts futuros así:

- Mandy Academy: `/gracias?offer=comunidad`
- Asesoría: `/gracias?offer=evaluacion`

La página de gracias no verifica el pago por sí sola; por eso mantiene copy condicional y no confirma una transacción únicamente por el parámetro de URL.

## Probar localmente

Servir la carpeta con un servidor estático y revisar las tres rutas. Abrir los HTML directamente puede limitar algunas pruebas de video o navegación.
