// motion-jq.js
// لازم jQuery يكون متحمل قبل الملف ده

(function($){
  $(document).ready(function(){

    $('[anim]').each(function(){
      var $el = $(this);
      var anim = $el.attr('anim');

      switch(anim){
        case 'fade-jq':
          $el.hide().fadeIn(600);
          break;
        case 'fade-out-jq':
          $el.fadeOut(600);
          break;
        case 'slide-up-jq':
          $el.slideUp(600);
          break;
        case 'slide-down-jq':
          $el.slideDown(600);
          break;
        case 'slide-toggle-jq':
          $el.slideToggle(600);
          break;
        case 'fade-toggle-jq':
          $el.fadeToggle(600);
          break;
        case 'bounce-jq':
          $el.animate({ top: "-=20px" }, 150)
             .animate({ top: "+=20px" }, 150);
          break;
        case 'shake-jq':
          $el.animate({ left: "-=10px" }, 50)
             .animate({ left: "+=10px" }, 50)
             .animate({ left: "-=10px" }, 50)
             .animate({ left: "+=10px" }, 50);
          break;
        case 'grow-jq':
          $el.animate({ width: "110%", height: "110%" }, 300)
             .animate({ width: "100%", height: "100%" }, 300);
          break;
        case 'shrink-jq':
          $el.animate({ width: "90%", height: "90%" }, 300)
             .animate({ width: "100%", height: "100%" }, 300);
          break;
        case 'spin-jq':
          $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(360deg)' });
          break;
        case 'flip-h-jq':
          $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotateY(180deg)' });
          break;
        case 'flip-v-jq':
          $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotateX(180deg)' });
          break;
        case 'pulse-jq':
          $el.animate({ opacity: 0.5 }, 300)
             .animate({ opacity: 1 }, 300);
          break;
        case 'wiggle-jq':
          $el.animate({ rotate: '10deg' }, 100)
             .animate({ rotate: '-10deg' }, 100)
             .animate({ rotate: '0deg' }, 100);
          break;
        case 'bounce-fade-jq':
          $el.fadeOut(300).fadeIn(300).animate({ top: "-=10px" }).animate({ top: "+=10px" });
          break;
        case 'slide-left-jq':
          $el.animate({ left: "-=50px", opacity: 0 }, 400).animate({ left: "+=50px", opacity: 1 }, 400);
          break;
        case 'slide-right-jq':
          $el.animate({ left: "+=50px", opacity: 0 }, 400).animate({ left: "-=50px", opacity: 1 }, 400);
          break;
        case 'drop-jq':
          $el.hide().slideDown(600);
          break;
        case 'lift-jq':
          $el.animate({ top: "-=50px", opacity: 0 }, 400).animate({ top: "+=50px", opacity: 1 }, 400);
          break;
        case 'rotate-left-jq':
          $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(-45deg)' });
          break;
        case 'rotate-right-jq':
          $el.css({ transition: 'transform 0.6s' }).css({ transform: 'rotate(45deg)' });
          break;
        case 'skew-jq':
          $el.css({ transition: 'transform 0.6s' }).css({ transform: 'skewX(20deg) skewY(10deg)' });
          break;
        case 'blink-jq':
          setInterval(function(){
            $el.fadeOut(300).fadeIn(300);
          }, 1000);
          break;
        case 'expand-width-jq':
          $el.animate({ width: '+=50px' }, 300).animate({ width: '-=50px' }, 300);
          break;
        case 'contract-width-jq':
          $el.animate({ width: '-=50px' }, 300).animate({ width: '+=50px' }, 300);
          break;
        case 'swing-jq':
          $el.animate({ rotate: '15deg' }, 200).animate({ rotate: '-15deg' }, 200).animate({ rotate: '0deg' }, 200);
          break;
        case 'pop-up-jq':
          $el.hide().fadeIn(400).animate({ top: "-=20px" }, 200).animate({ top: "+=20px" }, 200);
          break;
        case 'drop-fade-jq':
          $el.hide().fadeIn(400).animate({ top: "+=20px" }, 200).animate({ top: "-=20px" }, 200);
          break;
        case 'glow-jq':
          $el.css({ boxShadow: '0 0 20px rgba(255,255,0,0.8)' }).animate({ opacity: 0.8 }, 600).animate({ opacity: 1 }, 600);
          break;

        default:
          // لو مش موجود الحركة
          console.warn('anim-jq غير موجود: ' + anim);
      }
    });

  });
})(jQuery);
