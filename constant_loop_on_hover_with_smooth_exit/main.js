let hover = false;
let hover_btn = document.getElementById("hoverBtn");

hover_btn.addEventListener("mouseenter", hoverOn);
hover_btn.addEventListener("mouseleave", hoverOff);

const animation = gsap.to(".circle", {
  duration: 1,
  x: 200,
  paused: true,
  repeat: 1,
  yoyo: true,
  ease: "sine.inOut",
  onComplete: checkHover,
});

function hoverOn() {
  hover = true;
  console.log(animation.totalProgress());
  animation.play();
  if (animation.totalProgress() == 1) {
    animation.restart();
  }
}

function hoverOff() {
  hover = false;
}

function checkHover() {
  if (hover) {
    animation.restart();
  }
}
