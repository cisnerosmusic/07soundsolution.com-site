/* ============================================================
   07 Sound Solution - interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Language toggle (ES / EN) ---- */
  var STORAGE_KEY = "07ss-lang";
  var langToggle = document.getElementById("langToggle");

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-es]").forEach(function (el) {
      var val = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-es");
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll(".lang-opt").forEach(function (opt) {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // initial language: saved → browser → es
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  var initial = saved || (navigator.language && navigator.language.slice(0, 2) === "en" ? "en" : "es");
  applyLang(initial);

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.lang === "en" ? "en" : "es";
      applyLang(current === "en" ? "es" : "en");
    });
  }

  /* ---- Mobile nav ---- */
  var burger = document.getElementById("navBurger");
  var nav = document.querySelector(".main-nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Scroll reveal (hero excluded so above-the-fold paints immediately) ---- */
  var reveals = [].slice.call(document.querySelectorAll(".section"));
  reveals.forEach(function (el) { el.setAttribute("data-reveal", ""); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

/* ============================================================
   Hero audio wave (decorative bars) - lightweight Canvas 2D
   Sharp under the CTA, progressively blurred toward the edges
   ============================================================ */
(function () {
  "use strict";
  var sharp = document.getElementById("heroWave");
  if (!sharp) return;
  var blur = document.getElementById("heroWaveBlur");
  var layers = [{ cv: sharp, ctx: sharp.getContext("2d") }];
  if (blur) layers.push({ cv: blur, ctx: blur.getContext("2d") });
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var GOLD = [240, 180, 41], ORANGE = [232, 118, 26];
  var W = 0, H = 0, t0 = performance.now(), mx = 0, mxT = 0, running = false, raf = 0, last = 0;
  var MIN = 1 / 30, FREQ = 3.0;

  function rgba(c, a) { return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function size() {
    var r = sharp.getBoundingClientRect();
    W = r.width; H = r.height;
    for (var i = 0; i < layers.length; i++) {
      layers[i].cv.width = Math.max(1, Math.round(W * dpr));
      layers[i].cv.height = Math.max(1, Math.round(H * dpr));
      layers[i].ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function drawOne(ctx, t) {
    ctx.clearRect(0, 0, W, H);
    var base = H, step = 11, bw = 5, maxh = H * 0.82, f = FREQ;
    for (var x = 4; x < W; x += step) {
      var u = x / W;
      var e = Math.abs(
        Math.sin(u * 9 * f + t * 1.4) * 0.5 +
        Math.sin(u * 22 * f - t * 1.1) * 0.3 +
        Math.sin(u * 4 * f + t * 0.6) * 0.2
      );
      var h = 4 + e * maxh + mx * 5;
      if (h < 2) h = 2;
      var g = ctx.createLinearGradient(0, base - h, 0, base);
      g.addColorStop(0, rgba(GOLD, 0.9));
      g.addColorStop(1, rgba(ORANGE, 0.5));
      ctx.fillStyle = g;
      rr(ctx, x, base - h, bw, h, 2);
      ctx.fill();
    }
  }
  function draw(t) { for (var i = 0; i < layers.length; i++) drawOne(layers[i].ctx, t); }
  function loop(now) {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    if ((now - last) / 1000 < MIN) return;
    last = now;
    mx += (mxT - mx) * 0.05;
    draw((now - t0) / 1000);
  }
  function start() { if (running || reduce) return; running = true; last = 0; raf = requestAnimationFrame(loop); }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); }

  size();
  window.addEventListener("resize", function () { size(); if (reduce) draw(6); }, { passive: true });
  window.addEventListener("pointermove", function (e) { mxT = (e.clientX / window.innerWidth - 0.5) * 2; }, { passive: true });

  if (reduce) { draw(6); }
  else if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      en.forEach(function (x) { x.isIntersecting ? start() : stop(); });
    }, { threshold: 0 }).observe(sharp);
  } else { start(); }
})();

/* ============================================================
   Contact card torch: one-shot delayed cinematic fade-in
   ============================================================ */
(function () {
  "use strict";
  var card = document.querySelector(".contact-form");
  if (!card) return;
  function lightUp() { setTimeout(function () { card.classList.add("lit"); }, 2000); }
  if (!("IntersectionObserver" in window)) { lightUp(); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { lightUp(); io.disconnect(); }
    });
  }, { threshold: 0.35 });
  io.observe(card);
})();
