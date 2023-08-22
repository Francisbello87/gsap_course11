let play = document.getElementById("play");

const slimeContainer = gsap.set(".demo", { autoAlpha: 1 });
const slimes = gsap.utils.toArray(".slime");
const mainTl = gsap.timeline();
// const slime = document.querySelector(".slime");

slimes.forEach((slime, i) => {
    const tl = gsap.timeline({});
  tl.to(slime, { y: 25, ease: "power2", duration: 0.5 })
    .to(slime, { y: 100, ease: "power1.in", duration: 0.2 })
    .to(slime, {
      scaleY: 0.6,
      transformOrigin: "center bottom",
      duration: 0.15,
      repeat: 1,
      yoyo: true,
    })
    .to(slime, { rotation: 360, duration: 1, ease: "power2" }, 0.1)
    .to(slime, { x: 450, ease: "none", duration: 3 }, 0);
    mainTl.add(tl, i*0.8)
});



play.addEventListener("click", () => {
    mainTl.restart();
});
