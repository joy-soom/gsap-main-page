window.onload = function () {
  //gnb 애니메이션

  const menuOpen = document.querySelector(".gnb .menuOpen");
  const menuBox = document.querySelector(".gnb .menuBox");

  menuOpen.addEventListener("click", () => {
    menuBox.classList.toggle("on");
  });

  // 스크롤 트리거 등록
  gsap.registerPlugin(ScrollTrigger);

  // visual 01
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".visual",
      start: "100% 100%",
      end: "100% 0%",
      scrub: 1, //애니메이션이 스크롤에 따라 움직이도록 하는 속성, true 이면서 속도1 / 안적으면 스크롤 없이 바로 진행 된다.
      markers:1,
    },
  })
  .to(".logoWrap #j", { x: -150, y: 250, rotate: 20, ease: "none", duration: 5 }, 0)
  .to(".logoWrap #y", { x: -30, y: 150, rotate: -10, ease: "none", duration: 5 }, 0)
  .to(".logoWrap #o", { x: 0, y: 400, rotate: -10, ease: "none", duration: 5 }, 0)
  .to(".logoWrap #u", { x: 50, y: 300, rotate: 10, ease: "none", duration: 5 }, 0)
  .to(".logoWrap #n", { x: 100, y: 100, rotate: -10, ease: "none", duration: 5 }, 0)
  .to(".logoWrap #g", { x: 50, y: 450, rotate: 20, ease: "none", duration: 5 }, 0);


  // 공통 (텍스트 박스) 에 애니메이션 적용 front 애니메이션 사용
gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1,
      markers: true,
    },
  })
 .fromTo(selector, { overflow: 'hidden', y: 150 }, { y: 0, ease: 'none', duration: 5 }, 0);
});

};
