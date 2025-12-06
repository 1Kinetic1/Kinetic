// motion-jq.js
// لازم jQuery يكون محمل قبل الملف ده

(function($){
  $(document).ready(function(){

    // ======== 30 JQUERY ANIMATIONS ========

    function runAnim($el, animFn) {
      if(!$el.data('anim-done')) {
        animFn($el);
        $el.data('anim-done', true);
      }
    }

    // 1 — Fade In
    $('.fade-jq').each(function(){ runAnim($(this), $el => $el.hide().fadeIn(600)); });

    // 2 — Fade Out
    $('.fade-out-jq').each(function(){ runAnim($(this), $el => $el.fadeOut(600)); });

    // 3 — Slide Up
    $('.slide-up-jq').each(function(){ runAnim($(this), $el => $el.slideUp(600)); });

    // 4 — Slide Down
    $('.slide-down-jq').each(function(){ runAnim($(this), $el => $el.slideDown(600)); });

    // 5 — Slide Toggle
    $('.slide-toggle-jq').each(function(){ runAnim($(this), $el => $el.slideToggle(600)); });

    // 6 — Fade Toggle
    $('.fade-toggle-jq').each(function(){ runAnim($(this), $el => $el.fadeToggle(600)); });

    // 7 — Bounce (vertical)
    $('.bounce-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ top: "-=20px" }, 150).animate({ top: "+=20px" }, 150);
    }); });

    // 8 — Shake (horizontal)
    $('.shake-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ left: "-=10px" }, 50)
         .animate({ left: "+=10px" }, 50)
         .animate({ left: "-=10px" }, 50)
         .animate({ left: "+=10px" }, 50);
    }); });

    // 9 — Grow
    $('.grow-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ width: "110%", height: "110%" }, 300)
         .animate({ width: "100%", height: "100%" }, 300);
    }); });

    // 10 — Shrink
    $('.shrink-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ width: "90%", height: "90%" }, 300)
         .animate({ width: "100%", height: "100%" }, 300);
    }); });

    // 11 — Spin
    $('.spin-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(360deg)' });
    }); });

    // 12 — Flip Horizontal
    $('.flip-h-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotateY(180deg)' });
    }); });

    // 13 — Flip Vertical
    $('.flip-v-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotateX(180deg)' });
    }); });

    // 14 — Pulse
    $('.pulse-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ opacity: 0.5 }, 300).animate({ opacity: 1 }, 300);
    }); });

    // 15 — Wiggle
    $('.wiggle-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ rotate: '10deg' }, 100)
         .animate({ rotate: '-10deg' }, 100)
         .animate({ rotate: '0deg' }, 100);
    }); });

    // 16 — Bounce Fade
    $('.bounce-fade-jq').each(function(){ runAnim($(this), $el => {
      $el.fadeOut(300).fadeIn(300).animate({ top: "-=10px" }).animate({ top: "+=10px" });
    }); });

    // 17 — Slide Left
    $('.slide-left-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ left: "-=50px", opacity: 0 }, 400).animate({ left: "+=50px", opacity: 1 }, 400);
    }); });

    // 18 — Slide Right
    $('.slide-right-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ left: "+=50px", opacity: 0 }, 400).animate({ left: "-=50px", opacity: 1 }, 400);
    }); });

    // 19 — Drop
    $('.drop-jq').each(function(){ runAnim($(this), $el => $el.hide().slideDown(600)); });

    // 20 — Lift
    $('.lift-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ top: "-=50px", opacity: 0 }, 400).animate({ top: "+=50px", opacity: 1 }, 400);
    }); });

    // 21 — Rotate Left
    $('.rotate-left-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(-45deg)' });
    }); });

    // 22 — Rotate Right
    $('.rotate-right-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(45deg)' });
    }); });

    // 23 — Skew
    $('.skew-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ transition: 'transform 0.6s' }).css({ transform: 'skewX(20deg) skewY(10deg)' });
    }); });

    // 24 — Blink
    $('.blink-jq').each(function(){ runAnim($(this), $el => {
      setInterval(function(){ $el.fadeOut(300).fadeIn(300); }, 1000);
    }); });

    // 25 — Expand Width
    $('.expand-width-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ width: '+=50px' }, 300).animate({ width: '-=50px' }, 300);
    }); });

    // 26 — Contract Width
    $('.contract-width-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ width: '-=50px' }, 300).animate({ width: '+=50px' }, 300);
    }); });

    // 27 — Swing
    $('.swing-jq').each(function(){ runAnim($(this), $el => {
      $el.animate({ rotate: '15deg' }, 200).animate({ rotate: '-15deg' }, 200).animate({ rotate: '0deg' }, 200);
    }); });

    // 28 — Pop Up
    $('.pop-up-jq').each(function(){ runAnim($(this), $el => {
      $el.hide().fadeIn(400).animate({ top: "-=20px" }, 200).animate({ top: "+=20px" }, 200);
    }); });

    // 29 — Drop Fade
    $('.drop-fade-jq').each(function(){ runAnim($(this), $el => {
      $el.hide().fadeIn(400).animate({ top: "+=20px" }, 200).animate({ top: "-=20px" }, 200);
    }); });

    // 30 — Glow
    $('.glow-jq').each(function(){ runAnim($(this), $el => {
      $el.css({ boxShadow: '0 0 20px rgba(255,255,0,0.8)' })
         .animate({ opacity: 0.8 }, 600)
         .animate({ opacity: 1 }, 600);
    }); });

  });
})(jQuery);
