var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i) == null ? false : true;
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPod/i) == null ? false : true;
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
	}
};


$(function () {

    /*----------------------- Common Func ---------------------*/
    languageBox();
    pageBg();
    //slick
    $('.news-list').slick({
        speed:300
    });
    /*----------------------- //Common Func ---------------------*/

    // Mobile & PC 분기
	if(isMobile.any()){
        megaportWeb.mobile();
        popupSystem.mobile();
        masonryLayout_mobile();
        //Load MasonryLayout_mobile
        $(window).load(function(){
            masonryLayout_mobile();
        });
	} else {
        megaportWeb.pc();
		popupSystem.pc();
		masonryLayout();
        //Load MasonryLayout_PC
        $(window).load(function(){
            masonryLayout();
        });
    }
});


var megaportWeb = {

    pc: function(){

        //Func**
        gnb();
        newsHover();
        detailBox();
        gameTile();

        function gnb(){
            //GNB
            var gnb = $("#header .sgp-gnb");
            var gnbOffset = gnb.offset().top;
            var container = $('#container');
            if ( gnbOffset == 0 ) {
                gnb.css('position', 'fixed');
                container.css('padding-top', '60px');
                $(window).scroll(function(){
                    $(window).scrollTop() > 1 ? gnb.addClass("fix") : gnb.removeClass("fix");
                });
            } else {
                $(window).scroll(function(){
                    $(window).scrollTop() > 170 ? gnb.addClass("fix") : gnb.removeClass("fix");
                    $(window).scrollTop() > 170 ? container.addClass("fix") : container.removeClass("fix");
                });
            }
        }

        function newsHover(){
            //News
            $('.slick-current li').eq(0).addClass("on");
            $('.news-list ul').mouseenter(function(){
                $('.news-list li').removeClass("on");
            });
            $('.news-list ul').mouseleave(function(){
                $(this).find("li").eq(0).addClass("on");
            });
        }

        function detailBox (){
            var detailOptions = $(".detail-options");
            $(window).scroll(function(){
                if($(window).scrollTop() > 230){
                    detailOptions.addClass("fix");
                    detailOptions.find(".game-tit").fadeIn();
                } else {
                    detailOptions.find(".game-tit").hide();
                    detailOptions.removeClass("fix");
                }
            });
        }

        function gameTile(){
            var overWrap = $('.over-wrap');
            var pType = $('.p-type');
            var dType = $('.d-type');
            var desc = $('.desc');
            var moreBtn = $('.g-more');
            var descAlign = desc.height() / 2;
        
            $('.col a').hover(function(){
                $('.over-wrap', this).stop().animate({'opacity':1}, 200 );
                overWrapMotion();
            }, function(){
                desc.css({'opacity':0}, 300);
                moreBtn.css({'opacity':0}, 300);
                pType.css({'opacity':0}, 300);
                $('.over-wrap', this).stop().animate({'opacity':0}, 200 );
                
            });
            function overWrapMotion() {
                desc.css({'margin-top' : -descAlign});
                TweenMax.fromTo(desc, .3, {x: 0, y: 150}, {x:0, y:-20, opacity:1, delay:0.1, ease:Power4.easeOut});
                TweenMax.fromTo(moreBtn, .3, {x: 0, y:150}, {x:0, y:14, opacity:1, delay:0.15, ease:Power4.easeOut});
                TweenMax.fromTo(pType, .2, {x: -100, y: 0}, {x:0, y:0, opacity:1, delay:0});
                TweenMax.fromTo(dType, .2, {x: 100, y: 0}, {x:0, y:0, opacity:1, delay:0});
            }
        }

        //Share to SNS
        $('.utils .share a').on('click', function(e){
            e.preventDefault();
            $('.layer-share').slideToggle(200);
        });

        //PC - bx slider
        $('.banners').bxSlider({
            mode: 'fade',
            speed: 700,
            auto : true,
            autoHover: true
        });
    },

    mobile: function(){
        //Mobile - bx slider
        $('.banners').bxSlider({
            speed: 700,
            auto : true,
            autoHover: true,
            controls : false
        });
    }
};


var popupSystem = {
    
    pc: function(){

        popView();
        popHide();

        //popup - view
        function popView() {
            $('.news-list li a').on('click', function(){
                var popupClass = $(this).attr('data-popup');
                $("#wrapper").append('<div class="dimmed"></div>');
                $('.' + popupClass).show();
                $('.dimmed').height( $('body').height() ).show();
            });
        }

        //popup - hide
        function popHide() {
            $('.pop-close').on('click', function(e){
                e.preventDefault();
                $(this).parent().hide();
                $('.dimmed').remove();
            });
        }
    },

    mobile: function(){
        popView();
        popHide();

        //popup - position
		function wrapWindowByDimmed(obj){
            var deviceHeight = $(window).height();
            obj.find('.cont-area').css('height', deviceHeight - 190 + 'px');
			var popLeft = ($(window).width() - $(obj).outerWidth()) / 2 ;
			var popTop = (($(window).height() - $(obj).outerHeight())  / 2) + 15+'px';
			$(obj).css({'left':popLeft,'top':popTop, 'position':'fixed'});
			$(obj).fadeIn(200);
		}

		//popup - background scroll
		function dontAllowScroll() {
			$('html, body').css({'overflow':'hidden'});
		}
		function allowScroll() {
			$('html, body').css({'overflow':'auto'});
		}

		//popup - view
		function popView() {
            $('[data-popup]').on('click', function(){
                $("#wrapper").append('<div class="dimmed"></div>');
                $('.dimmed').height($('body').height()).show();
                var popupClass = $(this).attr('data-popup');
                console.log(popupClass);
                var obj = $('.'+ popupClass);
                dontAllowScroll();
                wrapWindowByDimmed(obj);
                obj.show();
            });
        }
        
		//popup - hide
        function popHide() {
            $('.pop-close').on('click', function(e){
                e.preventDefault();
                $(this).parent().hide();
                $('.dimmed').remove();
                allowScroll();
            });
            
        }
    }
};

function languageBox(){
    //Language
    $('.language, .btn-select').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('arrow').siblings('.options').slideToggle(80);
    });
    $('.options li').on('click', function(){
        var txt = $(this).find("span").text();
        $(".btn-select .selected").text(txt);
        $(this).parents('.language').find('.btn-select').removeClass('arrow');
        $(this).parents('.options').slideUp('fast');
        $('.options li').addClass('selected').not(this).removeClass('selected');
    });
}

//Banner Pager BG
function pageBg(){
	var pageBgWidth = 0;
	var pageBtn = $('.bx-pager-item').length;
	pageBgWidth = (23 * pageBtn);
	$('.pagerBg').css({'width': pageBgWidth});
}

//Masonry Layout - PC
function masonryLayout(){
	$('.col').css({top:'0px', left:'0px'});
	var qsRegex;
	var $grid = $('.grid').isotope({
		itemSelector: '.item',
		stamp: '.stamp',
		masonry: {
			horizontalOrder : false,
			gutter : 7
		}
	});
}

//Masonry Layout - MOBILE
function masonryLayout_mobile(){
    $('.col').css({top:'0px', left:'0px'});
    var qsRegex;
    var $grid = $('.grid').isotope({
        itemSelector: '.item',
        stamp: '.stamp',
        masonry: {
            horizontalOrder : false
        }
    });
}

