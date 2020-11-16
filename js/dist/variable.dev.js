"use strict";

// 帳號相關變數 
var moneyImg = $('#moneyImg').val(''); // 幣別暫定為 ture = 鑽石 、 false = 金幣

var moneyType = false; // 幣別暫定為 ture = 鑽石 、 false = 金幣

var lang = 'zh'; // api 相關變數
// 主機位置

var host = 'http://mango-api-test.cg11systems.com:8080/'; // var host ='http://192.168.3.195/';
// 登⼊⼤廳

var login_game_lobby = 'ali88_api/api/slotto/web/game_lobby/login_game_lobby.php'; // 參數： account/password/logo/product/device
// 註.product預設空字串
// response儲存

login_game_lobby_data = {}; // > user > account backend login token
// 遊戲⼤廳

var select_game_lobby = '/ali88_api/api/slotto/web/game_lobby/select_game_lobby.php'; // 參數： company / token / lang / currency / ev_mode / coin / timezone / url / invite_code

var data_select_game_lobby = {
  company: '',
  // 這邊帶account 取自login_game_lobby api res
  token: '',
  // 取自login_game_lobby api res
  lang: 'zh',
  currency: 'CG',
  ev_mode: 0,
  // 0 為測試機 下方url 要帶測試機host / 1 為
  coin: 'a',
  //幣別類型( a → myJp / b → b_coin )
  timezone: '+8',
  url: 'http://mango-api-test.cg11systems.com:8080',
  invite_code: '22620398624025300992'
}; // 註.
// (1) company即為登⼊帳號 
// (2) currency若為空字串→從資料庫搜尋 
// (3) lang預設zh，timezone預設 + 8 
// (4) coin 幣別類型(a → myJp / b → b_coin)
// 儲存 select_game_lobby res

var select_game_lobby_data = {}; // > token agent_name logout jackpot billing game_box info shop_mall proclamation switch marquee close
// 登出

var game_lobby_logout = '/ali88_api/api/slotto/web/game_lobby/logout.php'; // 參數：account/token
// 遊戲分類按鈕

var game_lobby_gameclass = '/ali88_api/api/slotto/web/game_lobby/gameclass.php'; // 參數：logo / lang (沒送預設zh / 送en會有英文版) / type
// response儲存

var game_lobby_gameclass_data = {}; // > gameclass gametype result src

var class0 = []; // 全域儲存全部陣列

var class1 = []; // 全域儲存老虎機陣列

var class2 = []; // 全域儲存棋牌陣列

var class4 = []; // 全域儲存彩金陣列