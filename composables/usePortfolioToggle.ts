export const usePortfolioToggle = () => {
  // Use Nuxt's useState to create shared state across components
  const isOpen = useState('portfolio-open', () => false);

  const toggle = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value && process.client) {
      // Smooth scroll to portfolio section after a short delay for the animation
      setTimeout(() => {
        const portfolioSection = document.getElementById("portfolioSection");
        if (portfolioSection) {
          // Scroll 100px higher than the section (like the original)
          const yOffset = -100;
          const y = portfolioSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return {
    isOpen,
    toggle,
  };
};
