// 心跳function
var playingStatus = true;

// playingStatus 有在視窗、或是玩我們遊戲的時候是true / 離開本視窗跳 false 可以開始執行autoLogout

function autoLogout() {
  window.addEventListener("blur", function () {
    setInterval(() => {
      logOut();
      alert("為了您的帳號安全，已經將您自動登出");
    }, 900000);
    return;
  });
}
