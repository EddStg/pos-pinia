# Notas de portafolio

Este proyecto esta disenado para mostrar criterio frontend, manejo de estado e integracion con servicios externos en una app con flujo de negocio reconocible.

## Que demuestra

- Construccion de una SPA con Vue 3 y Composition API.
- Estado global organizado con Pinia.
- Integracion con Firebase, Firestore, Storage y VueFire.
- CRUD de productos con formularios y validacion.
- Flujo de venta con carrito, impuestos, descuento e inventario.
- Consulta de ventas por fecha.
- Separacion entre tienda publica y panel administrativo.
- Diseno visual moderno y responsive orientado a un POS real.

## Como presentarlo

Una descripcion breve para portafolio podria ser:

> Aplicacion POS construida con Vue 3, Pinia y Firebase. Incluye catalogo filtrable, carrito con impuestos y cupones, registro de ventas, actualizacion de inventario y panel administrativo para productos y ventas.

## Puntos fuertes para destacar

- El proyecto no es una landing page; es una app funcional con flujo de negocio completo.
- La UI esta disenada para uso operativo, no solo para verse bien en una captura.
- El estado del carrito se recalcula reactivamente.
- El checkout registra ventas y descuenta inventario en Firebase.
- La documentacion explica alcance, configuracion y arquitectura.

## Alcance intencional

Para mantenerlo como proyecto de portafolio, no se incluyeron algunas piezas propias de un POS comercial:

- Autenticacion y roles.
- Pasarela de pago.
- Facturacion.
- Corte de caja.
- Reportes avanzados.
- Multi-sucursal.
- Auditoria de movimientos.

Estas omisiones no son errores del proyecto; son limites explicitos para mantener el foco tecnico y visual.

## Posibles mejoras futuras

- Autenticacion para proteger el panel admin.
- Dashboard con metricas agregadas.
- Busqueda por nombre o SKU.
- Historial de movimientos de inventario.
- Exportacion de ventas a CSV.
- Soporte para multiples monedas.
- Tests unitarios para stores y helpers.
- Reglas de Firebase listas para produccion.
