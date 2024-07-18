# Documentación del Backend

### Estructura del Proyecto

El proyecto sigue la estructura estándar de un proyecto NestJS, con algunas carpetas adicionales para una mejor organización. La estructura de carpetas es la siguiente:

src
├── auth
├── common
├── config
├── entities
└── users

### Descripción de Carpetas

- **auth**: Contiene la lógica de autenticación y autorización.
- **common**: Contiene módulos y servicios compartidos que pueden ser utilizados en diferentes partes de la aplicación.
- **config**: Contiene la configuración de la aplicación, incluyendo la configuración de la base de datos.
- **entities**: Contiene las entidades de la base de datos. Cada entidad corresponde a una tabla en la base de datos.
- **users**: Contiene la lógica relacionada con la gestión de usuarios.

### Agregar Nuevos Endpoints

Para agregar un nuevo endpoint, se debe crear una carpeta con el nombre del endpoint dentro de la carpeta `src`. Dentro de esta carpeta, se crean los controladores, servicios y módulos utilizando el CLI de NestJS. Por ejemplo:

```bash
nest generate module <nombre_del_endpoint>
nest generate controller <nombre_del_endpoint>
nest generate service <nombre_del_endpoint>
```

## Configuración de Entorno

### Docker Compose

El proyecto utiliza Docker para la gestión de la base de datos en el entorno de desarrollo. El archivo docker-compose.yml se utiliza para crear una base de datos local en un contenedor de Docker. Este contenedor se utilizará para el desarrollo.

```bash
docker-compose up -d
```

## Entornos
El proyecto cuenta con dos entornos productivos. Por esta razón, se deben crear dos archivos .env:

.env.local: Para el entorno de desarrollo.
.env.prod: Para el entorno de producción.

## Variables de Entorno

A continuación se muestra un ejemplo de cómo podría lucir el archivo .enva tanto para el entorno de desarrollo como productivo:

# .env.local

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=ecomunidad
DATABASE_PASSWORD=xBGTGHfX5Pss2jqGYFV1yfFqeFEBdwWw
DATABASE_NAME=ecotrackdb
DATABASE_SCHEMA=public
DATABASE_SYNCHRONIZE=false
DATABASE_SSL_REJECT_UNAUTHORIZED=false

ALLOWED_ORIGINS=https://ecotrack.vercel.app.com/

JWT_SECRET=CZWiG9dMRpU5QvP
JWT_REFRESH_SECRET=zpvx0JWFRLXFvpX
JWT_RESET_PASSWORD_SECRET=EKV9RujbR4IBlVb
JWT_EXPIRATION_TIME=604800
JWT_REFRESH_EXPIRATION_TIME=604800
JWT_RESET_PASSWORD_EXPIRATION_TIME=604800
JWT_SET_PASSWORD_EXPIRATION_TIME=604800
BCRYPT_SALT_OR_ROUND=12
FRONTEND_URL=https://blooforms/

## Migraciones

Se utilizan comandos específicos para gestionar las migraciones de la base de datos. Los comandos son los siguientes:

### Generar una nueva migración:

Este comando genera una nueva migración basada en los cambios realizados en las entidades.

```bash
npm run migration:generate
```

### Ejecutar migraciones:

Este comando ejecuta todas las migraciones pendientes en la base de datos.

```bash
npm run migration:run
```

### Crear una nueva migración vacía:

Este comando crea una nueva migración vacía que se puede editar manualmente.

```bash
npm run migration:create
```

## Documentación de la API

La API está documentada utilizando Swagger. La documentación está disponible en la siguiente ruta:

```bash
/api/docs
```

Para acceder a la documentación, simplemente abre tu navegador y navega a http://<tu_dominio>/api/docs. Aquí encontrarás una interfaz interactiva que te permitirá explorar y probar los endpoints de la API.
