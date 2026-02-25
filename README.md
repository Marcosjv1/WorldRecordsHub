# 🏆 WorldRecordsHub

Aplicación web sobre récords mundiales olímpicos, desarrollada con **React + Vite**.

## 📋 Descripción

WorldRecordsHub es un proyecto universitario para la materia **Programación para Internet**. Muestra récords históricos del deporte olímpico e integra la API de TheSportsDB para búsqueda de atletas en tiempo real.

## 🚀 Tecnologías

- React 18
- Vite 5
- React Router DOM 6
- Bootstrap Icons
- TheSportsDB API (gratuita)

## 📄 Páginas

| Ruta | Descripción |
|---|---|
| `/` | Inicio |
| `/deportes` | Deportes olímpicos |
| `/records` | Tabla de récords mundiales |
| `/atletas` | Atletas destacados |
| `/buscar` | Búsqueda de atletas via API |

## 🌐 API

Se utiliza **TheSportsDB** (https://www.thesportsdb.com), API gratuita sin necesidad de clave.

- Búsqueda de atletas: `searchplayers.php?p={nombre}`
- Todos los deportes: `all_sports.php`

## ▶️ Instalación

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
