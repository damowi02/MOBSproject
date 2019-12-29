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



document.getElementById("CupraButton").addEventListener("click", handleClicks);

function HomeFunction() {

    let mainElement = document.querySelector('main');

    mainElement.innerHTML = "";

    let FrontpicDivElement = document.createElement('div');
    FrontpicDivElement.classList.add('DashboardPic');
    FrontpicDivElement.append(document.createElement('img'));

    mainElement.appendChild(FrontpicDivElement);    
}



 document.getElementById("DataButton").addEventListener("click",handleClicks);

 function ShowDataInfo(){

    let mainElement = document.querySelector("main");

    mainElement.innerHTML = "";

    let DataInfoDiv = document.createElement("div");
    DataInfoDiv.classList.add("DataInfo")
    mainElement.appendChild(DataInfoDiv);

    for (let i=0; i<9; i++){

        let DataDiv = document.createElement("div");

        DataDiv.classList.add("CarInstrumentInfo");
        
        
        
        if(i === 0){ DataDiv.innerHTML = "Speed: " + " "  ;
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

    //CathCarData();

    //async function CatchCarData(){
       // const response = await fetch ("");
       // const json = await response.json();
       //document.getElementbyId("SpeedData").innerHTML = json.speed + " " + "km/h";
      //document.getElementbyId("GasData").innerHTML = json.consuption + " " + "l/100km";
      //document.getElementbyId("HumidityData").innerHTML = Math.round(json.humidity) + " " + "g/m³";
      //document.getElementbyId("TempData").innerHTML = Math.round(json.temp) + " " + "°C";
      //document.getElementbyId("PressureData").innerHTML = Math.round(json.pressure) + " " + "Pa";
   // }
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
        //UnlockLockDiv.style.display ="inline";
        
        
        
        if(i === 0){ UnlockLockDiv.innerHTML = "Lock Car";
                     UnlockLockDiv.style.fontSize = "2em";
                     UnlockLockDiv.id="Lock";
                        }
        else if( i===1){UnlockLockDiv.innerHTML ="Unlock Car";
                        UnlockLockDiv.style.fontSize = "2em";
                        UnlockLockDiv.id="Unlock";
                            }
        else{DataDiv.innerHTML="";}

        LockDiv.appendChild(UnlockLockDiv);
    }


    for (let i=0; i<4; i++){

        let SingleWindowButton = document.createElement("button");

        SingleWindowButton.classList.add("SingleWindowUse");
        
        if (i === 0){ SingleWindowButton.innerHTML = "Left Window Up";
                      SingleWindowButton.style.fontSize = "2em";
                      SingleWindowButton.id="LeftWindowUp";
                        }
        else if (i === 1){ SingleWindowButton.innerHTML = "Right Window Up";
                           SingleWindowButton.style.fontSize = "2em";
                           SingleWindowButton.id="RightWindowUp";
                            }
        else if (i === 2){ SingleWindowButton.innerHTML = "Left Window Down";
                           SingleWindowButton.style.fontSize = "2em";
                           SingleWindowButton.id="LeftWindowDown";
                            }
        else if (i === 3){ SingleWindowButton.innerHTML = "Right Window Down";
                           SingleWindowButton.style.fontSize = "2em";
                           SingleWindowButton.id="RightWindowDown";
                            }
        else{SingleWindowButton.innerHTML="";}

        SingleWindowDiv.appendChild(SingleWindowButton);

    }

    for (let i=0; i<2; i++){

        let AllWindowButton = document.createElement("button");

        AllWindowButton.classList.add("AllWindowFunction");
        //UnlockLockDiv.style.display ="inline";
        
        
        
        if(i === 0){ AllWindowButton.innerHTML = "All Windows Up";
                     AllWindowButton.style.fontSize = "2em";
                     AllWindowButton.id="AllWindowUp";
                        }
        else if( i===1){AllWindowButton.innerHTML ="All Windows Down";
                        AllWindowButton.style.fontSize = "2em";
                        AllWindowButton.id="AllWindowDown";
                            }
        else{AllWindowButton.innerHTML="";}

        AllWindowDiv.appendChild(AllWindowButton);
    }

 }

 //document.getElementById("Lock").addEventListener("click", handleClicks);
 //document.getElementById("Unlock").addEventListener("click", handleClicks);
 //function LockUnlockCar(){
     //if (event.target.id == "Lock"){
         //document.getElementById("Lock").style.backgroundColor = "red";

         //fetch("");
         //}
     //else if(event.target.id == "Unlock"){
         //document.getElementById("Unlock").style.backgroundColor = "green"
         //fetch(" ");
         //}
    //else{" ";}

     //}
 //}
//192.168.1.104  
//192.168.2.110  






 