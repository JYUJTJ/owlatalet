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
  "محمد ممدوح زاهر ابراهيم",
  "محمد مؤمن عبداللطيف احمد محمد محمد علي منصور "
];
const QUOTES = [
  "مستنيش الفرصة تقرع الباب؛ اعمل لنفسك باب وافتحه.",
  "النجاح مش سباق وحدك؛ احنا هنوصله سوا ونضحك بعدين.",
  "إيد واحدة ممكن توقف، بس سبعتاشر واحدة لا.",
  "كل حاجة كبيرة بدأت بحاجة صغيرة، ومحدش كان فاهم اللي هيحصل.",
  "اختلافنا مش مشكلة؛ ده اللي مخلي الشلة دي شكلها حلو."
];

const ALBUM_IMAGES = [
  { src: "imgs/baner.png", alt: "صورة من ألبوم الفصل: بانر" },
  { src: "imgs/untitled-f000936.png", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/untitled-f001067.png", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/untitled-f001184.png", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/1.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/2.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/3.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/4.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/5.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/6.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " },
  { src: "imgs/7.jpeg", alt: "صورة من ألبوم الفصل: ذكرى " }
];
const MARKDOWN_NOTES = [
  {
    filename: "تنبيه بخصوص الاذاعه.txt",
    name: "إذاعة يوم الأربعاء",
    title: "إذاعة يوم الأربعاء",
    description: "الموضوع المقترح للإذاعة هو الفلسفة، وأهميتها وأسئلة يمكن أن تشعل النقاش.",
    slug: "radio-announcement",
    sharePath: "n/radio-announcement/",
    url: "Markdowns/تنبيه بخصوص الاذاعه.txt"
  },
  {
    filename: "حافظ علي الفصل.txt",
    name: "حافظ على الفصل",
    title: "حافظ على الفصل",
    description: "ملحوظة مهمة للحفاظ على نظافة الفصل وترتيبه ومسؤولية كل طالب فيه.",
    slug: "keep-the-classroom",
    sharePath: "n/keep-the-classroom/",
    url: "Markdowns/حافظ علي الفصل.txt"
  }
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
    // دخول كامل وفخم لقسم القيادة عند ظهوره في الشاشة.
    gsap.timeline({
      scrollTrigger: { trigger: ".leadership", start: "top 82%", once: true }
    })
      .fromTo(".leadership", { opacity: 0, scale: 0.94, y: 45, clipPath: "inset(8% 12% 8% 12% round 18px)" }, {
        opacity: 1, scale: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 18px)", duration: 1.05, ease: "power3.out"
      })
      .fromTo(".leadership .section-heading", { opacity: 0, y: 28, letterSpacing: "4px" }, {
        opacity: 1, y: 0, letterSpacing: "0px", duration: 0.75, ease: "power2.out",
        delay: -0.65
      })
      .fromTo(".leadership-flag-bg", { opacity: 0, scale: 1.12 }, {
        opacity: 0.18, scale: 1, duration: 1.2, ease: "power2.out",
        delay: -0.9
      })
      .fromTo(".leader-card", { opacity: 0, y: 65, rotateY: 8, scale: 0.92 }, {
        opacity: 1, y: 0, rotateY: 0, scale: 1, duration: 0.9, stagger: 0.18, ease: "back.out(1.25)",
        delay: -0.75
      })
      .fromTo(".leader-frame img", { scale: 1.12, filter: "saturate(.55) brightness(.75)" }, {
        scale: 1, filter: "saturate(.9) contrast(1.05)", duration: 1.15, stagger: 0.12, ease: "power2.out",
        delay: -0.65
      })
      .fromTo(".leader-info", { opacity: 0, y: 18 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.14, ease: "power2.out",
        delay: -0.72
      })
      .fromTo(".leader-seal", { opacity: 0, scale: 0, rotation: -90 }, {
        opacity: 1, scale: 1, rotation: 0, duration: 0.55, stagger: 0.12, ease: "back.out(2)",
        delay: -0.45
      });

    gsap.to(".leadership-flag-bg", {
      yPercent: 8,
      scale: 1.06,
      ease: "none",
      scrollTrigger: { trigger: ".leadership", start: "top bottom", end: "bottom top", scrub: 1.2 }
    });
    gsap.fromTo(".leader-card:first-child", { x: -38 }, { x: 0, ease: "none", scrollTrigger: { trigger: ".leadership", start: "top 90%", end: "top 35%", scrub: 1 } });
    gsap.fromTo(".leader-card:last-child", { x: 38 }, { x: 0, ease: "none", scrollTrigger: { trigger: ".leadership", start: "top 90%", end: "top 35%", scrub: 1 } });
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

// جسيمات احتياطية إذا تعذر تحميل tsParticles.
if (!reduceMotion && typeof window.tsParticles === "undefined") {
  const holder = $("#tsparticles");
  if (holder) {
    holder.innerHTML = Array.from({ length: window.innerWidth < 700 ? 18 : 36 }, (_, index) => {
      const size = 2 + (index % 4);
      const duration = 12 + (index % 9) * 2;
      const delay = -(index % 11) * 1.7;
      const drift = ((index % 7) - 3) * 24;
      return `<i class="gold-particle" style="--x:${(index * 37) % 100}%;--size:${size}px;--duration:${duration}s;--delay:${delay}s;--drift:${drift}px;--opacity:${0.18 + (index % 5) * 0.1}"></i>`;
    }).join("");
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
  return ALBUM_IMAGES.map(image => ({
    src: image.src,
    alt: image.alt || imageNameToAlt(image.src.split("/").pop())
  }));
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
  const albumStage = $("#albumStage", albumGallery);
  let isAlbumAnimating = false;

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
    if (!albumImages.length || isAlbumAnimating) return;

    if (reduceMotion || !window.gsap) {
      albumIndex = normalizeIndex(albumIndex + direction);
      renderAlbum(true);
      return;
    }

    isAlbumAnimating = true;
    const cards = albumCards;

    gsap.timeline({
      onComplete: () => {
        isAlbumAnimating = false;
        cards.forEach(card => card.classList.remove("album-flipping"));
      }
    })
      .set(cards, { transformPerspective: 1400 })
      .to(albumStage, {
        x: direction * 10,
        rotateY: direction * -4,
        scale: .985,
        duration: .28,
        ease: "power2.in"
      })
      .to(cards, {
        rotateY: direction * 72,
        rotateZ: direction * 1.2,
        scale: .94,
        opacity: .25,
        duration: .42,
        ease: "power2.in",
        stagger: .035
      }, "<")
      .call(() => {
        albumIndex = normalizeIndex(albumIndex + direction);
        renderAlbum(false);
      })
      .set(cards, { rotateY: direction * -72 })
      .to(cards, {
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        opacity: 1,
        duration: .58,
        ease: "back.out(1.45)",
        stagger: .055
      })
      .to(albumStage, {
        x: 0,
        rotateY: 0,
        scale: 1,
        duration: .48,
        ease: "power3.out"
      }, "-=.52");
  }

  const albumPrev = $(".album-prev", albumGallery);
  const albumNext = $(".album-next", albumGallery);
  if (albumPrev) albumPrev.addEventListener("click", () => changeAlbum(-1));
  if (albumNext) albumNext.addEventListener("click", () => changeAlbum(1));

  albumGallery.addEventListener("click", event => {
    const dot = event.target.closest("[data-album-index]");
    if (dot) {
      const targetIndex = normalizeIndex(Number(dot.dataset.albumIndex));
      if (targetIndex === albumIndex) return;

      const forwardDistance = normalizeIndex(targetIndex - albumIndex);
      const backwardDistance = normalizeIndex(albumIndex - targetIndex);
      changeAlbum(forwardDistance <= backwardDistance ? 1 : -1);
      return;
    }

    const card = event.target.closest("[data-album-position]");
    if (!card) return;
    if (card.dataset.albumPosition === "left") changeAlbum(-1);
    if (card.dataset.albumPosition === "right") changeAlbum(1);
  });

  let swipeStartX = 0;
  albumGallery.addEventListener("touchstart", event => {
    swipeStartX = event.changedTouches[0].clientX;
  }, { passive: true });
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

// حركة وطنية بسيطة ومبهرة لبطاقات المدير والوكيل عند تمرير المؤشر.
const leaderCards = $$(".leader-card");
leaderCards.forEach(card => {
  if (reduceMotion) return;

  card.addEventListener("pointermove", event => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (window.gsap) {
      gsap.to(card, {
        y: -7,
        rotateX: -y * 2.5,
        rotateY: x * 2.5,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto"
      });

      const flag = card.closest(".leadership")?.querySelector(".leadership-flag-bg");
      if (flag) {
        gsap.to(flag, {
          x: x * 8,
          y: y * 5,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    }
  });

  card.addEventListener("pointerleave", () => {
    if (!window.gsap) return;

    gsap.to(card, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.55,
      ease: "power3.out",
      overwrite: "auto"
    });

    const flag = card.closest(".leadership")?.querySelector(".leadership-flag-bg");
    if (flag) {
      gsap.to(flag, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  });
});

// تفاعل بصري عام لكل أقسام الصفحة عند دخولها الشاشة وخلال التمرير.
if (window.gsap && window.ScrollTrigger && document.querySelector("main > section")) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("main > section:not(.hero)").forEach((section, sectionIndex) => {
    const heading = $(".section-heading", section);
    const leftSide = $(".story-photo, .video-copy", section);
    const rightSide = $(".story-text, .video-frame", section);

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 84%",
        once: true
      }
    })
      .fromTo(section, { opacity: 0.2, y: 28 }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out"
      });

    if (heading) {
      gsap.fromTo(heading, { opacity: 0, y: 24, scale: 0.96 }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 84%", once: true }
      });
    }

    if (leftSide) {
      gsap.fromTo(leftSide, { opacity: 0, x: -45, rotateY: 4 }, {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: leftSide, start: "top 88%", once: true }
      });
    }

    if (rightSide) {
      gsap.fromTo(rightSide, { opacity: 0, x: 45, rotateY: -4 }, {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: { trigger: rightSide, start: "top 88%", once: true }
      });
    }

    gsap.to(section, {
      y: sectionIndex % 2 === 0 ? -12 : 12,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.4
      }
    });
  });

  gsap.utils.toArray(".story-values > div, .album-card, .closing-card, .student-name").forEach((item, index) => {
    gsap.fromTo(item, { opacity: 0, y: 28, scale: 0.94 }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.65,
      delay: (index % 4) * 0.06,
      ease: "back.out(1.15)",
      scrollTrigger: { trigger: item, start: "top 90%", once: true }
    });
  });
}

