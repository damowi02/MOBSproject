const updateDatumZeitfunction = setInterval(DatumZeit, 1000);
function DatumZeit(){
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();
    if(d<10){d = "0" + d;}
    else{d;};
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

    clearInterval(UpdateData);

    switch (event.target.id) {

        case "CupraButton":
            HomeFunction();
            break;
        
        case "DataButton":
            ShowDataInfo();
            break;
        
        case "MusicButton":
            Music();
            break;
        
        case "CarFunctionButton":
            ControlCarFunctions();
            break;     

    }
}



document.getElementById("CupraButton").addEventListener("click", handleClicks);

function HomeFunction() {

    let mainElement = document.querySelector('main');

    mainElement.innerHTML = "";

    let FrontpicDivElement = document.createElement('div');
    FrontpicDivElement.classList.add('DashboardPic');
    FrontpicDivElement.append(document.createElement('img'));

    mainElement.appendChild(FrontpicDivElement);    
}


var UpdateData;
 document.getElementById("DataButton").addEventListener("click",handleClicks);

 function ShowDataInfo(){

    let mainElement = document.querySelector("main");

    mainElement.innerHTML = "";

    let DataInfoDiv = document.createElement("div");
    DataInfoDiv.classList.add("DataInfo")
    mainElement.appendChild(DataInfoDiv);

    for (let i=0; i<10; i++){

        let DataDiv = document.createElement("div");

        DataDiv.classList.add("CarInstrumentInfo");
        
        
        
        if(i === 0){ DataDiv.innerHTML = "Speed: ";
                     DataDiv.id = "Geschwindigkeit";
                    }
        else if( i===1){DataDiv.innerHTML =" ";
                    DataDiv.id = "SpeedData";
                     }          
        else if( i===2){DataDiv.innerHTML ="Gas: ";
                       DataDiv.id = "Verbrauch";
                        }
        else if( i===3){DataDiv.innerHTML =" ";
                       DataDiv.id = "GasData";
                        }
        else if( i===4){DataDiv.innerHTML ="Humidity: ";
                        DataDiv.id = "Feuchtigkeit";
                        }
        else if( i===5){DataDiv.innerHTML =" ";
                       DataDiv.id = "HumidityData";
                        }
        else if( i===6){DataDiv.innerHTML ="Temperature: ";
                        DataDiv.id = "Temperatur";
                        }
        else if( i===7){DataDiv.innerHTML =" ";
                       DataDiv.id = "TempData";
                        }
        else if( i===8){DataDiv.innerHTML ="Pressure: ";
                        DataDiv.id = "Druck";
                        }
        else if( i===9){DataDiv.innerHTML =" ";
                       DataDiv.id = "PressureData";
                        }
        else{DataDiv.innerHTML="";}

        DataInfoDiv.appendChild(DataDiv);
    }

     UpdateData = setInterval(CatchCarData, 2000);
    function CatchCarData(){
        fetch("http://192.168.178.160:5000/status")
            .then(resp => resp.json())
            .then(function (data) {
                 console.log(data);
                document.getElementById("SpeedData").innerHTML = data.speed + " " + "km/h";
                document.getElementById("GasData").innerHTML = data.consumption + " " + "l/100km";
                document.getElementById("HumidityData").innerHTML = Math.round(data.humidity) + " " + "g/m³";
                document.getElementById("TempData").innerHTML = Math.round(data.temp) + " " + "°C";
                document.getElementById("PressureData").innerHTML = Math.round(data.pressure) + " " + "Pa";
            });
        
    }
 }
       


