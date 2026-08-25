// Scroll-entrance motion, ported from the design project's observe().
// Elements marked [data-reveal] start hidden only if they sit below the fold,
// so above-the-fold content never flashes. Siblings stagger 70ms, capped at
// four in a row. Fully disabled under prefers-reduced-motion.
export default defineNuxtPlugin((nuxtApp) => {
  const EASE = "cubic-bezier(.2,.7,.2,1)";
  let io: IntersectionObserver | null = null;

  const arm = () => {
    io?.disconnect();
    io = null;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );
      if (!els.length) return;

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            const i = Number(el.dataset.puI || 0);
            el.style.transition = `opacity .75s ${EASE}, transform .75s ${EASE}`;
            el.style.transitionDelay = `${(i % 4) * 70}ms`;
            el.style.opacity = "1";
            el.style.transform = "none";
            io?.unobserve(el);
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
      );

      els.forEach((el, i) => {
        if (el.dataset.puArmed) return;
        el.dataset.puArmed = "1";
        el.dataset.puI = String(i);

        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.style.opacity = "1";
          return;
        }
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        io?.observe(el);
      });
    });
  };

  nuxtApp.hook("page:finish", arm);
  nuxtApp.hook("app:mounted", arm);
});
