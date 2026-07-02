// ─── questions.js ────────────────────────────────────────────────────────────
// 15 escenarios independientes del día a día en una cafetería.
// Cada pregunta presenta una situación diferente: problemas, oportunidades,
// innovaciones y momentos emocionales del equipo del café.

export const QUESTIONS = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 1 — El inventario se fue de las manos
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    title: 'El Inventario Desbordado',
    background: 'noche_estresante',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: '{name}, esta noche me quedé revisando los números y no cuadra nada. Pedimos 50 kilos de café la semana pasada y ya no queda ni uno... algo no está bien.',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: 'Don Mario está preocupado porque llevamos semanas anotando todo en una libreta y siempre hay errores. Ayer un proveedor cobró doble y no nos dimos cuenta hasta hoy.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Me siento abrumado, {name}. Siento que pierdo dinero sin saber dónde. Necesito que alguien me ayude a poner orden en todo esto.',
      },
    ],
    roleActions: {
      FE: 'Diseñar una interfaz intuitiva de gestión de inventario donde Don Mario pueda ver en tiempo real el stock de cada producto, con alertas visuales cuando algo está por agotarse.',
      BE: 'Construir un sistema backend de control de inventario con registro automático de entradas y salidas, integración con proveedores y alertas de stock bajo.',
      MB: 'Crear una app móvil para que Don Mario y Ximena escaneen productos con el celular al recibirlos, actualizando el inventario al instante desde cualquier lugar.',
      UX: 'Investigar cómo Don Mario y su equipo gestionan hoy el inventario, mapear sus dolores y diseñar un flujo digital simple que se adapte a su rutina diaria.',
      AF: 'Documentar el proceso actual de inventario, identificar los puntos donde se pierden productos o se duplican pedidos, y definir los requisitos del nuevo sistema.',
      IT: 'Configurar un servidor local en el café con respaldo en la nube para que el sistema de inventario funcione incluso si se cae el internet.',
      RD: 'Asegurar que los dispositivos del café estén conectados de forma estable a la red para que el sistema de inventario sincronice datos sin interrupciones.',
      DB: 'Diseñar la base de datos de inventario: productos, proveedores, movimientos de stock y precios históricos, con integridad referencial y consultas optimizadas.',
      DA: 'Analizar los datos históricos de compras y consumo para identificar patrones de desperdicio y recomendar cantidades óptimas de pedido por producto.',
      QA: 'Diseñar pruebas para el sistema de inventario: verificar que los cálculos de stock sean correctos, que las alertas se activen a tiempo y que no haya inconsistencias.',
      CS: 'Implementar controles de acceso al sistema de inventario para que solo personal autorizado pueda modificar cantidades, con registro de auditoría de cada cambio.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 2 — Quejas por el WiFi
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    title: 'La Batalla del WiFi',
    background: 'dia_quejas',
    dialogues: [
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: 'Ya van tres clientes que se quejan del WiFi hoy. Uno hasta dejó una reseña negativa diciendo que "el café es bueno pero el internet es del siglo pasado".',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Me duele leer eso, {name}. Nosotros nos esforzamos tanto en el café y en el ambiente... pero si el WiFi no funciona, los clientes que vienen a trabajar se van a otro lado.',
      },
      {
        character: 'soporte_isp',
        characterName: 'Pedro',
        mood: 'neutral',
        side: 'right',
        text: 'Hola Don Mario, acabo de revisar su conexión. El router de fibra está activo y el enlace es estable, pero tienen demasiados dispositivos colgados a la vez y la señal se satura. ¿Qué hacemos?',
      },
    ],
    roleActions: {
      FE: 'Crear un portal cautivo con la marca del café donde los clientes se conecten al WiFi, vean promociones del día y dejen su email para el programa de fidelización.',
      BE: 'Desarrollar un servicio que gestione el ancho de banda por usuario, con límites justos para que todos tengan buena conexión y nadie acapare todo el recurso.',
      MB: 'Desarrollar una mini-app o PWA del café donde los clientes puedan conectarse al WiFi automáticamente y además ver el menú y hacer pedidos.',
      UX: 'Diseñar la experiencia de conexión WiFi del café: desde cómo el cliente encuentra la red hasta qué ve al conectarse, haciendo que sea rápido, bonito y útil.',
      AF: 'Analizar las necesidades de conectividad del café: cuántos clientes se conectan, qué ancho de banda necesitan, y documentar los requisitos para una solución escalable.',
      IT: 'Evaluar la infraestructura de red actual, recomendar un upgrade del router y los access points, y configurar QoS para priorizar el tráfico del negocio.',
      RD: 'Rediseñar la red WiFi del café con access points estratégicamente ubicados, separar la red de clientes de la del negocio y optimizar canales para evitar interferencias.',
      DB: 'Diseñar un sistema de logging de conexiones WiFi para analizar patrones de uso, horarios pico de conexión y cantidad de dispositivos simultáneos.',
      DA: 'Analizar los datos de uso de WiFi para entender los patrones: horarios con más dispositivos, consumo promedio por cliente y correlación con las quejas.',
      QA: 'Probar la conexión WiFi en diferentes puntos del café, medir velocidades, verificar estabilidad y documentar los puntos muertos de señal.',
      CS: 'Asegurar la red del café: implementar WPA3, segmentar el tráfico de clientes para proteger los sistemas del negocio y prevenir accesos no autorizados.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 3 — Menú digital innovador
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    title: 'El Menú del Futuro',
    background: 'dia_innovacion',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: '¡{name}! Fui a un café en el centro y tenían un menú digital con fotos increíbles de cada bebida. Los clientes podían ver exactamente lo que iban a pedir. ¡Quiero eso aquí!',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'alegre',
        side: 'right',
        text: '¡Sería genial! Siempre me preguntan cómo es tal bebida o qué ingredientes tiene. Con un menú digital con fotos y descripciones, todo sería más fácil.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Estoy emocionado con la idea. Quiero que nuestros clientes sientan que estamos a la vanguardia, que no somos solo un café más. {name}, ¿cómo lo harías?',
      },
    ],
    roleActions: {
      FE: 'Diseñar y programar un menú digital interactivo con fotos de alta calidad, filtros por categoría, información nutricional y animaciones atractivas al navegar.',
      BE: 'Crear un CMS sencillo para que Don Mario y Ximena actualicen el menú sin tocar código: agregar productos, cambiar precios, marcar agotados, subir fotos.',
      MB: 'Desarrollar la app del menú optimizada para tablets del café con scroll fluido, zoom en las fotos de productos y opción de pedir directamente desde la mesa.',
      UX: 'Diseñar la experiencia del menú digital centrada en el apetito visual: jerarquía de productos, fotografía tentadora, tipografía legible y flujo de exploración natural.',
      AF: 'Definir los requisitos del menú digital: qué información necesita cada producto, cómo se organizan las categorías, reglas de precio y disponibilidad por horario.',
      IT: 'Seleccionar y configurar la plataforma de hosting para el menú digital, asegurar que cargue rápido en los tablets del café y funcione offline con cache.',
      RD: 'Configurar la red para que los tablets del menú tengan conexión prioritaria y estable, sin afectar el WiFi de los clientes ni los sistemas de caja.',
      DB: 'Diseñar la base de datos del menú: productos con fotos, precios, ingredientes, alérgenos, disponibilidad y categorías, con versionado para historial de cambios.',
      DA: 'Analizar qué productos del menú se consultan más vs cuáles se piden más, para optimizar la presentación y destacar los productos con mejor margen.',
      QA: 'Probar el menú digital en todos los dispositivos del café: tablets, celulares de clientes, pantallas. Verificar que las fotos carguen bien y los precios sean correctos.',
      CS: 'Asegurar que el CMS del menú tenga autenticación segura y que las imágenes subidas sean escaneadas para evitar contenido malicioso o código inyectado.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 4 — Día de mucha clientela
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 4,
    title: 'La Hora Pico Más Intensa',
    background: 'dia_concurrido',
    dialogues: [
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: '¡No doy abasto! La fila llega hasta la puerta y el sistema de caja va lentísimo. Cada pedido tarda el doble porque tengo que buscar los productos uno por uno.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Es el día más concurrido del mes y deberíamos estar felices... pero me angustia ver clientes irse sin pedir porque la fila no avanza, {name}.',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: 'Necesitamos algo que haga el proceso más rápido. Hay cafés donde los clientes piden desde su celular y solo pasan a recoger. ¿Podremos hacer algo así?',
      },
    ],
    roleActions: {
      FE: 'Optimizar la interfaz del sistema de caja: crear accesos rápidos a los productos más pedidos, atajos de teclado y un flujo de cobro en menos de 3 clics.',
      BE: 'Desarrollar un sistema de pedidos anticipados: los clientes piden desde su celular, el pedido llega a cocina y cuando está listo solo pasan a recoger.',
      MB: 'Crear una app de pedidos express donde los clientes en fila puedan ir armando su pedido desde el celular mientras esperan, acelerando el proceso en caja.',
      UX: 'Observar el flujo en hora pico, cronometrar cada paso del pedido e identificar los cuellos de botella para diseñar un proceso que reduzca el tiempo de espera a la mitad.',
      AF: 'Mapear el proceso completo desde que el cliente entra hasta que recibe su pedido, medir tiempos y proponer mejoras basadas en datos del flujo actual.',
      IT: 'Asegurar que los servidores tengan recursos suficientes para soportar la carga en hora pico sin que el sistema se ponga lento, con auto-scaling si es necesario.',
      RD: 'Verificar que la red del café soporte la carga de todos los dispositivos durante hora pico sin degradar el rendimiento del sistema de caja.',
      DB: 'Optimizar las consultas de la base de datos del sistema de caja para que las búsquedas de productos y el registro de ventas sean instantáneos en hora pico.',
      DA: 'Analizar los datos de ventas por hora para predecir las horas pico, recomendar la cantidad óptima de personal y anticipar qué productos preparar con antelación.',
      QA: 'Ejecutar pruebas de carga simulando hora pico: muchos pedidos simultáneos, verificar tiempos de respuesta y asegurar que el sistema no se caiga bajo presión.',
      CS: 'Verificar que el sistema de pagos sea seguro durante la alta carga: que las transacciones no se dupliquen, que los datos de tarjetas estén protegidos y que haya trazabilidad.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 5 — Programa de fidelización
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    title: 'Clientes Que Vuelven',
    background: 'dia_tranquilo',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Hoy es un día tranquilo y me puse a pensar... tenemos clientes que vienen todos los días, como doña Carmen, y queremos agradecer su lealtad, {name}.',
      },
      {
        character: 'cliente_carmen',
        characterName: 'Carmen',
        mood: 'alegre',
        side: 'right',
        text: '¡Hola muchachos! Sí, vengo todos los días por mi cortado. El trato aquí es excelente, pero un sistema para acumular visitas o puntos en nuestro celular sería maravilloso.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: '¡Justo eso, Carmen! Quiero algo digital y moderno, no tarjetitas de papel que siempre se pierden. Me emociona premiar a quienes nos eligen a diario.',
      },
    ],
    roleActions: {
      FE: 'Diseñar la interfaz del programa de fidelización: un panel donde los clientes vean sus puntos, recompensas disponibles y su historial, con una estética cálida y premium.',
      BE: 'Construir el motor de puntos y recompensas: acumulación automática por compra, niveles de cliente, canje de premios y notificaciones de beneficios disponibles.',
      MB: 'Desarrollar la app de fidelización del café con tarjeta digital, notificaciones push de premios, historial de visitas y ofertas personalizadas según gustos.',
      UX: 'Investigar qué motiva a los clientes a volver, diseñar la mecánica de recompensas y crear la experiencia de "desbloquear" un premio para que sea emocionante.',
      AF: 'Definir las reglas del programa: cuántos puntos por compra, qué premios se ofrecen, cómo se canjean, qué niveles de cliente existen y cómo se comunican.',
      IT: 'Configurar la infraestructura para el sistema de fidelización con alta disponibilidad, asegurar que los puntos se registren incluso si hay problemas de conexión.',
      RD: 'Asegurar que el sistema de puntos funcione tanto con WiFi del local como con datos móviles del cliente, con sincronización confiable en ambos escenarios.',
      DB: 'Diseñar el esquema de datos para clientes, puntos, transacciones y recompensas, con integridad transaccional para que ningún punto se pierda o duplique.',
      DA: 'Analizar patrones de compra de los clientes frecuentes para personalizar las recompensas y medir el impacto del programa en la retención y el gasto promedio.',
      QA: 'Probar todos los escenarios del programa: acumulación de puntos, canje de premios, cambio de nivel, y casos edge como puntos vencidos o devoluciones.',
      CS: 'Proteger los datos personales de los clientes del programa, implementar consentimiento GDPR, encriptación de datos sensibles y prevenir fraudes con puntos.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 6 — Las cuentas no cuadran
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 6,
    title: 'Números Que No Cuadran',
    background: 'noche_tranquila',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Llevo toda la noche revisando las cuentas del mes, {name}. Los números del sistema de caja no coinciden con lo que hay en el banco. Hay una diferencia de casi un 15%.',
      },
      {
        character: 'contador',
        characterName: 'Luis',
        mood: 'serio',
        side: 'right',
        text: 'Don Mario, estuve revisando los balances y efectivamente hay inconsistencias significativas. Sin datos claros y conciliación diaria, el descuadre seguirá creciendo.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Me preocupa mucho, Luis. Necesito poder confiar en los números para tomar decisiones. Si no sé cuánto gano, ¿cómo planifico el futuro del café?',
      },
    ],
    roleActions: {
      FE: 'Crear un dashboard financiero claro donde Don Mario vea en tiempo real las ventas del día, comparativas con días anteriores y alertas cuando algo no cuadre.',
      BE: 'Desarrollar un sistema de conciliación automática que cruce los registros de caja con los movimientos bancarios y señale discrepancias al instante.',
      MB: 'Crear una app para que Don Mario revise las ventas del día desde su celular a cualquier hora, con resúmenes y gráficos simples de entender.',
      UX: 'Diseñar reportes financieros visuales que Don Mario pueda entender sin ser contador: gráficos claros, indicadores de color y resúmenes en lenguaje simple.',
      AF: 'Analizar el proceso de registro de ventas actual, identificar en qué puntos se pierden datos y documentar los requisitos para un sistema de caja más confiable.',
      IT: 'Implementar respaldos automáticos de todas las transacciones y un sistema de logs que registre cada operación de caja para poder rastrear cualquier discrepancia.',
      RD: 'Asegurar que la conexión entre las terminales de caja y el servidor de contabilidad sea estable y encriptada, para que no se pierdan datos de transacciones.',
      DB: 'Auditar la base de datos de transacciones: verificar integridad de los registros, identificar gaps en los IDs de venta y crear procedimientos de reconciliación.',
      DA: 'Construir un modelo de detección de anomalías en las ventas: identificar transacciones atípicas, horarios con discrepancias y patrones que sugieran errores o fraude.',
      QA: 'Verificar la precisión del sistema de caja: hacer ventas de prueba con montos conocidos y verificar que cada centavo se registre correctamente en la base de datos.',
      CS: 'Investigar si las discrepancias pueden ser resultado de accesos no autorizados al sistema, revisar logs de usuario y fortalecer los controles de acceso.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 7 — Delivery propio
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    title: 'Café a Domicilio',
    background: 'dia_innovacion',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Las apps de delivery nos cobran 30% de comisión, {name}. Es muchísimo. Tenemos clientes que piden todos los días... ¿y si hacemos nuestro propio servicio de delivery?',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'alegre',
        side: 'right',
        text: '¡Me encanta la idea! Ya tenemos a Juanito que tiene moto. Pero necesitaríamos un sistema para recibir pedidos, asignar rutas y que el cliente sepa cuándo llega su café.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Quiero dejar de depender de esas apps. Siento que puedo ofrecer un mejor servicio directo, más personal. Es un reto pero me motiva muchísimo.',
      },
    ],
    roleActions: {
      FE: 'Diseñar la página web de pedidos a domicilio: catálogo de productos, carrito de compras, seguimiento del repartidor en mapa y confirmación del pedido.',
      BE: 'Construir el backend del sistema de delivery: gestión de pedidos, asignación automática de repartidores, cálculo de rutas y tiempos estimados de entrega.',
      MB: 'Desarrollar la app de delivery con dos perfiles: uno para clientes (pedir y rastrear) y otro para repartidores (ver pedidos asignados y navegar a la dirección).',
      UX: 'Diseñar la experiencia de pedido a domicilio pensando en la emoción de "mi café viene en camino": seguimiento visual, estimaciones realistas y comunicación clara.',
      AF: 'Definir el modelo de negocio del delivery: zonas de cobertura, costos de envío, tiempos máximos, reglas de cancelación y flujo completo del pedido a domicilio.',
      IT: 'Configurar la infraestructura para el sistema de delivery con geolocalización en tiempo real, notificaciones push y capacidad de manejar pedidos concurrentes.',
      RD: 'Diseñar la arquitectura de comunicación entre la app del repartidor, el sistema del café y el cliente, con baja latencia para el tracking en tiempo real.',
      DB: 'Modelar la base de datos de delivery: pedidos, direcciones, repartidores, zonas de cobertura, tiempos de entrega y calificaciones de servicio.',
      DA: 'Analizar datos de pedidos por zona y horario para optimizar las rutas de entrega, identificar las áreas con mayor demanda y recomendar horarios de operación.',
      QA: 'Probar el flujo completo de delivery: desde el pedido hasta la entrega, verificar el tracking GPS, las notificaciones y los casos donde algo sale mal.',
      CS: 'Proteger los datos de ubicación y pago de los clientes de delivery, implementar pagos seguros y verificar que el tracking no exponga información sensible.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 8 — El sistema de turnos falla
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 8,
    title: 'El Lío de los Turnos',
    background: 'dia_quejas',
    dialogues: [
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: 'Don Mario, hoy vinieron tres personas al turno de la mañana y nadie al de la tarde. El cuadro de turnos del grupo de WhatsApp es un desastre, nadie sabe cuándo le toca.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Cada semana es la misma historia, {name}. Alguien no vio el mensaje, otro confundió el horario. Estoy cansado de ser yo quien resuelve esto a último minuto.',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: 'Los compañeros también están frustrados. Luis o Valeria pidieron libre la semana pasada y no nos organizamos bien. Necesitamos algo más profesional.',
      },
    ],
    roleActions: {
      FE: 'Crear un panel web de gestión de turnos con vista de calendario, drag & drop para asignar horarios y código de colores por empleado.',
      BE: 'Desarrollar un sistema de gestión de personal con turnos, vacaciones, intercambios entre compañeros y notificaciones automáticas de confirmación.',
      MB: 'Crear una app donde los empleados vean sus turnos de la semana, puedan solicitar cambios, confirmar asistencia y recibir recordatorios antes de su turno.',
      UX: 'Diseñar la experiencia de gestión de turnos tanto para Don Mario (asignar, aprobar cambios) como para los empleados (ver, solicitar, intercambiar).',
      AF: 'Documentar las reglas de turnos: horas máximas por persona, descansos obligatorios, prioridades y el proceso de solicitud de vacaciones y cambios.',
      IT: 'Configurar un sistema de notificaciones por email y SMS que avise a cada empleado sus turnos de la semana y cualquier cambio de último minuto.',
      RD: 'Asegurar que el sistema de turnos sea accesible desde cualquier dispositivo y red, tanto dentro del café como desde la casa de los empleados.',
      DB: 'Diseñar la base de datos de turnos: empleados, horarios, solicitudes de cambio, vacaciones, con constraints para evitar conflictos de horario.',
      DA: 'Analizar datos de turnos pasados para recomendar la distribución óptima de personal según las horas de mayor demanda del café.',
      QA: 'Probar todos los escenarios de gestión de turnos: asignación, cambio, vacaciones, conflictos de horario y verificar que las notificaciones lleguen correctamente.',
      CS: 'Proteger los datos personales de los empleados en el sistema, implementar roles de acceso y asegurar que solo Don Mario pueda aprobar cambios de turno.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 9 — Clientes piden pedir desde la mesa
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 9,
    title: 'Pedidos Desde la Mesa',
    background: 'dia_tranquilo',
    dialogues: [
      {
        character: 'cliente_lucas',
        characterName: 'Lucas',
        mood: 'alegre',
        side: 'right',
        text: '¡Hola! Disculpen, pero estaba pensando... ¿tienen alguna forma de pedir desde la mesa escaneando un código QR? Hoy la fila estaba algo llena para los que venimos a trabajar con la laptop.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'La verdad sería comodísimo para clientes como tú, Lucas. Los que están trabajando no quieren perder su mesa para ir a hacer fila en barra.',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'alegre',
        side: 'right',
        text: 'Y a nosotros nos ayudaría también. Podríamos atender más pedidos sin que se amontonen en la barra. Solo llevaríamos las bebidas a la mesa.',
      },
    ],
    roleActions: {
      FE: 'Desarrollar la webapp de pedidos por QR: escanear el código de la mesa, ver el menú, personalizar la bebida, pagar y recibir notificación cuando esté lista.',
      BE: 'Construir la API de pedidos por mesa: recepción de órdenes con número de mesa, integración con cocina, gestión de estados y pasarela de pago.',
      MB: 'Crear la experiencia móvil de pedido por QR optimizada para cámaras de celulares, con carga instantánea del menú sin necesidad de descargar una app.',
      UX: 'Diseñar el flujo de pedido desde la mesa: desde escanear el QR hasta recibir la bebida, minimizando pasos y haciendo que la experiencia sea más rápida que ir a la barra.',
      AF: 'Documentar el flujo de pedidos por mesa: qué pasa si un cliente cambia de mesa, cómo se manejan pedidos múltiples en la misma mesa, propinas digitales.',
      IT: 'Preparar la infraestructura para manejar pedidos por QR simultáneos, con impresión automática en cocina y sistema de tickets para organizar las entregas.',
      RD: 'Asegurar que el WiFi del café sea lo suficientemente fuerte para que los clientes escaneen QRs y hagan pedidos sin problemas desde cualquier mesa.',
      DB: 'Diseñar el esquema de pedidos por mesa: mesas, pedidos activos, estados, pagos parciales y cuentas divididas entre varios clientes de la misma mesa.',
      DA: 'Analizar los datos de pedidos por mesa vs barra para medir el impacto en ventas, ticket promedio y satisfacción del cliente con el nuevo sistema.',
      QA: 'Probar el sistema QR en todos los celulares comunes: iPhone, Android, diferentes cámaras. Verificar que los pedidos lleguen a cocina en orden y sin duplicados.',
      CS: 'Asegurar que el sistema de pago por QR sea seguro: tokens de sesión por mesa, expiración de pedidos y protección contra pedidos fraudulentos.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 10 — Alerta de seguridad
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 10,
    title: 'Datos en Riesgo',
    background: 'noche_estresante',
    dialogues: [
      {
        character: 'soporte_cloud',
        characterName: 'Valeria',
        mood: 'seria',
        side: 'left',
        text: '{name}, detectamos un problema de seguridad en el servidor en la nube. Recibí una alerta: hubo múltiples intentos de inicio de sesión no autorizados en la base de datos de clientes desde una IP externa.',
      },
      {
        character: 'contador',
        characterName: 'Luis',
        mood: 'serio',
        side: 'right',
        text: 'Si acceden a los datos del programa de fidelización o a la facturación de nuestros clientes, tendremos problemas legales y regulatorios muy serios, además de perder su confianza.',
      },
      {
        character: 'soporte_cloud',
        characterName: 'Valeria',
        mood: 'seria',
        side: 'left',
        text: 'Bloqueé esa IP temporalmente, pero urge realizar una auditoría de seguridad, reforzar la encriptación de campos sensibles y auditar las APIs de inmediato.',
      },
    ],
    roleActions: {
      FE: 'Revisar los formularios del programa de fidelización en busca de vulnerabilidades XSS o inyecciones, y asegurar que ningún dato sensible se exponga en el navegador.',
      BE: 'Analizar los logs del servidor, identificar el vector de ataque, parchear la vulnerabilidad y reforzar la validación de inputs en todas las APIs.',
      MB: 'Verificar que la app de fidelización no almacene datos sensibles en el dispositivo y que las comunicaciones con el servidor estén debidamente encriptadas.',
      UX: 'Diseñar la comunicación a los clientes afectados: un mensaje transparente, empático y claro que explique lo ocurrido y qué medidas se tomaron para protegerlos.',
      AF: 'Documentar el incidente de seguridad: línea de tiempo, datos potencialmente afectados, impacto en el negocio y plan de acción para prevenir futuros incidentes.',
      IT: 'Aislar los sistemas comprometidos, verificar la integridad de los backups, restaurar desde la última copia limpia y reforzar las reglas de firewall.',
      RD: 'Analizar el tráfico de red para rastrear el origen del ataque, verificar si hubo más intentos desde otras IPs y reforzar las reglas de filtrado en el router.',
      DB: 'Auditar la base de datos: verificar qué registros fueron accedidos, revocar permisos sospechosos, activar encriptación de campos sensibles y reforzar el control de acceso.',
      DA: 'Analizar los logs de acceso para construir un perfil del ataque: horarios, patrones, frecuencia de intentos y determinar el alcance real de la brecha.',
      QA: 'Ejecutar un escaneo completo de vulnerabilidades del sistema, probar los principales vectores de ataque y verificar que los parches aplicados sean efectivos.',
      CS: 'Liderar la respuesta al incidente: contener la brecha, realizar análisis forense, identificar la vulnerabilidad explotada, aplicar el parche y preparar el reporte de seguridad.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 11 — Don Mario quiere dashboards
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 11,
    title: 'Entender Mi Negocio',
    background: 'noche_tranquila',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: '{name}, hoy cierro el café y me pregunto: ¿fue un buen día? No tengo idea. Veo que entró gente, que se vendió café, pero no sé si gané o perdí dinero hoy.',
      },
      {
        character: 'contador',
        characterName: 'Luis',
        mood: 'serio',
        side: 'right',
        text: 'Lo que Don Mario necesita es un tablero financiero claro con las métricas clave. Algo donde abra y en 30 segundos entienda las ventas, márgenes y flujo del negocio.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'No quiero nada complicado. Solo quiero saber: ¿cuánto vendí hoy? ¿cuál es mi producto estrella? ¿a qué hora vienen más clientes? Eso me bastaría para dormir tranquilo.',
      },
    ],
    roleActions: {
      FE: 'Diseñar un dashboard ejecutivo con gráficos interactivos de ventas del día, semana y mes, con indicadores de color que muestren si las metas se cumplen.',
      BE: 'Crear las APIs de analíticas que agreguen datos de ventas en tiempo real: totales, promedios, comparativas y tendencias, con endpoints optimizados.',
      MB: 'Desarrollar una versión móvil del dashboard para que Don Mario revise las métricas de su café desde cualquier lugar, con widgets de resumen rápido.',
      UX: 'Diseñar visualizaciones de datos que Don Mario entienda sin ser analista: semáforos de salud del negocio, tendencias con flechas y resúmenes en lenguaje natural.',
      AF: 'Definir las KPIs clave del café con Don Mario: ventas diarias, ticket promedio, producto más vendido, horas pico, y cómo se calculan y presentan.',
      IT: 'Configurar el pipeline de datos para que las métricas se actualicen en tiempo real, con un sistema de caché para que el dashboard cargue rápido.',
      RD: 'Asegurar que el dashboard sea accesible de forma segura desde fuera del café, con VPN o acceso remoto protegido para que Don Mario lo vea desde casa.',
      DB: 'Crear vistas materializadas y procedimientos almacenados que precalculen las métricas del dashboard para respuestas instantáneas sin cargar el sistema de producción.',
      DA: 'Diseñar el modelo de datos analíticos: definir las métricas, crear las fórmulas de cálculo, construir los segmentos y establecer los benchmarks del negocio.',
      QA: 'Verificar que los números del dashboard coincidan exactamente con los registros de caja: totales de ventas, cantidades de productos y promedios por período.',
      CS: 'Proteger los datos financieros del dashboard con autenticación fuerte, encriptación en tránsito y asegurar que solo Don Mario y personas autorizadas puedan ver las cifras.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 12 — Rediseño de marca digital
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 12,
    title: 'La Nueva Imagen del Café',
    background: 'dia_innovacion',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: '¡{name}, mira! Contraté a una diseñadora que nos hizo un logo nuevo y una paleta de colores preciosa. Ahora quiero que todo lo digital del café tenga esta identidad.',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'alegre',
        side: 'right',
        text: '¡Está hermoso, Don Mario! Pero la página web, la app de fidelización, el menú digital... todo tiene el diseño viejo. Va a ser un trabajito actualizarlo todo.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Me siento orgulloso de la nueva imagen. Quiero que cuando alguien entre a nuestras redes o nuestra app, sienta que somos un café moderno y con personalidad.',
      },
    ],
    roleActions: {
      FE: 'Implementar el nuevo sistema de diseño en todos los productos digitales: aplicar la paleta de colores, tipografías, componentes y animaciones de la nueva marca.',
      BE: 'Crear un servicio de configuración de marca centralizado que sirva colores, logos y assets a todas las plataformas del café desde un solo lugar.',
      MB: 'Actualizar la app del café con la nueva identidad visual: splash screen, iconos, colores, animaciones y asegurar consistencia con la web.',
      UX: 'Crear el design system completo del café: guía de estilos, componentes reutilizables, reglas de uso de la marca y ejemplos de aplicación en cada plataforma.',
      AF: 'Coordinar el proyecto de rebranding digital: hacer inventario de todos los puntos de contacto digital, priorizar la actualización y definir el timeline.',
      IT: 'Gestionar el despliegue de la nueva marca en todos los entornos: actualizar certificados SSL, dominios, configuraciones de email y assets en servidores.',
      RD: 'Asegurar que los CDN estén configurados para servir los nuevos assets de marca con la menor latencia posible a todos los dispositivos del café.',
      DB: 'Actualizar los registros de configuración en base de datos: colores del tema, rutas de assets, versiones de logo y parámetros de la marca.',
      DA: 'Analizar el impacto del rebranding en las métricas digitales: tráfico web, descargas de app, engagement en redes y satisfacción de clientes.',
      QA: 'Verificar la consistencia de la nueva marca en todos los puntos de contacto: web, app, emails, menú digital, facturas y asegurar que nada quede con el diseño viejo.',
      CS: 'Verificar que los nuevos assets de marca no introduzcan vulnerabilidades, que las nuevas URLs estén protegidas y que no haya suplantación de la nueva identidad.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 13 — Pantalla de pedidos en cocina
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 13,
    title: 'La Cocina Conectada',
    background: 'dia_concurrido',
    dialogues: [
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'preocupada',
        side: 'right',
        text: 'Don Mario, hoy en hora pico se perdieron tres pedidos porque los papelitos se mojaron con el vapor de la máquina de café. ¡Necesitamos una pantalla en cocina!',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'preocupado',
        side: 'left',
        text: 'Cada pedido perdido es un cliente molesto y dinero que perdemos, {name}. Tienes toda la razón, Ximena, una pantalla digital en la cocina resolvería esto.',
      },
      {
        character: 'soporte_isp',
        characterName: 'Pedro',
        mood: 'neutral',
        side: 'right',
        text: 'Hola, Don Mario. Ya que estoy aquí revisando el cableado del local, les puedo configurar una pantalla de cocina robusta conectada a la red local. Eso evitará la dependencia del papel y los cables caídos.',
      },
    ],
    roleActions: {
      FE: 'Diseñar la interfaz de la pantalla de cocina: pedidos en cola con colores por prioridad, tiempo transcurrido por pedido y botón de "listo" grande y fácil de tocar.',
      BE: 'Desarrollar el sistema de comunicación en tiempo real entre caja y cocina usando WebSockets, con cola de pedidos, estados y sincronización instantánea.',
      MB: 'Adaptar la interfaz de cocina para funcionar en una tablet resistente al calor y humedad, con botones grandes y gestos simples para marcar pedidos completados.',
      UX: 'Diseñar la experiencia de cocina pensando en el contexto: manos ocupadas, ambiente ruidoso, prisa. Usar colores, sonidos y tamaños de texto optimizados.',
      AF: 'Documentar el flujo de pedidos caja → cocina → entrega: estados posibles, tiempos objetivo, reglas de prioridad y manejo de modificaciones o cancelaciones.',
      IT: 'Instalar y configurar el hardware de la pantalla de cocina, asegurar la conexión de red dedicada y configurar un modo de respaldo en caso de falla.',
      RD: 'Crear una conexión de red dedicada y redundante entre la caja y la pantalla de cocina, aislada del WiFi de clientes para garantizar latencia mínima.',
      DB: 'Diseñar la base de datos de pedidos en tiempo real con estados, timestamps y cola de prioridad, optimizada para escrituras frecuentes y consultas rápidas.',
      DA: 'Analizar tiempos de preparación por tipo de producto para establecer SLAs en cocina y alertas cuando un pedido tarda más de lo esperado.',
      QA: 'Probar la pantalla de cocina bajo carga: simular 30 pedidos simultáneos, verificar que todos aparezcan, que los estados se actualicen y que nada se pierda.',
      CS: 'Asegurar que la comunicación entre caja y cocina esté encriptada y que la pantalla de cocina no sea accesible desde la red de clientes.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 14 — Alianza con otra cafetería
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 14,
    title: 'Dos Cafés, Un Sistema',
    background: 'cafe_creciendo',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: '{name}, tengo una gran noticia. Mi amigo Roberto tiene un café al otro lado de la ciudad y quiere usar nuestro mismo sistema. ¡Podríamos ser una cadena!',
      },
      {
        character: 'soporte_cloud',
        characterName: 'Valeria',
        mood: 'alegre',
        side: 'right',
        text: 'Eso significa que necesitaríamos escalar a una arquitectura multi-tenant en la nube, Don Mario. Separar los datos por local de forma segura, pero centralizando la gestión de inventario y fidelización.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Nunca imaginé que mi cafecito llegaría a esto. Me siento orgulloso pero también nervioso. Quiero que funcione igual de bien en los dos locales.',
      },
    ],
    roleActions: {
      FE: 'Adaptar todas las interfaces para manejar múltiples sedes: selector de local, dashboards comparativos y vistas unificadas o por sede según la necesidad.',
      BE: 'Refactorizar la arquitectura a multi-tenant: separar datos por sede, crear APIs que soporten filtros por local y mantener la escalabilidad para futuras sedes.',
      MB: 'Actualizar las apps para que funcionen con múltiples locales: el cliente elige en qué café pedir, el empleado ve solo los datos de su sede.',
      UX: 'Diseñar la experiencia multi-sede para los diferentes usuarios: Don Mario ve todo, cada gerente de local ve lo suyo, y los clientes eligen su café favorito.',
      AF: 'Definir las reglas de negocio multi-sede: qué se comparte y qué no, cómo se gestionan proveedores comunes, puntos de fidelización válidos en ambos locales.',
      IT: 'Dimensionar la infraestructura para soportar dos (o más) sedes: balanceo de carga, replicación de datos, sincronización entre locales y plan de contingencia.',
      RD: 'Diseñar la red de comunicación entre sedes: VPN site-to-site para sincronización segura de datos y conexión de respaldo en caso de falla.',
      DB: 'Rediseñar el esquema de base de datos para multi-tenancy: agregar particionamiento por sede, mantener datos compartidos y optimizar queries cross-sede.',
      DA: 'Crear dashboards comparativos entre sedes: ventas, productos más pedidos, horarios pico y métricas de rendimiento lado a lado para tomar mejores decisiones.',
      QA: 'Probar todos los flujos con escenarios multi-sede: pedidos en local A, fidelización cruzada, reportes consolidados y asegurar aislamiento de datos.',
      CS: 'Definir la política de seguridad multi-sede: cada local solo accede a sus datos, comunicación encriptada entre sedes y auditoría de accesos cruzados.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PREGUNTA 15 — El café premiado
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 15,
    title: 'Nuestro Café Digital',
    background: 'cafe_creciendo',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: '¡{name}! ¡No lo vas a creer! La revista de la ciudad nos nominó como "El café más innovador del año". ¡Quieren hacer un artículo sobre nuestra transformación digital!',
      },
      {
        character: 'barista',
        characterName: 'Ximena',
        mood: 'alegre',
        side: 'right',
        text: '¡Wow! Recuerdo cuando todo era libretas y papeles. Ahora tenemos sistema de inventario, fidelización, delivery... Hemos cambiado muchísimo gracias al equipo.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        mood: 'alegre',
        side: 'left',
        text: 'Se me llenan los ojos de orgullo. Quiero que preparemos algo especial para mostrar todo lo que hemos logrado. {name}, tú fuiste clave en todo esto.',
      },
    ],
    roleActions: {
      FE: 'Crear una landing page especial del café para la prensa: showcase de la transformación digital con demos interactivas del sistema, testimonios y galería visual.',
      BE: 'Preparar las APIs y el sistema para manejar el aumento de tráfico que vendrá con la publicidad: optimizar endpoints, activar caché y preparar auto-scaling.',
      MB: 'Preparar la app para el showcase: actualizar las capturas en las app stores, agregar badge de "café premiado" y asegurar una experiencia impecable para nuevos usuarios.',
      UX: 'Documentar el viaje de transformación digital del café como caso de estudio: antes vs después, métricas de impacto y testimonios del equipo en un formato visual.',
      AF: 'Preparar la presentación del proyecto para la prensa: alcance del proyecto, funcionalidades entregadas, impacto en el negocio y lecciones aprendidas.',
      IT: 'Realizar una auditoría completa de la infraestructura: optimizar rendimiento, asegurar 99.9% de uptime durante la exposición mediática y preparar monitoreo extra.',
      RD: 'Hacer un stress test de la red: verificar que soporte el aumento de usuarios que vendrán por la publicidad, con plan de contingencia si se satura.',
      DB: 'Optimizar la base de datos para el aumento de carga esperado: revisar índices, limpiar datos obsoletos y asegurar backups frescos antes del evento.',
      DA: 'Preparar los datos de impacto del proyecto: comparativas de ventas antes y después de la digitalización, retención de clientes, eficiencia operativa y ROI.',
      QA: 'Ejecutar la suite completa de pruebas de regresión antes del evento: asegurar que cada funcionalidad esté impecable y que no haya bugs visibles.',
      CS: 'Realizar un pentest completo antes de la exposición pública: asegurar que no haya vulnerabilidades que puedan ser explotadas con el aumento de visibilidad.',
    },
  },
];
