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


  // 공통 (mainText) 에 애니메이션 적용 front 애니메이션 사용
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

  // 공통 subText
  gsap.utils.toArray('.subText p').forEach((selector) => {
    gsap.timeline({
      scrollTrigger: {
        trigger:selector,
        start:"100% 100%",
        end: "100% 100%",
        scrub:1,
        markers:true
      },
    })
    .fromTo(selector, { opacity:0, y: 100 }, { opacity:1, y: 0, ease: 'none', duration: 5 }, 0);
  })

  let textAniList = document.querySelectorAll('.con1 .textAni li');
  let textAni = gsap.timeline({ repeat: -1 });

  for (let i = 0; i < textAniList.length; i++) {
    textAni.to(textAniList[i], {
      duration: 0.8,
      opacity: 1,
      repeat: 1,
      yoyo: true,
      ease: 'power4.out',
    });
  }

  // 애니메이션 실행
  textAni.play();


  // listBox 스크롤 트리거 애니메이션 z 축 이동
  gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
    gsap.timeline({
      scrollTrigger: {
        trigger:selector,
        start:"0% 20%",
        end: "0% 0%",      
        scrub:1,
        markers:true 
      }             
    })
    .to(selector, {transform:'rotateX(-10deg) scale(0.9)', transformOrigin:'top', filter:'brightness(0.3)'},0)
  })


  // 카드 애니메이션
  gsap.utils.toArray('.con3 .listBox li').forEach((selector, t) => {
    ScrollTrigger.create({
      trigger:selector,
      start:'30% 50%',
      //onEnter란 scrollTrigger가 제공하는 콜백 함수 ( 종류 많음 onEnter은 스크롤 내릴때만 반응하고 올릴때는 액션 없는 콜백 함수 )
      onEnter: () => {
        //gsap.set => 진행 되는 시간 없이 바로 set 되는 함수
        gsap.set(selector, {
            rotationX:'-65deg',
            z:'-500px',
            opacity:0,
        }),
        gsap.to(selector, {
           rotationX:0,
            z:0,
            opacity:1,   
            delay:(t % 3) * .05         
        });
      },
     // markers:true
    });
  });

  // listBox li 호버시 이미지 애니
  let listBox = document.querySelectorAll('.con5 .listBox li');
  let imgBox = document.querySelector('.con5 .imgBox');
  let img = document.querySelector('.con5 .imgBox img');

  for(let i = 0; i < listBox.length; i++) {
    listBox[i].addEventListener('mouseover', () => {
      img.src=`images/img${i}.jpg`;
      gsap.set(imgBox, {scale:0, opacity:0, duration:.3}),
      gsap.to(imgBox, {scale:1, opacity:1, duratioin:.3})
    })
    listBox[i].addEventListener('mousemove',(e) => {
      let imgBoxX = e.pageX + 20;
      let imgBoxY = e.pageY - 20;
      imgBox.style.left = imgBoxX + 'px';
      imgBox.style.top = imgBoxY + 'px';
    })
    listBox[i].addEventListener('mouseout', () => {
      gsap.to(imgBox, {scale:0, opacity:0, duration:.3})
    })
  }
  //con5에 overflow hidden 효과 부여
//  gsap.timeline({
//   scrollTrigger : {
//     trigger:'.con5',
//     start:'0% 100%',
//     end:'100% 0%',
//     toggleClass: {targets:'.wrap', className:'on'}
//   }
//  }) 
};

