var d_lName = '李'  //姓
var d_fName = '小龙'   //名
var d_email = 'xx@xx.com' // 邮箱用当前登录APPLE ID
var d_passType = 'passport' // 证件类型  护照填 passport ，身份证填 idCardChina
var d_passNumber = '11111111111111111111' // 证件号码
var d_num = '1' // 订几台，最多两台 但 1 台成功率会高一点

//上面是必填项

var time_length = $('#time option').length - 1;

if ($('#time option').length == 0) {
    console.log('验证完短信进入下一页再运行该脚本');
}else{
    pickUp();
}

function pickUp() {
    $.ajax({
        url: window.location.href,
        type: "POST",
        data: {
            selectedStoreNumber: $('input[name="selectedStoreNumber"]').val(),
            selectedContractType: 'UNLOCKED',
            selectedQuantity: d_num,
            selectedTimeSlotId: $('#time option').eq(time_length).val(),
            lastName: d_lName,
            firstName: d_fName,
            email: d_email,
            selectedGovtIdType: d_passType,
            govtId: d_passNumber,
            p_ie: $('#p_ie').val(),
            _flowExecutionKey: $('#_flowExecutionKey').val(),
            _eventId: 'next',
            submit: ''
        },
        success: function(data, xhr) {
            console.log('check your email!')

        },
        error: function(xhr) {
            console.log(xhr.status);

        }
    }).done(function(data) {}).fail(function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.getResponseHeader('Location') != null) {
            window.Location = jqXHR.getResponseHeader('Location');
        }
    });
}

