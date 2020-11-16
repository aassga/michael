"use strict";

var fromuserAccount = 'nitest002';
var fromuserPassword = 'nitest002';
var data = {
  account: fromuserAccount,
  password: fromuserPassword,
  logo: 'CG',
  product: '',
  device: 0
};
account = fromuserAccount;
$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    login_game_lobby_data = localStorage.getItem('login_game_lobby_data');
    data_select_game_lobby.token = localStorage.getItem('data_select_game_lobby.token');
    data_select_game_lobby.company = localStorage.getItem('data_select_game_lobby.company');
    login = localStorage.getItem('login');
    login_game_lobby_data.account = localStorage.getItem('login_game_lobby_data.account');
    getData(login);
  } else {
    alert("登入失敗");
  }
});
var logBtn = $('#logBtn');
logBtn.click(function () {
  // 呼叫登入api
  getAjaxPromiseBox(data, 'POST', "".concat(login_game_lobby)).then(function (res) {
    var dec = JSON.parse(res); // dec[0].user 下是 login_game_lobby 登入後取回來的
    // dec[0].user > token login account backend

    console.log(dec, dec.token); // Check browser support

    if (typeof Storage !== "undefined") {
      // Store
      localStorage.setItem('login_game_lobby_data', dec[0].user);
      localStorage.setItem('data_select_game_lobby.token', dec[0].user.token);
      localStorage.setItem('data_select_game_lobby.company', dec[0].user.account);
      localStorage.setItem('login', dec[0].user.login);
      localStorage.setItem('login_game_lobby_data.account', dec[0].user.account);
      login_game_lobby_data = localStorage.getItem('login_game_lobby_data');
      data_select_game_lobby.token = localStorage.getItem('data_select_game_lobby.token');
      data_select_game_lobby.company = localStorage.getItem('data_select_game_lobby.company');
      login = localStorage.getItem('login');
      login_game_lobby_data.account = localStorage.getItem('login_game_lobby_data.account');
      getData(login);
    } else {
      alert("登入失敗");
    }
  })["catch"](function (err) {
    console.log(err);
  });
});

function getData(login) {
  // 判定登入區
  if (login == 1) {
    console.log('登入成功'); // 呼叫 select_game_lobby 取得遊戲列表 api

    getAjaxPromiseBox(data_select_game_lobby, 'POST', "".concat(select_game_lobby)).then(function (res) {
      var dec = JSON.parse(res); // 歸位資料區

      select_game_lobby_data = dec[0]; // 儲存取到的資料在 select_game_lobby_data
      // 渲染跑馬燈

      getMarquee(); // 渲染跑馬燈 end

      var tempArray = [];
      select_game_lobby_data.game_box.forEach(function (item, i) {
        tempArray.push("".concat(item.game_start).concat(item.game_end));
      }); // 暫存遊戲連結開開頭 forEach 取 game_start

      var tempImgUrl = [];
      select_game_lobby_data.game_box.forEach(function (item, i) {
        tempImgUrl.push("".concat(item.src));
      }); // 暫存遊戲連結開開頭 forEach 取 game_start
      // 畫面渲染區

      var slider = $('#slider');
      var data = '';
      tempArray.forEach(function (item, i) {
        var item2 = tempImgUrl;
        data = data + "\n                            <li class=\"cursor\" onclick=\"window.open('".concat(item, "', '_blank')\">\n                                    <img src=\"").concat(item2[i], "\"/>\n                            </li>\n                        ");
        slider.html(data); // 渲染slider
      }); // 同步帳號 錢錢 鑽鑽顯示

      $("#account").html(login_game_lobby_data.account);
      $("#money").html(select_game_lobby_data.jackpot.myJp);
      $("#diamond").html(select_game_lobby_data.jackpot.b_coin); // 呼叫取得遊戲類別(實現分類按鈕功能)

      getGameclass(); // 呼叫閒置自動登出funciton

      autoLogout();
    })["catch"](function (err) {
      console.log(err);
    });
  } else {
    alert('登入失敗');
  }
}