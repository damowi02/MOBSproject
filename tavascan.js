var update_loop = setInterval(DateandTime, 1000);
 
function DateandTime() {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear() + 1;
 
    var TodayDay = d + "." + m + "." + y;
    document.getElementById("Datum").innerHTML = TodayDay;
 
    var time = new Date();
 
    if (time.getHours() < 10) {
        var h = "0" + time.getHours();
    }
    else {
        var h = time.getHours();
    };
    if (time.getMinutes() < 10) {
        var m = "0" + time.getMinutes();
    }
    else {
        var m = time.getMinutes();
    };
    if (time.getSeconds() < 10) {
        var s = "0" + time.getSeconds();
    }
    else {
        var s = time.getSeconds();
    };
    var TodayTime = h + ":" + m + ":" + s;
    document.getElementById("Zeit").innerHTML = TodayTime;
}
 
 
document.querySelector("footer").addEventListener("click", ButtonFunction);
 
function ButtonFunction() {
 
    document.getElementsByClassName("CupraHome")[0].style.display = "none";
    document.getElementsByClassName("CarInstrument")[0].style.display = "none";
    document.getElementsByClassName("NaviFront")[0].style.display = "none";
    document.getElementsByClassName("MusicFront")[0].style.display="none";
    document.getElementsByClassName("CarFunctionsFront")[0].style.display="none";
 
    switch (event.target.id) {
 
        case "DataB":
        case "Info":
            CreateVelocityandFuel();
            break;
 
        case "NaviB":
        case "NaviInfo":
            CreateNavi();
            break;
 
        case "CupraB":
        case "CupraInfo":
            ShowCupraHomePage();
            break;
 
        case "MusicB":
        case "MusicInfo":
            CreatMusic();
            break;
 
        case "SettingB":
        case "SettingInfo":
            CreateSettingFunction();
            break;
    };
};
 
function CreateVelocityandFuel() {
    document.getElementsByClassName("CarInstrument")[0].style.display = "grid";
 
};
 
function CreateNavi() {
    document.getElementsByClassName("NaviFront")[0].style.display = "block";
 
};
 
function ShowCupraHome() {
    document.getElementsByClassName("CupraHome")[0].style.display = "block";
 
};
function CreatMusic(){
    document.getElementsByClassName("MusicFront")[0].style.display="block";
};
 
function CreateCarFunction(){
    document.getElementsByClassName("CarFunctionsFront")[0].style.display="grid";
}