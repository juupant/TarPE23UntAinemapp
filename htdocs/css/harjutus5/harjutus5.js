//Temperatuur
let Kraad = Math.floor((Math.random() * 30 ) + 10);
console.log(Kraad);
 if (Kraad >=25){
    console.log("Väga kuum ilm!");
 }
    else if(Kraad <= 15){
        console.log("Külm");
    }else{
        console.log("Mõnus temperatuur");
    }
 //Kasutajanime kontroll
let name  = "e";
let admin1 = (namee == "admin") ? "Tere,administraator" : "Tere,külaline!"
console.log(admin1);
// ürituse piletite hind
let vanus = Math.floor((Math.random() * 110 ) + 10);
let Piletitüüp = ["täispilet","sooduspilet"];
if(vanus <= 18 ){
    console.log(`${Piletitüüp[0]} hind on 10‚¬`);
}
else if (vanus => 18 && vanus <=64){
    console.log(`${Piletitüüp[0]} hind on 20‚¬`);
}
else if (vanus => 65 && vanus <=110 ){
    console.log(`${Piletitüüp[0]} hind on 15‚¬`);
}
if(vanus <= 18){
    console.log(`${Piletitüüp[1]} hind on 8‚¬`);
}
else if (vanus => 18 && vanus <=64){
    console.log(`${Piletitüüp[1]} hind on 15‚¬`);
}
else if (vanus => 65 && vanus <=110 ){
    console.log(`${Piletitüüp[1]} hind on 8‚¬`);
}