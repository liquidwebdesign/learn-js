var i = 1;
messages = ['Stop it!', 'Seriously!', 'I mean it!', 'Had enough.'];

$("#box").click(function(){

  i++;
  $(this).css('box-shadow', "0 0 " + i + "px red");
  $(this).html(messages[Math.floor(Math.random() * messages.length)]);

});