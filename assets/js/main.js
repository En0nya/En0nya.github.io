/* Mercury Lamp — small, dependency-free interactions. */
(() => {
  "use strict";

  const body = document.body;
  const root = document.documentElement;
  root.classList.add("js");

  /* ----------------------------------------------------------------------
     App bar
     ---------------------------------------------------------------------- */
  const appBar = document.querySelector(".app-bar");
  if (appBar) {
    const updateBar = () => appBar.classList.toggle("is-scrolled", window.scrollY > 4);
    updateBar();
    window.addEventListener("scroll", updateBar, { passive: true });
  }

  /* ----------------------------------------------------------------------
     Drawers
     ---------------------------------------------------------------------- */
  const drawers = new Map(
    Array.from(document.querySelectorAll(".drawer")).map((drawer) => [drawer.id, drawer]),
  );
  const triggers = Array.from(document.querySelectorAll("[data-drawer-open]"));
  const scrim = document.querySelector("[data-drawer-scrim]");
  let activeDrawer = null;
  let previousFocus = null;

  const focusable = (drawer) =>
    Array.from(
      drawer.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null);

  function setTriggerState(id, expanded) {
    triggers.forEach((trigger) => {
      if (trigger.dataset.drawerOpen === id) {
        trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
      }
    });
  }

  function closeDrawer({ restoreFocus = true } = {}) {
    if (!activeDrawer) return;
    const drawer = activeDrawer;
    const trigger = previousFocus;
    activeDrawer = null;

    body.classList.remove("drawer-left-open", "drawer-right-open", "is-drawer-open");
    drawer.setAttribute("aria-hidden", "true");
    drawer.setAttribute("inert", "");
    setTriggerState(drawer.id, false);

    if (restoreFocus && trigger && typeof trigger.focus === "function") {
      trigger.focus({ preventScroll: true });
    }
  }

  function openDrawer(drawer, trigger) {
    if (!drawer) return;
    if (activeDrawer && activeDrawer !== drawer) closeDrawer({ restoreFocus: false });

    previousFocus = trigger || document.activeElement;
    activeDrawer = drawer;
    const side = drawer.classList.contains("drawer-right") ? "right" : "left";
    body.classList.add(side === "right" ? "drawer-right-open" : "drawer-left-open", "is-drawer-open");
    drawer.removeAttribute("inert");
    drawer.setAttribute("aria-hidden", "false");
    setTriggerState(drawer.id, true);

    window.requestAnimationFrame(() => {
      const target = drawer.querySelector(".drawer-close") || focusable(drawer)[0];
      if (target) target.focus({ preventScroll: true });
    });
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const drawer = drawers.get(trigger.dataset.drawerOpen);
      if (!drawer) return;
      if (activeDrawer === drawer) closeDrawer();
      else openDrawer(drawer, trigger);
    });
  });

  document.querySelectorAll("[data-drawer-close]").forEach((button) => {
    button.addEventListener("click", () => closeDrawer());
  });

  if (scrim) {
    scrim.addEventListener("click", () => closeDrawer());
  }

  body.addEventListener("keydown", (event) => {
    if (!activeDrawer) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeDrawer();
      return;
    }
    if (event.key !== "Tab") return;

    const candidates = focusable(activeDrawer);
    if (candidates.length === 0) return;
    const first = candidates[0];
    const last = candidates[candidates.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll(".drawer a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("href") || "";
      const samePageAnchor = target.startsWith("#") && target.length > 1;
      closeDrawer();
      if (samePageAnchor) {
        const heading = document.getElementById(decodeURIComponent(target.slice(1)));
        if (heading) {
          window.setTimeout(() => heading.focus({ preventScroll: true }), 320);
        }
      }
    });
  });

  /* ----------------------------------------------------------------------
     Collapsible file tree (with remembered state)
     ---------------------------------------------------------------------- */
  const treeKey = "mercury-lamp:collapsed-folders:v1";
  let collapsed = new Set();
  try {
    const saved = JSON.parse(window.localStorage.getItem(treeKey) || "[]");
    if (Array.isArray(saved)) collapsed = new Set(saved.filter((item) => typeof item === "string"));
  } catch {
    collapsed = new Set();
  }

  const folders = Array.from(document.querySelectorAll("[data-tree-folder]"));
  const saveTree = () => {
    try {
      window.localStorage.setItem(treeKey, JSON.stringify(Array.from(collapsed)));
    } catch {
      /* localStorage can be unavailable in private mode; ignore it. */
    }
  };

  const setFolderOpen = (folder, open) => {
    const button = folder.querySelector(":scope > [data-tree-toggle]");
    folder.classList.toggle("is-open", open);
    folder.classList.toggle("is-collapsed", !open);
    if (button) button.setAttribute("aria-expanded", open ? "true" : "false");
  };

  folders.forEach((folder) => {
    const path = folder.dataset.treePath || "";
    if (collapsed.has(path) && !folder.classList.contains("has-active")) {
      setFolderOpen(folder, false);
    }
    const button = folder.querySelector(":scope > [data-tree-toggle]");
    if (!button) return;
    button.addEventListener("click", () => {
      const open = !folder.classList.contains("is-open");
      setFolderOpen(folder, open);
      if (open) collapsed.delete(path);
      else collapsed.add(path);
      saveTree();
    });
  });

  /* ----------------------------------------------------------------------
     Code blocks: language label + copy button
     ---------------------------------------------------------------------- */
  document.querySelectorAll(".prose pre").forEach((pre) => {
    if (pre.parentElement && pre.parentElement.classList.contains("code-block")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    pre.parentNode.insertBefore(wrapper, pre);

    const toolbar = document.createElement("div");
    toolbar.className = "code-toolbar";

    const language = document.createElement("span");
    language.className = "code-language";
    language.textContent = (pre.dataset.lang || "code").toUpperCase();

    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "code-copy";
    copy.textContent = "COPY";
    copy.setAttribute("aria-label", "复制代码");

    copy.addEventListener("click", async () => {
      const text = pre.textContent || "";
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          document.execCommand("copy");
          area.remove();
        }
        copy.textContent = "COPIED";
        copy.classList.add("is-copied");
        window.setTimeout(() => {
          copy.textContent = "COPY";
          copy.classList.remove("is-copied");
        }, 1600);
      } catch {
        copy.textContent = "FAILED";
        window.setTimeout(() => {
          copy.textContent = "COPY";
        }, 1600);
      }
    });

    toolbar.append(language, copy);
    wrapper.append(toolbar, pre);
  });

  /* ----------------------------------------------------------------------
     Table-of-contents scroll spy
     ---------------------------------------------------------------------- */
  const tocLinks = Array.from(document.querySelectorAll("[data-toc-link]"));
  const article = document.querySelector(".prose");
  if (tocLinks.length && article) {
    const headings = Array.from(article.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]"));
    const linksById = new Map();
    tocLinks.forEach((link) => {
      const id = decodeURIComponent((link.getAttribute("href") || "").replace(/^#/, ""));
      if (id) linksById.set(id, link);
    });

    let ticking = false;
    const updateActive = () => {
      ticking = false;
      if (!headings.length) return;
      const offset = 116;
      let current = headings[0];
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= offset) current = heading;
        else break;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = headings[headings.length - 1];

      for (const heading of headings) {
        const link = linksById.get(heading.id);
        if (!link) continue;
        const active = heading === current;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }
})();
