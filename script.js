
const STUDENTS = [
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
  "لا تنتظر الفرصة المثالية؛ اصنع من كل يوم فرصة جديدة.",
  "النجاح رحلة نبدأها معًا، ونصل إليها بالإصرار.",
  "حين نتعاون، تصبح أحلامنا أكبر من أي عقبة.",
  "كل إنجاز عظيم كان يومًا فكرة آمن بها أصحابها.",
  "تميّزنا لا يعني أن نكون متشابهين، بل أن نكمل بعضنا."
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

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

const progressBar = $("#progressBar");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

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

const albumImages = [
  { src: "imgs/baner.png", alt: "لحظة من نشاط الفصل" },
  { src: "imgs/untitled-f000936.png", alt: "صورة من ألبوم الفصل" },
  { src: "imgs/untitled-f001067.png", alt: "ذكرى من الفصل" },
  { src: "imgs/untitled-f001184.png", alt: "لحظة جماعية للفصل" }
];

const albumGallery = $("#albumGallery");
if (albumGallery) {
  let albumIndex = 0;
  const albumCards = $$(".album-card", albumGallery);
  const albumDots = $("#albumDots", albumGallery);

  const normalizeIndex = index => (index + albumImages.length) % albumImages.length;

  function renderAlbum(animate = true) {
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
    albumIndex = normalizeIndex(albumIndex + direction);
    renderAlbum();
  }

  $(".album-prev", albumGallery).addEventListener("click", () => changeAlbum(-1));
  $(".album-next", albumGallery).addEventListener("click", () => changeAlbum(1));

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
      if (card.dataset.albumPosition !== "center") return;
      event.stopPropagation();
      if (!lightbox || !lightboxImage) return;
      const img = $("img", card);
      lightboxImage.src = img.currentSrc || img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  renderAlbum(false);
}
