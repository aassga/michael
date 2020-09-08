var fromuserAccount;
var fromuserPassword;

$(document).ready(function () {
  if (typeof Storage !== "undefined") {
    login_game_lobby_data = localStorage.getItem("login_game_lobby_data");
    data_select_game_lobby.token = localStorage.getItem(
      "data_select_game_lobby.token"
    );
    data_select_game_lobby.company = localStorage.getItem(
      "data_select_game_lobby.company"
    );
    login = localStorage.getItem("login");
    login_game_lobby_data.account = localStorage.getItem(
      "login_game_lobby_data.account"
    );
    $(".loginWindow").each(function () {
      $(this).addClass("displaynone");
    });
    getData(login);
  } else {
    alert("登入失敗");
  }
});

var logBtn = $("#logBtn");
logBtn.click(function () {
  fromuserAccount = document.getElementById("accountInput").value;
  fromuserPassword = document.getElementById("passwordInput").value;

  // 呼叫登入api
  var data = {
    account: fromuserAccount,
    password: fromuserPassword,
    logo: "CG",
    product: "",
    device: 0,
  };
  getAjaxPromiseBox(data, "POST", `${login_game_lobby}`)
    .then((res) => {
      var dec = JSON.parse(res);
      var Oklogin = dec[0].user.login;
      var login = document.getElementById("login");

      if (Oklogin == 1) {
        alert("登入成功");
        $(".loginWindow").each(function () {
          $(this).addClass("displaynone");
        });
        document.getElementById("accountInput").value = "";
        document.getElementById("passwordInput").value = "";
      } else {
        alert("登入失敗");
      }

      // var dec = res;
      // dec[0].user 下是 login_game_lobby 登入後取回來的
      // dec[0].user > token login account backend

      // Check browser support
      if (typeof Storage !== "undefined") {
        // Store
        localStorage.setItem(
          "login_game_lobby_data",
          JSON.stringify(dec[0].user)
        );
        localStorage.setItem("data_select_game_lobby.token", dec[0].user.token);
        localStorage.setItem(
          "data_select_game_lobby.company",
          dec[0].user.account
        );
        localStorage.setItem("login", dec[0].user.login);
        localStorage.setItem(
          "login_game_lobby_data.account",
          dec[0].user.account
        );

        login_game_lobby_data = localStorage.getItem("login_game_lobby_data");

        data_select_game_lobby.token = localStorage.getItem(
          "data_select_game_lobby.token"
        );
        data_select_game_lobby.company = localStorage.getItem(
          "data_select_game_lobby.company"
        );
        login = localStorage.getItem("login");
        login_game_lobby_data.account = localStorage.getItem(
          "login_game_lobby_data.account"
        );

        getData(login);
      } else {
        alert("登入失敗");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function getData(login) {
  // 判定登入區
  if (login == 1) {
    console.log("登入成功");
    // 呼叫 select_game_lobby 取得遊戲列表 api
    getAjaxPromiseBox(data_select_game_lobby, "POST", `${select_game_lobby}`)
      .then((res) => {
        var dec = JSON.parse(res);
        // 歸位資料區
        select_game_lobby_data = dec[0]; // 儲存取到的資料在 select_game_lobby_data

        // 渲染跑馬燈
        getMarquee();
        // 渲染跑馬燈 end

        // 呼叫畫面渲染
        renderSlider(select_game_lobby_data.game_box);

        // 同步帳號 錢錢 鑽鑽顯示
        var Temp_login_game_lobby_data = JSON.parse(login_game_lobby_data);
        $("#account").html(Temp_login_game_lobby_data.account);
        $("#money").html(select_game_lobby_data.jackpot.myJp);
        $("#diamond").html(select_game_lobby_data.jackpot.b_coin);

        // 呼叫取得遊戲類別(實現分類按鈕功能)
        getGameclass();

        // 呼叫閒置自動登出funciton
        autoLogout();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("登入失敗");
  }
}
