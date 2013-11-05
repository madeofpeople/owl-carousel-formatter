(function($){
  Drupal.behaviors.owl_carousel_formatter = {
  attach: function( context, settings ) {
    // owl carrousel uses a lot of "===" and seems to break if pagination is set to 1 or 'true' instead of a real boolean.
    // so we have to sanitize it, this kind of pains me, of course right now any value that would need to be a numeric one or zero would sort of break.
    for( var key in settings.owl_carousel_formatter ){
      var val = settings.owl_carousel_formatter[key];
      if( settings.owl_carousel_formatter === null ){
        settings.owl_carousel_formatter[key] = null;
        delete settings.owl_carousel_formatter[key];
      }else if(  === 1 || settings.owl_carousel_formatter[key] === 0 ){
        settings.owl_carousel_formatter[key] = Boolean( val );
      }
    };
    var carousel = $( '.owl-carousel-formatter:not(.instantiated)', context );
    carousel.each( function(){
      $(this).owlCarousel( settings.owl_carousel_formatter );
      $(this).addClass( 'instantiated' );
    })
  }
}
}(jQuery));
