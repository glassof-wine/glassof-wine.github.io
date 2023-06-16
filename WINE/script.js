var items = document.querySelectorAll(".list__item")

items.forEach(item => {
  var itemTitle = item.querySelector(".list__item__title")
  var itemTitleOutline = item.querySelector(".list__item__titleOutline")
  var itemImg = item.querySelector(".list__item img")
  
  var itemTL = gsap.timeline({scrollTrigger: {
    trigger: item,
    start: "0% 75%",
    end: "25% 50%",
    scrub: 3,
  }})
  
  itemTL.fromTo(itemTitle, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
  itemTL.fromTo(itemTitleOutline, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
  
  gsap.fromTo(itemImg, {x: "60vw", y : "60vh", rotate: -30}, {x: "-60vw", y: "-60vh", rotate: 30, ease: "none", scrollTrigger: {
    trigger: item,
    start: "50% 100%",
    end: "100% 50%",
    scrub: 3,
  }})
})