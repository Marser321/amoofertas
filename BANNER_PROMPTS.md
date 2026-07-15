# Prompts para el hero de las dos ofertas

Generar cada concepto en dos llamadas separadas: escritorio 16:9 y móvil 4:5. Preparar una versión limpia para animación y otra con el titular integrado.

## Instrucciones comunes

```text
Use case: ads-marketing
Asset type: hero premium para una landing de educación y evaluación de crédito.
Input images: las imágenes suministradas de Amanda son referencias obligatorias de identidad, vestuario y estética.
Subject: Amanda Olmo en un entorno profesional, elegante y cercano.
Style/medium: fotografía publicitaria premium, realista, sofisticada, sin apariencia artificial.
Color palette: azul marino profundo, negro, dorado cálido y pequeños acentos cyan.
Constraints: preservar estrictamente rostro, cuerpo, cabello, expresión y rasgos reconocibles de Amanda; no adelgazar, rejuvenecer ni rediseñar su identidad; iluminación natural; piel realista; sin logos ajenos; sin marcas de agua.
Responsive composition: generar por separado una versión 16:9 y una versión 4:5; mantener a Amanda completa dentro de una zona segura y dejar espacio claro para copy.
```

## Variante 1 — Caminos de luz

Referencia principal: `assets/hero-banner-dos-caminos.webp`.

```text
Primary request: conservar a Amanda y transformar la escena en una composición editorial donde dos senderos de luz sutiles parten hacia dos direcciones, representando dos caminos para avanzar.
Scene/backdrop: estudio arquitectónico azul marino con líneas doradas elegantes, profundidad cinematográfica y ambiente financiero premium.
Composition/framing: Amanda a la derecha; 42% de espacio negativo limpio a la izquierda; cabeza y manos completamente visibles.
Avoid: carreteras literales, flechas obvias, exceso de efectos futuristas, iconos financieros genéricos.
```

## Variante 2 — Dos espacios, una decisión

Referencias principales: `assets/hero-banner-comunidad.webp` y `assets/hero-banner-evaluacion.webp`.

```text
Primary request: presentar visualmente dos opciones mediante dos ambientes profesionales conectados: uno cálido y comunitario, otro más privado y consultivo.
Scene/backdrop: arquitectura elegante dividida sutilmente por iluminación dorada y cyan, sin separar la imagen con una línea rígida.
Composition/framing: Amanda como punto de unión entre ambos ambientes; espacio negativo estable para el titular.
Avoid: duplicar a Amanda, pantalla partida evidente, balanzas, signos de interrogación o estética de banco tradicional.
```

## Variante 3 — Próximo paso

Referencia principal: `assets/hero-banner-evaluacion.webp`.

```text
Primary request: Amanda en un escritorio ejecutivo con el teléfono rojo y el portátil como elementos secundarios; una línea luminosa se divide suavemente en dos recorridos detrás de ella.
Scene/backdrop: oficina editorial azul marino, madera oscura y detalles dorados, limpia y sofisticada.
Composition/framing: plano medio amplio; Amanda a la derecha; objetos sin tapar rostro o manos; espacio izquierdo amplio para copy.
Avoid: dramatismo excesivo, oficina recargada, documentos con texto, gráficos de score o billetes.
```

## Sufijo para versiones limpias

```text
Text: ninguno.
Constraints adicionales: no incluir letras, titulares, logotipos ni símbolos; conservar completamente limpia la zona destinada al copy HTML.
```

## Sufijo para versiones con texto integrado

```text
Text (verbatim): "Elige uno de dos caminos para continuar con tu crédito."
Typography: sans serif editorial, moderna y contundente; blanco cálido con énfasis dorado únicamente en “dos caminos”; máximo tres líneas; alineación izquierda; contraste alto.
Constraints adicionales: reproducir el texto exactamente una vez, con todas las tildes correctas; no añadir subtítulos, botones, logos ni palabras adicionales.
```

## Prompt de animación

```text
Animate the supplied clean banner as a subtle premium 6-second seamless loop.
Preserve Amanda’s face, body, pose, clothing and identity exactly.
Keep Amanda almost still; allow only natural breathing and a very subtle blink.
Create slow parallax in the architectural background and gentle movement in the gold and cyan light paths.
Lock the camera; no zoom, no cuts, no lip movement, no facial morphing, no hand deformation and no new objects.
Keep the negative-space copy area stable and empty.
No text, logos or watermark.
Produce separate 16:9 and 4:5 versions.
```
