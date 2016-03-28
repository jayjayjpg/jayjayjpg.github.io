(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var titles = ['Anita Borg Celebration Munich 2016','Schedule','Team','Pictures',
      'Video','Materials','Venue','Contact'];
    var currentTitle = $('title').text();
    for (var i = 1; i < titles.length + 1; i++){
      console.log(titles[i]);
      if (titles[i-1] === currentTitle){
        $('header nav ul li').removeClass('active');
        $('header nav ul li:nth-child('+i+')').addClass('active');
      }
      
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space