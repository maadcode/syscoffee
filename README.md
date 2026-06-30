# SysCoffee ☕

**SysCoffee** es una novela visual interactiva y juego de rol (RPG) adaptativo diseñado con un estilo estético de **Web Comic**. El objetivo del juego es diagnosticar perfiles profesionales y de toma de decisiones en base a las elecciones de los jugadores en diferentes situaciones cotidianas y desafíos técnicos en un ambiente de desarrollo.

---

## 🎨 Concepto Visual y Diseño
La interfaz de usuario ha sido diseñada para cautivar desde el primer momento:
- **Estilo Historieta (Comic Panels):** Contenedores con bordes marcados y marcos que simulan viñetas de cómic en tonos ámbar y café oscuro.
- **Tipografía Híbrida:**
  - `Cinzel` para títulos y logotipos principales.
  - `Lora` para la narrativa y diálogos.
  - `Inter` para botones, menús y elementos interactivos de la interfaz.
- **Paleta de Colores Cafetera:** Tonos marrón oscuro (`#1a0e05` / `#2d1a0a`) para superficies con efecto vidrio y acentos dorados/ámbar (`#d4943f`).
- **Alternativas Anónimas:** Para evitar sesgos en el diagnóstico, las opciones se muestran al usuario de forma neutra y anónima (usando insignias A, B y C con colores suaves que no revelan el rol asociado).

---

## 📁 Estructura del Proyecto

```bash
cafe-central/
├── src/
│   ├── components/       # Componentes de UI (Onboarding, Juego, Resultados)
│   │   ├── Game/         # Pantalla de juego, caja de diálogo, barra de progreso y panel de alternativas
│   │   ├── Onboarding/   # Flujo de registro del jugador y selección de avatar
│   │   └── Results/      # Pantalla final con el diagnóstico y perfil del jugador
│   ├── data/             # Configuración de roles y base de preguntas/desafíos
│   │   ├── roles.js      # Definición de roles (QA, Frontend, Backend, PM, etc.) y colores
│   │   └── questions.js  # Base de preguntas y diálogos para la simulación
│   ├── engine/           # Lógica y algoritmo de adaptación
│   │   └── adaptiveAlgorithm.js # Algoritmo que calcula el avance y el perfil adaptativo
│   ├── hooks/            # Hooks de React para control de estados del juego
│   ├── config.js         # Archivo de configuración global de la aplicación (¡NUEVO!)
│   ├── App.jsx           # Enrutador principal de pantallas
│   ├── main.jsx          # Punto de entrada de React
│   └── index.css         # Estilos globales y sistema de tokens de diseño
├── vite.config.js        # Configuración del bundler Vite
└── package.json          # Dependencias y scripts de ejecución
```

---

## ⚙️ Configuración y Modo Depuración (Debug)

Se ha implementado una configuración global para controlar si se visualizan las etiquetas de depuración `[DEBUG] Rol` encima de cada alternativa en el panel de decisión (`ChoicePanel`). Por defecto, esta opción está **desactivada** en producción, pero es sumamente útil para realizar pruebas locales en desarrollo.

### ¿Dónde está la configuración?
La configuración reside en: `src/config.js`

### ¿Cómo habilitar o deshabilitar las etiquetas de roles?

Puedes crear un archivo `.env.local` en la raíz del proyecto.
- **Para habilitar:**
  ```env
  VITE_SHOW_DEBUG_ROLES=true
  ```
- **Para deshabilitar:**
  ```env
  VITE_SHOW_DEBUG_ROLES=false
  ```

---

## 🚀 Instalación y Comandos Útiles

Asegúrate de contar con Node.js instalado. Desde la raíz de la carpeta del proyecto `cafe-central`, ejecuta:

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo local
```bash
npm run dev
```

### 3. Construir la versión de producción
```bash
npm run build
```

### 4. Ejecutar el análisis estático (Linter)
```bash
npm run lint
```
