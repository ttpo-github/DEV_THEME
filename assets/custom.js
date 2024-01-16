/*
var outerHeight = $('.section-header').outerHeight();
var innerSticky = $('.header-main').outerHeight();
var footerTopPosition = $('.custom-footer-class').height();


$(window).scroll(function() {
  if($(window).width() > 992){
    if($(window).scrollTop() > outerHeight ){
      $('.section-header').addClass('sticky').css('padding-bottom',innerSticky);
    } else {
      $('.section-header').removeClass('sticky').css('padding-bottom',0);
    }
  } 

});
*/



$('.menu-grid h4').click(function(){
  $(this).siblings().slideToggle();
  $(this).toggleClass('active');
});

$('.feature-blog__list').slick({
  arrows: true,
  dots: false,
  slidesToShow: 4,
  unslick: true,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    }
  ]
});

// 2 WEEK CUSTOM VARIANT INPUT ----------------------------------------------------------------------------------------------
/*
if ($('variant-radios input[value*="Custom"],variant-radios input[value*="custom"]').prop("checked") == true){
  $('variant-radios input[value*="Custom"],variant-radios input[value*="custom"]').siblings('.custom_variant').show();
}
*/

$('variant-radios input[type="radio"]').change(function(){
  if ($('variant-radios input[value="Custom \\(+2 Week Build Time\\) \\+\\$150"]').is(":checked")) {
    $(this).siblings('.custom_variant').show();
}

                                               

  if ($('variant-radios input[value="Custom Spring Center \\(+1 Week Build Time\\) \\+\\$75"]').is(":checked")){
         $(this).siblings('.custom_spring_center_variant').show();
  }

                                               
  else {
    $('.custom_variant input').val('');
    $(this).siblings('.custom_variant').hide();
  }
});



// 2 WEEK CUSTOM VARIANT INPUT ----------------------------------------------------------------------------------------------

$('.blog-filter').slick({
  arrows: true,
  dots: false,
  slidesToShow: 6,
  unslick: true,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow:1
      }
    }
  ]
});
$('.blog-filter').slick('slickGoTo', document.querySelector('.custom-btn.active')?.dataset.slickIndex);

function getElement(elementName){
  if(elementName == 'chat_widget'){
    return document.querySelector('#chat-widget-container');
  }
  return document.querySelector('#livechat-eye-catcher');
};

function addClass(element){
  element?.classList.add('display-chat-widget')
}

setTimeout(function(){
  let chat_widget = getElement('chat_widget');
  let chat_widget_eye_catcher = getElement();
  if(chat_widget){
    addClass(chat_widget)
  }else{
    //
   setTimeout(function(){
     chat_widget = getElement('chat_widget');
     if(chat_widget){
       addClass(chat_widget)
     }
   },5000)
  }
  //
  if(chat_widget_eye_catcher){
     addClass(chat_widget_eye_catcher);
  }else{
    //
   setTimeout(function(){
     chat_widget_eye_catcher = getElement();
     if(chat_widget_eye_catcher){
       addClass(chat_widget_eye_catcher);
     }
   },5000)
    //
  }
},10000)


document.addEventListener( 'DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById("myModal");    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    const cart_drawer = document.querySelector('#expert_popup');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];    
    // When the user clicks the button, open the modal
    const openExpertPopup = () => {
        modal.style.display = "block";
        document.querySelector('html').scrollTop = 0;
        document.body.classList.add('overflow');
        document.querySelector('.close').classList.remove('overflow');
    }
    const closeExpertPopup = () => {
        modal.style.display = "none";
        removeTrapFocus(document.querySelector('cart-drawer').activeElement )
        document.body.classList.remove('overflow');
    }
    const openExpertPopupFromCartDrawer = () => {
        document.querySelector('cart-drawer').classList.remove('active');
        document.body.classList.remove('overflow-hidden');
        setTimeout(openExpertPopup, 500)
    }

    if(btn){btn.onclick = openExpertPopup};
    // When the user clicks on <span> (x), close the modal
    span.onclick = closeExpertPopup

    cart_drawer.onclick = openExpertPopupFromCartDrawer;
  
    // if(cart_drawer){
    //     cart_drawer.onclick = openExpertPopupFromCartDrawer
    //  }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      const cart_a = document.querySelector('#expert_popup');
      if(event.target == cart_a){
        openExpertPopupFromCartDrawer()
        return;
      }
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('overflow');
      }
    }
 })