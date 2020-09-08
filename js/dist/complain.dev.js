"use strict";

$('#send').click(function (e) {
  e.preventDefault();
  var form = $('form')[0];
  var formData = new FormData(form);
  /*
      formData.append('token', "U2FsdGVkX1+5\/Ah8VCfFGDCe72yftSG1cmBUgCK8JntAqUyVKYbFnzMu4oh2A+3P");//token
      formData.append('company', "nitest002");//company/player*/

  formData.append('token', data_select_game_lobby.token); //token

  formData.append('company', data_select_game_lobby.company); //company/player

  console.log(data_select_game_lobby.token + '-------------' + data_select_game_lobby.company);
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  console.log(object);
  $.ajax({
    url: 'http://mango-api-test.cg11systems.com:8080/ali88_api/api/lobby/slotto/mail/mail.php',
    type: "POST",
    data: formData,
    //contentType:'application/x-www-form-urlencoded;charset=UTF-8',               
    contentType: false,
    processData: false,
    crossDomain: true,
    success: function success(data) {
      alert('送出成功');
      location.reload();
    },
    error: function error(data) {
      console.log('無法送出');
    }
  });
});