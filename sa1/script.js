$(document).ready(function(){
  $("#button").click(function(){
    var number = $("input").val();
    $("#result").empty();
    for(i=1; i<=number; i++){
      if((i%3===0&&i%5===0)) {
        $("#result").append('<li>PingPong</li>');
      }
      else if(i%3===0) {
        $("#result").append('<li>Ping</li>');
      }
      else if(i%5===0) {
        $("#result").append('<li>Pong</li>');
      }
      else {
          $("#result").append('<li>'+i+'</li>');
      }
    }
  });
});
