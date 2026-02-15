gsap.registerPlugin(ScrollTrigger);

// ── Generate stars ──────────────────────────────────────────
(function createStars() {
  var container = document.getElementById("stars-canvas");
  var count = 120;

  for (var i = 0; i < count; i++) {
    var star = document.createElement("div");
    star.className = "star";
    var size = Math.random() * 2.5 + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 60 + "%"; // keep stars in the upper sky area
    star.style.opacity = Math.random() * 0.7 + 0.3;
    container.appendChild(star);
  }

  // Subtle twinkling
  gsap.utils.toArray(".star").forEach(function (star) {
    gsap.to(star, {
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 2 + 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 3,
    });
  });
})();

// ── Firewatch-style scroll parallax ────────────────────────
// Each layer has a data-speed attribute. Higher speed = moves more = feels closer.
// On scroll, layers translate Y by (scrollProgress * speed * distance).
var layers = gsap.utils.toArray(".hero__layer[data-speed]");
var heroHeight = document.querySelector(".hero").offsetHeight;

layers.forEach(function (layer) {
  var speed = parseFloat(layer.getAttribute("data-speed"));

  gsap.to(layer, {
    y: function () {
      return -heroHeight * speed;
    },
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

// ── Hero content entrance ──────────────────────────────────
gsap.from(".hero__content", {
  y: 50,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out",
  delay: 0.2,
});
