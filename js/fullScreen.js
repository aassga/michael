// 按鈕切換
$(window).ready(function(){
  var fullScreen = $('#fullScreen');
  var nofullScreen = $('#nofullScreen');
  var Screen = document.querySelector(".Screen");
  var btnstatus = true;

  Screen.onclick = function () {
    if (btnstatus) {
      var fullScreen = document.getElementById("fullScreen");
      fullScreen.src = "./../images/full2.png";
      fullScreen.id = "nofullScreen"; 
      btnstatus = false;
      intofullScreen();
    }
    else{
      var nofullScreen = document.getElementById("nofullScreen");
      nofullScreen.src = "./../images/full.png";
      nofullScreen.id = "fullScreen"; 
      btnstatus = true;
      exitFullscreen();
    }
  }

  // 進入fullScreen模式 funciton
  function intofullScreen() {
    document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

    function requestFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
    if (document.fullscreenEnabled) {
        requestFullscreen(document.documentElement);
    }
  }

  // 離開fullScreen模式 function
  function exitFullscreen(){
    console.log('離開全螢幕');
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
  };  

});


