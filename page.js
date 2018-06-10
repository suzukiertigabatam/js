$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

$(function(){
    $('.color-options').on('click', 'a', function() {
        var variant = $(this).data('variant');
        var name = $(this).data('name');
        $('.color-options a.active').removeClass('active');
        $(this).addClass('active');

        $('.color-preview img.active').removeClass('active');
        $('#variant_'+variant).addClass('active');
        $('.variant-name').html(name);
    });
    $('.section-nav').on('click', 'a', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 45
        }, 500);
    })
});

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "50px";
    }
}

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 5000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slider");
        }
    });
  });
})

$(function(){
    $('body').on('click', '.navbar-toggler', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.navbar-menu').toggleClass('open');
        $('.navbar-menu').slideToggle();
    });

    $( document ).ajaxStart(function() {
        $( "#loading" ).show();
    });
    $( document ).ajaxStop(function() {
        $( "#loading" ).hide();
    });
});

function openProduct (type = 'automobile') {
    $('#productMenu').html('');
    $('#productMenu').fadeIn();
    $('#productMenu').load(base_url+'product/menu/'+type);
}
