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
$(document).ready(function(){

function pressIt(){
  $('#typing').on("keydown",(e)=>{
    var img1=document.querySelector('img')
    img1.className="tasty"
  })
}

// call functions here

});
