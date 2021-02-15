$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능) true 주면 페이드인 페이드아웃
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint:1025,
        settings: {
            arrows: false
        }
    }]
})

$('.playstop').on('click', function(){
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide_group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    }
    else {
        $('.slide_group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})


$('#header .open').on('click', function(){
     $(this).toggleClass('on')
     $(this).next().toggleClass('on')
     
})

var deviceSize = 1024;
function scrollOX(status) {
    $('html').css ({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
}

// 함수선언
var ww;
function init(){
    ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.depth1 > li').removeClass('on')
        $('html').scrollTop(0)
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .nav').removeClass('on')
        $('#header .open').removeClass('on')
        $('html').scrollTop(0)
    }
}

// 함수호출
init()

$(window).on('resize', function(){
    init()
})

$('.depth1 > li').on('click', function(e){
   if ( $('html').hasClass('mobile')) {
     e.preventDefault()
    $(this).toggleClass('on').siblings().removeClass('on')
    }
})

$('.depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc')) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc')) {
            $(this).removeClass('on')
        }
    }
)
 
$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct >= 50 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct < 50 && $('#header').hasClass('on')){
        $('#header').removeClass('on')
    }
})




//  var elDepth1Li = document.querySelectorAll('.nav .depth1 > li')
//  if (ww > 1024) {
//      for (var i = 0; i < elDepth1Li.length; i++) {
//          elDepth1Li[i].addEventListener('mouseover', function(){
//              this.classList.add('on')
//          })
//          elDepth1Li[i].addEventListener('mouseout', function(){
//             this.classList.remove('on')
//          })
//      }
//  } else {
//      for (var i = 0; i < elDepth1Li.length; i++) {
//          elDepth1Li[i].addEventListener('click', function(){
//              if (!this.classList.contains('on') ) {
//                  this.classList.add('on') 
                 
//              } else {
//                 this.classList.remove('on')
//              }
//          })
//      }
//  }








// var elPlaystop = document.querySelector('.playstop')
// var elbutton = document.querySelector('.playstop i')
// elPlaystop.addEventListener('click', function(){
//     if (elbutton.classList.contains('fa-pause')) {
//         $('.slide_group').slick('slickPause')
//         elbutton.classList.remove('fa-pause')
//         elbutton.classList.add('fa-play')
//     }
//     else { 
//         $('.slide_group').slick('slickPlay')
//         elbutton.classList.remove('fa-play')
//         elbutton.classList.add('fa-pause')
//      }
// })

