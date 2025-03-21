class NavigationEffect {
  constructor(navigation) {
    this.previous = null;
    this.current = null;
    this.navigation = navigation;
    this.anchors = this.navigation.querySelectorAll("a");

    this.anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        this.handlePrevious();
        this.handleCurrent(anchor);
      });
    });
  }

  handleCurrent(current) {
    this.current = current;
    this.current.classList.toggle("active");
    const nodes = this.getNodes(this.current);

    gsap.to(nodes[0], {
      duration: 3,
      ease: "elastic.out(1.4, 0.4)",
      yPercent: "-100",
      stagger: 0.012,
      overwrite: true
    });

    gsap.to(nodes[1], {
      duration: 3,
      ease: "elastic.out(1.4, 0.4)",
      yPercent: "100",
      stagger: 0.012,
      overwrite: true
    });
  }

  handlePrevious() {
    this.previous = document.querySelector(".active");
    if (this.previous) {
      this.previous.classList.toggle("active");
      const nodes = this.getNodes(this.previous);
      gsap.to(nodes[0], {
        duration: 0.2,
        ease: "power1.out",
        yPercent: "0",
        overwrite: true,
        stagger: 0.012
      });

      gsap.to(nodes[1], {
        duration: 0.2,
        ease: "power1.out",
        yPercent: "0",
        overwrite: true,
        stagger: 0.012
      });
    }
  }

  getNodes(item) {
    return [
      gsap.utils.selector(item)(".blue rect"),
      gsap.utils.selector(item)(".pink rect")
    ];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new NavigationEffect(document.querySelector("nav"));
});
