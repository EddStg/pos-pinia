# Configuracion de Firebase

La aplicacion usa Firebase como backend administrado para productos, ventas e imagenes.

## Servicios utilizados

- Firebase App: inicializacion del proyecto.
- Firestore: base de datos para productos y ventas.
- Firebase Storage: almacenamiento de imagenes de productos.
- VueFire: integracion reactiva con Vue.

## Variables necesarias

Crea un archivo `.env.local` a partir de `.env.example` y completa:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Estas variables se usan en `src/config/firebase.js`.

## Coleccion products

Cada documento de `products` representa un producto disponible en catalogo o inventario.

Campos esperados:

| Campo | Tipo | Descripcion |
| --- | --- | --- |
| `name` | string | Nombre visible del producto |
| `price` | number | Precio unitario |
| `availability` | number | Existencia disponible |
| `category` | number | Categoria interna: 1 Sudaderas, 2 Tenis, 3 Lentes |
| `image` | string | URL de la imagen en Storage |

La vista publica filtra productos por categoria y solo muestra productos con disponibilidad mayor a cero.

## Coleccion sales

Cada documento de `sales` representa una venta completada.

Campos esperados:

| Campo | Tipo | Descripcion |
| --- | --- | --- |
| `items` | array | Productos vendidos, sin campos de inventario internos |
| `subtotal` | number | Total antes de impuestos y descuento |
| `taxes` | number | Impuesto calculado al 16% |
| `discount` | number/string | Descuento aplicado por cupon |
| `total` | number | Total final de la venta |
| `date` | string | Fecha en formato `DD/MM/YYYY` |

La vista de ventas consulta esta coleccion filtrando por `date`.

## Storage

Las imagenes de productos se almacenan en Firebase Storage. El campo `image` del producto guarda la URL o referencia usada por la interfaz para renderizar la imagen.

Al eliminar un producto, la app intenta eliminar tambien su imagen asociada en Storage.

## Datos de prueba

El proyecto incluye `src/data/products.js` y la ruta `/admin/productos/seeder` para cargar productos base en Firestore. Esta ruta existe para preparar rapidamente una demo de portafolio.

## Reglas de seguridad

Este proyecto no incluye reglas de Firebase listas para produccion. Para un entorno publico o comercial se recomienda agregar:

- Autenticacion para rutas administrativas.
- Reglas de Firestore con permisos por usuario/rol.
- Reglas de Storage para limitar lectura y escritura.
- Validacion de campos permitidos en `products` y `sales`.

En este repo se mantiene abierto el flujo para facilitar la demostracion del portafolio.
