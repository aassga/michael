function getMarquee() {
  var mrq = select_game_lobby_data.marquee;

  // 暫存取來的跑馬燈陣列

  console.log(typeof mrq.system[0], mrq.system[0].title); // str & ob 分(目前ob正常)

  if (mrq.system[0]) {
    var mar_system = mrq.system[0].title;
  } else {
    var mar_system = "";
  }
  if (mrq.game[0]) {
    var mar_game = mrq.game[0].title;
  } else {
    var mar_game = "";
  }
  if (mrq.service[0]) {
    var mar_service = mrq.service[0].title;
  } else {
    var mar_service = "";
  }

  var marqueeList = `${mar_system}${mar_game}${mar_service}`;

  // 渲染畫面(跑馬燈)
  var marqueeDiv = $("#marqueeDiv");
  var data = marqueeList;
  marqueeDiv.html(data);
}
