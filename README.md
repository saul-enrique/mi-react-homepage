# 🚀 Homepage Interactiva con React y Docker

¡Bienvenido a mi homepage personal! Este no es solo un dashboard de enlaces, es una aplicación web completa construida desde cero con tecnologías modernas. Sirve como mi punto de partida diario en la web e integra una interfaz de chat con la API de Google Gemini.

**✨ [Ver la demo en vivo](URL_DE_LA_DEMO_AQUI)**  *(Nota: Añadiremos esto en el siguiente paso)*

![Captura de pantalla de la Homepage](URL_DE_LA_CAPTURA_DE_PANTALLA_AQUI)

---

## 🌟 Características Principales

*   **Dashboard 100% Personalizable:**
    *   **Título Editable:** El título principal puede ser modificado por el usuario y los cambios se guardan localmente.
    *   **Gestión de Enlaces Dinámica:** Los usuarios pueden añadir sus propios enlaces y eliminar los existentes a través de un intuitivo "modo edición".
*   **Persistencia de Datos Locales:** Todas las personalizaciones (título y enlaces) se guardan en el `localStorage` del navegador, por lo que la configuración de cada usuario se mantiene entre sesiones.
*   **Diseño Moderno y Responsive:** Creado con Tailwind CSS para una experiencia de usuario limpia en cualquier dispositivo.
*   **Desplegado en Producción:** La aplicación está "dockerizada" con un `Dockerfile` multi-etapa para crear una imagen ligera y optimizada servida por Nginx.

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend:** React, TypeScript, Vite
*   **Estilos:** Tailwind CSS
*   **Integración API:** Google Gemini API
*   **Contenerización:** Docker
*   **Servidor de Producción:** Nginx

---

## 🚀 Cómo Ejecutarlo Localmente

Para levantar este proyecto en tu propia máquina, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/saul-enrique/mi-react-homepage.git
    cd mi-react-homepage
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura tus variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tu clave de la API de Google Gemini:
    ```
    VITE_GEMINI_API_KEY=TU_API_KEY_AQUI
    ```

4.  **Para desarrollo (con recarga en caliente):**
    ```bash
    npm run dev
    ```
    Abre `http://localhost:5173` en tu navegador.

5.  **Para producción (usando Docker):**
    Asegúrate de tener Docker instalado y corriendo.
    ```bash
    # 1. Construye la imagen de Docker
    docker build -t mi-homepage .

    # 2. Ejecuta el contenedor
    docker run -d -p 8080:80 --name mi-homepage mi-homepage
    ```
    Abre `http://localhost:8080` en tu navegador.

---

## 🧠 Lo que Aprendí en este Proyecto

Este proyecto fue un viaje de aprendizaje increíble. No solo profundicé mis habilidades en React y TypeScript, sino que me enfrenté al desafío de llevar una aplicación desde el concepto hasta un despliegue de producción real. Aprender a optimizar imágenes de Docker con builds multi-etapa y a gestionar claves de API de forma segura fueron dos de los puntos más destacados.