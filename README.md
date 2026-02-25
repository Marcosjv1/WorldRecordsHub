# WorldRecordsHub

Proyecto para la materia de Programacion para Internet, Sexto Semestre.

Es una pagina web estatica (sin backend) que muestra records mundiales de deportes olimpicos. Se puede filtrar por deporte, ver a los atletas y navegar entre las distintas secciones.

---

## Descripcion

La idea del proyecto es mostrar records mundiales de distintas disciplinas olimpicas de forma visual. Todo el contenido esta guardado en archivos JavaScript como datos estaticos, no hay base de datos ni servidor.

Se hizo con React y Vite, usando Bootstrap para los estilos base y CSS propio para los detalles visuales.

---

## Objetivo

Practicar el uso de React con componentes reutilizables, navegacion con React Router y manejo de estado basico para los filtros.

Lo que incluye el sitio:
- Records mundiales de 6 deportes olimpicos
- Informacion de los atletas que tienen esos records
- Filtro por deporte en la tabla de records
- Formulario de contacto (solo visual, no envia nada)
- Navegacion entre paginas

---

## Estructura del proyecto

```
WorldRecordsWeb/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SportCard.jsx
│   │   ├── RecordTable.jsx
│   │   ├── AthleteCard.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sports.jsx
│   │   ├── Records.jsx
│   │   ├── Athletes.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── records.js
│   │   ├── sports.js
│   │   └── athletes.js
│   ├── styles/
│   │   └── custom.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Como ejecutarlo

Requisitos: tener Node.js instalado (version 18 o superior).

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

Despues abrir el navegador en http://localhost:5173

```bash
# Para generar la version de produccion
npm run build
```

---

## Paginas

| Ruta | Descripcion |
|------|-------------|
| `/` | Pagina principal con hero, estadisticas y preview de records |
| `/deportes` | Tarjetas de los 6 deportes |
| `/records` | Tabla completa con filtro por deporte |
| `/atletas` | Tarjetas de los atletas con sus records |
| `/contacto` | Formulario de contacto |

---

## Tecnologias usadas

| Tecnologia | Version | Para que se usa |
|------------|---------|-----------------|
| React | 18.2 | Componentes y UI |
| Vite | 5.1 | Servidor de desarrollo y build |
| React Router DOM | 6.22 | Navegacion entre paginas |
| Bootstrap | 5.3 | Estilos y grid |
| Bootstrap Icons | 1.11 | Iconos |
| Google Fonts | - | Fuentes Oswald y Roboto |

---

## Datos incluidos

Algunos de los records que aparecen en el sitio:

| Deporte | Prueba | Record | Atleta | Año |
|---------|--------|--------|--------|-----|
| Atletismo | 100m Masculino | 9.58s | Usain Bolt | 2009 |
| Atletismo | 100m Femenino | 10.49s | Florence Griffith-Joyner | 1988 |
| Atletismo | 400m Masculino | 43.03s | Wayde van Niekerk | 2016 |
| Natacion | 400m Libre Femenino | 3:56.46 | Katie Ledecky | 2016 |
| Maraton | Masculino | 2:01:09 | Eliud Kipchoge | 2022 |
| Maraton | Femenino | 2:11:53 | Tigst Assefa | 2023 |
| Gimnasia | All-Around Femenino | 59.798 pts | Simone Biles | 2019 |
| Ciclismo | 1km Contrarreloj | 56.303s | Francois Pervis | 2013 |

---

## Autor

Proyecto desarrollado por Marco — Materia: Programacion para Internet, Sexto Semestre.
