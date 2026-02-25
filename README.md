# 🏆 WorldRecordsHub

> Plataforma web estática sobre récords mundiales en deportes olímpicos.  
> Proyecto universitario — Materia: **Programación para Internet**

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap)
![React Router](https://img.shields.io/badge/React_Router-6.22-CA4245?style=flat&logo=reactrouter)

---

## 📋 Descripción

**WorldRecordsHub** es una plataforma web completamente estática (sin backend) que muestra los récords mundiales más impresionantes en deportes olímpicos. Los usuarios pueden explorar récords por disciplina, conocer a los atletas que los poseen y filtrar la información de forma interactiva.

---

## 🎯 Objetivo

Crear una aplicación web moderna, responsiva y visualmente atractiva usando **React + Vite**, que permita a los usuarios:

- Explorar récords mundiales en 6 deportes olímpicos
- Conocer la historia de los atletas más destacados
- Filtrar récords por disciplina deportiva
- Navegar entre páginas con React Router

---

## 👥 Usuarios Objetivo

| Perfil | Descripción |
|--------|-------------|
| 🎓 Estudiantes | Investigación sobre estadísticas deportivas |
| ⚽ Amantes del deporte | Curiosidad sobre récords históricos |
| 📊 Analistas | Datos comparativos de rendimiento atlético |
| 🌍 Público general | Entretenimiento e información deportiva |

---

## 🗂️ Estructura del Proyecto

```
WorldRecordsWeb/
├── public/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx       # Barra de navegación fija
│   │   ├── Hero.jsx         # Sección hero de la página principal
│   │   ├── SportCard.jsx    # Tarjeta de deporte
│   │   ├── RecordTable.jsx  # Tabla de récords con filtro
│   │   ├── AthleteCard.jsx  # Tarjeta de atleta
│   │   └── Footer.jsx       # Pie de página
│   ├── pages/               # Páginas de la aplicación
│   │   ├── Home.jsx         # Página de inicio
│   │   ├── Sports.jsx       # Página de deportes
│   │   ├── Records.jsx      # Página de récords
│   │   ├── Athletes.jsx     # Página de atletas
│   │   └── Contact.jsx      # Página de contacto
│   ├── data/                # Datos estáticos
│   │   ├── records.js       # Récords mundiales
│   │   ├── sports.js        # Información de deportes
│   │   └── athletes.js      # Información de atletas
│   ├── styles/
│   │   └── custom.css       # CSS personalizado
│   ├── App.jsx              # Componente raíz con rutas
│   └── main.jsx             # Punto de entrada
├── index.html               # HTML principal
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Cómo Ejecutarlo

### Requisitos previos

- **Node.js** v18 o superior → [Descargar](https://nodejs.org/)
- **npm** v9 o superior (incluido con Node.js)

### Pasos

```bash
# 1. Clonar o descargar el proyecto
# (Si ya tienes los archivos en la carpeta, omite este paso)
git clone https://github.com/tu-usuario/WorldRecordsHub.git

# 2. Entrar a la carpeta del proyecto
cd WorldRecordsWeb

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

### Otros comandos

```bash
# Construir para producción
npm run build

# Previsualizar la build de producción
npm run preview
```

---

## 📄 Páginas del Sitio

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Hero, características, récords destacados y preview de deportes |
| `/deportes` | Deportes | Cards de las 6 disciplinas olímpicas |
| `/records` | Récords | Tabla completa con filtro por deporte |
| `/atletas` | Atletas | Cards de atletas con sus récords |
| `/contacto` | Contacto | Formulario estático con validación |

---

## 🧩 Componentes

| Componente | Descripción |
|------------|-------------|
| `Navbar.jsx` | Barra de navegación fija con menú hamburguesa para móvil |
| `Hero.jsx` | Sección principal con imagen de fondo, título y estadísticas |
| `SportCard.jsx` | Tarjeta de deporte con imagen, descripción y botón |
| `RecordTable.jsx` | Tabla de récords con filtro dinámico por deporte |
| `AthleteCard.jsx` | Tarjeta de atleta con imagen, récord y biografía |
| `Footer.jsx` | Pie de página con navegación, atletas destacados y redes |

---

## 🎨 Diseño

- **Paleta de colores:** Azul oscuro (`#0f3460`), Rojo (`#e94560`), Dorado (`#f5a623`), Negro (`#1a1a2e`)
- **Tipografías:** Oswald (títulos) + Roboto (cuerpo) — Google Fonts
- **Framework CSS:** Bootstrap 5.3 + CSS personalizado (`custom.css`)
- **Iconos:** Bootstrap Icons 1.11
- **Imágenes:** Unsplash (libres de derechos)
- **Diseño:** Mobile-first, responsivo, con animaciones y efectos hover

---

## ⚙️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.2 | Framework de UI |
| Vite | 5.1 | Bundler y servidor de desarrollo |
| React Router DOM | 6.22 | Navegación entre páginas |
| Bootstrap | 5.3 | Estilos base y grid |
| Bootstrap Icons | 1.11 | Iconografía |
| Google Fonts | — | Tipografías Oswald y Roboto |

---

## 📤 Cómo Subirlo a GitHub

### Paso 1: Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en **"New repository"** (botón verde)
3. Nombre: `WorldRecordsHub`
4. Descripción: `Plataforma de récords mundiales olímpicos - React + Vite`
5. Visibilidad: **Public**
6. **NO** marques "Initialize with README" (ya tenemos uno)
7. Haz clic en **"Create repository"**

### Paso 2: Inicializar Git en el proyecto

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "feat: proyecto inicial WorldRecordsHub"
```

### Paso 3: Conectar con GitHub y subir

```bash
# Conectar con el repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/WorldRecordsHub.git

# Renombrar rama principal a 'main'
git branch -M main

# Subir el código
git push -u origin main
```

### Paso 4: Verificar

1. Ve a `https://github.com/TU-USUARIO/WorldRecordsHub`
2. Deberías ver todos los archivos del proyecto

### Paso 5 (Opcional): Publicar con GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar en package.json > scripts:
# "deploy": "gh-pages -d dist"

# Construir y desplegar
npm run build
npm run deploy
```

---

## 📊 Datos Incluidos

### Récords Mundiales

| Deporte | Prueba | Récord | Atleta | Año |
|---------|--------|--------|--------|-----|
| Atletismo | 100m Masculino | 9.58s | Usain Bolt | 2009 |
| Atletismo | 100m Femenino | 10.49s | Florence Griffith-Joyner | 1988 |
| Atletismo | 200m Masculino | 19.19s | Usain Bolt | 2009 |
| Atletismo | 400m Masculino | 43.03s | Wayde van Niekerk | 2016 |
| Natación | 400m Libre Femenino | 3:56.46 | Katie Ledecky | 2016 |
| Natación | 100m Mariposa Masculino | 49.45s | Caeleb Dressel | 2021 |
| Maratón | Masculino | 2:01:09 | Eliud Kipchoge | 2022 |
| Maratón | Femenino | 2:11:53 | Tigst Assefa | 2023 |
| Pesas | Arranque 96kg | 199kg | Tian Tao | 2019 |
| Gimnasia | All-Around Femenino | 59.798 pts | Simone Biles | 2019 |
| Ciclismo | 1km Contrarreloj | 56.303s | François Pervis | 2013 |

---

## 👨‍💻 Autor

Proyecto desarrollado para la materia **Programación para Internet** — Sexto Semestre.

---

## 📝 Licencia

Este proyecto es de uso educativo. Las imágenes provienen de [Unsplash](https://unsplash.com) y son libres de derechos.
