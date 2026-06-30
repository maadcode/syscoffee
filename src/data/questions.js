// ─── questions.js ────────────────────────────────────────────────────────────
// 5 escenarios narrativos con diálogos y acciones por rol para cada pregunta.
// La narrativa sigue la historia del SysCoffee en crisis tecnológica.

export const QUESTIONS = [
  // ═══════════════════════════════════════════════════════════════════
  // PREGUNTA 1 — Fase: Análisis | Escenario: El Gran Crash
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 1,
    phase: 'analysis',
    title: 'El Gran Crash del Lunes',
    background: 'analisis',
    dialogues: [
      {
        character: 'gerente',
        characterName: 'Don Mario',
        side: 'left',
        text: '¡{name}! ¡Menos mal que llegaste temprano! El sistema de caja se cayó hace 15 minutos y tenemos clientes en fila desde la puerta.',
      },
      {
        character: 'barista',
        characterName: 'Sofía',
        side: 'right',
        text: 'No puedo procesar ni un solo pago. Los pedidos se están acumulando y los clientes empiezan a desesperarse. ¡Es el peor lunes del año!',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        side: 'left',
        text: 'Esta mañana actualizamos el software del sistema y desde entonces nada funciona. {name}, eres nuestro único especialista. ¿Por dónde empezamos?',
      },
    ],
    roleActions: {
      FE: 'Inspeccionar la interfaz del sistema de caja: revisar errores en consola, verificar que los componentes de UI carguen correctamente y probar el flujo de pago paso a paso.',
      BE: 'Conectarme al servidor y revisar los logs de la última actualización: buscar errores en las APIs de pago y verificar que los endpoints respondan correctamente.',
      MB: 'Comprobar la app móvil de pedidos en los tablets: verificar conexión con el servidor y confirmar si el problema viene del cliente móvil o del sistema central.',
      UX: 'Mapear el flujo completo del usuario en el sistema de caja para identificar en qué pantalla exacta falla el proceso y documentar el comportamiento inesperado.',
      AF: 'Revisar la documentación del proceso de caja y comparar el flujo antes y después de la actualización para identificar qué cambió y en qué punto falla el sistema.',
      IT: 'Acceder al panel de infraestructura: verificar el estado de los servidores, revisar la memoria y CPU, y si es necesario, hacer un rollback a la versión anterior del sistema.',
      RD: 'Diagnosticar la red local del café: verificar la conectividad entre los terminales de caja y el servidor, y comprobar que no haya pérdida de paquetes.',
      DB: 'Revisar la base de datos: verificar la integridad de las transacciones pendientes, buscar locks o bloqueos en tablas críticas y revisar el log de errores de la BD.',
      DA: 'Analizar los registros del sistema antes y después de la actualización para identificar patrones de fallo y determinar el componente que causó la caída.',
      QA: 'Ejecutar un diagnóstico sistemático del sistema: seguir el checklist de pruebas de regresión para identificar exactamente qué módulo falló con la actualización.',
      CS: 'Verificar si la actualización introdujo vulnerabilidades o si el sistema fue comprometido: revisar los logs de acceso y comprobar integridad de archivos críticos.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PREGUNTA 2 — Fase: Análisis | Escenario: Sin Conexión
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 2,
    phase: 'analysis',
    title: 'La App Que No Responde',
    background: 'analisis',
    dialogues: [
      {
        character: 'barista',
        characterName: 'Sofía',
        side: 'right',
        text: 'Pudimos solucionar la caja, pero ahora el problema está en los tablets de pedidos. Ninguno se conecta con la pantalla de la cocina.',
      },
      {
        character: 'gerente',
        characterName: 'Don Mario',
        side: 'left',
        text: 'Los meseros no pueden enviar los pedidos a cocina. Todo se está tomando de forma manual en papel. Esto no puede continuar así, {name}.',
      },
      {
        character: 'barista',
        characterName: 'Sofía',
        side: 'right',
        text: 'Intenté reiniciar los tablets tres veces y la app sigue mostrando "Sin conexión con el servidor". ¿Qué puede estar pasando?',
      },
    ],
    roleActions: {
      FE: 'Revisar el estado de la app web en los tablets: verificar las llamadas de red en el DevTools, identificar si los errores son de CORS, timeout o respuesta del servidor.',
      BE: 'Revisar las APIs de comunicación entre la app de pedidos y la pantalla de cocina: verificar los WebSockets o endpoints de sincronización en tiempo real.',
      MB: 'Depurar la app móvil de pedidos directamente: revisar el código de conexión, los timeouts y los reintentos automáticos para identificar por qué no conecta con el servidor.',
      UX: 'Analizar el mensaje de error que ven los meseros y diseñar un flujo de manejo de errores más claro, con instrucciones de qué hacer cuando la app pierde conexión.',
      AF: 'Documentar el proceso completo de toma de pedidos, identificar los puntos de integración entre la app y la cocina, y redactar los requisitos para solucionar la desconexión.',
      IT: 'Verificar el servidor de aplicaciones: revisar si el servicio de sincronización de pedidos está corriendo, revisar logs del servidor y reiniciar los servicios necesarios.',
      RD: 'Analizar la red WiFi del café: verificar la cobertura en las mesas, el ancho de banda y si hay interferencias que puedan estar causando la desconexión de los tablets.',
      DB: 'Revisar si la base de datos de pedidos está bloqueada o si hay un problema de escritura que impide registrar nuevos pedidos desde los tablets.',
      DA: 'Analizar los logs de conexión para identificar el patrón de desconexiones: ¿cuándo empezó? ¿qué eventos coinciden? ¿qué tablets fallan más?',
      QA: 'Reproducir el error de forma controlada: probar diferentes tablets, diferentes redes y diferentes usuarios para aislar las condiciones exactas del fallo.',
      CS: 'Verificar si la comunicación entre tablets y servidor está encriptada correctamente y si no hay un ataque de man-in-the-middle que esté interceptando los pedidos.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PREGUNTA 3 — Fase: Desarrollo | Escenario: El Plan Digital
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 3,
    phase: 'development',
    title: 'Construyendo el Futuro del Café',
    background: 'desarrollo',
    dialogues: [
      {
        character: 'dev',
        characterName: 'Carlos',
        side: 'left',
        text: 'Bien, {name}. Los problemas inmediatos están controlados. Pero Don Mario quiere aprovechar para modernizar todo el sistema del café con una solución robusta.',
      },
      {
        character: 'pm',
        characterName: 'Elena',
        side: 'right',
        text: 'Tenemos presupuesto aprobado para un nuevo sistema integral: punto de venta, gestión de inventario, pedidos online y programa de fidelización. Es un proyecto grande.',
      },
      {
        character: 'dev',
        characterName: 'Carlos',
        side: 'left',
        text: 'El equipo necesita empezar por algún lado. Tenemos tres semanas antes del relanzamiento del café. {name}, ¿cuál es tu enfoque para comenzar este proyecto?',
      },
    ],
    roleActions: {
      FE: 'Comenzar con el diseño e implementación de la interfaz del nuevo sistema: crear los componentes del panel de caja, la pantalla de pedidos online y el tablero de gestión.',
      BE: 'Diseñar y construir la arquitectura del nuevo sistema: definir los modelos de datos, crear las APIs REST para el POS, inventario y pedidos, y configurar la autenticación.',
      MB: 'Desarrollar la aplicación móvil del programa de fidelización para clientes: diseñar la arquitectura de la app, el sistema de puntos y las notificaciones push.',
      UX: 'Liderar la fase de diseño: entrevistar al equipo del café para entender sus flujos de trabajo, crear wireframes del nuevo sistema y validar los prototipos antes de desarrollar.',
      AF: 'Levantar todos los requisitos funcionales del nuevo sistema con Don Mario y el equipo: definir los casos de uso, las reglas de negocio y las prioridades del proyecto.',
      IT: 'Diseñar y configurar la infraestructura del nuevo sistema: elegir la plataforma cloud, configurar los entornos de desarrollo, staging y producción, y definir el plan de deployment.',
      RD: 'Rediseñar la arquitectura de red del café para soportar el nuevo sistema: mejorar la cobertura WiFi, segmentar las redes del negocio y de clientes, y garantizar alta disponibilidad.',
      DB: 'Diseñar el esquema de base de datos del nuevo sistema: modelar las entidades de productos, pedidos, clientes e inventario, y definir las estrategias de indexación y respaldo.',
      DA: 'Diseñar el módulo de analytics del nuevo sistema: definir qué métricas del café son clave (ventas, productos top, horas pico) y cómo se visualizarán en tiempo real.',
      QA: 'Diseñar el plan de pruebas del nuevo sistema: definir los casos de prueba para cada módulo, establecer los criterios de aceptación y configurar el entorno de testing automatizado.',
      CS: 'Realizar el análisis de seguridad del nuevo sistema: definir los requisitos de seguridad, el modelo de amenazas y las políticas de acceso para proteger los datos de clientes y del negocio.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PREGUNTA 4 — Fase: Desarrollo | Escenario: Alerta de Seguridad
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 4,
    phase: 'development',
    title: 'Alerta Roja: Actividad Sospechosa',
    background: 'desarrollo',
    dialogues: [
      {
        character: 'pm',
        characterName: 'Elena',
        side: 'right',
        text: '{name}, tenemos un problema serio. El sistema de monitoreo acaba de reportar actividad inusual en la base de datos del café a las 2 AM de anoche.',
      },
      {
        character: 'dev',
        characterName: 'Carlos',
        side: 'left',
        text: 'Revisé los logs y hay consultas masivas de datos de clientes que nadie del equipo ejecutó. Alguien accedió a información de más de 500 clientes registrados.',
      },
      {
        character: 'pm',
        characterName: 'Elena',
        side: 'right',
        text: 'Tenemos la obligación legal de actuar de inmediato y notificar si hubo una brecha. {name}, necesitamos tu criterio para saber cómo manejar esta situación.',
      },
    ],
    roleActions: {
      FE: 'Revisar el frontend del sistema administrativo: buscar posibles formularios con vulnerabilidades de inyección, verificar tokens de autenticación y asegurar que no se expongan datos sensibles en el cliente.',
      BE: 'Analizar el código del backend y los logs del servidor: identificar el endpoint o proceso que fue explotado, parcharlo de inmediato y revocar los tokens de sesión activos.',
      MB: 'Revisar la app móvil en busca de datos sensibles almacenados localmente o comunicaciones inseguras que pudieran haber facilitado el acceso no autorizado a la base de datos.',
      UX: 'Diseñar el flujo de notificación a los clientes afectados: crear mensajes claros y empáticos que expliquen qué ocurrió, qué datos fueron expuestos y qué deben hacer.',
      AF: 'Documentar el incidente completo: registrar la línea de tiempo del ataque, los datos afectados y preparar el informe para el equipo legal y las autoridades regulatorias.',
      IT: 'Aislar inmediatamente los sistemas afectados, revocar los accesos comprometidos, restaurar desde el último backup limpio y reforzar las políticas de firewall y acceso.',
      RD: 'Analizar el tráfico de red del momento del incidente: identificar la IP de origen del acceso no autorizado, bloquearla y revisar las reglas del firewall de red.',
      DB: 'Auditar la base de datos completa: identificar qué registros fueron accedidos o modificados, revocar los permisos comprometidos y activar el logging exhaustivo de todas las consultas.',
      DA: 'Analizar los patrones de acceso anómalos en los datos: construir un perfil del ataque usando los logs disponibles para entender el alcance real de la brecha.',
      QA: 'Ejecutar pruebas de seguridad de forma inmediata: realizar un scan de vulnerabilidades del sistema, probar los principales vectores de ataque y documentar los hallazgos.',
      CS: 'Liderar la respuesta al incidente: contener la brecha, realizar análisis forense de los logs, identificar la vulnerabilidad explotada, parchearla y preparar el informe de seguridad.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PREGUNTA 5 — Fase: Mantenimiento | Escenario: La Prueba Final
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 5,
    phase: 'maintenance',
    title: 'La Noche Antes del Relanzamiento',
    background: 'mantenimiento',
    dialogues: [
      {
        character: 'tecnico',
        characterName: 'Pedro',
        side: 'left',
        text: 'El nuevo sistema está listo para entrar en producción mañana a las 7 AM. Hemos trabajado tres semanas duro para llegar aquí, {name}.',
      },
      {
        character: 'pm',
        characterName: 'Elena',
        side: 'right',
        text: 'Don Mario tiene invitados especiales mañana para el relanzamiento del café. No nos podemos permitir ningún fallo. Todo tiene que ser perfecto.',
      },
      {
        character: 'tecnico',
        characterName: 'Pedro',
        side: 'left',
        text: 'Tenemos unas horas antes del lanzamiento. ¿Cuál es la revisión final más crítica que debemos hacer para garantizar que el relanzamiento sea un éxito?',
      },
    ],
    roleActions: {
      FE: 'Hacer una revisión final completa de la interfaz: verificar que todos los flujos de usuario funcionen en todos los dispositivos del café, y optimizar los tiempos de carga.',
      BE: 'Ejecutar las pruebas de carga en el servidor: simular el tráfico del día de apertura, verificar que las APIs respondan dentro del tiempo esperado y que no haya memory leaks.',
      MB: 'Probar la app de fidelización en los dispositivos reales de los clientes: verificar el registro, la acumulación de puntos y las notificaciones push funcionan correctamente.',
      UX: 'Realizar una sesión de prueba de usabilidad de último minuto con el equipo del café: verificar que el flujo del sistema sea intuitivo para todos, incluyendo a Don Mario.',
      AF: 'Revisar que todos los requisitos funcionales documentados estén implementados y probados: hacer la validación final con Don Mario para obtener su aprobación de negocio.',
      IT: 'Verificar toda la infraestructura de producción: confirmar que los servidores tengan los recursos suficientes, que el monitoreo esté activo y que el plan de disaster recovery funcione.',
      RD: 'Hacer el test final de red: verificar la estabilidad del WiFi en toda la sala, el rendimiento bajo carga y que la segmentación entre la red interna y de clientes sea correcta.',
      DB: 'Ejecutar la validación final de la base de datos: verificar los backups automáticos, confirmar que los índices estén optimizados y que las migraciones se aplicaron correctamente.',
      DA: 'Configurar y probar el dashboard de métricas en tiempo real: verificar que Don Mario pueda ver las ventas del día, los productos más pedidos y las horas pico en su panel.',
      QA: 'Ejecutar la batería completa de pruebas de regresión del sistema: pasar por todos los flujos críticos del negocio y certificar que el sistema está listo para producción.',
      CS: 'Realizar el pentest final del sistema: verificar que las vulnerabilidades identificadas están parcheadas, que los logs de seguridad funcionan y que el sistema cumple con las políticas de protección de datos.',
    },
  },
];
