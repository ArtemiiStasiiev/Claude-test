gsap.registerPlugin(ScrollTrigger);

// Idle floating animation for each cloud layer
function addFloatingAnimation(selector, duration, xRange) {
  document.querySelectorAll(selector).forEach(function (cloud, i) {
    gsap.to(cloud, {
      x: xRange * (i % 2 === 0 ? 1 : -1),
      y: "-=12",
      duration: duration,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: i * 0.8,
    });
  });
}

addFloatingAnimation(".cloud--layer-1", 6, 30);
addFloatingAnimation(".cloud--layer-2", 5, 20);
addFloatingAnimation(".cloud--layer-3", 4, 15);

// Scroll-driven parallax — each layer moves at a different speed
var layers = [
  { selector: ".cloud--layer-1", yPercent: -30 },
  { selector: ".cloud--layer-2", yPercent: -60 },
  { selector: ".cloud--layer-3", yPercent: -100 },
];

layers.forEach(function (layer) {
  gsap.to(layer.selector, {
    yPercent: layer.yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

// Fade in hero content on load
gsap.from(".hero__content", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.3,
});
