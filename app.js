var contentPg = document.querySelector("#content");
var cursor = document.querySelector("#cursor");
var cursor2 = document.querySelector("#cursor2");
var page2 = document.querySelector("#page2-part1");
var contentPg2 = document.querySelector("#content2");
var menu=document.querySelector("#menu-page");
var open=document.querySelector("nav h2");
var close = document.querySelector("#menu-part1-subpart2 h5");
var menuVid = document.querySelector("#menu-part2-subpart1");


var tl=gsap.timeline();
function loaderAnimation() {
  tl.from("#loader h2", {
    x: 30,
    opacity: 0,
    stagger: .1,
  })
  tl.to("#loader h2", {
    delay: .2,
    x: -30,
    opacity: 0,
    stagger: .1,
  })
  tl.to("#loader", {
    opacity: 0,
    display: "none"
  })
}
loaderAnimation();

function menuAnimation() {
  open.addEventListener("click", () => {
    menu.style.transform = "translateY(0%)";
    tl.from(menuVid, {
      scale: 0,
      duration: 1
    })
  })
  close.addEventListener("click", () => {
    menu.style.transform = "translateY(-100%)";
    tl.to(menuVid, {
      scale: 0,
      duration: 1
    })
    tl.to(menuVid, {
      scale: 1,
    })
  })

  open.addEventListener("click", () => {
    gsap.from("#menu-part2-subpart2", {
      y: -100,
      duration: .7,
      delay: .3,
      opacity: 0
    })
    gsap.from("#menu-part3", {
      x: -300,
      duration: 1,
      opacity: 0
    })
  })
  // close.addEventListener("click",()=>{
  //   tl2.to("#menu-part2-subpart2",{
  //     y: -500,
  //     opacity: 0,
  //     scrub: 2
  //   })
  //   tl2.to("#menu-part3", {
  //     x: 300,
  //     duration: .5,
  //     opacity: 0,
  //     scrub: 2
  //   })
  // })
}
menuAnimation();

function scrollLoco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
scrollLoco();


function cursorAnimation() {
  contentPg.addEventListener("mousemove", (desc) => {
    var newX = desc.x;
    var newY = desc.y;
    gsap.to(cursor, {
      x: newX,
      y: newY,
      duration: .3,
    })
  })
  contentPg.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    })
  })
  contentPg.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0
    })
  })
}
cursorAnimation()

function topPageAnimation() {
  gsap.from("#part2 h1 span", {
    y: 100,
    stagger: .2,
    duration: 0.5,
    delay: -0.1,
    opacity: 0
  })
}
topPageAnimation();

function page2Animation() {
  gsap.from("#page2-part1", {
    y: 200,
    stagger: .5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: "#page1",
      scroller: "#main",
      start: "90% 70%",
      end: "90% 70%",
      scrub: 2
    }
  })
  gsap.from("#page2-part2", {
    y: 200,
    stagger: .5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: "#page1",
      scroller: "#main",
      start: "bottom 70%",
      end: "bottom 70%",
      scrub: 2
    }
  })
}
page2Animation()

function page3Animation() {
  gsap.from("#page3", {
    y: 200,
    opacity: 0,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      end: "top 80%",
      scrub: 2
    }
  })
}
page3Animation()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.4,
  spaceBetween: 10,
  freeMode: true,
});

function page5Animation() {
  gsap.from("#page5-part1", {
    y: 100,
    stagger: .5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      trigger: "#page5",
      scroller: "#main",
      start: "top 70%",
      end: "top 70%",
      scrub: 2
    }
  })
  gsap.from("#page5-part2", {
    y: 100,
    stagger: .2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: "#page5",
      scroller: "#main",
      start: "top 65%",
      end: "top 65%",
      scrub: 2
    }
  })
}
page5Animation()


var mainPg6=document.querySelector('#main-page6')

function page6Animation(){
  mainPg6.addEventListener("mousemove", (res) => {
    gsap.to(cursor2, {
      x: res.x,
      y: res.y,
      duration: 0.3
    })
  })
  mainPg6.addEventListener("mouseenter", () => {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1
    })
  })
  mainPg6.addEventListener("mouseleave", () => {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0
    })
  })
}
page6Animation()

function page7Animation() {
  gsap.from("#page7-part1", {
    y: 200,
    stagger: .5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      trigger: "#page7",
      scroller: "#main",
      start: "top 70%",
      end: "top 70%",
      scrub: 2
    }
  })
  gsap.from("#page7-part2", {
    y: 200,
    stagger: .2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: "#page7",
      scroller: "#main",
      start: "top 60%",
      end: "top 60%",
      scrub: 2
    }
  })
}
page7Animation();

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3.8,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: true,
  }
});
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView:1.7,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: true,
  }
});

function page9Animation() {
  gsap.from("#page9-content2", {
    y: 200,
    stagger: .5,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      trigger: "#page9",
      scroller: "#main",
      start: "top 60%",
      end: "top 60%",
      scrub: 2
    }
  })
}
page9Animation();

function page10Animation() {
  gsap.from("#page10-part1", {
    y: -200,
    stagger: .5,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      trigger: "#page10-part1",
      scroller: "#main",
      start: "top 60%",
      end: "top 50%",
      scrub: 2
    }
  })
  gsap.from("#page10-part2", {
    y: -200,
    stagger: .5,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
      // markers: true,
      trigger: "#page10-part2",
      scroller: "#main",
      start: "top 60%",
      end: "top 50%",
      scrub: 2
    }
  })
  // gsap.from("#page10-part3 h1 span", {
  //   y: -300,
  //   stagger: 0.2, // Reduced stagger for quicker animation
  //   duration: 0.5, // Reduced duration for quicker animation
  //   delay: 1,
  //   scrollTrigger: {
  //     markers: true,
  //     trigger: "#page10-part2",
  //     start: "top 70%",
  //     end: "top 60%",
  //     scrub: 1
  //   }
  // });
}
page10Animation()