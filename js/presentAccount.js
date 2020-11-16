

// 帳號相關函式

//  打api區

// 立即呼叫打api function 並帶入參數及連結  // 暫時註解掉 拿到api再開啟
// (getAjaxPromiseBox(account, '這邊填入api')
// .then(res =>{
//       account = res.data.account;
//       money = res.data.money;
//       console.log('打api成功', res);
//     })
//     .catch(err =>{
//    $("#errAlert").modal("show");  //預留錯誤訊息回饋
//         console.log('呼叫api錯誤')
//     })
// )();

// 切換幣別
var moneyDiv = $('#moneyDiv');
moneyDiv.click(function () {
    const vm =this;
    // moneyType = !moneyType
    // console.log('觸發切換')
    // if(moneyType == true){
    //     moneyImg = '鑽石';
    //     console.log(moneyType, moneyImg);
    // } else {
    //     moneyImg = '金幣';
    //     console.log(moneyType, moneyImg);
    // }

})
