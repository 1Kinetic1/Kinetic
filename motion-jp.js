
(function($){
  $.fn.animateClass = function(animName, duration) {
    duration = duration || 600; // ms
    return this.each(function() {
      var $el = $(this);
      $el.addClass(animName);
      setTimeout(function(){
        $el.removeClass(animName);
      }, duration);
    });
  };

  // --------------- 30 JQUERY ANIMATIONS ----------------

  $(document).ready(function(){

    // 1 — Fade In
    $('.fade-jq').hide().fadeIn(600);

    // 2 — Fade Out
    $('.fade-out-jq').fadeOut(600);

    // 3 — Slide Up
    $('.slide-up-jq').slideUp(600);

    // 4 — Slide Down
    $('.slide-down-jq').slideDown(600);

    // 5 — Slide Toggle
    $('.slide-toggle-jq').slideToggle(600);

    // 6 — Fade Toggle
    $('.fade-toggle-jq').fadeToggle(600);

    // 7 — Bounce (vertical)
    $('.bounce-jq').animate({ top: "-=20px" }, 150)
                    .animate({ top: "+=20px" }, 150);

    // 8 — Shake (horizontal)
    $('.shake-jq').animate({ left: "-=10px" }, 50)
                   .animate({ left: "+=10px" }, 50)
                   .animate({ left: "-=10px" }, 50)
                   .animate({ left: "+=10px" }, 50);

    // 9 — Grow
    $('.grow-jq').animate({ width: "110%", height: "110%" }, 300)
                 .animate({ width: "100%", height: "100%" }, 300);

    // 10 — Shrink
    $('.shrink-jq').animate({ width: "90%", height: "90%" }, 300)
                   .animate({ width: "100%", height: "100%" }, 300);

    // 11 — Spin
    $('.spin-jq').css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(360deg)' });

    // 12 — Flip Horizontal
    $('.flip-h-jq').css({ transition: 'transform 0.6s' }).css({ transform: 'rotateY(180deg)' });

    // 13 — Flip Vertical
    $('.flip-v-jq').css({ transition: 'transform 0.6s' }).css({ transform: 'rotateX(180deg)' });

    // 14 — Pulse
    $('.pulse-jq').animate({ opacity: 0.5 }, 300)
                   .animate({ opacity: 1 }, 300);

    // 15 — Wiggle
    $('.wiggle-jq').animate({ rotate: '10deg' }, 100)
                    .animate({ rotate: '-10deg' }, 100)
                    .animate({ rotate: '0deg' }, 100);

    // 16 — Bounce Fade
    $('.bounce-fade-jq').fadeOut(300).fadeIn(300).animate({ top: "-=10px" }).animate({ top: "+=10px" });

    // 17 — Slide Left
    $('.slide-left-jq').animate({ left: "-=50px", opacity: 0 }, 400).animate({ left: "+=50px", opacity: 1 }, 400);

    // 18 — Slide Right
    $('.slide-right-jq').animate({ left: "+=50px", opacity: 0 }, 400).animate({ left: "-=50px", opacity: 1 }, 400);

    // 19 — Drop
    $('.drop-jq').hide().slideDown(600);

    // 20 — Lift
    $('.lift-jq').animate({ top: "-=50px", opacity: 0 }, 400).animate({ top: "+=50px", opacity: 1 }, 400);

    // 21 — Rotate Left
    $('.rotate-left-jq').css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(-45deg)' });

    // 22 — Rotate Right
    $('.rotate-right-jq').css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(45deg)' });

    // 23 — Skew
    $('.skew-jq').css({ transition: 'transform 0.6s' }).css({ transform: 'skewX(20deg) skewY(10deg)' });

    // 24 — Blink
    setInterval(function(){
      $('.blink-jq').fadeOut(300).fadeIn(300);
    }, 1000);

    // 25 — Expand Width
    $('.expand-width-jq').animate({ width: '+=50px' }, 300).animate({ width: '-=50px' }, 300);

    // 26 — Contract Width
    $('.contract-width-jq').animate({ width: '-=50px' }, 300).animate({ width: '+=50px' }, 300);

    // 27 — Swing
    $('.swing-jq').animate({ rotate: '15deg' }, 200).animate({ rotate: '-15deg' }, 200).animate({ rotate: '0deg' }, 200);

    // 28 — Pop Up
    $('.pop-up-jq').hide().fadeIn(400).animate({ top: "-=20px" }, 200).animate({ top: "+=20px" }, 200);

    // 29 — Drop Fade
    $('.drop-fade-jq').hide().fadeIn(400).animate({ top: "+=20px" }, 200).animate({ top: "-=20px" }, 200);

    // 30 — Glow
    $('.glow-jq').css({ boxShadow: '0 0 20px rgba(255,255,0,0.8)' }).animate({ opacity: 0.8 }, 600).animate({ opacity: 1 }, 600);

  });
})(jQuery);
