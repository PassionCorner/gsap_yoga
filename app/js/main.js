// nav section
const navSlide = () => {
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    burger.classList.toggle("nav-burger-bar-close"); //icon
    nav.classList.toggle("nav-links-active"); //menu
  });
};
navSlide();

//************************ */
//*******ANIMATION******** */
//************************ */

// const cont1 = document.querySelector("#content");
// const cont2 = document.querySelector("#content2");
// const cont3 = document.querySelector("#content3");
// const cont5 = document.querySelector("#content5");
// const cont6 = document.querySelector("#content6");
// const cont8 = document.querySelector("#content8");
// const cont9 = document.querySelector("#content9");
// const cont10 = document.querySelector("#content10");

// const hero = [cont1, cont2, cont3, cont5, cont6, cont8, cont9, cont10];
//from y:50 to origin / from 0 opacity to 1 origin opacity
// TweenMax.from(logo, 2, { y: 50, opacity: 0 });

//use stagger and delay each element animate in order stagger uses an array
// TweenMax.staggerFrom(hero, 2, { y: 50, opacity: 0 }, 0.5);
TweenMax.from("#content, #content2", 2, { y: 50, opacity: 0 });
TweenMax.from("#content3", 2, { y: 50, opacity: 0 }).delay(1);
TweenMax.from("#content5", 2, { y: -50, opacity: 0 }).delay(1.5);
TweenMax.from("#content6, #content7", 2, { y: 50, opacity: 0 }).delay(1.7);
TweenMax.from("#content8", 2, { y: -1000, opacity: 0 }).delay(1.9);
TweenMax.from("#content9", 2.5, { x: -500, opacity: 0 }).delay(1.9);
TweenMax.from("#content10", 2, { x: 500, right: 50 }).delay(2);
//second movement
TweenMax.to("#content10", 1, {
  x: -5,
  y: 120,
  right: -30,
  rotation: 1,
  z: 20
}).delay(4.4);

//************************ */
//*******ANIMATION******** */
//************************ */

// animation
// var tl = new TimelineLite();
// //nav and hero section
// tl.from("#content, #content2", 2, { y: 50, opacity: 0 }, "+=.5");
// tl.from("#content3", 2, { y: 50, opacity: 0 }, "-=1.5");
// tl.from("#content5", 2, { y: -50, opacity: 0 }, "-=2");
// tl.from("#content6, #content7", 2, { y: 10, opacity: 0 }, "-=1");
// tl.from("#content8", 2, { y: -1000, opacity: 0 }, "-=3");
// tl.from("#content9", 2, { x: -500, opacity: 0 }, "-=3");
// tl.from("#content10", 2, { x: 500, right: 50 }, "-=2.2");
// //content10 after movement
// tl.set("#content10", { x: "0", y: "30%" }) //center the element
//   .to("#content10", 2, { x: 25, y: 0, rotation: 5, z: 20, delay: 0.5 }); // move it to the desired position

//about1 section
var tl2 = new TimelineLite();
const controller = new ScrollMagic.Controller();

tl2.from("#content11, #content11", 2, { y: 50, opacity: 0 }, "-=1");
tl2.from("#content12", 2, { y: 50, opacity: 0 }, "-=1.5");
tl2.from("#content13", 2, { y: 50, opacity: 0 }, "-=1.5");
tl2.from("#content14", 2, { y: 50, opacity: 0 }, "-=1.5");
tl2.from("#content15", 2, { y: 50, opacity: 0 }, "-=1.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".about1"
})
  .setTween(tl2)
  .addTo(controller);

//about2 section
var tl3 = new TimelineLite();
const controller2 = new ScrollMagic.Controller();

tl3.from("#content16", 2, { y: 50, opacity: 0 }, "-=1");
tl3.from("#content17", 2, { y: 50, opacity: 0 }, "-=1.5");
tl3.from("#content18", 2, { x: -50, opacity: 0 }, "-=1.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".about2"
})
  .setTween(tl3)
  .addTo(controller2);

// ---- about2 after movement-----------

document.getElementById("svg").addEventListener("load", function() {
  var doc = this.getSVGDocument();
  var leg = doc.getElementById("lady-leg");
  var plant = doc.getElementById("plant-top");

  tl4 = new TimelineMax();
  const controller3 = new ScrollMagic.Controller();
  // lady after movement
  tl4
    .set(leg, { x: "1850", y: "910" })
    .to(leg, 2, { x: 2085, y: 705, rotation: 29, z: 20, delay: 0.5 }, 3);
  // plant after movement
  tl4.to(plant, 2, { x: 2550, y: 1349, rotation: 5, z: 20, delay: 0.5 }, 3);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".about2"
  })
    .setTween(tl4)
    .addTo(controller3);
});

//about3 animation
var tl5 = new TimelineLite();
const controller4 = new ScrollMagic.Controller();

tl5.from("#content20", 2, { x: 50, opacity: 0 }, "-=1");
tl5.from("#content21", 2, { x: -50, opacity: 0 }, "-=1.5");
tl5.from("#content22", 2, { y: 50, opacity: 0 }, "-=1.8");
tl5.from("#content23", 2, { y: 50, opacity: 0 }, "-=1.5");
tl5.from("#content24", 2, { y: 50, opacity: 0 }, "-=1.8");

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".about3"
})
  .setTween(tl5)
  .addTo(controller4);

// ---- about3 after movement-----------

document.getElementById("svg2").addEventListener("load", function() {
  var doc = this.getSVGDocument();
  var armL = doc.getElementById("left-arm");
  var armR = doc.getElementById("right-arm");

  tl6 = new TimelineMax();
  const controller5 = new ScrollMagic.Controller();
  // lady after movement
  tl6
    .set(armL, { x: "692", y: "315" })
    .to(armL, 2, { x: 85, y: 15, rotation: 5, z: 20, delay: 1 }, 3);

  // plant after movement
  tl6.to(armR, 2, { x: 50, y: 49, rotation: 5, z: 20, delay: 1 }, 3);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".about3"
  })
    .setTween(tl6)
    .addTo(controller5);
});
