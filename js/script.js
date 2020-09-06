$(document).ready(function(){

  alert("You entered World Of Jq");

    $('#bt1').click(function(){
      $('.box').hide();
      $('.box1').hide();
      $('.box2').hide();
    });

    $('#bt2').click(function(){
      $('.box').show();
      $('.box1').show();
      $('.box2').show();
    });

    $("#d1").hover(function(){
    alert("You entered Dark Area!");
  },
  function(){
    alert("Bye! You now leave Dark area!");
  }); 

    $('#bt3').click(function(){
      $('#txt').hide();
      $('#txt1').hide();
    });
    $('#bt4').click(function(){
      $('#txt').show();
      $('#txt1').show();
    });

    $("#ani").click(function(){
  $("#h1").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });

  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});

  });