$(document).ready(function(){
  $('form').submit(function(event){
    var remInput = $("#rem").val();
    $("#rem").val("");
    var counter = parseInt($("#counter").text()) +1;
    $("#counter").text(counter);
    var addText = '<li id="' +counter + '">'+remInput+'</li>';
    $(".item").prepend(addText);
    event.preventDefault();
    $("#"+counter).click(function(event){
      event.preventDefault();
     var doneList = $(this).text();
    //  var doneList = $(this).css("text-decoration", "line-through");
     this.remove();
     $(".item").append("<li><strike>"+doneList+"</strike></li>");
    });
  });
});
