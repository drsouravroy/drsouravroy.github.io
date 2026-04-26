document.documentElement.classList.add("js-enabled");

(() => {
  const root = document.documentElement;
  const body = document.body;
  const storageKey = "sourav-roy-theme";

  const safeGet = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  const safeSet = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures and keep the in-memory theme.
    }
  };

  const preferredTheme = () => {
    const stored = safeGet(storageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const updateThemeButtons = (theme) => {
    themeButtons.forEach((button) => {
      const label = button.querySelector("[data-theme-label]");
      if (label) {
        label.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
      }
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    });
  };

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    updateThemeButtons(theme);
  };

  applyTheme(preferredTheme());

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      safeSet(storageKey, nextTheme);
    });
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const siteMenu = document.querySelector("[data-site-menu]");

  const closeMenu = () => {
    if (!navToggle || !siteMenu) {
      return;
    }
    navToggle.setAttribute("aria-expanded", "false");
    siteMenu.classList.remove("is-open");
  };

  if (navToggle && siteMenu) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteMenu.classList.toggle("is-open");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    });
  });

  const pageFromBody = body.dataset.page;
  const pageFromPath = window.location.pathname.split("/").pop() || "index.html";
  const currentPage = pageFromBody || pageFromPath;

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    const target = link.getAttribute("href");
    if (!target) {
      return;
    }
    if (target === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });

  const backToTop = document.querySelector("[data-back-to-top]");
  const updateBackToTop = () => {
    if (!backToTop) {
      return;
    }
    if (window.scrollY > 480) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  };

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const publicationCards = document.querySelectorAll(".publication-card");

  if (filterButtons.length && publicationCards.length) {
    const setFilter = (filterValue) => {
      publicationCards.forEach((card) => {
        const categories = (card.dataset.categories || "").split(" ").filter(Boolean);
        const shouldShow = filterValue === "all" || categories.includes(filterValue);
        card.hidden = !shouldShow;
      });

      filterButtons.forEach((button) => {
        const active = button.dataset.filter === filterValue;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setFilter(button.dataset.filter || "all");
      });
    });

    setFilter("all");
  }

  document.querySelectorAll(".particle-field").forEach((field) => {
    const count = Number(field.dataset.particles || "14");
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.setProperty("--x", `${Math.round(Math.random() * 96)}%`);
      particle.style.setProperty("--y", `${Math.round(Math.random() * 88)}%`);
      particle.style.setProperty("--size", `${8 + Math.round(Math.random() * 10)}px`);
      particle.style.setProperty("--duration", `${7 + Math.random() * 8}s`);
      particle.style.setProperty("--delay", `${Math.random() * 6}s`);
      particle.style.setProperty("--tilt", `${-28 + Math.random() * 56}deg`);
      fragment.appendChild(particle);
    }

    field.appendChild(fragment);
  });
})();
