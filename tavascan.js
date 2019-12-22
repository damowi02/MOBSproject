const updateDatumZeitfunction = setInterval(DatumZeit, 1000);
function DatumZeit(){
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();

    if(m<10){ m = "0" + m;}
    else{m};

    var Today = d + "." + m + "." + y;
    document.getElementById("Date").innerHTML = Today;

    var time = new Date();
    var h = time.getHours();
    var min = time.getMinutes();
    var s = time.getSeconds();

    if(h<10){h = "0" + h;}
    else{h};
    if(min<10){min = "0" + min;}
    else{min};
    if(s<10){s = "0" + s;}
    else{s};

    var CurrentTime = h + ":" + min + ":" + s;
    document.getElementById("Time").innerHTML = CurrentTime;
    
}



function handleClicks(event) {

    switch (event.target.id) {

        case "CupraButton":
            HomeFunction();
            break;
        
        case "DataButton":
            ShowDataInfo();
            break;
        
        case "MusicButton":
            PlayMusic();
            break;
        
        case "CarFunctionButton":
            ControlCarFunctions();
            break;

    }
}

function HomeFunction() {
    let mainElement = document.querySelector('main');
    let FrontpicDivElement = document.createElement('div');
    FrontpicDivElement.classList.add('DashboardPic');
    FrontpicDivElement.append(document.createElement('img'));
    mainElement.appendChild(FrontpicDivElement);
    document.getElementById('CupraButton').addEventListener('click', handleClicks);
}
