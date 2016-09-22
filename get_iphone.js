var time_length = $('#time option').length - 1;

var d_obj = {
            lastName: '二蛋', // 名
            firstName: '王', //姓
            email: 'xx@xx.com', //邮箱用当前登录APPLE ID
            selectedGovtIdType: 'passport', //证件类型(注意大小写) ： 护照填 passport ，身份证填 idCardChina ,港澳通行证 entryExitPass (仅限香港预约使用)
            govtId: '111111111', //证件号码
            selectedQuantity: 1, //订几台，最多2台 但 1 台成功率会高一点
            selectedStoreNumber: $('input[name="selectedStoreNumber"]').val(),
            selectedContractType: 'UNLOCKED',
            selectedTimeSlotId: $('#time option').eq(time_length).val(),
            p_ie: $('#p_ie').val(),
            _flowExecutionKey: $('#_flowExecutionKey').val(),
            _eventId: 'next',
            submit: ''
            }
var d_data = Object.keys(d_obj).map(function(key){ 
  return encodeURIComponent(key) + '=' + encodeURIComponent(d_obj[key]); 
}).join('&');


if ($('#time option').length == 0) {
    console.log('验证完短信进入下一页再运行该脚本');
}else{
    pickUp();
}

function pickUp() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', window.location.href,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onload = function () {
        console.log(xhr.status)
        if (xhr.readyState === xhr.DONE) {

            if (xhr.status === 200) {
                console.log(xhr);
                if(xhr.responseURL.length==67){
                  window.location.href = xhr.responseURL;  
                }else{
                    console.log('fail....');
                }
            }else{
                console.log('fail...');
            }
        }
    };
    xhr.send(d_data);
}
