# 07 Sound Solution - Sitio web

Sitio web (EPK / portafolio) de **Adolfo "Fito" Martínez**, ingeniero de sonido de sala (FOH) con base en Miami, FL. Ingeniero principal del emblemático **Willy Chirino**.

Una sola página, bilingüe (Español / Inglés), estática, sin dependencias ni paso de compilación. Publicado en **GitHub Pages** con dominio propio `07soundsolution.com` (HTTPS activo).

**En vivo:** https://07soundsolution.com

---

## Estructura

```
.
├── index.html          # La página (todo el contenido, ES + EN) + JSON-LD SEO
├── styles.css          # Estilos (colores editables en :root)
├── script.js           # Toggle de idioma, menú móvil, animaciones
├── CNAME               # Dominio personalizado: 07soundsolution.com
├── .nojekyll           # Evita el procesado Jekyll de GitHub Pages
├── robots.txt          # SEO + permisos para crawlers de IA (GPTBot, ClaudeBot, etc.)
├── llms.txt            # Ficha para asistentes de IA (ES + EN)
├── humans.txt          # Creditos del proyecto
├── sitemap.xml         # Mapa del sitio (con hreflang)
└── assets/
    └── img/
        ├── og-image.jpg       # Imagen de vista previa al compartir
        ├── fito-portrait.jpg  # Foto de Fito (disponible para la seccion Bio)
        └── favicon.svg
```

---

## Estado del contenido

- **Creditos** (`#credits`): lista definitiva de **16 artistas**, sin placeholders. Todas las tarjetas comparten el mismo estilo dorado. Para anadir o quitar un artista, edita los `<li class="credit">` en `index.html`.
- **Galeria**: la seccion de galeria se **elimino** (no hay fotos reales por ahora). Para reincorporarla habria que volver a crear la `<section id="gallery">`, su enlace en el nav y los estilos `.gallery`/`.g-item`.
- **Foto de Bio**: la seccion Bio usa por ahora la marca "07". Hay una foto disponible en `assets/img/fito-portrait.jpg` si se quiere usar mas adelante.

El texto ES/EN se edita en pares: cada elemento tiene `data-es="..."` y `data-en="..."`. Edita **ambos**.

---

## Despliegue (GitHub Pages)

Ya esta activo. Source: rama **main**, carpeta **/(root)**. Cualquier `push` a `main` se publica solo en 1-2 min.

DNS en GoDaddy (ya configurado):

```
A      @     185.199.108.153
A      @     185.199.109.153
A      @     185.199.110.153
A      @     185.199.111.153
CNAME  www   cisnerosmusic.github.io
```

> El correo `info@07soundsolution.com` usa registros MX aparte (GoDaddy Professional Email / Microsoft 365) y no afecta a estos registros A.

---

## SEO y descubribilidad por IA

- **Datos estructurados JSON-LD**: `ProfessionalService` + `LocalBusiness` + `Person` + `WebSite`.
- **Meta avanzado**: canonical, robots (max-image-preview), Open Graph, Twitter Card, geo-tags, keywords.
- **`robots.txt`** permite explicitamente a los crawlers de IA (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, Bingbot, etc.).
- **`llms.txt`** bilingue con ficha de servicios y contacto para asistentes de IA.

---

## Formulario de contacto (opcional)

El `<form>` esta listo pero necesita un servicio que envie el correo (GitHub Pages no procesa formularios). Lo mas simple es [Formspree](https://formspree.io): crea un formulario, copia tu ID y reemplaza `your-form-id` en la etiqueta `<form>` de `index.html`.

---

## Cambiar colores

En `styles.css`, dentro de `:root`: `--accent` (dorado) y `--accent-2` (naranja) controlan el acento de todo el sitio.

---

*Desarrollado por [Index01](https://index01.net) para Fito. Que cada nota llegue como debe ser.*
