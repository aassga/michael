// 準備api區

// 這兩個 動態載入陣列區用
var slider = $('#slider').innerHTML;
var sliderItem = $('#sliderItem').innerHTML;

// 組合聯合陣列 + 渲染畫面
function conbineNewArray(){
    // 組成聯合陣列
    let mixArray = [];  // 聯合陣列(a href / img src)
    this.GameList.forEach((item, i) => {
        const item2 = ImgList[i];
        var obj = {
            key1: item,     //key1 GameList
            key2: item2,    //key2 ImgList
        };
        mixArray.push(obj);
    })
    
    // 渲染畫面
    mixArray.forEach((item, index) => {
        this.slider += `      
        <li class="goods-list" onclick="window.open('${item.key1}', '_blank')"><img src="${item.key2}" alt="alt"></li>       
        `
    })
}