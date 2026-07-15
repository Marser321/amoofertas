# Amo Ofertas

Landing estática de compra para la Comunidad Mandy Academy y la evaluación personalizada de crédito.

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

## Retornos del checkout

Configurar cada plataforma de pago para volver a una de estas direcciones después de una compra aprobada:

- Comunidad: `gracias.html?offer=comunidad`
- Evaluación: `gracias.html?offer=evaluacion`

La página de gracias usa el parámetro `offer` para mostrar el próximo paso correcto. Sin un valor válido muestra el estado general y el acceso a soporte.

## Probar localmente

Abrir `index.html` directamente en el navegador o servir la carpeta con cualquier servidor estático.
