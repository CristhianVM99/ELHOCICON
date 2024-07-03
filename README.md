# Portal de Noticias "EL HOCICÓN"

Este proyecto es una prueba práctica para el desarrollo de un Portal de Noticias llamado "EL HOCICÓN". Cada noticia en el portal incluye título, imagen principal (opcional), fecha de publicación, lugar, autor y contenido. El portal permite buscar, ordenar y clasificar las noticias publicadas.

## autor 

Cristhian Villca Mamani | Developer Backend

## Requisitos del Proyecto

El desarrollo debe contener lo siguiente:

1. Desarrollar el CRUD (Create, Read, Update y Delete) para la gestión de contenido.
2. Realizar las migraciones correspondientes para la base de datos.
3. Cargar artículos de prueba en la base de datos mediante seeders.
4. Realizar las interfaces para el CRUD.

## Tecnologías Utilizadas

### Versionamiento

- Sistema de versionamiento Git: [Git](https://git-scm.com/)

### Backend

- Node.js versión 20 o posterior: [Node.js](https://nodejs.org/)
- Framework: NestJS versión 10: [NestJS](https://nestjs.com/)
- ORM: TypeORM versión 0.3: [TypeORM](https://typeorm.io/)
- Gestor de Base de Datos: PostgreSQL versión 16 o posterior: [PostgreSQL](https://www.postgresql.org/)

### Frontend

- Node.js versión 20: [Node.js](https://nodejs.org/)
- Framework: NextJS versión 14: [NextJS](https://nextjs.org/)
- CSS: MUI: [MUI](https://mui.com/)

### Opcionales

- Uso de Docker para el despliegue: [Docker](https://www.docker.com/)
- CI/CD en GitLab: [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)

## Estructura del Proyecto

El proyecto está desarrollado en dos componentes: Frontend y Backend.

### Repositorios

Cada componente tiene su propio repositorio en [GitLab](https://gitlab.com). Los repositorios deben ser remitidos a través de correo electrónico a desarrollo.de.software.rrhh@gmail.com, proporcionando acceso con el rol de MAINTAINER al usuario desarrollo.de.software.rrhh para su revisión.

En cada commit debe estar establecido el nombre y correo electrónico del postulante.

### Documentación

Cada repositorio debe contener:

- `README.md` con la descripción del proyecto.
- `INSTALL.md` con las instrucciones de instalación y despliegue.

## Instalación y Despliegue

1. Clonar el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Instalar las dependencias:
    ```bash
    cd <NOMBRE_DEL_REPOSITORIO>
    npm install
    ```

3. Configurar el archivo `.env` con las variables de entorno necesarias.

4. Ejecutar las migraciones de la base de datos:
    ```bash
    npm run typeorm migration:run
    ```

5. Cargar los seeders en la base de datos:
    ```bash
    npm run seed
    ```

6. Iniciar la aplicación:
    ```bash
    npm run start
    ```

## Contribución

Para contribuir a este proyecto, por favor envía un pull request o contacta al correo cristhianvillcamamani@gmail.com.

---

¡Gracias por tu interés en el proyecto "EL HOCICÓN"!
