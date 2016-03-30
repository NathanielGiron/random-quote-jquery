$(document).ready(function() {
  //code here

  var quotes = [
  	"I have a very bad feeling about this.",
  	"Do. Or do not. There is no try.",
  	"Don't get technical with me.",
  	"Somebody has to save our skins.",
  	"We're doomed.",
  	"It's a trap!",
  	"No. I am your Father.",
  	"Aren't you a little short for a stormtrooper?",
  	"Let the Wookiee win.",
  	"Remember... the Force will be with you, always.",
  ];

  $('button').click(function(){
  	var x = Math.floor((Math.random() * 9));
    $('#quote-box').html(quotes[x]);
  });
});
