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
  $('#typing').on("keydown",(e)=>{
    if(e.which===71){
      alert ("You pressed G!")
    }
  })
}

}

$(document).ready(function(){

// call functions here

});