// تشغيل التأثيرات العامة والجسيمات بعد اكتمال تحميل محتوى الصفحة.
if (document.querySelector("main > section#home")) {
  setupRevealAnimations();
}
setupParticles();

if (window.ScrollTrigger) {
  window.ScrollTrigger.refresh();
}

// نظام عرض ملحوظات الفصل وتحويل النصوص إلى Markdown آمن.
function escapeMarkdownHTML(value) {
  return escapeHTML(value);
}

function renderInlineMarkdown(text) {
  let html = escapeMarkdownHTML(text);
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return html;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  let html = "";
  let listStack = [];
  let inBlockquote = false;
  let paragraph = [];

  const closeParagraph = () => {
    if (paragraph.length) {
      html += `<p>${renderInlineMarkdown(paragraph.join(" "))}</p>`;
      paragraph = [];
    }
  };

  const closeLists = () => {
    while (listStack.length) {
      html += "</li></ul>";
      listStack.pop();
    }
  };

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if (!line.trim()) {
      closeParagraph();
      closeLists();
      if (inBlockquote) {
        html += "</blockquote>";
        inBlockquote = false;
      }
      continue;
    }

    const heading = line.match(/^ {0,3}(#{1,6})\s+(.*)$/);
    if (heading) {
      closeParagraph();
      closeLists();
      const level = heading[1].length;
      html += `<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`;
      continue;
    }

    if (/^ {0,3}>/.test(line)) {
      closeParagraph();
      closeLists();
      if (!inBlockquote) {
        html += '<blockquote>';
        inBlockquote = true;
      }
      html += `<p>${renderInlineMarkdown(line.replace(/^ {0,3}>\s?/, ""))}</p>`;
      continue;
    }

    const listItem = line.match(/^\s*([-*])\s+(.+)$/);
    if (listItem) {
      closeParagraph();
      if (!listStack.length) {
        html += "<ul>";
        listStack.push(0);
      }
      html += `<li>${renderInlineMarkdown(listItem[2])}`;
      continue;
    }

    const orderedItem = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (orderedItem) {
      closeParagraph();
      closeLists();
      if (!listStack.length) {
        html += "<ol>";
        listStack.push(1);
      }
      html += `<li>${renderInlineMarkdown(orderedItem[1])}`;
      continue;
    }

    if (inBlockquote) {
      html += `<p>${renderInlineMarkdown(line.trim())}</p>`;
    } else {
      paragraph.push(line.trim());
    }
  }

  closeParagraph();
  closeLists();
  if (inBlockquote) html += "</blockquote>";
  return html;
}

const notesPanel = $("#notesPanel");
const notesEmpty = $("#notesEmpty");
const notesBrowser = $("#notesBrowser");
const notesSidebar = $("#notesSidebar");
const notesList = $("#notesList");
const markdownViewer = $("#markdownViewer");
const noteActions = $("#noteActions");
const shareNoteButton = $("#shareNoteButton");
const copyNoteButton = $("#copyNoteButton");

let activeNoteIndex = 0;

function noteShareURL(note) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("note", note.slug);
  return url.href;
}

