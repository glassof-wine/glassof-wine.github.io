document.body.addEventListener("mousemove", handleMove);
document.body.addEventListener("touchmove", handleMove);

function handleMove(evt) {
  const mouseX = evt.clientX || evt.touches[0].clientX;
  const mouseY = evt.clientY || evt.touches[0].clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  });
}



