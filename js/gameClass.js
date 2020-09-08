// 呼叫 遊戲分類api
function getGameclass (){
    var data = {
        logo: 'CG',
        lang: lang, // 沒送預設zh / 送en會有英文版
    }
    // var class0 = [];  // 全部
    // var class1 = [];  // 老虎機
    // var class2 = [];  // 棋牌
    // var class4 = [];  // 彩金

    getAjaxPromiseBox(data, 'POST', game_lobby_gameclass)
    .then(res => {
    
        ;
        console.log(res);
        game_lobby_gameclass_data = res;  // 儲存回傳資料
        var game_class = game_lobby_gameclass_data.gameclass;
        var game_box = select_game_lobby_data.game_box;
        class0 = select_game_lobby_data.game_box;  // 不做分類 顯示全部
        // 取出分類為1 game_lobby_gameclass_data.gameclass
        game_class.forEach((item ,i )=>{
            if(item[0] == 1 ){
                
                this.class1.push(game_box[i]);
                
            }
        });

        // 取出分類為2
        game_class.forEach((item, i) => {
            if (item[0] == 2 || item[1] == 2) {
                
                this.class2.push(game_box[i]);
            }
        });

        // 取出分類為4
        game_class.forEach((item, i) => {
            if (item[0] == 4 || item[1] == 4 || item[2] == 4) {
                
                this.class4.push(game_box[i]);
            }
        });
        
        
    })
    .catch(err => {

        console.log(err);

    })
    console.log
}

// 切換game_class
var game_1 = $('#game_1');
var game_2 = $('#game_2');
var game_4 = $('#game_4');
var game_0 = $('#game_0');


game_1.click(function(){
    switchClass(1);
}) 
game_2.click(function(){
    switchClass(2);
});
game_4.click(function(){
    switchClass(4);
});
game_0.click(function(){
    switchClass(0);
});


function switchClass(game_class){
    // 畫面渲染區
        // var class0 = [];  // 全部
        // var class1 = [];  // 老虎機
        // var class2 = [];  // 棋牌
        // var class4 = [];  // 彩金

    // 變數切換控制

    if (game_class == 1) {        //類別1 帶入 class1 array
        renderSlider(class1);
        // alert('老虎機');

    } else if (game_class == 2) {  // 類別2 帶入 class2 array
        renderSlider(class2);
        // alert('棋牌');

    } else if (game_class == 4) { // 類別4 帶入 class4 array
        renderSlider(class4);
        // alert('彩金');

    } else {  // 類別0 帶入 原本陣列
        renderSlider(class0);
        // alert('全部');
    }
}
// 畫面渲染區
function renderSlider (current_array){
    const vm = this;
    var tempArray = [];

    // 暫存遊戲連結開開頭 forEach 取 game_start
    current_array.forEach((item, i) => {

        tempArray.push(`${item.game_start}${item.game_end}`);

    }) 
    
    // 暫存遊戲連結開開頭 forEach 取 game_start
    var tempImgUrl = [];
    current_array.forEach((item, i) => {

        tempImgUrl.push(`${item.src}`);

    }) 
    var tempgmaetype = [];
    current_array.forEach((item, i) => {

        tempgmaetype.push(`${item.gmaetype}`);

    }) 

    var slider = $('#slider');
    var data = '';

    tempArray.forEach((item, i) => {
        var item2 = tempImgUrl
        var item3 = tempgmaetype
        data = data + `
            <li class="cursor wrap" data-index="${item3[i]}" onclick="window.open('${item}', '_blank')">
                    <img src="${item2[i]}"/>
            </li>
        `;
        slider.html(data);  // 渲染slider
    })
}