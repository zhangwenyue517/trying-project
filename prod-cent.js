var ul_img = document.getElementById("ul-img");//获取ul
var li_img = document.getElementsByClassName("li-img");//获取li
var img_word = document.getElementById("img-word");
var index = 0;//定义跑动的次数
var time;//定义计时器对象
var distance = img_word.offsetWidth;
function go() {
    var start = ul_img.offsetLeft;
    var end = index * distance * (-1);
    var change = end-start;
    var timer;
    var t = 0;var maxT = 30;
    clearInterval(timer);
    timer = setInterval(function() {
        t++;
        if(t>maxT) {
            clearInterval(timer);
        }
        ul_img.style.left = change/maxT*t+start+"px";
    })
}