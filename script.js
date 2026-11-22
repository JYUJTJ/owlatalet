/*
  غيّر الأسماء والمقولات هنا فقط لتخصيص الديمو.
  استبدل عناصر "اسم الطالب" بأسماء زملائك بعد أخذ موافقتهم.
*/
const STUDENTS = [
  // العمود الأول (من 1 إلى 30):
  "عمرو احمد محمد عبد العال",
  "عكاشة احمد عكاشة عباس",
  "على بخيت سليمان على المنعم",
  "على عادل محمد عبد الغنى",
  "على عاطف عبد الشافى أمين",
  "على عبد الصبور عبد الحميد عبد العال",
  "على محمد احمد عمر",
  "على محمد على عبد المريد",
  "عماد ياسر ماهر محمود",
  "عمر أبو بكر عبد الرحمن البدرى",
  "عمر احمد عزت عبد الموجود",
  "عمر حمادة محمد احمد عبد النعيم",
  "عمر خلف محمود عثمان احمد",
  "عمر محمد احمد محمد عبد اللطيف",
  "عمر محمد الطيب محمد",
  "عمرو خالد عبد الموجود سليمان",
  "عمرو محمد امين اسماعيل",
  "عمرو محمد عبد البر محمد",
  "فؤاد مختار فؤاد احمد",
  "كريم شحاته عبد اللطيف على",
  "كريم عبد الرحمن محمد احمد",
  "كريم محمود عبد الحميد احمد",
  "كمال عبد الحليم عبد النعيم خلف الله",
  "مازن عبد الله عبد الحميد نور الدين",
  "مازن محمد محمد تعيان",
  "محمد ابو بكر عبد الشافى أمين",
  "محمد ابو عمر محمد احمد",
  "محمد احمد حسن احمد",
  "محمد الامير ابو الحمد السيد",
  "محمد البدرى ابو السعود عبد المبدى",

  // العمود الثاني (من 31 إلى 50):
  "محمد حربى محمد عبد الغنى",
  "محمد حسن احمد عبد اللطيف",
  "محمد حمدون عطيت الله على",
  "محمد حموده على عثمان",
  "محمد خالد السيد محمود",
  "محمد خيرى محمد غريب",
  "محمد صلاح راشد جبريل",
  "محمد عادل السيد اسماعيل",
  "محمد عاطف نور الدين اسماعيل",
  "محمد عبد الباسط على محمد",
  "محمد عبد الله محمد الدردير",
  "محمد عبد الله ناصر عبد الله",
  "محمد علاء محمد احمد",
  "محمد على بركات عبد الرحيم",
  "محمد عمر احمد محمد",
  "محمد محمد احمد عبد العال",
  "محمد محمد خلف عثمان",
  "محمد محمود عباس محمد",
  "محمد محمود هلال جلال",
  "محمد ممدوح زاهر ابراهيم"
];
const QUOTES = [
  "مستنيش الفرصة تقرع الباب؛ اعمل لنفسك باب وافتحه.",
  "النجاح مش سباق وحدك؛ احنا هنوصله سوا ونضحك بعدين.",
  "إيد واحدة ممكن توقف، بس سبعتاشر واحدة لا.",
  "كل حاجة كبيرة بدأت بحاجة صغيرة، ومحدش كان فاهم اللي هيحصل.",
  "اختلافنا مش مشكلة؛ ده اللي مخلي الشلة دي شكلها حلو."
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// بناء بطاقات أسماء الطلاب من المصفوفة الموجودة أعلى الملف.
const studentsList = $("#studentsList");
if (studentsList) {
  studentsList.innerHTML = STUDENTS.map((name, index) => {
    const isSecretStudent = name === "عمرو احمد محمد عبد العال";
    return `<button type="button" class="student-name${isSecretStudent ? " secret-student" : ""}" style="--order:${index}" data-student="${escapeHTML(name)}">${isSecretStudent ? '<span class="student-crown" aria-hidden="true">♛</span>' : ""}${escapeHTML(name)}</button>`;
  }).join("");

  const secretStudent = "عمرو احمد محمد عبد العال";
  const whatsappNumber = "201066212354";
  let secretClicks = 0;
  let secretTimer;

  studentsList.addEventListener("click", event => {
    const studentButton = event.target.closest("[data-student]");
    if (!studentButton || studentButton.dataset.student !== secretStudent) return;

    secretClicks += 1;
    window.clearTimeout(secretTimer);

    studentButton.classList.remove("secret-pulse");
    void studentButton.offsetWidth;
    studentButton.classList.add("secret-pulse");
    window.setTimeout(() => studentButton.classList.remove("secret-pulse"), 500);

    if (secretClicks >= 5) {
      secretClicks = 0;
      window.open(`https://wa.me/${whatsappNumber}`, "_blank", "noopener,noreferrer");
      return;
    }

    secretTimer = window.setTimeout(() => {
      secretClicks = 0;
    }, 1800);
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

// قائمة المقولات وأزرار التنقل بينها.
let quoteIndex = 0;
const quoteElement = $("#rotatingQuote");
const dotsElement = $("#quoteDots");
let quoteTimer;

function showQuote(index, animate = true) {
  quoteIndex = (index + QUOTES.length) % QUOTES.length;
  if (!quoteElement) return;
  const update = () => { quoteElement.textContent = QUOTES[quoteIndex]; };
  if (animate && !reduceMotion && window.gsap) {
    gsap.to(quoteElement, { opacity: 0, y: 8, duration: 0.25, onComplete: () => {
      update();
      gsap.fromTo(quoteElement, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }});
  } else {
    update();
  }
  $$(".quote-dot", dotsElement).forEach((dot, i) => {
    dot.classList.toggle("active", i === quoteIndex);
    dot.setAttribute("aria-pressed", String(i === quoteIndex));
  });
}

if (dotsElement) {
  dotsElement.innerHTML = QUOTES.map((_, index) =>
    `<button class="quote-dot${index === 0 ? " active" : ""}" type="button" aria-label="المقولة ${index + 1}" aria-pressed="${index === 0}" data-quote="${index}"></button>`
  ).join("");
  dotsElement.addEventListener("click", event => {
    const button = event.target.closest("[data-quote]");
    if (!button) return;
    showQuote(Number(button.dataset.quote));
    restartQuoteTimer();
  });
}

function restartQuoteTimer() {
  window.clearInterval(quoteTimer);
  if (!reduceMotion) quoteTimer = window.setInterval(() => showQuote(quoteIndex + 1), 5600);
}
showQuote(0, false);
restartQuoteTimer();

// قائمة الهاتف.
const menuToggle = $("#menuToggle");
const mainNav = $(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  $$("a", mainNav).forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

// شريط يوضح موضع التمرير.
const progressBar = $("#progressBar");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// تأثيرات الظهور: GSAP عند توفر المكتبة، وIntersectionObserver كبديل.
function setupRevealAnimations() {
  document.body.classList.add("js-ready");
  const revealItems = $$(".reveal");
  if (reduceMotion) {
    revealItems.forEach(item => { item.style.opacity = "1"; item.style.transform = "none"; });
    return;
  }
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".hero-copy .reveal, .hero-visual", { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1.05, stagger: 0.14, ease: "power3.out", delay: 0.2,
      onComplete: () => ScrollTrigger.refresh()
    });
    revealItems.forEach(item => {
      if (item.closest(".hero")) return;
      gsap.fromTo(item, { opacity: 0, y: 32 }, {
        opacity: 1, y: 0, duration: 0.85, ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 88%", once: true }
      });
    });
    gsap.to(".floating-seal", { y: -12, rotation: -7, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".hero-image-frame", { y: -9, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".orbit-one", { rotation: 367, duration: 70, repeat: -1, ease: "none" });
    gsap.to(".orbit-two", { rotation: -368, duration: 95, repeat: -1, ease: "none" });
    gsap.fromTo(".student-name", { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.055, ease: "power2.out",
      scrollTrigger: { trigger: ".students-list", start: "top 82%", once: true }
    });
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "opacity .8s ease, transform .8s ease";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  }
}

// جسيمات ذهبية تتحرك باستمرار في الخلفية.
async function setupParticles() {
  const holder = $("#tsparticles");
  if (!holder || reduceMotion || !window.tsParticles || !window.loadSlim) return;
  try {
    await window.loadSlim(window.tsParticles);
    await window.tsParticles.load({
      id: "tsparticles",
      options: {
        fullScreen: { enable: false },
        fpsLimit: 35,
        detectRetina: true,
        particles: {
          number: { value: window.innerWidth < 700 ? 24 : 48, density: { enable: true, area: 1000 } },
          color: { value: ["#d7b46a", "#f4d895", "#9d773b"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.12, max: 0.62 }, animation: { enable: true, speed: 0.45, minimumValue: 0.08, sync: false } },
          size: { value: { min: 1, max: 2.8 } },
          move: { enable: true, direction: "top", speed: { min: 0.12, max: 0.55 }, random: true, straight: false, outModes: { default: "out" } },
          links: { enable: false }
        },
        interactivity: {
          events: { onHover: { enable: window.matchMedia("(pointer:fine)").matches, mode: "repulse" }, onClick: { enable: false } },
          modes: { repulse: { distance: 90, duration: 0.35, speed: 0.45 } }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true
      }
    });
  } catch (error) {
    console.warn("تعذر تحميل جسيمات الخلفية. ستظل بقية الصفحة تعمل.", error);
  }
}

// ميل خفيف لصورة الواجهة مع المؤشر على الأجهزة التي تدعم ذلك.
const heroFrame = $(".hero-image-frame");
if (heroFrame && window.matchMedia("(pointer:fine)").matches && !reduceMotion) {
  let frame = 0;
  heroFrame.addEventListener("pointermove", event => {
    const rect = heroFrame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      heroFrame.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) rotateZ(-1.2deg)`;
    });
  });
  heroFrame.addEventListener("pointerleave", () => {
    heroFrame.style.transform = "rotate(-1.2deg)";
  });
}

// فتح الصور في نافذة مكبرة.
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxClose = $("#lightboxClose");
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  if (lightboxImage) lightboxImage.src = "";
}
$$('.moment-media img, .story-photo-border img').forEach(img => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
window.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

// معرض صور الفصل من مجلد imgs. يتم اكتشاف الصور تلقائيًا عند تشغيل الصفحة.
const imageExtensions = /\.(avif|gif|jpe?g|png|webp)$/i;

async function discoverAlbumImages() {
  try {
    const response = await fetch("imgs/", { cache: "no-store" });
    if (response.ok) {
      const contentType = response.headers.get("content-type") || "";
      const text = await response.text();

      // تتعامل الخوادم البسيطة (مثل python -m http.server) مع المجلد كصفحة HTML.
      if (contentType.includes("text/html") || /^\s*<!doctype html/i.test(text) || /^\s*<html/i.test(text)) {
        const directoryDocument = new DOMParser().parseFromString(text, "text/html");
        return [...directoryDocument.querySelectorAll("a")]
          .map(link => new URL(link.href, response.url))
          .filter(url => imageExtensions.test(url.pathname))
          .map(url => ({
            src: `imgs/${encodeURI(decodeURIComponent(url.pathname.split("/").pop()))}`,
            alt: imageNameToAlt(decodeURIComponent(url.pathname.split("/").pop()))
          }));
      }

      // كما يدعم هذا المنطق خدمات ترجع JSON أو مصفوفة أسماء ضمن استجابة المجلد.
      try {
        const listing = JSON.parse(text);
        const names = Array.isArray(listing)
          ? listing
          : Array.isArray(listing.files) ? listing.files : [];
        return names
          .map(item => typeof item === "string" ? item : item.name)
          .filter(name => typeof name === "string" && imageExtensions.test(name))
          .map(name => ({ src: `imgs/${encodeURI(name)}`, alt: imageNameToAlt(name) }));
      } catch (_error) {
        // استمر إلى ملف manifest الاحتياطي إن كان موجودًا.
      }
    }
  } catch (_error) {
    // استمر إلى ملف manifest الاحتياطي.
  }

  // fallback اختياري للخوادم التي لا تعرض محتوى المجلد، مع استكمال جلب manifest.json.
  try {
    const response = await fetch("imgs/manifest.json", { cache: "no-store" });
    if (!response.ok) return [];
    const manifest = await response.json();
    const names = Array.isArray(manifest)
      ? manifest
      : Array.isArray(manifest.files) ? manifest.files : [];
    return names
      .map(item => typeof item === "string" ? item : item.name)
      .filter(name => typeof name === "string" && imageExtensions.test(name))
      .map(name => ({ src: `imgs/${encodeURI(name)}`, alt: imageNameToAlt(name) }));
  } catch (_error) {
    return [];
  }
}

function imageNameToAlt(filename) {
  const name = filename.replace(imageExtensions, "").replace(/[-_]+/g, " ").trim();
  return name ? `صورة من ألبوم الفصل: ${name}` : "صورة من ألبوم الفصل";
}

const albumGallery = $("#albumGallery");
if (albumGallery) {
  let albumImages = [];
  let albumIndex = 0;
  const albumCards = $$(".album-card", albumGallery);
  const albumDots = $("#albumDots", albumGallery);

  const normalizeIndex = index => albumImages.length
    ? (index + albumImages.length) % albumImages.length
    : 0;

  function renderAlbum(animate = true) {
    if (!albumImages.length) {
      albumCards.forEach(card => {
        card.hidden = true;
      });
      if (albumDots) albumDots.innerHTML = "";
      return;
    }

    albumCards.forEach(card => { card.hidden = false; });

    if (animate && !reduceMotion) {
      albumCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform += " scale(.94)";
      });
    }

    const leftIndex = normalizeIndex(albumIndex - 1);
    const rightIndex = normalizeIndex(albumIndex + 1);

    albumCards.forEach(card => {
      const position = card.dataset.albumPosition;
      const image = position === "left" ? albumImages[leftIndex]
        : position === "right" ? albumImages[rightIndex]
        : albumImages[albumIndex];
      const img = $("img", card);
      img.src = image.src;
      img.alt = image.alt;
      card.setAttribute("aria-label", position === "center" ? `${image.alt}، عرض بالحجم الكامل` : `اختيار ${image.alt}`);
    });

    if (albumDots) {
      albumDots.innerHTML = albumImages.map((image, index) =>
        `<button class="album-dot${index === albumIndex ? " active" : ""}" type="button" aria-label="عرض ${escapeHTML(image.alt)}" aria-pressed="${index === albumIndex}" data-album-index="${index}"></button>`
      ).join("");
    }

    requestAnimationFrame(() => {
      albumCards.forEach(card => {
        card.style.opacity = "";
        card.style.transform = "";
      });
    });
  }

  function changeAlbum(direction) {
    if (!albumImages.length) return;
    albumIndex = normalizeIndex(albumIndex + direction);
    renderAlbum();
  }

  const albumPrev = $(".album-prev", albumGallery);
  const albumNext = $(".album-next", albumGallery);
  if (albumPrev) albumPrev.addEventListener("click", () => changeAlbum(-1));
  if (albumNext) albumNext.addEventListener("click", () => changeAlbum(1));

  albumGallery.addEventListener("click", event => {
    const dot = event.target.closest("[data-album-index]");
    if (dot) {
      albumIndex = normalizeIndex(Number(dot.dataset.albumIndex));
      renderAlbum();
      return;
    }

    const card = event.target.closest("[data-album-position]");
    if (!card) return;
    if (card.dataset.albumPosition === "left") changeAlbum(-1);
    if (card.dataset.albumPosition === "right") changeAlbum(1);
  });

  let swipeStartX = 0;
  albumGallery.addEventListener("touchstart", event => { swipeStartX = event.changedTouches[0].clientX; }, { passive: true });
  albumGallery.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - swipeStartX;
    if (Math.abs(distance) > 45) changeAlbum(distance > 0 ? -1 : 1);
  }, { passive: true });

  albumCards.forEach(card => {
    card.addEventListener("click", event => {
      if (card.dataset.albumPosition !== "center" || !albumImages.length) return;
      event.stopPropagation();
      if (!lightbox || !lightboxImage) return;
      const img = $("img", card);
      lightboxImage.src = img.currentSrc || img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  discoverAlbumImages().then(images => {
    albumImages = images;
    albumIndex = 0;
    renderAlbum(false);
  });
}

// ملاحظات الفصل: يفحص مجلد Markdowns ويعرض ملفات TXT كصفحات Markdown.
const textFileExtension = /\.txt$/i;

function markdownToHTML(markdown) {
  const source = markdown.replace(/\r\n?/g, "\n");

  const isHorizontalRule = line => /^ {0,3}(?:\*\s*){3,}$/.test(line) || /^ {0,3}(?:-\s*){3,}$/.test(line) || /^ {0,3}(?:_\s*){3,}$/.test(line);

  function parseList(lines, start) {
    const first = lines[start];
    const baseMatch = first.match(/^([ \t]*)([-+*]|\d+[.)])\s+(.+)$/);
    if (!baseMatch) return { html: "", next: start };

    const baseIndent = baseMatch[1].length;
    const ordered = /^\d+[.)]/.test(baseMatch[2]);
    const tag = ordered ? "ol" : "ul";
    let html = `<${tag}>`;
    let index = start;

    while (index < lines.length) {
      const match = lines[index].match(/^([ \t]*)([-+*]|\d+[.)])\s+(.+)$/);
      if (!match || match[1].length !== baseIndent) break;
      const sameOrdered = /^\d+[.)]/.test(match[2]);
      if ((sameOrdered ? "ol" : "ul") !== tag) break;

      let item = renderInlineMarkdown(match[3]);
      const task = item.match(/^\[([ xX])\]\s*(.*)$/);
      if (task) {
        const checked = task[1].toLowerCase() === "x";
        item = `<label class="task-item"><input type="checkbox" disabled${checked ? " checked" : ""}><span>${task[2]}</span></label>`;
      }
      index++;

      let nestedLines = [];
      while (index < lines.length) {
        const indentMatch = lines[index].match(/^([ \t]*)/);
        const indent = indentMatch ? indentMatch[1].length : 0;
        if (indent > baseIndent && lines[index].trim()) {
          nestedLines.push(lines[index].slice(indent));
          index++;
        } else {
          break;
        }
      }

      if (nestedLines.length) {
        item += parseBlocks(nestedLines).html;
      }
      html += `<li>${item}</li>`;

      if (index < lines.length && lines[index].trim()) {
        const nextMatch = lines[index].match(/^([ \t]*)([-+*]|\d+[.)])\s+/);
        if (!nextMatch || nextMatch[1].length !== baseIndent) break;
      }
    }

    html += `</${tag}>`;
    return { html, next: index };
  }

  function parseTable(lines, start) {
    if (start + 1 >= lines.length) return null;
    const header = lines[start].trim();
    const divider = lines[start + 1].trim();
    if (!header.includes("|") || !/^\s*\|?\s*:?-{3,}:?(?:\s*\|\s*:?-{3,}:?)+\s*\|?\s*$/.test(divider)) return null;

    const splitRow = row => row.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map(cell => cell.trim());
    const headers = splitRow(header);
    const aligns = splitRow(divider).map(cell => {
      if (/^:\s*-.*:$/.test(cell)) return "center";
      if (/^-.*:$/.test(cell)) return "right";
      if (/^:/.test(cell)) return "left";
      return null;
    });

    let html = "<table><thead><tr>";
    headers.forEach((cell, i) => {
      const style = aligns[i] ? ` style="text-align:${aligns[i]}"` : "";
      html += `<th${style}>${renderInlineMarkdown(cell)}</th>`;
    });
    html += "</tr></thead><tbody>";

    let index = start + 2;
    while (index < lines.length && lines[index].includes("|")) {
      const cells = splitRow(lines[index]);
      html += "<tr>";
      headers.forEach((_, i) => {
        const style = aligns[i] ? ` style="text-align:${aligns[i]}"` : "";
        html += `<td${style}>${renderInlineMarkdown(cells[i] || "")}</td>`;
      });
      html += "</tr>";
      index++;
    }
    html += "</tbody></table>";
    return { html, next: index };
  }

  function parseBlocks(lines) {
    let html = "";
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];

      if (!line.trim()) {
        index++;
        continue;
      }

      const fence = line.match(/^ {0,3}(`{3,}|~{3,})([^`]*)$/);
      if (fence) {
        const marker = fence[1][0];
        const language = fence[2].trim().split(/\s+/)[0] || "";
        index++;
        const codeLines = [];
        while (index < lines.length && !new RegExp(`^ {0,3}${marker}{3,}\\s*$`).test(lines[index])) {
          codeLines.push(lines[index]);
          index++;
        }
        if (index < lines.length) index++;
        const languageClass = language ? ` class="language-${escapeHTML(language)}"` : "";
        html += `<pre><code${languageClass}>${escapeHTML(codeLines.join("\n"))}</code></pre>`;
        continue;
      }

      if (/^(?: {4}|\t)/.test(line)) {
        const codeLines = [];
        while (index < lines.length && /^(?: {4}|\t)/.test(lines[index])) {
          codeLines.push(lines[index].replace(/^(?: {4}|\t)/, ""));
          index++;
        }
        html += `<pre><code>${escapeHTML(codeLines.join("\n"))}</code></pre>`;
        continue;
      }

      if (isHorizontalRule(line)) {
        html += "<hr>";
        index++;
        continue;
      }

      const heading = line.match(/^ {0,3}(#{1,6})\s*(.*?)\s*#*\s*$/);
      if (heading) {
        const level = heading[1].length;
        html += `<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`;
        index++;
        continue;
      }

      if (index + 1 < lines.length && /^ {0,3}(=+|-+)\s*$/.test(lines[index + 1])) {
        const level = /^=+/.test(lines[index + 1].trim()) ? 1 : 2;
        html += `<h${level}>${renderInlineMarkdown(line.trim())}</h${level}>`;
        index += 2;
        continue;
      }

      if (/^ {0,3}>/.test(line)) {
        const quoteLines = [];
        while (index < lines.length && /^ {0,3}>/.test(lines[index])) {
          quoteLines.push(lines[index].replace(/^ {0,3}> ?/, ""));
          index++;
        }
        html += `<blockquote>${parseBlocks(quoteLines).html}</blockquote>`;
        continue;
      }

      const table = parseTable(lines, index);
      if (table) {
        html += table.html;
        index = table.next;
        continue;
      }

      if (/^ {0,3}(?:[-+*]|\d+[.)])\s+/.test(line)) {
        const list = parseList(lines, index);
        html += list.html;
        index = list.next;
        continue;
      }

      const paragraph = [];
      while (index < lines.length) {
        const current = lines[index];
        if (!current.trim()) break;
        if (/^ {0,3}(?:#{1,6}\s|>|```|~~~|(?:[-+*]|\d+[.)])\s+)/.test(current)) break;
        if (isHorizontalRule(current) || /^ {0,3}(=+|-+)\s*$/.test(current)) break;
        if (index + 1 < lines.length && /^ {0,3}(=+|-+)\s*$/.test(lines[index + 1])) break;
        if (parseTable(lines, index)) break;
        paragraph.push(current);
        index++;
      }

      if (paragraph.length) {
        const paragraphText = paragraph.join("\n").replace(/ {2}$/gm, "<br>");
        html += `<p>${renderInlineMarkdown(paragraphText)}</p>`;
      }
    }

    return { html };
  }

  return parseBlocks(source.split("\n")).html;
}

function renderInlineMarkdown(value) {
  const escaped = escapeHTML(value);
  const placeholders = [];
  const stash = text => `\u0000${placeholders.push(text) - 1}\u0000`;

  let html = escaped
    .replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+["']([^"']*)["'])?\)/g, (_, alt, url, title) =>
      stash(`<img src="${escapeHTML(url)}" alt="${escapeHTML(alt)}"${title ? ` title="${escapeHTML(title)}"` : ""}>`))
    .replace(/\[([^\]]+)\]\(([^\s)]+)(?:\s+["']([^"']*)["'])?\)/g, (_, text, url, title) =>
      stash(`<a href="${escapeHTML(url)}"${title ? ` title="${escapeHTML(title)}"` : ""} target="${/^https?:\/\//.test(url) ? "_blank" : "_self"}" rel="noopener noreferrer">${text}</a>`))
    .replace(/<(https?:\/\/[^>]+)>/g, (_, url) => stash(`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(url)}</a>`));

  html = html.replace(/`([^`]+)`/g, (_, code) => stash(`<code>${escapeHTML(code)}</code>`));
  html = html.replace(/~~~([^~]+)~~~/g, "<del>$1</del>");
  html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  html = html.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/___([^_]+)___/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");

  html = html.replace(/\u0000(\d+)\u0000/g, (_, index) => placeholders[Number(index)]);
  html = html.replace(/\n/g, "<br>");
  return html;
}

/*
  استبدل هذا الجزء بمحتوى صفحة الملاحظات.
  تأكد من أن تكون العناصر الموجودة في الصفحة متوافقة مع الشيفرة المستخدمة هنا.
*/
async function discoverMarkdownFiles() {
  try {
    const response = await fetch("Markdowns/", { cache: "no-store" });
    if (!response.ok) return [];

    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();

    if (contentType.includes("text/html") || /^\s*<!doctype html/i.test(text) || /^\s*<html/i.test(text)) {
      const directoryDocument = new DOMParser().parseFromString(text, "text/html");
      return [...directoryDocument.querySelectorAll("a")]
        .map(link => new URL(link.href, response.url))
        .filter(url => textFileExtension.test(decodeURIComponent(url.pathname)))
        .map(url => {
          const filename = decodeURIComponent(url.pathname.split("/").pop());
          return {
            filename,
            name: filename.replace(/\.txt$/i, ""),
            url: `Markdowns/${encodeURI(filename)}`
          };
        });
    }

    const listing = JSON.parse(text);
    const names = Array.isArray(listing)
      ? listing
      : Array.isArray(listing.files) ? listing.files : [];

    return names
      .map(item => typeof item === "string" ? item : item.name)
      .filter(name => typeof name === "string" && textFileExtension.test(name))
      .map(filename => ({
        filename,
        name: filename.replace(/\.txt$/i, ""),
        url: `Markdowns/${encodeURI(filename)}`
      }));
  } catch (error) {
    console.warn("تعذر فحص مجلد الملاحظات:", error);
    return [];
  }
}

const notesEmpty = $("#notesEmpty");
const notesBrowser = $("#notesBrowser");
const notesList = $("#notesList");
const markdownViewer = $("#markdownViewer");
const notesSidebar = $("#notesSidebar");

async function openMarkdownNote(note) {
  if (!note || !markdownViewer) return;

  markdownViewer.setAttribute("aria-busy", "true");
  try {
    const response = await fetch(note.url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    markdownViewer.innerHTML = markdownToHTML(markdown);
  } catch (error) {
    console.warn("تعذر فتح الملاحظة:", error);
    markdownViewer.innerHTML = '<p class="notes-error">خربت شوية، معرفناش نفتح الملحوظة دي.</p>';
  } finally {
    markdownViewer.removeAttribute("aria-busy");
  }
}

if (notesEmpty && notesBrowser) {
  discoverMarkdownFiles().then(notes => {
    if (!notes.length) {
      notesEmpty.hidden = false;
      notesBrowser.hidden = true;
      return;
    }

    notesEmpty.hidden = true;
    notesBrowser.hidden = false;

    if (notes.length === 1) {
      if (notesSidebar) notesSidebar.hidden = true;
      notesBrowser.classList.add("single-note");
    } else {
      if (notesSidebar) notesSidebar.hidden = false;
      notesBrowser.classList.remove("single-note");

      if (notesList) {
        notesList.innerHTML = notes.map((note, index) =>
          `<button type="button" class="notes-list-item${index === 0 ? " active" : ""}" role="listitem" data-note-index="${index}" aria-pressed="${index === 0}">${escapeHTML(note.name)}</button>`
        ).join("");

        notesList.addEventListener("click", event => {
          const item = event.target.closest("[data-note-index]");
          if (!item) return;

          const index = Number(item.dataset.noteIndex);
          $$(".notes-list-item", notesList).forEach(button => {
            const active = button === item;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
          });
          openMarkdownNote(notes[index]);
        });
      }
    }

    openMarkdownNote(notes[0]);
  });
}
