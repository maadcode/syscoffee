# SysCoffee — Manual de Diseño (Estilo Web Comic / RPG)

## Resumen del Concepto Visual

**SysCoffee** combina la calidez y comodidad de una cafetería clásica con la estética estructurada de una historieta o novela visual (web comic / manga). El diseño se basa en **paneles enmarcados**, tipografías contrastantes y una paleta de colores café con acentos vibrantes.

### Características Clave:
1. **Estilo Historieta (Comic Panels):** Los contenedores y diálogos usan bordes definidos y marcos dorados o café oscuro que emulan viñetas de cómic.
2. **Paleta Cafetera Cálida:** Tonos tierra, cremas y ámbar contrastados con acentos de color digital suaves para las decisiones.
3. **Tipografía Híbrida:** 
   - **Cinzel** (Serif elegante) para títulos y logotipos.
   - **Lora** (Serif clásica y legible) para la narrativa y diálogos.
   - **Inter** (Sans-serif moderna) para controles de UI y botones.
4. **Composición Responsiva y Holgada:** Los elementos se centran en el escritorio con anchos máximos estrictos (`max-w-*`) y márgenes balanceados para evitar que la interfaz se sienta "apretada" o estirada.
5. **Animaciones de Transición Suaves:** Entrada de texto carácter por carácter y cambios de fase fluidos. Se evitan escalados agresivos en hover para prevenir colisiones visuales entre tarjetas adyacentes.

---

## Paleta de Colores

### 1. Tonos Base (Cafetería)
*   **Fondo Canvas:** `#1a0e05` (Marrón café casi negro)
*   **Superficies y Paneles:** `#2d1a0a` (Café oscuro) con opacidad para efecto de vidrio
*   **Bordes de Viñeta / Marcos:** `#d4943f` (Ámbar dorado)
*   **Texto Principal:** `#f5e6c8` (Crema claro)
*   **Texto Secundario:** `#e8c07a` (Café crema suave)

### 2. Acentos de Decisión (Neutrales y Anónimos)
*   **Opción A (Cálido):** Fondo `rgba(212, 148, 63, 0.08)`, borde `rgba(212, 148, 63, 0.35)`, texto `#d4943f`
*   **Opción B (Fresco):** Fondo `rgba(100, 160, 200, 0.08)`, borde `rgba(100, 160, 200, 0.35)`, texto `#7ec8e3`
*   **Opción C (Orgánico):** Fondo `rgba(150, 200, 140, 0.08)`, borde `rgba(150, 200, 140, 0.35)`, texto `#a8d8a8`

---

## Tipografía

| Uso | Fuente | Estilo |
| :--- | :--- | :--- |
| **Logos y Títulos** | `Cinzel` | Serif, peso 600-700, espaciado clásico |
| **Diálogos e Historia** | `Lora` | Serif, peso 400-500, espaciado de lectura fluido |
| **UI, Botones e Inputs** | `Inter` | Sans-serif, peso 400-600, alta legibilidad |

---

## Layout y Maquetación Responsiva

### 1. Restricción de Ancho (Max-Widths)
Para evitar que las tarjetas se estiren infinitamente en pantallas anchas (lo cual rompe el estilo de lectura e historieta), se aplican límites de ancho estricto:
*   **Formulario de Onboarding:** Máximo `448px` (`max-w-md`) centrado vertical y horizontalmente.
*   **Selector de Avatar:** Máximo `540px` (`max-w-lg`) para mantener las tarjetas en una grilla compacta de 2 columnas.
*   **Área de Juego / Novela Visual:** Máximo `768px` (`max-w-3xl`) centrado para emular una pantalla o ventana de juego RPG clásica.

### 2. Espaciados y Márgenes
*   **Margen Externo:** Mínimo `16px` (`px-4`) en móvil, escalando a `32px` (`px-8`) en escritorio.
*   **Relleno de Tarjetas (Padding):** `24px` a `32px` para dar aire al texto y que los elementos respiren.
*   **Espacio entre Opciones:** `12px` de separación constante para evitar colisiones.

### 3. Evitar Colisiones en Hover (Hover Safe)
*   **Regla de Oro:** Los efectos de hover no deben usar `scale()` que aumente el tamaño físico de la tarjeta si esta tiene elementos adyacentes.
*   **Alternativa:** Usar cambios de color de fondo, realce del borde dorado y sombras difusas (`box-shadow`) para indicar interactividad sin perturbar el flujo de la página.

### 4. Capas y Z-Index (Personajes y Textos)
*   Los personajes (sprites) deben renderizarse con una jerarquía de capas clara:
    1.  **Fondo de Escena (Background):** `z-0`
    2.  **Sprites de Personajes:** `z-10`
    3.  **Caja de Diálogo y Menú HUD:** `z-20` (en frente de los personajes para que no obstruyan el texto)
*   Para acomodar imágenes con fondo neutro/sólido, los personajes se muestran dentro de **marcos de viñetas de cómic** circulares o con bordes estilizados en lugar de recortados al aire, asegurando que se vean integrados al diseño general de historieta.
