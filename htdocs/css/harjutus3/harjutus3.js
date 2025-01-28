function CalculateTravelTime() {
    //SÃµidu aeg ja kaugus
    let kaugus = document.getElementById("kaugus").value; //km
    let kiirus = document.getElementById("kiirus").value; //km/h
    let Aeg = kaugus/kiirus; //aeg on h
    let result =  (Aeg+"h")
    document.getElementById("travelTimeResult").innerHTML = `Kui kiirus on ${kiirus} ja kaugus on ${kaugus} siis kulub meil aega et see tee lÃ¤bida ${result}`;
    return false;
}
function CalculateLastPage(){
    //Postituste kuvamine
    let Postitused = document.getElementById("Postitused").value;
    let Max_Post_P  = document.getElementById("Max_Post_P").value;
    let pages = Math.ceil(Postitused / Max_Post_P);
    let Viimane_leht  = Postitused % Max_Post_P;
    document.getElementById("PageResult").innerHTML = `Viimasel lehel on ${Viimane_leht} postitust kui postitusi on ${Postitused} ja igal lehel on max ${Max_Post_P} postitust`
    return false;
}
function CalculatePrice(){
    //Serveri tÃ¶Ã¶kulu
    let ServeriVoimus =  document.getElementById("ServeriVoimus").value;
    let ElektriHind =  document.getElementById("ElektriHind").value;
    let kiloWH = ServeriVoimus / 1000;
    let Töökulu = kiloWH * ElektriHind;
    document.getElementById("PriceResult").innerHTML = `Kui Kwh ${kiloWH} ja hind on ${ElektriHind} siis tÃ¶Ã¶kulu ${Töökulu}`
    return false;
}