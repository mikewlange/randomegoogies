var navigation = $('#nav-main').okayNav({
  swipe_enabled: true,
});

var select = function(s) {
    return document.querySelector(s);
  },
    logo = select('#logo'),
    copy = select('.hero__copy'),
    bgMtn = select('#bgMtn'),
    fgMtnPeak = select('#fgMtnPeak'),
    close = select('.btn-back'),
    morph = select('#morph'),
    mobile = select('#mobile')


const lg = new TimelineMax()
const hero = new TimelineMax({paused:true})

TweenMax.set(logo, {
  rotation:360,
  autoAlpha:0,
  scale:0
})

lg.to(logo, 1, {
  rotation:0,
  autoAlpha:1,
  scale:1,
  ease:Bounce.easeOut,
  transformOrigin:"0% 0%"
})

TweenMax.set(morph, {
  autoAlpha:0,
  scale:0
})

TweenMax.set(close, {
  autoAlpha:0,
  yPercent: 153.6
})

hero
.to(fgMtnPeak, 0.5, {
  xPercent: 23.6
},'+=.1')
// .to(copy, 0.2, {
//   className:'-=animated',
//   autoAlpha:0,
//   css:{
//     top:'-1000px'
//   }
// })
// .to(bgMtn, .5, {
  xPercent: -23.6
},'-=.65')
.to(morph, 0.5, {
  autoAlpha:1,
  scale:1,
  transformOrigin:"center bottom"
}, "-=1")
// .to(mobile, .5, {
//   autoAlpha:1,
//   morphSVG:"#mobile"
// }, "+=.5")
// .to(mobile, .5, {
//   morphSVG:"#tablet"
// }, "+=.5")
// .to(mobile, .5, {
//   morphSVG:"#desktop"
// }, "+=.5")
.to(close, .3, {
  autoAlpha:1,
  yPercent: 0
})

document.querySelector(".btn-default").addEventListener("click", function(){ hero.play(); });
document.querySelector(".btn-back").addEventListener("click", function(){ hero.reverse(); });