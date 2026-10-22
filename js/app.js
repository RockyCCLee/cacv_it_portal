(function () {
  "use strict";

  var STORAGE_KEY = "cacv-portal-open";
  var tree = document.getElementById("portal-tree");
  var openState = loadState();
  var idCounter = 0;

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(openState));
    } catch (e) { /* ignore */ }
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function buildLabel(item) {
    var frag = document.createDocumentFragment();
    frag.appendChild(el("span", "item-icon", item.icon || "•"));
    var textWrap = el("span", "item-text");
    textWrap.appendChild(el("span", "item-title", item.title));
    if (item.description) textWrap.appendChild(el("span", "item-desc", item.description));
    frag.appendChild(textWrap);
    return frag;
  }

  function buildItem(item, path, depth) {
    var li = el("li", "tree-item depth-" + depth);
    var key = path + "/" + item.title;

    if (item.children && item.children.length) {
      var panelId = "panel-" + (++idCounter);
      var isOpen = !!openState[key];

      var btn = el("button", "node folder");
      btn.type = "button";
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.setAttribute("aria-controls", panelId);
      btn.appendChild(buildLabel(item));
      btn.appendChild(el("span", "chevron", "›"));

      var panel = el("div", "panel");
      panel.id = panelId;
      if (isOpen) panel.classList.add("open");
      var inner = el("div", "panel-inner");
      inner.appendChild(buildList(item.children, key, depth + 1));
      panel.appendChild(inner);

      btn.addEventListener("click", function () {
        setOpen(btn, panel, key, btn.getAttribute("aria-expanded") !== "true");
      });

      li.appendChild(btn);
      li.appendChild(panel);
    } else {
      var a = el("a", "node link");
      var hasUrl = item.url && item.url !== "#";
      a.href = hasUrl ? item.url : "#";
      if (hasUrl) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      } else {
        a.classList.add("pending");
        a.title = "Link not configured yet - edit js/links.js";
        a.addEventListener("click", function (e) { e.preventDefault(); });
      }
      a.appendChild(buildLabel(item));
      a.appendChild(el("span", "open-tag", hasUrl ? "OPEN ↗" : "SOON"));
      li.appendChild(a);
    }
    return li;
  }

  function buildList(items, path, depth) {
    var ul = el("ul", "tree-list");
    items.forEach(function (item) {
      ul.appendChild(buildItem(item, path, depth));
    });
    return ul;
  }

  function setOpen(btn, panel, key, open) {
    btn.setAttribute("aria-expanded", String(open));
    panel.classList.toggle("open", open);
    if (open) openState[key] = true;
    else delete openState[key];
    saveState();
  }

  function setAll(open) {
    tree.querySelectorAll(".node.folder").forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("open", open);
    });
    openState = {};
    if (open) {
      // rebuild keys for persisted state
      collectKeys(window.PORTAL_LINKS, "");
    }
    saveState();
  }

  function collectKeys(items, path) {
    items.forEach(function (item) {
      if (item.children && item.children.length) {
        var key = path + "/" + item.title;
        openState[key] = true;
        collectKeys(item.children, key);
      }
    });
  }

  tree.appendChild(buildList(window.PORTAL_LINKS || [], "", 0));
  document.getElementById("expandAll").addEventListener("click", function () { setAll(true); });
  document.getElementById("collapseAll").addEventListener("click", function () { setAll(false); });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
