var name = document.getElementById('#input1');
var tele = document.getElementById('#input2');
var submit = document.getElementById('submit')

function sure() {
    if(name.value == "") {
        return false;
        alert('姓名为空，不能提交！');
    }
    else if(tele.value == "") {
        return false;
        alert('电话为空，不能提交！');
    }
    else if(name.value !== "^[\u4e00-\u9fa5]{0,}$" && tele.value !== "^/d{11}$") {
        return true;
        alert('提交成功！');
    }
}
