// ---- nav data ----
var SECTIONS = [
  {
    id: "principles",
    label: "Principles",
    num: "00",
    group: "Foundations",
    icon: '<path d="M4 19V6a2 2 0 0 1 2-2h13v14H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: "brand",
    label: "Brand",
    num: "01",
    group: "Foundations",
    icon: '<path d="M5 3v18M5 4h13l-2.5 4L18 12H5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
  },
  {
    id: "colors",
    label: "Colors",
    num: "02",
    group: "Foundations",
    icon: '<circle cx="8" cy="9" r="5" fill="currentColor" opacity=".55"/><circle cx="15" cy="9" r="5" fill="currentColor" opacity=".55"/><circle cx="11.5" cy="15" r="5" fill="currentColor" opacity=".55"/>',
  },
  {
    id: "typography",
    label: "Typography",
    num: "03",
    group: "Foundations",
    icon: '<path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/>',
  },
  {
    id: "icons",
    label: "Icons",
    num: "04",
    group: "Foundations",
    icon: '<path d="M12 3l2.4 5.5 6 .6-4.5 4 1.3 5.9L12 16l-5.2 3 1.3-5.9-4.5-4 6-.6z" fill="currentColor"/>',
  },
  {
    id: "musa",
    label: "Musa",
    num: "05",
    group: "Character",
    icon: '<path d="M12 3c3 0 5 2 5 5 0 1-.3 2-.8 2.7L20 14l-3.3-.4c-.4 2-1.7 3.6-3.5 4.4L14 21h-1l-.5-2.8c-3.6.2-6.5-2.5-6.5-6.2C6 8 8.5 3 12 3z" fill="currentColor"/>',
  },
  {
    id: "illustration",
    label: "Illustration",
    num: "06",
    group: "Character",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="8.5" cy="9.5" r="1.6" fill="currentColor"/><path d="M4 17l5-5 3.5 3.5L17 10l4 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: "components",
    label: "Components",
    num: "07",
    group: "Components",
    icon: '<rect x="4" y="4" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="13" y="4" width="7" height="7" rx="1.5" fill="currentColor" opacity=".55"/><rect x="4" y="13" width="7" height="7" rx="1.5" fill="currentColor" opacity=".55"/><rect x="13" y="13" width="7" height="7" rx="1.5" fill="currentColor"/>',
  },
  {
    id: "motion",
    label: "Motion",
    num: "08",
    group: "Experience",
    icon: '<path d="M4 12a8 8 0 1 1 3 6.2" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M4 16v-4h4" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: "rewards",
    label: "Rewards",
    num: "09",
    group: "Experience",
    icon: '<path d="M7 4h10v4a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="10" y="14" width="4" height="4" fill="currentColor"/><rect x="7" y="18" width="10" height="2.5" rx="1" fill="currentColor"/>',
  },
  {
    id: "sounds",
    label: "Sounds",
    num: "10",
    group: "Experience",
    icon: '<path d="M4 10v4h4l5 4V6l-5 4z" fill="currentColor"/><path d="M16.5 9a4.2 4.2 0 0 1 0 6M18.7 6.8a7.5 7.5 0 0 1 0 10.4" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  },
  {
    id: "writing",
    label: "Writing",
    num: "11",
    group: "Experience",
    icon: '<path d="M4 20l1-4.5L15.5 5l3.5 3.5L8.5 19z" fill="currentColor"/>',
  },
  {
    id: "accessibility",
    label: "Accessibility",
    num: "12",
    group: "Accessibility",
    icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="8" r="1.4" fill="currentColor"/><path d="M8 11h8M12 11v4l-2.3 3.2M12 15l2.3 3.2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  },
];

var ICONS = [
  {
    label: "Home",
    svg: '<path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" fill="currentColor"/>',
  },
  {
    label: "Path",
    svg: '<circle cx="6" cy="5" r="3" fill="currentColor"/><circle cx="18" cy="12" r="3" fill="currentColor"/><circle cx="6" cy="19" r="3" fill="currentColor"/><path d="M6 8v3a3 3 0 0 0 3 3h3M18 15v1a3 3 0 0 1-3 3h-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  },
  {
    label: "Trophy",
    svg: '<path d="M7 4h10v4a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="10" y="14" width="4" height="4" fill="currentColor"/><rect x="7" y="18" width="10" height="2.5" rx="1" fill="currentColor"/>',
  },
  {
    label: "Streak",
    svg: '<path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1.5 1 2 3 2 4.5A5.5 5.5 0 0 1 6 14.5C6 9 12 7 12 2z" fill="currentColor"/>',
  },
  {
    label: "Hearts",
    svg: '<path d="M12 20s-7-4.4-9.5-8.8C1 8 2.2 4.5 5.6 4c2-.3 3.6.7 4.7 2.2C11.4 7.7 12 8 12 8s.6-.3 1.7-1.8C14.8 4.7 16.4 3.7 18.4 4c3.4.5 4.6 4 3.1 7.2C19 15.6 12 20 12 20z" fill="currentColor"/>',
  },
  {
    label: "XP / Gem",
    svg: '<path d="M4 9l4-6h8l4 6-10 12z" fill="currentColor"/>',
  },
  {
    label: "Star",
    svg: '<path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.7 1.5 6.9L12 17.6l-6.1 3.6 1.5-6.9L2.2 9.6l6.9-.7z" fill="currentColor"/>',
  },
  {
    label: "Crown",
    svg: '<path d="M3 8l4 3 5-6 5 6 4-3-2 10H5z" fill="currentColor"/>',
  },
  {
    label: "Lock",
    svg: '<rect x="5" y="11" width="14" height="9" rx="2" fill="currentColor"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2.2" fill="none"/>',
  },
  {
    label: "Book",
    svg: '<path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" fill="currentColor"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" fill="currentColor" opacity=".65"/>',
  },
  {
    label: "Globe",
    svg: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" stroke="currentColor" stroke-width="2" fill="none"/>',
  },
  {
    label: "Medal",
    svg: '<circle cx="12" cy="14" r="6" fill="currentColor"/><path d="M9 3H6l3 8M15 3h3l-3 8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  },
  {
    label: "Vote",
    svg: '<rect x="4" y="10" width="16" height="10" rx="2" fill="currentColor"/><path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M9.5 14.5l1.8 1.8 3.2-3.6" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    label: "Civics",
    svg: '<path d="M12 3v18M8 21h8" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M4 7h6M14 7h6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M4 7l-2.5 5A2.5 2.5 0 0 0 4 15a2.5 2.5 0 0 0 2.5-3zM20 7l-2.5 5a2.5 2.5 0 0 0 2.5 3 2.5 2.5 0 0 0 2.5-3z" fill="currentColor"/>',
  },
  {
    label: "Community",
    svg: '<circle cx="9" cy="8" r="3.4" fill="currentColor"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" fill="currentColor"/><circle cx="17" cy="9" r="2.8" fill="currentColor" opacity=".65"/><path d="M14.7 14.3c2.9.4 5 2.4 5 5.7h-2.8" fill="currentColor" opacity=".65"/>',
  },
  {
    label: "Coins",
    svg: '<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 7.5v9M9.5 9.8c0-1.1 1.1-1.8 2.5-1.8s2.5.7 2.5 1.6c0 2.2-5 1-5 3.2 0 .9 1.1 1.6 2.5 1.6s2.5-.7 2.5-1.8" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
  },
  {
    label: "Flag",
    svg: '<path d="M6 3v18" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/><path d="M6 4h12l-3 4 3 4H6z" fill="currentColor"/>',
  },
  {
    label: "Meerkat",
    svg: '<ellipse cx="12" cy="16.5" rx="5" ry="6.2" fill="currentColor"/><circle cx="12" cy="8.5" r="4.6" fill="currentColor"/><circle cx="8.7" cy="5.6" r="1.5" fill="currentColor"/><circle cx="15.3" cy="5.6" r="1.5" fill="currentColor"/>',
  },
  {
    label: "Chat",
    svg: '<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="currentColor"/><circle cx="8" cy="11" r="1.3" fill="#fff"/><circle cx="12" cy="11" r="1.3" fill="#fff"/><circle cx="16" cy="11" r="1.3" fill="#fff"/>',
  },
  {
    label: "Shield",
    svg: '<path d="M12 2l8 3.5v6c0 5-3.4 8.6-8 10.5-4.6-1.9-8-5.5-8-10.5v-6z" fill="currentColor"/>',
  },
];

(function () {
  var navlist = document.getElementById("navlist");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var menuBtn = document.getElementById("menuBtn");
  var drawerClose = document.getElementById("drawerClose");
  var currentSectionBtn = document.getElementById("currentSectionBtn");
  var currentSectionIcon = document.getElementById("currentSectionIcon");
  var currentSectionLabel = document.getElementById("currentSectionLabel");
  var links = [];
  var lastGroup = null;

  SECTIONS.forEach(function (s) {
    if (s.group !== lastGroup) {
      var g = document.createElement("div");
      g.className = "hg-nav-label";
      g.textContent = s.group;
      navlist.appendChild(g);
      lastGroup = s.group;
    }
    var a = document.createElement("a");
    a.href = "#" + s.id;
    a.className = "hg-navlink";
    a.dataset.target = s.id;
    a.innerHTML =
      '<svg viewBox="0 0 24 24">' +
      s.icon +
      "</svg><span>" +
      s.num +
      ". " +
      s.label +
      "</span>";
    navlist.appendChild(a);
    links.push(a);
  });

  // ---- mobile drawer open/close ----
  function openDrawer() {
    sidebar.classList.add("open");
    backdrop.classList.add("show");
    document.body.classList.add("drawer-open");
    menuBtn.setAttribute("aria-expanded", "true");
    var activeLink = navlist.querySelector(".hg-navlink.active");
    if (activeLink) {
      activeLink.scrollIntoView({ block: "center" });
    }
  }
  function closeDrawer() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("show");
    document.body.classList.remove("drawer-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) closeDrawer();
    else openDrawer();
  });
  currentSectionBtn.addEventListener("click", openDrawer);
  drawerClose.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });
  // if the viewport grows past the mobile breakpoint while the drawer
  // is open, don't leave it stuck open behind the (now static) sidebar
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) closeDrawer();
  });

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.getElementById(link.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeDrawer();
    });
  });

  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle("active", l.dataset.target === id);
    });
    var section = SECTIONS.filter(function (s) {
      return s.id === id;
    })[0];
    if (section) {
      currentSectionIcon.innerHTML = section.icon;
      currentSectionLabel.textContent = section.num + ". " + section.label;
    }
  }

  var sectionEls = SECTIONS.map(function (s) {
    return document.getElementById(s.id);
  });
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
  );
  sectionEls.forEach(function (el) {
    if (el) io.observe(el);
  });
  setActive("brand");

  // icon grid
  var grid = document.getElementById("icon-grid");
  ICONS.forEach(function (ic) {
    var tile = document.createElement("div");
    tile.className = "hg-icon-tile";
    tile.innerHTML =
      '<svg viewBox="0 0 24 24">' +
      ic.svg +
      "</svg><span>" +
      ic.label +
      "</span>";
    grid.appendChild(tile);
  });

  // motion replay buttons
  document.querySelectorAll("[data-replay]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var stage = document.getElementById(btn.dataset.replay);
      var anim = btn.dataset.anim;
      stage.classList.remove(anim);
      void stage.offsetWidth;
      stage.classList.add(anim);
    });
  });
  document.getElementById("stage-float").classList.add("anim-float");
})();