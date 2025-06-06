# Mi App de Restaurantes (create-react-app2)

Esta es una aplicación web desarrollada con React que permite a los usuarios visualizar, buscar y añadir información sobre restaurantes. La aplicación se integra con Firebase Firestore para la gestión de datos persistente.

---

## Características

* **Página de Inicio:** Muestra una lista de restaurantes destacados.
* **Página de Búsqueda de Restaurantes:** Permite filtrar restaurantes por nombre, tipo de cocina o dirección.
* **Página de Nuevo Restaurante:** Formulario para añadir nuevos restaurantes a la base de datos de Firebase.
* **Integración con Firebase Firestore:** Almacena y recupera los datos de los restaurantes.
* **Diseño Responsivo:** Utiliza Bootstrap para una interfaz de usuario adaptable a diferentes dispositivos.
* **Notificaciones Interactivas:** Implementa SweetAlert2 para mensajes de éxito o error al añadir restaurantes.

---

## Tecnologías Utilizadas

* **Frontend:**
    * [React](https://react.dev/) (Librería de JavaScript para construir interfaces de usuario)
    * [React Router DOM](https://reactrouter.com/en/main) (Para la navegación entre páginas)
    * [Bootstrap](https://getbootstrap.com/) (Framework CSS para un diseño rápido y responsivo)
    * [SweetAlert2](https://sweetalert2.github.io/) (Alertas personalizables y amigables)
* **Backend / Base de Datos:**
    * [Firebase Firestore](https://firebase.google.com/docs/firestore) (Base de datos NoSQL basada en la nube)
    * [Firebase SDK for Web](https://firebase.google.com/docs/web/setup)

---

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

* **Node.js** (versión 14.x o superior recomendada)
* **npm** (viene con Node.js)
* Una cuenta de **Firebase** y un proyecto de Firebase configurado.

---

## Configuración del Proyecto Firebase

1.  **Crea un Proyecto en Firebase:**
    * Ve a la [Consola de Firebase](https://console.firebase.google.com/).
    * Crea un nuevo proyecto (por ejemplo, "Mi app de restaurantes").

2.  **Habilita Firestore Database:**
    * En el menú lateral de tu proyecto de Firebase, ve a `Build` > `Firestore Database`.
    * Haz clic en "Crear base de datos" y selecciona "Modo de prueba" para empezar (luego puedes ajustar las reglas de seguridad).
    * Crea una colección llamada `restaurants` (en minúsculas) y añade algunos documentos de prueba con los campos `name`, `address`, `cuisine` e `imageName` (ej. `fritosmaya.jpg`).

3.  **Registra tu Aplicación Web:**
    * En la "Visión general del proyecto" (Project overview), haz clic en el botón `</>` (Aplicación web) para registrar una nueva aplicación web.
    * Sigue los pasos y, al final, se te proporcionará el objeto `firebaseConfig`.

4.  **Actualiza `src/services/firebase.js`:**
    * Copia el objeto `firebaseConfig` proporcionado por Firebase y pégalo en `src/services/firebase.js`, reemplazando el marcador de posición existente.

---

## Instalación y Ejecución

Sigue estos pasos para poner en marcha la aplicación en tu entorno local:

1.  **Clona el repositorio** (si lo tienes en Git) o simplemente abre la carpeta del proyecto `create-react-app2` en tu editor de código.

2.  **Abre la terminal** en la raíz del proyecto (la carpeta `create-react-app2` donde se encuentra este `README.md`).

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
    *(Si este es un proyecto completamente nuevo creado con `npx create-react-app`, ya deberías haber ejecutado `npm install` después de `npx create-react-app`. Este comando asegura que todas las dependencias listadas en `package.json` estén instaladas.)*

4.  **Instala las dependencias adicionales:**
    ```bash
    npm install react-router-dom firebase sweetalert2 bootstrap
    ```

5.  **Copia tus imágenes de restaurantes:**
    * Coloca tus archivos de imagen (`fritosmaya.jpg`, `maleducados.jpg`, `rincondely.jpg`, `elcapataz.jpg`, `vicentelopez.jpg`) en la carpeta `src/assets/images/`.

6.  **Inicia la aplicación en modo de desarrollo:**
    ```bash
    npm start
    ```

    Esto abrirá automáticamente la aplicación en tu navegador predeterminado en `http://localhost:3000`. La aplicación se recargará automáticamente si realizas cambios en el código.

---

## Estructura del Proyecto
create-react-app2/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/  (Contiene las imágenes de los restaurantes)
│   │   │   ├── fritosmaya.jpg
│   │   │   └── ...
│   │   └── styles/
│   │       └── main.css  (Estilos CSS personalizados)
│   ├── components/  (Componentes React reutilizables)
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── RestaurantCard.js
│   ├── pages/       (Componentes que representan las diferentes vistas/páginas)
│   │   ├── HomePage.js
│   │   ├── SearchRestaurantsPage.js
│   │   └── NewRestaurantPage.js
│   ├── services/    (Archivos relacionados con servicios externos, como Firebase)
│   │   └── firebase.js
│   ├── App.js           (Componente raíz y configuración de rutas)
│   ├── index.js         (Punto de entrada de la aplicación)
│   └── reportWebVitals.js (Reporte de métricas web)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


---

## Scripts Disponibles

En la raíz del proyecto, puedes ejecutar:

* **`npm start`**: Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.
* **`npm run build`**: Compila la aplicación para producción en la carpeta `build`. Optimiza el proyecto para el mejor rendimiento.
* **`npm test`**: Lanza el ejecutor de pruebas en modo interactivo.
* **`npm run eject`**: (¡Precaución! Esta es una operación de una sola vía.) Expulsa las herramientas de configuración internas de `create-react-app` para tener un control más granular, pero ya no podrás actualizar fácilmente a nuevas versiones de `react-scripts`.

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactar a:

* **Jhon Jairo Rivera Menco**
