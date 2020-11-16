"use strict";

var logoutBtn = $('#logoutBtn');
logoutBtn.click(function () {
  logOut(); //呼叫登出function
}); // 準備要傳的參數
// 登出api function

function logOut() {
  var data = {
    /*
    account: login_game_lobby_data.account,
    token: login_game_lobby_data.token*/
    //這條不會動不知道為啥
    account: localStorage.getItem('login_game_lobby_data.account'),
    token: localStorage.getItem('data_select_game_lobby.token')
  }; // 呼叫登出api

  getAjaxPromiseBox(data, 'POST', game_lobby_logout).then(function (res) {
    console.log('api'); // 判斷是否登出成功

    if (res.result == 1) {
      alert('登出成功');
      localStorage.clear(); // 渲染畫面 / 清空帳號密碼

      $('#fromuserAccount').val(''); //輸入框 帳號

      $('#fromuserPassword').val(''); //輸入框 密碼

      $('#account').val(''); //顯示框 帳號

      $('#money').val(''); //顯示框 錢錢

      $('#diamond').val(''); //顯示框 鑽鑽

      location.reload();
    } else {
      alert('錯誤');
    }
  })["catch"](function (err) {
    console.log(err);
  });
}