function HideOrShowFont(obj) {
    if (obj == "a1") {
        document.getElementById("comn").style.color = "#7e7e7e"; 
        document.getElementById("commn").style.color = "#000";
    }
    else if (obj == 'a2') {
        document.getElementById("comn").style.color = "#000"; 
        document.getElementById("commn").style.color = "#7e7e7e";
    }
}