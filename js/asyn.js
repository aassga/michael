// 準備 Ajex function 以後要打就呼叫他  /  參數/api位置
function getAjaxPromiseBox(sentData, method, url) {
    var getAccountData = new Promise((resolve, reject) => {
        // debugger
        // console.log(`${host}${url}`, '打api');
        $.ajax({
            url: `${host}${url}`,
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // },
            method: method,
            crossDomain: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: sentData,
            success: function (data) {
                resolve(data);
            }
        })
    })
    return getAccountData;
};