async function selectNote(note, index = activeNoteIndex) {
  if (!note || !markdownViewer) return;
  activeNoteIndex = Number(index) || 0;

  $$(".notes-list-item", notesList).forEach((button, buttonIndex) => {
    const isActive = buttonIndex === activeNoteIndex;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });

  markdownViewer.innerHTML = '<p style="text-align:center;opacity:.65">جاري تحميل الملحوظة...</p>';

  try {
    const response = await fetch(note.url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    markdownViewer.innerHTML = renderMarkdown(markdown);

    document.title = `${note.title} | ملحوظات الفصل`;
    const url = noteShareURL(note);
    history.replaceState(null, "", `${window.location.pathname}?note=${encodeURIComponent(note.slug)}`);

    if (shareNoteButton) {
      shareNoteButton.onclick = async () => {
        if (navigator.share) {
          try {
            await navigator.share({ title: note.title, text: note.description, url });
          } catch (error) {
            if (error.name !== "AbortError") console.warn("تعذر المشاركة", error);
          }
        } else {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      };
    }

    if (copyNoteButton) {
      copyNoteButton.onclick = async () => {
        try {
          await navigator.clipboard.writeText(url);
          copyNoteButton.textContent = "تم نسخ الرابط";
        } catch (_) {
          window.prompt("انسخ رابط الملحوظة", url);
        }
        window.setTimeout(() => { copyNoteButton.textContent = "نسخ الرابط"; }, 1800);
      };
    }
  } catch (error) {
    markdownViewer.innerHTML = '<p>تعذر تحميل الملحوظة. حاول تحديث الصفحة.</p>';
    console.warn("تعذر تحميل الملحوظة", note.url, error);
  }
}

async function setupNotesPage() {
  if (!notesPanel || !notesBrowser) return;

  const availableNotes = await Promise.all(MARKDOWN_NOTES.map(async note => {
    try {
      const response = await fetch(note.url);
      return response.ok ? note : null;
    } catch (_) {
      return null;
    }
  }));

  const notes = availableNotes.filter(Boolean);
  if (!notes.length) {
    if (notesEmpty) notesEmpty.hidden = false;
    notesBrowser.hidden = true;
    return;
  }

  if (notesEmpty) notesEmpty.hidden = true;
  notesBrowser.hidden = false;
  if (noteActions) noteActions.hidden = false;

  if (notesList) {
    notesList.innerHTML = notes.map((note, index) =>
      `<button type="button" class="notes-list-item" role="listitem" data-note-index="${index}" aria-current="false">${escapeHTML(note.name)}</button>`
    ).join("");

    notesList.addEventListener("click", event => {
      const button = event.target.closest("[data-note-index]");
      if (!button) return;
      selectNote(notes[Number(button.dataset.noteIndex)], Number(button.dataset.noteIndex));
    });
  }

  const requestedSlug = new URL(window.location.href).searchParams.get("note");
  const requestedIndex = notes.findIndex(note => note.slug === requestedSlug);
  const initialIndex = requestedIndex >= 0 ? requestedIndex : 0;
  selectNote(notes[initialIndex], initialIndex);
}

setupNotesPage();
