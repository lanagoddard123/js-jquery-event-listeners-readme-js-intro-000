function getIt(){
  $('p').click(function(){
    alert("Hey!")
});

}


function frameIt(){
  $("img").on("load",(e)=>{
    var img1=document.querySelector('img');
     img1.className="tasty"
  })
}

function pressIt(){
  $('form > input').keydown(function(e){
    if(e.which == 71){
      alert("You have pressed G");
    }
  });
}

$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }

$(document).ready(function(){


// call functions here

});
