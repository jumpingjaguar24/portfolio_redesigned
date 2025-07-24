document.addEventListener("DOMContentLoaded", () => {
    const styleGuideDisplays = document.querySelectorAll(".style-guide-display, .empathy-container");
    const animatedElements = new Set(); // Track which elements have already been animated

    const handleScroll = () => {
        styleGuideDisplays.forEach((el, index) => {
            if (animatedElements.has(index)) return; // Skip if already animated

            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const isVisible = elementCenter >= 0 && elementCenter <= window.innerHeight;

            if (isVisible) {
                el.classList.add("active");
                animatedElements.add(index); // Mark this one as done
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case elements are already in view
});
