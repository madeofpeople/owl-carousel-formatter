(function($, Drupal){
  Drupal.behaviors.galleryformatter = {
  attach: function (context, settings ) {
    console.log("Drupal.behaviors.galleryformatter:", settings );
    $( '.owl-carousel-formatter:not(.instantiated)', context ).each( function(){
      $(this).owlCarousel({
        navigation : false,
        singleItem : true,
        lazyLoad : true
      });
    }).addClass( 'instantiated' );
  }
}
}(jQuery,Drupal));
