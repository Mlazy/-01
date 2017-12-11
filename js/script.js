// var swiper = new Swiper('.swiper-container', {
//      pagination: '.swiper-pagination',
//      direction: 'vertical',
//      slidesPerView: 1,
//      paginationClickable: true,
//      spaceBetween: 30,
//      mousewheelControl: true
//  });

var swiper = new Swiper('.swiper-container', {
   direction: 'vertical',
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   on:{
      init: function(){
         swiperAnimateCache(this); //隐藏动画元素
         swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function(){
         swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      }
   }
});