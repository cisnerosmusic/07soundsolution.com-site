# 07 Sound Solution - Sitio web

Sitio web (EPK / portafolio) de **Adolfo "Fito" Martínez**, ingeniero de sonido con base en Miami, FL.
Una sola página, bilingüe (Español / Inglés), estática - sin dependencias ni paso de compilación. Pensado para **GitHub Pages**.

---

## 📁 Estructura

```
.
├── index.html          # La página (todo el contenido, ES + EN)
├── styles.css          # Estilos (colores editables al inicio del archivo)
├── script.js           # Toggle de idioma, menú móvil, animaciones
├── CNAME               # Dominio personalizado: 07soundsolution.com
├── .nojekyll           # Evita que GitHub Pages procese con Jekyll
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── assets/
    └── img/            # Imágenes (placeholders - REEMPLAZAR por fotos reales)
        ├── fito-portrait.jpg
        ├── gallery-1.jpg … gallery-6.jpg
        ├── og-image.jpg     # Imagen para vista previa al compartir
        └── favicon.svg
```

---

## ✏️ Qué falta reemplazar (marcado en el sitio)

Busca los corchetes `[ ]` en `index.html`. Lo principal:

- **Bio** (sección `#about`): los `[XX] años`, las cifras de las estadísticas y el segundo párrafo.
- **Créditos** (sección `#credits`): `[Artista 2]` … `[Artista 8]` y el testimonio.
- **Contacto** (sección `#contact`): teléfono, enlaces de Instagram / Facebook / YouTube / WhatsApp.
- **Fotos**: reemplaza los archivos en `assets/img/` por fotos reales (mismos nombres = no hay que tocar el código).

El texto en español y en inglés se edita en pares: cada elemento tiene `data-es="…"` y `data-en="…"`.
Edita **ambos** para mantener el sitio bilingüe.

---

## 🚀 Cómo publicarlo en GitHub Pages

### Opción A - Subir los archivos desde la web de GitHub (lo más fácil)
1. Entra a `https://github.com/cisnerosmusic/07soundsolution.com-site`.
2. **Add file → Upload files** y arrastra **todo** el contenido de esta carpeta (incluyendo la carpeta `assets`).
3. Escribe un mensaje (ej. "primer sitio") y **Commit changes**.
4. Ve a **Settings → Pages**.
   - En **Source** elige **Deploy from a branch**.
   - Branch: **main**, carpeta **/(root)**. Guarda.
5. Espera 1-2 min. GitHub mostrará la URL temporal `https://cisnerosmusic.github.io/07soundsolution.com-site/`.

### Opción B - Desde la terminal (git)
```bash
git clone https://github.com/cisnerosmusic/07soundsolution.com-site.git
cd 07soundsolution.com-site
# copia aquí los archivos de esta carpeta, luego:
git add .
git commit -m "Primer sitio 07 Sound Solution"
git push origin main
```
Luego activa Pages igual que en los pasos 4-5 de arriba.

---

## 🌐 Conectar el dominio de GoDaddy (07soundsolution.com)

El archivo **CNAME** ya está incluido con el dominio. Solo falta apuntar el DNS en GoDaddy:

1. En GoDaddy: **My Products → Domain → DNS / Manage DNS**.
2. Crea estos **4 registros A** (raíz `@`) apuntando a las IP de GitHub Pages:
   ```
   A   @   185.199.108.153
   A   @   185.199.109.153
   A   @   185.199.110.153
   A   @   185.199.111.153
   ```
3. Crea un registro **CNAME** para el subdominio `www`:
   ```
   CNAME   www   cisnerosmusic.github.io
   ```
4. (Si GoDaddy ya tiene registros A/CNAME para `@` o `www` que apunten a otro sitio, elimínalos o edítalos).
5. En GitHub **Settings → Pages → Custom domain** escribe `07soundsolution.com` y marca **Enforce HTTPS** (puede tardar unos minutos en habilitarse mientras se emite el certificado).

> El DNS puede tardar desde minutos hasta 48 h en propagar, aunque normalmente es rápido.

---

## ✉️ Activar el formulario de contacto (opcional)

El formulario está listo pero necesita un servicio que envíe el correo (GitHub Pages no procesa formularios).
Lo más simple es **[Formspree](https://formspree.io)** (plan gratis):
1. Crea una cuenta y un formulario nuevo; te darán un ID tipo `xityzabc`.
2. En `index.html`, en la etiqueta `<form>`, reemplaza `your-form-id` por tu ID:
   `action="https://formspree.io/f/xityzabc"`.

Alternativa sin formulario: deja solo el correo y el botón de WhatsApp como contacto.

---

## 🎨 Cambiar colores

Al inicio de `styles.css`, en `:root`, están las variables:
`--accent` (dorado) y `--accent-2` (naranja) controlan el color de acento. Cámbialas y se actualiza todo el sitio.

---

*Hecho con cariño para Fito. Que cada nota llegue como debe ser. 🎚️*
