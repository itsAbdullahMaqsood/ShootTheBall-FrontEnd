 var swiper = new Swiper(".carousel .mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: true,
    pagination: {
      el: ".carousel .swiper-pagination",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".scroller-container .mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: true,
    autoplay:{
      delay: 1500,
    },
    freeMode:{
    momentumBounce: false,
    momentumVelocityRatio: 0.2,
    momentumRatio: 5.5,
    }
  });

  var swiper = new Swiper(".reviews .mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: true,
    fadeEffect:{
      crossFade: true,
    }
  });

  let glow = document.querySelector(".mouse-glow");
  let dot = document.querySelector(".mouse-dot");
  let body = document.querySelector("body");

  let glowBounds = glow.getBoundingClientRect();
  let dotBounds = dot.getBoundingClientRect();

  const glowcenterX = glowBounds.width/2;
  const glowcenterY = glowBounds.height/2;

  let dotcenterX = dotBounds.width/2;
  let dotcenterY = dotBounds.height/2;

  window.addEventListener("mousemove", (details) => {
    glow.style.left = ((details.clientX)-glowcenterX)+"px";
    glow.style.top = ((details.clientY)-glowcenterY)+"px";

    dot.style.left = ((details.clientX)-dotcenterX)+"px";
    dot.style.top = ((details.clientY)-dotcenterY)+"px";

  })

  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  const button3 = document.querySelector("button");
  const linkitems1 = document.querySelector('.link-items:nth-child(1)');
  const linkitems2 = document.querySelector('.link-items:nth-child(2)');
  const linkitems3 = document.querySelector('.link-items:nth-child(3)');
  const linkitems4 = document.querySelector('.link-items:nth-child(4)');
  const linkitems5 = document.querySelector('.link-items:nth-child(5)');
  const arrow = document.querySelector('.arrow-anchor');
  const cardd1 = document.querySelector('.card1');
  const cardd2 = document.querySelector('.card2');
  const cardd3 = document.querySelector('.card3');
  const ctaButton1 = document.querySelector('.cta-button:nth-child(1)');
  const ctaButton2 = document.querySelector('.cta-button:nth-child(2)');
  const ctaButton3 = document.querySelector('.cta-button:nth-child(3)');
  const socialIcons1 = document.querySelector('.social-icons:nth-child(1)');
  const socialIcons2 = document.querySelector('.social-icons:nth-child(2)');
  const footerlink1 = document.querySelector('.nav1 div:nth-child(1)');
  const footerlink2 = document.querySelector('.nav1 div:nth-child(2)');
  const footerlink3 = document.querySelector('.nav1 div:nth-child(3)');
  const footerlink4 = document.querySelector('.nav1 div:nth-child(4)');
  const footerlink5 = document.querySelector('.nav2 div:nth-child(1)');
  const footerlink6 = document.querySelector('.nav2 div:nth-child(2)');
  const address = document.querySelector('.Address span');
  const direction = document.querySelector('.Directions');
  const copywriteLink1 = document.querySelector('.copywrite-links span:nth-child(1)');
  const copywriteLink2 = document.querySelector('.copywrite-links span:nth-child(2)');
  const copywriteLink3 = document.querySelector('.copywrite-links span:nth-child(3)');
  const copywriteLink4 = document.querySelector('.grid-bottom .Watermark');
  const hoveritems =  [button2, button1, button3, linkitems1, linkitems2, linkitems3, linkitems4, linkitems5, arrow, cardd1, cardd2, cardd3, ctaButton1, ctaButton2, ctaButton3, socialIcons1, socialIcons2, footerlink1, footerlink2, footerlink3, footerlink4, footerlink5, footerlink6, address, direction, copywriteLink1, copywriteLink2, copywriteLink3, copywriteLink4];
  const green = '#85c52c';
  
  hoveritems.forEach(button => {
    button.addEventListener("mouseover", (details) => {
        gsap.to(".mouse-dot", {
            duration:0.3,
            scale: 4,
            backgroundColor: 'transparent'
        });
    });

    button.addEventListener("mouseleave", (details) => {
        gsap.to(".mouse-dot", {
            backgroundColor: green,
            scale: 1
        });
    });

}); 

const logoSVG = document.querySelector(".logo svg");
const navGrid = document.querySelector(".nav-grid");
const linkItems = [linkitems1, linkitems2, linkitems3, linkitems4, linkitems5];

linkItems.forEach(Item => { 
  Item.addEventListener("mouseover", (event) => {

    const SVGstyles = getComputedStyle(logoSVG);
    const fill = SVGstyles.getPropertyValue("fill");
    if(fill === 'rgb(0, 0, 0)'){
      Item.style.color = "black";
    }
    else{
      Item.style.color = "#9fe527";
    }

  })
});

linkItems.forEach(Item => { 
  Item.addEventListener("mouseleave", (event) => {
      Item.style.color = "white"; 
  })
});

gsap.to(CSSRulePlugin.getRule(".background-video::after"), {
  backgroundImage:  'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0, 0, 0, 1)',
  scrollTrigger:{
    trigger: ".background-video::after",
    scroller: "body",
    start: 'top -10%',
    end: "top -90%",
    scrub: 2, 
  }
});

// gsap.to(".background-video video", {
//   transform: 'scale(110%)',
//   scrollTrigger:{
//     trigger: ".background-video",
//     scroller: "body",
//     start: "top -10%",
//     end: "top -60%",
//     scrub: 2
//   }
// });

gsap.to(".logo", {
  margin: '5px 0',
  duration: 5,
  scrollTrigger:{
    start: 'top -10%',
    end: 'top -12%',
    trigger: ".logo",
    scroller: "body",
    scrub: 0.5
  }
});

gsap.to(".nav-grid", {
  backgroundColor: "black",
  duration: 5,
  scrollTrigger:{
    start: 'top -10%',
    end: 'top -12%',
    trigger: ".logo",
    scroller: "body",
    scrub: 0.5
  }
});

gsap.to(".logo svg", {
  fill: "white",
  duration: 1,
  scrollTrigger:{
    start: 'top -10%',
    end: 'top -12%',
    trigger: ".logo",
    scroller: "body",
    scrub: 0.5
  }
});

gsap.to(".rev-img1", {
  left: 50,
  duration: 1,
  scrollTrigger:{
    start: '50% 60%',
    end: '50% 40%',
    trigger: ".reviews-container",
    scroller: "body",
    scrub: 2
  }
});

gsap.to(".rev-img2", {
  right: 50,
  duration: 1,
  scrollTrigger:{
    start: '50% 60%',
    end: '50% 40%',
    trigger: ".reviews-container",
    scroller: "body",
    scrub: 2
  }
});

gsap.to(".cta-h1", {
  top: '0',
  duration: 1,
  scrollTrigger:{
    start: '-53% 60%',
    end: '-53% 58%',
    trigger: ".cta",
    scroller: "body",
    markers: true,
    scrub: 0.5
  }
});


