;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(){
			if ( $('#fh5co-navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}
			
		});
	};


	// Animate Projects
	
	var animateBox = function() {
		if ( $('.animate-box').length > 0 ) {
			$('.animate-box').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					$(this.element).addClass('fadeIn animated');
						
				}
			} , { offset: '80%' } );
		}
	};


	// Animate Leadership
	var animateTeam = function() {
		if ( $('.fh5co-features').length > 0 ) {	
			$('.fh5co-features .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					console.log('yaya');
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var teamWayPoint = function() {
		if ( $('.fh5co-features').length > 0 ) {
			$('.fh5co-features').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(animateTeam, 200);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};


	// Animate Feature
	var animateFeatureIcons = function() {
		if ( $('.fh5co-services').length > 0 ) {	
			$('.fh5co-services .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var featureIconsWayPoint = function() {
		if ( $('.fh5co-services').length > 0 ) {
			$('.fh5co-services').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					
					
					

					setTimeout(animateFeatureIcons, 200);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};

/*
    var setupGalery = function() {
        var galeryOptions = {
            rowHeight:80,
//            lastRow:'hide',
//            margins:5,
            captions:false,
            border: 0,
            cssAnimation:true,
            rowCount:5
        };

        var galery = $('.galery');
        if( galery.length && (typeof bvka_images != 'undefined') && bvka_images.length){
            let counter = bvka_images.length;
            while (counter > 0) {
                // Pick a random index
                let index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                let temp = bvka_images[index];
                bvka_images[index] = bvka_images[counter];
                bvka_images[counter] = temp;

                var img_dir = 'http://www.boite-creative.fr/img/p/' + temp.id.toString().split('').join('/') + '/';

                // create image item
                // <a href="path/to/myimage1_original.jpg">
                //   <img alt="Title 1" src="path/to/myimage1_thumbnail.jpg"/>
                // </a>
                var a = document.createElement('a');
                a.setAttribute('class', 'galery-item');
                a.setAttribute('href',  img_dir + temp.id + '.jpg');
                a.setAttribute('title',  temp.title);
                var img = document.createElement('img');
                img.setAttribute('alt', temp.title);
                img.setAttribute('src', 'images/t/t_' + temp.id + '.jpg');
                a.appendChild(img);
                $(a).colorbox({
                    rel: 'umbum',
                    title: temp.title + '<a href="http://www.boite-creative.fr/fr/' + temp.link + '" class="btn btn-success btn-sm">Construire!</a>',
                        
                    maxWidth : '95%',
                    maxHeight : '95%',
                    opacity : 0.8,
                    transition : 'elastic',
                    current : '{current}&nbsp;/&nbsp;{total}'
                });
                $.each(galery, function(k,v){ v.appendChild(a) });
            }
            galery.justifiedGallery(galeryOptions);
        }
    };
*/

    $.fn.scrollView = function () {
      return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
      });
    };

	
	

	

	
	$(function(){
		
		burgerMenu();
//		setupGalery();
		animateBox();
		teamWayPoint();
		featureIconsWayPoint();
		
		$("#events-ticker ul").webTicker({
    			height:'26px'
		});    
	});


}());

function triggerInfo(id, force){
        var a = $('.fh5co-portfolio-info');
        var info = '#'+id+'-info';
        a.each(function(){
            var t = $(this);
            if( t.is(info) ) {
                if(force)
                    t.removeClass('zero-height');
                else
                    t.toggleClass('zero-height');
            }else{
                t.addClass('zero-height');
            }
        });
        if(!isElementInViewport($('#'+id+'-info'))){
            $('#'+id+'-item').scrollView();
        }
    }

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    if(!el) return false;
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top < window.innerHeight;
/*
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //or $(window).height()
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) //or $(window).width()
    );
*/
}

function scrollToId(sel){
    $(sel).scrollView();
}