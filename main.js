import "./sass/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-horizontal",
    pin: true,
    scrub: 1,
    // snap: {
    //   snapTo: 1 / (sections.length - 1),
    //   duration: 1.2,
    //   ease: "Power1.easeOut",
    // },
    end: () =>
      "+=" + document.querySelector(".container-horizontal").offsetWidth,
  },
});

gsap.from(".characteristic__quote", {
  y: 100,
  opacity: 0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".characteristic",
    horizontal: true,
    containerAnimation: scrollTween,
    start: "-30% left",
    end: "left end",
    scrub: true,
  },
});

gsap.from(".gallery__item", {
  y: -400,
  scale: 1.5,
  opacity: 0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".characteristic",
    horizontal: true,
    scrub: true,
    containerAnimation: scrollTween,
    start: "25%",
  },
});

gsap.from(".big__image", {
  scale: 1.6,
  opacity: 0.3,
  scrollTrigger: {
    // markers: true,
    trigger: ".gallery",
    horizontal: true,
    scrub: true,
    containerAnimation: scrollTween,
    start: "left",
  },
});

gsap.from(".end__background", {
  x: "-100%",
  scrollTrigger: {
    // markers: true,
    trigger: ".big",
    horizontal: true,
    scrub: true,
    containerAnimation: scrollTween,
    start: "center",
  },
});

gsap.from(".end__quote", {
  x: 100,
  opacity: 0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".big",
    horizontal: true,
    containerAnimation: scrollTween,
    start: "center",
    scrub: true,
  },
});
