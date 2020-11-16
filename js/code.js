
$('#score').click(function (e){

$.ajax({

    url: 'http://mango-api-test.cg11systems.com:8080/ali88_api/api/lobby/slotto/web/game_lobby/captcha.php?token='+data_select_game_lobby.token,
    type : "GET",
    //contentType:'application/x-www-form-urlencoded;charset=UTF-8',               
    contentType:false,
    cache: false,
    processData: false,
    crossDomain: true,
    success : function(data) 
    {
        
        $("#codeimage").attr('src','http://mango-api-test.cg11systems.com:8080/ali88_api/api/lobby/slotto/web/game_lobby/captcha.php?token='+data_select_game_lobby.token);
        
        console.log('圖片顯示成功');

    },error: function(data) 
    {
        console.log('無法送出');
    }
});
});



//按鈕傳送資料
$('#send3').click(function(e){

e.preventDefault();

    var form = $('form')[2];
    var formData = new FormData(form);

    formData.append('token',data_select_game_lobby.token);//token
    formData.append('company', data_select_game_lobby.company);//company/player

    var code_null = $("#code").val();

    console.log('code_null'+code_null+"----");

    if(code_null==""){

        alert("未輸入驗證碼");

    }
    else{

        //$("#s3").attr('data-toggle',"modal", 'data-target',"#exampleModalCenter4");


        $.ajax({
            url: 'http://mango-api-test.cg11systems.com:8080/ali88_api/api/lobby/slotto/web/game_lobby/captcha_check.php',
            type : "post",
            //contentType:'application/x-www-form-urlencoded;charset=UTF-8',               
            contentType:false,
            data: formData,
            processData: false,
            crossDomain: true,
            success : function (data2) {
    
                document.getElementById("code").value = ""; 
    
                $('#score_close').click(function(e){});
    
                var c = JSON.parse(data2);
    
                var b = c[0].scoreData;
                var account0=c[0].account;
    
                if(account0=="0"){
                    
                    alert("失敗");
                }
                else{
                    var trStr = '';
    
                    for (var i = 0; i < b.length; i++) {
    
                    trStr += '<tr class="example">';
                    trStr += '<td width="10%">' + (i+1) + '</td>';
                    trStr += '<td width="15%">' + b[i].SetScore + '</td>';
                    trStr += '<td width="15%">' + b[i].BeforeScore + '</td>';
                    trStr += '<td width="15%">' + b[i].AfterScore + '</td>';
                    trStr += '<td width="25%">' + b[i].DateTime + '</td>';
    
                    trStr += '</tr>';
    
                    }
    
                    //$("#tbody").html(trStr);
    
                    document.getElementById('tbody').innerHTML = trStr;
    
                }
    
                },error: function(data) 
                {
                    console.log('無法送出');
                }
        
            });    
    } 

});
