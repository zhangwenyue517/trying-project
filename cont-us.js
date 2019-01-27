var name = document.getElementById('#input1');
var tele = documen.getElementById('#input2');
var submit = document.getElementById('#fifth').getElementsByTagName('span');
submit.onsubmit = function() {
    if(name.value == "") {
        alert('姓名为空，不能提交！');
        return false;
    }
    else if(tele.value == "") {
        alert('电话为空，不能提交！');
        return false;
    }
    else {
        alert('提交成功！');
        return true;
    }
}
