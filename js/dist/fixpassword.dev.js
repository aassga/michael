"use strict";

$('#send2').click(function (e) {
  e.preventDefault(); //檢查再次確認的地方

  var _newPassword = document.getElementById("newpassword").value;
  var _checkpassword = document.getElementById("checkpassword").value;
  var _oldpassword = document.getElementById("oldpassword").value;
  console.log("------------------" + _newPassword);

  if (false) {} //test用


  if (_newPassword != _checkpassword) {
    alert("新密碼與再次確認密碼不相同");
  } else if (_oldpassword == _newPassword || _oldpassword == _checkpassword) {
    alert("新密碼必須與舊密碼不相同");
  } else {
    var form = $('form')[1];
    var formData = new FormData(form);
    formData.append('token', data_select_game_lobby.token); //token

    formData.append('company', data_select_game_lobby.company); //company/player

    $.ajax({
      url: 'http://mango-api-test.cg11systems.com:8080/ali88_api/api/lobby/slotto/agent/update_agent_password.php',
      type: "POST",
      data: formData,
      //contentType: 'x-www-form-urlencoded',
      contentType: false,
      cache: false,
      processData: false,
      crossDomain: true,
      success: function success(data) {
        var a = "[" + data + "]";
        var b = JSON.parse(a);

        if (b[0].account == "1") {
          alert("修改成功");
        }

        location.reload();
      },
      error: function error(data) {
        console.log('無法送出');
        location.reload();
      }
    });
  }
});