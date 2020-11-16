
// menuBTN
$(window).ready(function(){
  $("#gameid").click(function(){
    $(".gamemenubox").toggleClass("bottom_110");
  });
  $("#setid").click(function(){
    $(".setmenubox").toggleClass("bottom_110");
  });  
});



// moneyBTN
$(window).ready(function () {
  $("#diamond,#diamondimg").css("display","block");
  $("#jpbtn").addClass("jpbtn_money");
  $("#money,#moneyimg").css("display", "none");


  $("#diamond").click(function () {
    $("#diamond,#diamondimg").css("display", "none");
    $("#money,#moneyimg").css("display", "block");
    $("#jpbtn").addClass("jpbtn_diamond").removeClass("jpbtn_money");
  });

  $("#money").click(function () {
    $("#money,#moneyimg").css("display", "none");
    $("#diamond,#diamondimg").css("display", "block");
    $("#jpbtn").addClass("jpbtn_money").removeClass("jpbtn_diamond");
  });

  function switchDiamond (){
    $("#diamond,#diamondimg").css("display", "block");
    $("#jpbtn").addClass("jpbtn_money");
    $("#money,#moneyimg").css("display", "none");
    moneyType = !moneyType;
  }

  function switchMoney (){
    $("#diamond,#diamondimg").css("display", "none");
    $("#money,#moneyimg").css("display", "block");
    $("#jpbtn").addClass("jpbtn_diamond").removeClass("jpbtn_money");
    moneyType = !moneyType;
  }

  $('#jpbtn').click(function () {
    if (moneyType == true){
      switchDiamond();
    } else{
      switchMoney();
    }
  })

});
