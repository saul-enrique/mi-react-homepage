# 🚀 Homepage Personal Interactiva

¡Bienvenido a mi homepage personal! Este proyecto es una aplicación web completa construida desde cero, diseñada para ser un dashboard de enlaces personalizable y un punto de partida diario en la web.

**✨ [Ver la demo en vivo](https://mi-react-homepage.vercel.app)**

![Captura de pantalla de la Homepage](https://raw.githubusercontent.com/saul-enrique/mi-react-homepage/main/screenshot.png) 
*(Nota: Asegúrate de que esta URL sea la correcta para tu captura de pantalla)*

---

## 🌟 Características Principales

*   **Dashboard 100% Personalizable:**
    *   **Título Editable:** El título principal puede ser modificado por el usuario.
    *   **Gestión de Enlaces Dinámica:** Los usuarios pueden añadir sus propios enlaces a través de un elegante modal y eliminar los existentes con un intuitivo "modo edición".
    *   **Favicons Dinámicos:** Al añadir un nuevo enlace, la aplicación obtiene automáticamente el favicon oficial del sitio web para mantener una interfaz visualmente coherente.
*   **Persistencia de Datos Locales:** Todas las personalizaciones (título y enlaces) se guardan en el `localStorage` del navegador, por lo que la configuración de cada usuario se mantiene entre sesiones.
*   **Diseño Moderno y Responsive:** Creado con Tailwind CSS, utilizando un diseño de "glassmorphism" para una experiencia de usuario limpia y atractiva en cualquier dispositivo.
*   **Despliegue Profesional:** La aplicación está "dockerizada" con un `Dockerfile` multi-etapa que crea una imagen de producción ligera y optimizada, servida por Nginx.

---

## 🛠️ Stack Tecnológico

*   **Frontend:** React, TypeScript, Vite
*   **Estilos:** Tailwind CSS
*   **Contenerización:** Docker
*   **Servidor de Producción:** Nginx
*   **Despliegue:** Vercel

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

3.  **Para desarrollo (con recarga en caliente):**
    ```bash
    npm run dev
    ```
    Abre `http://localhost:5173` en tu navegador.

4.  **Para producción (usando Docker):**
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

Este proyecto fue un viaje de aprendizaje integral. No solo profundicé mis habilidades en **React** y **TypeScript** para crear una interfaz dinámica, sino que me enfrenté al desafío de llevar una aplicación desde el concepto hasta un despliegue de producción real.

Implementar la persistencia de datos con **`localStorage`** y gestionar el estado con los hooks de React fue clave para la funcionalidad de personalización. Sin embargo, el mayor reto fue aprender a optimizar la aplicación para el **despliegue**, creando un **`Dockerfile` multi-etapa** que reduce drásticamente el tamaño de la imagen final.

Este proyecto solidificó mi entendimiento del ciclo de vida completo del desarrollo de software, desde la idea inicial y el diseño, hasta la contenerización y el despliegue continuo con **Vercel**.