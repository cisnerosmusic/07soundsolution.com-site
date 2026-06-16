# 07 Sound Solution - Sitio web

Sitio web (EPK / portafolio) de **Adolfo "Fito" Martínez**, ingeniero de sonido de sala (FOH) con base en Miami, FL. Ingeniero principal del emblemático **Willy Chirino**.

Una sola página, bilingüe (Español / Inglés), estática, sin dependencias ni paso de compilación. Publicado en **GitHub Pages** con dominio propio `07soundsolution.com` (HTTPS activo).

**En vivo:** https://07soundsolution.com

---

## Estructura

```
.
├── index.html          # La página (todo el contenido, ES + EN) + JSON-LD SEO
├── gracias.html        # Página de confirmación tras enviar el formulario (noindex)
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
        ├── og-image.jpg       # Tarjeta de marca 1200x630 (badge 07 + nombre) para vista previa al compartir
        ├── fito-portrait.jpg  # Foto real de Fito (FOH) — usada en la sección Bio
        └── favicon.svg
```

---

## Estado del contenido

- **Bio** (`#about`): usa una **foto real de Fito** en la consola de sala (FOH), `assets/img/fito-portrait.jpg`. Para cambiarla, reemplaza ese archivo (mismo nombre) o ajusta el encuadre con `object-position` en `.photo-frame img`.
- **Servicios** (`#services`): 5 tarjetas con estética de **cristal (glass) sutil** + entrada animada una sola vez al entrar en pantalla. El estilo vive en `.card` de `styles.css`; respeta `prefers-reduced-motion`.
- **Creditos** (`#credits`): lista definitiva de **16 artistas**, sin placeholders. Todas las tarjetas comparten el mismo estilo dorado. Para anadir o quitar un artista, edita los `<li class="credit">` en `index.html`.
- **Galeria**: la seccion de galeria se **elimino** (no hay fotos reales por ahora). Para reincorporarla habria que volver a crear la `<section id="gallery">`, su enlace en el nav y los estilos `.gallery`/`.g-item`.
- **Marca**: el lockup "07 + SOUND SOLUTION" (header, footer, OG y `gracias.html`) usa la fuente **Oswald** y el badge dorado por igual.

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

> El correo `info@07soundsolution.com` está **activo** (Microsoft 365 vía GoDaddy) y usa registros MX aparte, que no afectan a estos registros A. Acceso por webmail en `outlook.office.com` o la app de Outlook.

---

## SEO y descubribilidad por IA

- **Datos estructurados JSON-LD**: `ProfessionalService` + `LocalBusiness` + `Person` + `WebSite`.
- **Meta avanzado**: canonical, robots (max-image-preview), Open Graph, Twitter Card, geo-tags, keywords.
- **`robots.txt`** permite explicitamente a los crawlers de IA (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, Bingbot, etc.).
- **`llms.txt`** bilingue con ficha de servicios y contacto para asistentes de IA.

---

## Formulario de contacto

El formulario (`#contact`) está **conectado y operativo** mediante [FormSubmit](https://formsubmit.co): `action="https://formsubmit.co/info@07soundsolution.com"`. Los mensajes llegan al buzón `info@07soundsolution.com`.

- Tras enviar, redirige a **`gracias.html`** (página de confirmación bilingüe, `noindex`).
- Campos ocultos de FormSubmit: `_subject`, `_template=table`, `_captcha=false`, `_next` (la página de gracias) y un honeypot `_honey` anti-spam.
- **Activación**: la primera vez que se envió, FormSubmit pidió confirmar por correo al buzón. Ya está activado.
- Mejora opcional: usar el endpoint con código/alias de FormSubmit para no exponer el email en el HTML y reducir spam.

---

## Cambiar colores

En `styles.css`, dentro de `:root`: `--accent` (dorado) y `--accent-2` (naranja) controlan el acento de todo el sitio.

---

*Desarrollado por [Index01](https://index01.net) para Fito. Que cada nota llegue como debe ser.*
