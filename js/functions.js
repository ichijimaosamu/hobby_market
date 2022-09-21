$(function() {
	//タブ切り替え
  $(".tab a").click(function() {
    $(this).parent().addClass("active").siblings(".active").removeClass("active");
    var tabContents = $(this).attr("href");
    $(tabContents).addClass("active").siblings(".active").removeClass("active");
    return false;
  });
	
	if (window.matchMedia( '(max-width:768px)' ).matches) {
		$('#main_bottom').on('click', '.bottom_menu_ttl',(function(){
			$(this).toggleClass('active');
			$(this).next('ul').slideToggle();
		}));
		$('#left_navi').on('click', '.side_ttl',(function(){
			$(this).toggleClass('active');
			$(this).next('.side_box_in').slideToggle();
		}));
		$('#header').on('click', '.btn_menu',(function(){
			$('#header').addClass('active');
			$('.sp_hbox').addClass('active');
			$('.close').addClass('active');
			$('#left_navi').addClass('active');
		}));
		$('#header').on('click', '.btn_info',(function(){
			$('#header').addClass('active');
			$('.sp_hbox').addClass('active');
			$('.close').addClass('active');
			$('#main_bottom').addClass('active');
		}));
		$('#header').on('click', '.close',(function(){
			$('#header').removeClass('active');
			$('.sp_hbox').removeClass('active');
			$(this).removeClass('active');
			$('#left_navi').removeClass('active');
			$('#main_bottom').removeClass('active');
		}));
		
	
	}
	
	
	
});


