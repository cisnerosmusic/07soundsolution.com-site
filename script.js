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

  /* ---- Scroll reveal ---- */
  var reveals = [].slice.call(document.querySelectorAll(".section, .hero-inner"));
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
