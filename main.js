import "./sass/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

// console.log(sections);

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-horizontal",
    pin: true,
    scrub: 1,
    // markers: true,
    snap: 1 / (sections.length - 1),
    end: () =>
      "+=" + document.querySelector(".container-horizontal").offsetWidth,
  },
});

gsap.from(".quote", {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".characteristic",
    markers: true,
    horizontal: true,
    containerAnimation: scrollTween,
    start: "-40% left",
    end: "5% end",
    scrub: true,
  },
});