document.getElementById("CarFunctionButton").addEventListener("click",handleClicks);

 function ControlCarFunctions(){

    let mainElement = document.querySelector("main");

    mainElement.innerHTML = "";

    let LockDiv = document.createElement("div");
    LockDiv.classList.add("CarLockUnlockFunction");
    mainElement.appendChild(LockDiv);


    let SingleWindowDiv = document.createElement("div");
    SingleWindowDiv.classList.add("SingleWindowFunction");
    mainElement.appendChild(SingleWindowDiv);

    let AllWindowDiv =document.createElement("div");
    AllWindowDiv.classList.add("AllWindowFunction");
    mainElement.appendChild(AllWindowDiv);


    for (let i=0; i<2; i++){

        let UnlockLockDiv = document.createElement("button");

        UnlockLockDiv.classList.add("CarLockUnlock");
        
        
        
        if(i === 0){ UnlockLockDiv.innerHTML = "Lock Car";
                     UnlockLockDiv.style.fontSize = "2em";
                     UnlockLockDiv.id="Lock";
                     UnlockLockDiv.style.backgroundColor = "grey";
                        }
        else if( i===1){UnlockLockDiv.innerHTML ="Unlock Car";
                        UnlockLockDiv.style.fontSize = "2em";
                        UnlockLockDiv.id="Unlock";
                        UnlockLockDiv.style.backgroundColor = "grey";
                            }
        else{DataDiv.innerHTML="";}

        LockDiv.appendChild(UnlockLockDiv);

    };

    mainElement.addEventListener("click", LockUnlockCar);
        
 
    for (let i=0; i<4; i++){

        let SingleWindowButton = document.createElement("button");

        SingleWindowButton.classList.add("SingleWindowUse");
        
        if (i === 0){ SingleWindowButton.innerHTML = "Left Window Up";
                      SingleWindowButton.style.fontSize = "2em";
                      SingleWindowButton.id="LeftWindowUp";
                      SingleWindowButton.style.backgroundColor="grey";
                        }
        else if (i === 1){ SingleWindowButton.innerHTML = "Right Window Up";
                           SingleWindowButton.style.fontSize = "2em";
                           SingleWindowButton.id="RightWindowUp";
                           SingleWindowButton.style.backgroundColor="grey";
                            }
        else if (i === 2){ SingleWindowButton.innerHTML = "Left Window Down";
                           SingleWindowButton.style.fontSize = "2em";
                           SingleWindowButton.id="LeftWindowDown";
                           SingleWindowButton.style.backgroundColor="grey";
                            }
        else if (i === 3){ SingleWindowButton.innerHTML = "Right Window Down";
                           SingleWindowButton.style.fontSize = "2em";
                           SingleWindowButton.id="RightWindowDown";
                           SingleWindowButton.style.backgroundColor="grey";
                            }
        else{SingleWindowButton.innerHTML="";}

        SingleWindowDiv.appendChild(SingleWindowButton);

    }

    mainElement.addEventListener("click", SingleWindowAction);

    for (let i=0; i<2; i++){

        let AllWindowButton = document.createElement("button");

        AllWindowButton.classList.add("AllWindowFunction");
        
        
        
        
        if(i === 0){ AllWindowButton.innerHTML = "All Windows Up";
                     AllWindowButton.style.fontSize = "2em";
                     AllWindowButton.id="AllWindowUp";
                     AllWindowButton.style.backgroundColor = "grey";
                        }
        else if( i===1){AllWindowButton.innerHTML ="All Windows Down";
                        AllWindowButton.style.fontSize = "2em";
                        AllWindowButton.id="AllWindowDown";
                        AllWindowButton.style.backgroundColor = "grey";
                            }
        else{AllWindowButton.innerHTML="";}

        AllWindowDiv.appendChild(AllWindowButton);
    }

    mainElement.addEventListener("click", AllWindowAction);

 }


 function LockUnlockCar(event){
    
        if (event.target.id == "Lock"){
            fetch("http://192.168.178.160:5000/action/lock");
            document.getElementById("Lock").style.backgroundColor = "red";
            document.getElementById("Unlock").style.backgroundColor = "grey";
            document.getElementById("LeftWindowUp").style.visibility ="hidden";
            document.getElementById("RightWindowUp").style.visibility ="hidden";
            document.getElementById("LeftWindowDown").style.visibility ="hidden";
            document.getElementById("RightWindowDown").style.visibility ="hidden";
            document.getElementById("AllWindowUp").style.visibility ="hidden";
            document.getElementById("AllWindowDown").style.visibility ="hidden";
            console.log("Car is locked");
        }
        else if (event.target.id == "Unlock"){
            fetch("http://192.168.178.160:5000/action/unlock");
           document.getElementById("Unlock").style.backgroundColor = "green";
           document.getElementById("Lock").style.backgroundColor = "grey";
           document.getElementById("LeftWindowUp").style.visibility ="visible";
           document.getElementById("RightWindowUp").style.visibility ="visible";
           document.getElementById("LeftWindowDown").style.visibility ="visible";
           document.getElementById("RightWindowDown").style.visibility ="visible";
           document.getElementById("AllWindowUp").style.visibility ="visible";
           document.getElementById("AllWindowDown").style.visibility ="visible";
           console.log("Car is Unlocked");
        };
     };
  

function SingleWindowAction(event){

    if ( event.target.id == "LeftWindowUp"){
        fetch("http://192.168.178.160:5000/window/LeftUp");
        document.getElementById("LeftWindowUp").style.backgroundColor = "red";
        document.getElementById("LeftWindowDown").style.backgroundColor = "grey";
        console.log("Left Window closed");
    }
    else if ( event.target.id == "LeftWindowDown"){
        fetch("http://192.168.178.160:5000/window/LeftDown");
        document.getElementById("LeftWindowDown").style.backgroundColor = "green";
        document.getElementById("LeftWindowUp").style.backgroundColor = "grey";
        console.log("Left Window open");
    }
    else if ( event.target.id == "RightWindowUp"){
        fetch("http://192.168.178.160:5000/window/RightUp");
        document.getElementById("RightWindowUp").style.backgroundColor = "red";
        document.getElementById("RightWindowDown").style.backgroundColor = "grey";
        console.log("Right Window closed");
    }
    else if ( event.target.id == "RightWindowDown"){
        fetch("http://192.168.178.160:5000/window/RightDown");
        document.getElementById("RightWindowDown").style.backgroundColor = "green";
        document.getElementById("RightWindowUp").style.backgroundColor = "grey";
        console.log("Right Window open");
    };

};


function AllWindowAction(event){

    if ( event.target.id == "AllWindowUp"){
        fetch("http://192.168.178.160:5000/window/AllUp");
        document.getElementById("AllWindowUp").style.backgroundColor = "red";
        document.getElementById("AllWindowDown").style.backgroundColor = "grey";
        document.getElementById("RightWindowUp").style.backgroundColor = "red";
        document.getElementById("LeftWindowUp").style.backgroundColor = "red";
        console.log("All Windows closed");
    }
    else if ( event.target.id == "AllWindowDown"){
        fetch("http://192.168.178.160:5000/window/AllDown");
        document.getElementById("AllWindowDown").style.backgroundColor = "green";
        document.getElementById("AllWindowUp").style.backgroundColor = "grey";
        document.getElementById("RightWindowDown").style.backgroundColor = "green";
        document.getElementById("LeftWindowDown").style.backgroundColor = "green";
        console.log("All Windows open");
    };

};

document.getElementById("MusicButton").addEventListener("click",handleClicks);

 function Music(){

    let mainElement = document.querySelector("main");

    mainElement.innerHTML = "";
 }



 