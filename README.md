# Amo Ofertas

Landing estática de compra para los paquetes de Mandy Academy.

## Editar paquetes

Los nombres, precios, inclusiones y links de checkout están centralizados en `js/app.js`, dentro de `OFFER_CONFIG`.

Campos principales por paquete:

- `name`: nombre visible del paquete.
- `price`: precio o texto de precio.
- `checkoutUrl`: link externo de pago.
- `features`: lista de beneficios.
- `buttonLabel`: texto del botón.

Mientras `checkoutUrl` sea un placeholder, el botón mostrará un aviso de checkout en preparación.

## Probar localmente

Abrir `index.html` directamente en el navegador o servir la carpeta con cualquier servidor estático.
