(function($){
  Drupal.behaviors.galleryformatter = {
  attach: function (context) {
    console.log("Drupal.behaviors.galleryformatter:", context );
    $( '.owl-carousel-formatter:not(.instantiated)', context ).each( function(){
      $(this).owlCarousel({
        navigation : false,
        singleItem : true,
        lazyLoad : true
      });
    }).addClass( 'instantiated' );
  }
}
}(jQuery));
